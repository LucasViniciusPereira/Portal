import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IndexGeneralComponent } from './index/index-general.component';
import { SecurekeyComponent } from './securekey/securekey.component';

const GeneralRoutesApp = [
  { path: '', redirectTo: '/general/index'},
  { path: 'index', component: IndexGeneralComponent },
  { path: 'keys', component: SecurekeyComponent },
];

@NgModule({
  imports: [RouterModule.forChild(GeneralRoutesApp)],
  exports: [RouterModule]
})
export class GeneralRoutes {

}
