
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
    debugger;
    if (isLogged === true) {
      return isLogged;
    } else {
      this.authService.DeleteTokenUser();
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    }

    // if (this.router.url.indexOf('login') !== 0 && isLogged === true) {
    //   this.router.navigate(['/home/index']);
    // } else if (isLogged === true) {
    //   return isLogged;
    // } else if (this.router.url.indexOf('login') !== 0 && isLogged === false) {
    // } else {
    //   this.authService.DeleteTokenUser();
    //   this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    // }
  }

  canLoad(): boolean {
    return true;
  }
}



@Injectable()
export class AuthGuard2 implements CanActivate, CanLoad {

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
