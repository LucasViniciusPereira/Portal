import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';
import { SecureKeyModel, SecureKeyListModel } from './models/securekey.model';

@Injectable()
export class SecurekeyService {

  constructor(
    private router: Router,
    private svcHttp: HttpService
  ) { }

  getSecureKeys(): Observable<Array<SecureKeyListModel>> {
    const url = 'http://www.mocky.io/v2/59ce2a5c110000bb03cccd41';

    return this.svcHttp.get(url);
  }

  getSecureKey(id: number): Observable<SecureKeyModel> {
    if (id == null) {
        console.log('Identificador não pode ser vazio');
    } else {
      console.log('Falta implementar parametro: ' + id);
    }

    const url = 'http://www.mocky.io/v2/59d0f6ba1200004f00244e59';

    return this.svcHttp.get(url);
  }
}
