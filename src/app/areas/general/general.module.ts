import { HelperMessage } from './../../shared/class/helper-message';
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
import { SecurekeyDeleteComponent } from './securekey/securekey-delete/securekey-delete.component';

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
    SecurekeyCreateEditComponent,
    SecurekeyDeleteComponent
  ],
  entryComponents: [
    SecurekeyDetailsComponent,
    SecurekeyCreateEditComponent
  ],
  providers: [
    SecurekeyService,
    HelperMessage
  ]
})
export class GeneralModule { }
