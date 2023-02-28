import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnswersRoutingModule } from './answers-routing.module';
import { AnswersComponent } from './answers.component';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AnswersComponent
  ],
  imports: [
    CommonModule,
    AnswersRoutingModule,
    MatButtonModule
  ]
})
export class AnswersModule { }
