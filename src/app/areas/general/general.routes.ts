import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexGeneralComponent } from './index/index-general.component';
import { SecurekeyComponent } from './securekey/securekey.component';

const GeneralRoutesApp: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexGeneralComponent,  },
  { path: 'keys', component: SecurekeyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(GeneralRoutesApp)],
  exports: [RouterModule]
})
export class GeneralRoutes {

}
