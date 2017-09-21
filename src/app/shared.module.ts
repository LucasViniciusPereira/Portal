import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/components/menu/menu.component';

import { RouterModule } from '@angular/router';
import { HomeModule } from './areas/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    // HomeModule
  ],
  exports: [
    MenuComponent,
    RouterModule,
    // HomeModule
  ],
  declarations: [MenuComponent]
})
export class SharedModule { }
