import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { FORM_TYPES } from 'src/app/enums/form-types';
import { ShareDataService } from 'src/app/services/share-data.service';
import { ModalComponent } from './modal/modal.component';

interface BuilderInterface {
  answers: any[];
  question: string;
  answer_format: string;
}

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent {
  data: BuilderInterface[] = [];
  FORM_TYPES = FORM_TYPES;
  bio!: string;
  form!: FormGroup;

  constructor(private dialog: MatDialog, 
              private router: Router,
              private shareData: ShareDataService,
              private fb: FormBuilder){
                this.initForm()
              }

  initForm() {
    this.form = this.fb.group({
      bio: ['', Validators.compose([Validators.required])],
      assesment: this.fb.array([])
    })
  }

  get assesment() : FormArray {
    return this.form.get("assesment") as FormArray
  }

  newAssesment(data: any) {
    return this.fb.group({
      answer: ['', Validators.compose([Validators.required])],
    });
  }

  addAssesment(data: any) {
    this.assesment.push(this.newAssesment(data));
  }

  openDialog() {
    let dialogRef = this.dialog.open(ModalComponent);

    dialogRef.afterClosed().subscribe((data) => {
      if(data) {
        this.data.push(data);
      }
    });
  }

  review() {
    if(this.form.invalid) {
      return this.form.markAllAsTouched();
    };
    this.shareData.changeData({bio: this.form.value.bio, data: this.data});
    this.router.navigate(['/form/answers']);
  }

}
