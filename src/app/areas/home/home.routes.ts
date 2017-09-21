import { RouterModule, CanActivate } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { AuthGuard } from './../../guards/auth.guard';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';

export const HomeRoutesApp = [
   { path: 'index', Component: IndexComponent, canActivate: [AuthGuard] },
   { path: 'login', component: LoginComponent } // No Authentication
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutesApp)],
  exports: [RouterModule]
})
export class HomeRoutes { }
