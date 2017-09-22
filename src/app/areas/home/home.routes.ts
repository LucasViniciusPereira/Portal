
import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ContactComponent } from './contact/contact.component';
// import { AuthGuard } from './../../guards/auth.guard';
import { IndexComponent } from './index/index.component';

const HomeRoutesApp: Routes = [
  { path: '', redirectTo: '/home/index' , pathMatch: 'full' },
  { path: 'index', component: IndexComponent }, // , canActivate: [AuthGuard] },
  { path: 'contato', component: ContactComponent } // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutesApp)],
  exports: [RouterModule]
})
export class HomeRoutes { }
