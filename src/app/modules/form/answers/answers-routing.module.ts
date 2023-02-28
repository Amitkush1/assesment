import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';
import { AnswersComponent } from './answers.component';

const routes: Routes = [
  {
    path: ROUTES.EMPTY,
    component: AnswersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AnswersRoutingModule { }
