import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MaterializeModule } from 'ng2-materialize';

import { HttpService } from './shared/services/http.service';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpModule,
    MaterializeModule.forRoot()
  ],
  // exports: [
  //   MaterializeModule
  // ],
  declarations: [
  ],
  providers: [
    HttpService,
    AuthGuard,
  ]
})

export class SharedModule { }
