import { TokenService } from './token.service';
import { Observable } from 'rxjs/Observable';
import { HttpService } from './http.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService extends TokenService {

  constructor(
    private svcHttp: HttpService
  ) {
    super();
  }

  isLoggedIn(): boolean {
    const token = this.getTokenUser();

    if (token == null || token === undefined) {
      return false;
    }
    return true;
  }

  login(params: any): Observable<any> {
    const url = 'Auth/login';

    return this.svcHttp.post(url, params);
  }

  logout(): boolean {
    this.DeleteTokenUser();
    return this.getTokenUser();
  }
}
