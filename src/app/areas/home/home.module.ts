import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';

// Modules
import { HomeRoutes } from './home.routes';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutes
  ],
  declarations: [LoginComponent, IndexComponent]
})
export class HomeModule { }
