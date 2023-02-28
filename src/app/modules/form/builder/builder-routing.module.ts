import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES } from 'src/app/constants/routes';
import { BuilderComponent } from './builder.component';

const routes: Routes = [
  {
    path: ROUTES.EMPTY,
    component: BuilderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
