
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { IndexHomeComponent } from './index/index-home.component';

// Modules
import { HomeRoutes } from './home.routes';
import { AuthService } from './../../shared/services/auth.service';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [
    IndexHomeComponent,
  ],
  exports: [],
  providers: [
    AuthService
  ],
})
export class HomeModule { }
