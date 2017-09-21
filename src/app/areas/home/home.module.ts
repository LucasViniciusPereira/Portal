// import { AuthService } from './../../shared/services/auth.service';
import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

// Components
import { IndexComponent } from './index/index.component';

// Modules
import { HomeRoutes } from './home.routes';

@NgModule({
  imports: [
    //CommonModule,
    HomeRoutes
  ],
  // providers: [
  //   AuthService
  // ],
  declarations: [IndexComponent]
})
export class HomeModule { }
