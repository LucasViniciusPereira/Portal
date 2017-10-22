import { TokenService } from './shared/services/token.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';

import { HttpService } from './shared/services/http.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    HttpService,
    AuthGuard,
    TokenService
  ]
})

export class SharedModule { }
