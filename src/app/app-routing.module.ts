import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from './constants/routes';

const routes: Routes = [
  {
    path: ROUTES.FORM,
    loadChildren: () => import('./modules/form/form.module').then(m => m.FormModule)
  },
  {
    path: ROUTES.WILD_CARD_ROUTE,
    redirectTo: ROUTES.FORM,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
