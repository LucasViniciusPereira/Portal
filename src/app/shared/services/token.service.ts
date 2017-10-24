import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  tokenName = 'X-TokenApp';

  CreateTokenUser(userModel: any) {
    const token = window.localStorage.getItem(this.tokenName);

    if (token == null) {
      window.localStorage.setItem(this.tokenName, JSON.stringify(userModel));
    }
  }

  getTokenUser(): any {
    return window.localStorage.getItem(this.tokenName);
  }

  DeleteTokenUser() {
    window.localStorage.removeItem(this.tokenName);
  }
}