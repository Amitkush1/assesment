import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';
import { FormComponent } from './form.component';

const routes: Routes = [
  {
    path: ROUTES.EMPTY,
    component: FormComponent,
    children: [
      {
        path: ROUTES.BUILDER,
        loadChildren: () => import('./builder/builder.module').then(m => m.BuilderModule)
      },
      {
        path: ROUTES.ANSWER,
        loadChildren: () => import('./answers/answers.module').then(m => m.AnswersModule)
      },
      {
        path: ROUTES.WILD_CARD_ROUTE,
        redirectTo: ROUTES.BUILDER,
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormRoutingModule { }
