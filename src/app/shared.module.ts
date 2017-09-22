import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
  ],
  declarations: [MenuComponent, NotfoundComponent]
})
export class SharedModule { }
