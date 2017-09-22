
import { AuthGuard } from './guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginComponent } from './areas/home/login/login.component';
import { SiteComponent } from './site/site.component';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/areas/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'index', component: SiteComponent },
  { path: 'login', component: LoginComponent },
  // { path: '**', component: NotFoundComponent } // canActivate: [AuthGuard]}
  { path: '', redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
