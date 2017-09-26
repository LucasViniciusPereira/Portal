import { IndexGeneralComponent } from './index/index-general.component';
import { SecurekeyComponent } from './securekey/securekey.component';

const GeneralRoutesApp = [
  { path: '', redirectTo: '/general/index'},
  { path: 'index', component: IndexGeneralComponent },
  { path: 'keys', component: SecurekeyComponent },
];

export class GeneralRoutes {

}
