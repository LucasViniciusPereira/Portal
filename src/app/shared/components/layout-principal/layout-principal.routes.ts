import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../../../guards/auth.guard';

// carregando os modulos assincrono
export const LAYOUT_PRINCIPAL_ROUTES: Routes = [
  { path: '', loadChildren: 'app/areas/home/home.module#HomeModule', canActivate: [AuthGuard] },
  { path: '', loadChildren: 'app/areas/general/general.module#GeneralModule', canActivate: [AuthGuard] },
];
