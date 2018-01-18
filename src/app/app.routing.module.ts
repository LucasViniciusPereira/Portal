import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard, AuthGuard2 } from './guards/auth.guard';

// Components
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { LoginComponent } from './areas/home/login/login.component';

// lAYOUTS
import { LayoutPrincipalComponent } from './shared/components/layout-principal/layout-principal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard2] },
  // Modules
  {
    path: 'home', component: LayoutPrincipalComponent,
    loadChildren: 'app/areas/home/home.module#HomeModule', canActivate: [AuthGuard]
  },
  {
    path: 'general', component: LayoutPrincipalComponent,
    loadChildren: 'app/areas/general/general.module#GeneralModule', canActivate: [AuthGuard]
  },
  { path: 'forbidden', component: ForbiddenComponent },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
