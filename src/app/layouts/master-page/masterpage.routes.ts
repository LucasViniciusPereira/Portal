import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../guards/auth.guard';

// carregando os modulos assincrono
export const MASTERPAGE_ROUTES: Routes = [
  { path: '', loadChildren: 'app/areas/home/home.module#HomeModule', canActivate: [AuthGuard] },
];
