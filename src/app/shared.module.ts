import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/components/menu/menu.component';

// import { RouterModule } from '@angular/router';
import { HomeModule } from './areas/home/home.module';

@NgModule({
  imports: [
    CommonModule,
    // RouterModule,
  ],
  exports: [
    MenuComponent,
    // RouterModule,
  ],
  declarations: [MenuComponent]
})
export class SharedModule { }
