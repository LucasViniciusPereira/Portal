
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
    const isLogged = this.authService.isLoggedIn();

    if (isLogged === true) {
      return isLogged;
    } else {
      this.router.navigate(['/login']);
    }
  }

  canLoad(): boolean {
    return true;
  }
}
