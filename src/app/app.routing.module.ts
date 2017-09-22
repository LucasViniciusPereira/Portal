
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';

import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { LoginComponent } from './areas/home/login/login.component';
import { SiteComponent } from './components/site/site.component';

const appRoutes: Routes = [
  { path: 'home', loadChildren: 'app/areas/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: 'index', component: SiteComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  // http-Codes
  { path: 'forbidden', component: ForbiddenComponent},
  { path: '**', component: NotfoundComponent } // canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
