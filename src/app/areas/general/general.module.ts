import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurekeyComponent } from './securekey/securekey.component';
import { IndexGeneralComponent } from './index/index-general.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SecurekeyComponent,
    IndexGeneralComponent
  ]
})
export class GeneralModule { }
