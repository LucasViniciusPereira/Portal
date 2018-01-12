import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

// Modules
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { LoginComponent } from './areas/home/login/login.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { LayoutPrincipalComponent } from './shared/components/layout-principal/layout-principal.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

// Prasdoviders
import { AuthService } from './shared/services/auth.service';
import { PreloaderService } from './shared/components/preloader/preloader.service';
import { TokenService } from './shared/services/token.service';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutPrincipalComponent,
    NotfoundComponent,
    ForbiddenComponent,
    PreloaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    MaterializeModule.forRoot()
  ],
  exports: [
  ],
  providers: [
    TokenService,
    AuthService,
    PreloaderService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
