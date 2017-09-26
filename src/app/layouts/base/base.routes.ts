import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './../../components/index/index.component';
import { LoginComponent } from './../../areas/home/login/login.component';

export const BASE_ROUTES: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
];
