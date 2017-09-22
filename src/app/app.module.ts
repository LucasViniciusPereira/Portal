import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Modules
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './app.routing.module';

// Components
import { SiteComponent } from './components/site/site.component';
import { LoginComponent } from './areas/home/login/login.component';

// Providers
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/services/auth.service';

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
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
