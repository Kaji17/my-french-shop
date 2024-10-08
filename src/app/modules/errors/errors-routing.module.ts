import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Error404Component } from './error-404/error-404.component';
import { ErrorsComponent } from './errors.component';

const routes: Routes = [
  {
    path: "",
    component: ErrorsComponent,
    children: [
      {
        path: "error-404",
        component: Error404Component,
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class ErrorsRoutingModule { }
