import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {
  tokenName = 'Authorization';
  menuAplication = 'MenuAplication';
  userAplication = 'UserAplication';

  CreateTokenUser(userModel: any) {
    const token = window.localStorage.getItem(this.tokenName);

    if (token == null) {
      window.localStorage.setItem(this.tokenName, JSON.stringify(userModel));
    }
  }

  getTokenUser(): any {
    const token = JSON.parse(window.localStorage.getItem(this.tokenName));
    // if (token != null) {
    //   return token.replace(/[\\"]/g, '');
    // }
    return token;
  }

  DeleteTokenUser() {
    window.localStorage.removeItem(this.tokenName);
    window.localStorage.removeItem(this.menuAplication);
    window.localStorage.removeItem(this.userAplication);
  }

  // Move for class utils
  SaveMenuTokenUser(tokenModel: any) {
    const menu = window.localStorage.getItem(this.menuAplication);

    if (menu == null) {
      window.localStorage.setItem(this.menuAplication, JSON.stringify(tokenModel));
    }
  }

  GetMenuTokenUser(): any {
    return window.localStorage.getItem(this.menuAplication);
  }

  SaveInformationUser(userModel: any) {
    const user = window.localStorage.getItem(this.userAplication);

    if (user == null) {
      window.localStorage.setItem(this.userAplication, JSON.stringify(userModel));
    }
  }

  GetInformationUser(): any {
    return window.localStorage.getItem(this.userAplication);
  }
}
