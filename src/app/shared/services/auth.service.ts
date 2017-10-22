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
    // Implementar: Busca autenticação do usuário
    return false;
  }

  login(params: any): Observable<any> {
    const url = 'http://api.portal.lucasvinicius.net/login';

    return this.svcHttp.post(url, params);
  }

}
