import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';

// Components
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { LoginComponent } from './areas/home/login/login.component';
import { SiteComponent } from './components/site/site.component';

// lAYOUTS
import { MasterpageComponent } from './layouts/master-page/masterpage.component';
import { MASTERPAGE_ROUTES } from './layouts/master-page/masterpage.routes';
import { BaseComponent } from './layouts/base/base.component';
import { BASE_ROUTES } from './layouts/base/base.routes';

const appRoutes: Routes = [
  // Layouts
  { path: 'home', component: MasterpageComponent, children: MASTERPAGE_ROUTES },
  { path: '', component: BaseComponent, children: BASE_ROUTES },
  // http-Codes
  { path: 'forbidden', component: ForbiddenComponent},
  { path: '**', component: NotfoundComponent } // canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
