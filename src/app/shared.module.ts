import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { BaseComponent } from './layouts/base/base.component';
import { MasterpageComponent } from './layouts/master-page/masterpage.component';
import { MaterializeModule } from 'ng2-materialize';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterializeModule.forRoot()
  ],
  exports: [
    MaterializeModule
  ],
  declarations: [
    NotfoundComponent,
    ForbiddenComponent,
    BaseComponent,
    MasterpageComponent
  ]
})

export class SharedModule { }
