
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad } from '@angular/router';
import { Observable } from 'rxjs/Observable';

// import { AuthService } from './../shared/services/auth.service';

@Injectable()
export class AuthGuard  { // implements CanActivate { // , CanLoad {

  // constructor(private authService: AuthService) {

  // }

  // canActivate(): Observable<boolean> | boolean {
  //   return this.authService.isLoggedIn();
  // }

  // canLoad(): boolean {
  //   return true;
  // }
}
