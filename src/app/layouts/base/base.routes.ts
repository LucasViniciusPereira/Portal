import { Routes, RouterModule } from '@angular/router';

import { SiteComponent } from './../../components/site/site.component';
import { LoginComponent } from './../../areas/home/login/login.component';

export const BASE_ROUTES: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: SiteComponent },
  { path: 'login', component: LoginComponent },
];
