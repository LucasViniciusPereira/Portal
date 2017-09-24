
import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  canActivate(): Observable<boolean> | boolean {
    return true;
    // const isLogged = this.authService.isLoggedIn();
    // if (isLogged === true) {
    //   return this.authService.isLoggedIn();
    // } else {
    //   this.router.navigate(['/forbidden']);
    // }
  }

  canLoad(): boolean {
    return true;
  }
}
