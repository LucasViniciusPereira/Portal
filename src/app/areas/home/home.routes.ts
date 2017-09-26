import { Routes, RouterModule } from '@angular/router';
import { NgModule, ModuleWithProviders } from '@angular/core';

// import { AuthGuard } from './../../guards/auth.guard';
import { IndexHomeComponent } from './index/index-home.component';

const HomeRoutesApp: Routes = [
  { path: '', redirectTo: '/home/index'},
  { path: 'index', component: IndexHomeComponent }, // , canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutesApp)],
  exports: [RouterModule]
})
export class HomeRoutes { }
