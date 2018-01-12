import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  tokenName = 'Authorization';

  CreateTokenUser(userModel: any) {
    const token = window.localStorage.getItem(this.tokenName);

    if (token == null) {
      window.localStorage.setItem(this.tokenName, JSON.stringify(userModel));
    }
  }

  getTokenUser(): any {
    const token = window.localStorage.getItem(this.tokenName);
    if (token != null) {
      return token.replace(/[\\"]/g, '');
    }
    return token;
  }

  DeleteTokenUser() {
    window.localStorage.removeItem(this.tokenName);
  }
}
