import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';

// Components
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { LoginComponent } from './areas/home/login/login.component';
import { IndexComponent } from './components/index/index.component';

// lAYOUTS
import { LAYOUT_BASE_ROUTES } from './shared/components/layout-base/layout-base.routes';
import { LAYOUT_PRINCIPAL_ROUTES } from './shared/components/layout-principal/layout-principal.routes';
import { LayoutBaseComponent } from './shared/components/layout-base/layout-base.component';
import { LayoutPrincipalComponent } from './shared/components/layout-principal/layout-principal.component';

const appRoutes: Routes = [
  // Layouts
  { path: 'home', component: LayoutPrincipalComponent, children: LAYOUT_PRINCIPAL_ROUTES },
  { path: 'general', component: LayoutPrincipalComponent, children: LAYOUT_PRINCIPAL_ROUTES },
  { path: '', component: LayoutBaseComponent, children: LAYOUT_BASE_ROUTES },
  // http-Codes
  { path: 'forbidden', component: ForbiddenComponent},
  { path: '**', component: NotfoundComponent } // canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
