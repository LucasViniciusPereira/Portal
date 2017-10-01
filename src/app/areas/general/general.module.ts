import { GeneralRoutes } from './general.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared.module';
import { SecurekeyService } from './securekey/securekey.service';

import { SecurekeyComponent } from './securekey/securekey.component';
import { IndexGeneralComponent } from './index/index-general.component';
import { MaterializeModule } from 'ng2-materialize';
import { SecurekeyDetailsComponent } from './securekey/securekey-details/securekey-details.component';
import { SecurekeyCreateEditComponent } from './securekey/securekey-create-edit/securekey-create-edit.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GeneralRoutes,
    MaterializeModule.forRoot()
  ],
  declarations: [
    IndexGeneralComponent,
    SecurekeyComponent,
    SecurekeyDetailsComponent,
    SecurekeyCreateEditComponent
  ],
  entryComponents: [
    SecurekeyDetailsComponent,
    SecurekeyCreateEditComponent
  ],
  providers: [
    SecurekeyService
  ]
})
export class GeneralModule { }
