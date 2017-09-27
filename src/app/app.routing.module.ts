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
import { LayoutPrincipalComponent } from './shared/components/layout-principal/layout-principal.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent,  },
  { path: 'login', component: LoginComponent},

  // Modules
  { path: 'home',  component: LayoutPrincipalComponent,
      loadChildren: 'app/areas/home/home.module#HomeModule'},
  { path: 'general',  component: LayoutPrincipalComponent,
      loadChildren: 'app/areas/general/general.module#GeneralModule'},

  // http-Codes
  { path: 'forbidden', component: ForbiddenComponent},
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
