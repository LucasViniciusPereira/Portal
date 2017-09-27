import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { IndexHomeComponent } from './index/index-home.component';

const HomeRoutesApp: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutesApp)],
  exports: [RouterModule]
})
export class HomeRoutes { }
