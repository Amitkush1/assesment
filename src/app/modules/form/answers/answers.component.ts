import { Component, OnInit } from '@angular/core';
import { FORM_TYPES } from 'src/app/enums/form-types';
import { ShareDataService } from 'src/app/services/share-data.service';

@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.scss']
})
export class AnswersComponent implements OnInit {
  assesMentData: any;
  FORM_TYPES = FORM_TYPES;
  
  constructor(private shareData: ShareDataService) {}

  ngOnInit(): void {
      this.shareData.subjectAsObservable.subscribe((data: any) => {
        if(data) {
          this.assesMentData = data;
        }
      })
  }

}
