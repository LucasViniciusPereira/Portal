import { RouterModule, CanActivate } from '@angular/router';
import { NgModule, Component } from '@angular/core';

import { AuthGuard } from './../../guards/auth.guard';
import { IndexComponent } from './index/index.component';

export const HomeRoutesApp = [
  { path: '', redirectTo: '/index' , pathMatch: 'full' },
  { path: 'index', Component: IndexComponent } //, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutesApp)],
  exports: [RouterModule]
})
export class HomeRoutes { }
