import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './../../../areas/home/login/login.component';
import { IndexComponent } from './../../../components/index/index.component';

export const LAYOUT_BASE_ROUTES: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'login', component: LoginComponent },
];
