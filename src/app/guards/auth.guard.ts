import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { AuthService } from './../shared/services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isLogged = this.authService.isLoggedIn();

    if (isLogged === true) {
      return isLogged;
    }

    this.authService.DeleteTokenUser();
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return isLogged;
  }

  canLoad(): boolean {
    return true;
  }
}



@Injectable()
export class AuthGuardLogin implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | boolean {
    const isLogged = this.authService.isLoggedIn();
    if (isLogged === true) {
      this.router.navigate(['/home'], { queryParams: { returnUrl: state.url } });
      return isLogged;
    }
    return true;
  }

  canLoad(): boolean {
    return true;
  }
}
