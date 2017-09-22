import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './shared/components/menu/menu.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    MenuComponent,
  ],
  declarations: [MenuComponent, NotfoundComponent, ForbiddenComponent]
})
export class SharedModule { }
