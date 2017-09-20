import { RouterModule, CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NgModule, Component } from '@angular/core';

import { AuthGuard } from './../../guards/auth.guard';
import { IndexComponent } from './index/index.component';

export const HomeRoutesApp = [
   { path: 'login', component: LoginComponent }, // No Authentication
   { path: '', Component: IndexComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutesApp)],
  exports: [RouterModule]
})
export class HomeRoutes { }
