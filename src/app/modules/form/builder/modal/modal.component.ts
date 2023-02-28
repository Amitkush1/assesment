import { Component } from '@angular/core';
import { FormArray, FormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FORM_TYPES } from 'src/app/enums/form-types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  form!: UntypedFormGroup;
  FORM_TYPES = FORM_TYPES

  constructor(private fb: FormBuilder,
              private dialogRef: MatDialogRef<ModalComponent>) {
              this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      question: ['', Validators.compose([Validators.required])],
      answer_format: ['', Validators.compose([Validators.required])],
      answers: this.fb.array([], [Validators.minLength(1), Validators.maxLength(5)])
    });
  }

  get answers() : FormArray {
    return this.form.get("answers") as FormArray
  }

  newAnswerOptions() {
    return this.fb.group({
      answer: ['', Validators.compose([Validators.required])],
    });
  }

  addAnswer() {
    this.answers.push(this.newAnswerOptions());
  }

  removeAnswer(i:number) {
    this.answers.removeAt(i);
  }

  changeAnswerFormat(ev: any) {
    this.answers.clear();
    if(ev.value === FORM_TYPES.checkboxlist) {
      this.form.get('answers')?.setValidators([Validators.minLength(1), Validators.maxLength(5)]);
      this.addAnswer();
    } else {
      this.form.get('answers')?.setValidators([Validators.minLength(1), Validators.maxLength(1)]);
      this.addAnswer();
    }
  }

  onSubmit() {
    if(this.form.invalid) {
      return;
    } else {
      this.dialogRef.close(this.form.value);
    }
  }
   
}
