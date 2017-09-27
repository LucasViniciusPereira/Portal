import { MaterializeModule } from 'ng2-materialize';
import { AuthService } from './../../shared/services/auth.service';
import { GeneralRoutes } from './general.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurekeyComponent } from './securekey/securekey.component';
import { IndexGeneralComponent } from './index/index-general.component';

@NgModule({
  imports: [
    CommonModule,
    GeneralRoutes,
    MaterializeModule.forRoot()
  ],
  declarations: [
    SecurekeyComponent,
    IndexGeneralComponent
  ],
  providers: [
    AuthService
  ]
})
export class GeneralModule { }
