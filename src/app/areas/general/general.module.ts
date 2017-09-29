import { GeneralRoutes } from './general.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module';
import { SecurekeyService } from './securekey/securekey.service';

import { SecurekeyComponent } from './securekey/securekey.component';
import { IndexGeneralComponent } from './index/index-general.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GeneralRoutes,
  ],
  declarations: [
    SecurekeyComponent,
    IndexGeneralComponent
  ],
  providers: [
    SecurekeyService
  ]
})
export class GeneralModule { }
