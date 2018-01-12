import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { Ng2IziToastModule } from 'ng2-izitoast';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';

import { TokenService } from './shared/services/token.service';
import { HttpService } from './shared/services/http.service';
import { AuthGuard } from './guards/auth.guard';
import { BaseHttpService } from './shared/services/base.http.service';
import { HelperMessage } from './shared/class/helper-message';

import { DisplayValidationComponent } from './shared/components/display.validation.component';
import { DisplayValidationService } from './shared/services/display.validation.service';

@NgModule({
  declarations: [
    DisplayValidationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Ng2IziToastModule,
    NgxPaginationModule,
    MaterializeModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    DisplayValidationComponent
  ],
  providers: [
    BaseHttpService,
    HttpService,
    HelperMessage,
    AuthGuard,
    TokenService,
    DisplayValidationService
  ]
})

export class SharedModule { }
