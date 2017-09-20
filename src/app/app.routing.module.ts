import { LoginComponent } from './areas/home/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: 'home', loadChildren: './app/areas/home/home.module#HomeModule'},
  // { path: 'login', component: LoginComponent },
  // {
  //   path: 'home', component: IndexComponent,
  //   canActivate: [AuthGuard]
  // },
  // {
  //   path: 'monitoring', component: MonitoringComponent,
  //   canActivate: [AuthGuard]
  // },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', component: NotFoundComponent } // canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
