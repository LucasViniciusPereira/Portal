import { AuthService } from './shared/services/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app.routing.module';
import { SiteComponent } from './site/site.component';
import { LoginComponent } from './areas/home/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
