import { filter } from 'rxjs/operator/filter';
import { KeyValue } from './../../../shared/class/key-value';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';
import { SecureKeyModel, SecureKeyListModel } from './models/securekey.model';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class SecurekeyService {

  constructor(
    private router: Router,
    private svcHttp: HttpService
  ) { }

  getSecureKeys(data: any): Observable<Array<SecureKeyListModel>> {
    // const url = 'http://api.portal.lucasvinicius.net/key';
    const url = 'http://localhost:51214/key';

    const params: URLSearchParams = new URLSearchParams();
    if (data.Description) {
      params.set('Description', data.Description);
    }
    if (data.DateRefresh) {
      params.set('DateRefresh', data.DateRefresh);
    }

    return this.svcHttp.get(url, params);
  }

  getSecureKey(id: number): Observable<SecureKeyModel> {
    const url = 'http://localhost:51214/key';

    const params: URLSearchParams = new URLSearchParams();
    params.set('id', id.toString());

    return this.svcHttp.get(url, params);
  }

  postSecureKey(model: SecureKeyModel): Observable<any> {
    const url = 'http://localhost:51214/key';

    return this.svcHttp.post(url, model);
  }

  deleteKey(id: number): Observable<any> {
    const url = 'http://localhost:51214/key';

    return this.svcHttp.delete(url, id);
  }

  getTypeKeys(): Observable<Array<KeyValue>> {
    const url = 'http://api.portal.lucasvinicius.net/key/gettypekeys';

    return this.svcHttp.get(url);
  }
}
