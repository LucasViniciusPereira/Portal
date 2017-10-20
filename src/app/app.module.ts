import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';

// Modules
import { AppRoutingModule } from './app.routing.module';
import { MaterializeModule } from 'ng2-materialize';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './areas/home/login/login.component';
import { NotfoundComponent } from './shared/components/http-codes/404-not-found/not-found.component';
import { ForbiddenComponent } from './shared/components/http-codes/403-forbidden/forbidden.component';
import { LayoutPrincipalComponent } from './shared/components/layout-principal/layout-principal.component';
import { PreloaderComponent } from './shared/components/preloader/preloader.component';

// Providers
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './shared/services/auth.service';
import { PreloaderService } from './shared/components/preloader/preloader.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    LayoutPrincipalComponent,
    NotfoundComponent,
    ForbiddenComponent,
    PreloaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterializeModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
    PreloaderService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
