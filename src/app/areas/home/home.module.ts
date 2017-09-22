
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './contact/contact.component';

// Modules
import { HomeRoutes } from './home.routes';

import { AuthService } from './../../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [
    IndexComponent,
    ContactComponent
  ],
  exports: [],
  providers: [
    AuthService
  ],
})
export class HomeModule { }
