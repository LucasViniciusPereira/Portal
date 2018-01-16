import { filter } from 'rxjs/operator/filter';
import { KeyValue } from './../../../shared/class/key-value';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { URLSearchParams } from '@angular/http';

import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';
import { SecureKeyModel, SecureKeyListModel } from './models/securekey.model';
import { HttpParams } from '@angular/common/http';
import { BaseHttpService } from '../../../shared/services/base.http.service';

@Injectable()
export class SecurekeyService {

  constructor(
    private router: Router,
    private svcHttp: HttpService,
    private svcBaseHttp: BaseHttpService
  ) { }

  getSecureKeys(data: any, hasPreloader: boolean): Observable<Array<SecureKeyListModel>> {
    const url = 'key';

    // Paginator
    const params: HttpParams = new HttpParams();
    params.set('PageIndex', data.PageIndex);
    params.set('PageSize', data.PageSize);

    if (data.Description) {
      params.set('Description', data.Description);
    }
    if (data.DateRefresh) {
      params.set('DateRefresh', data.DateRefresh);
    }

    if (hasPreloader === false) {
      return this.svcBaseHttp.get(url, params);
    } else {
      return this.svcHttp.get(url, params);
    }
  }

  getSecureKey(id: number): Observable<SecureKeyModel> {
    const url = 'key';

    const params: URLSearchParams = new URLSearchParams();
    params.set('id', id.toString());

    return this.svcHttp.get(url, params);
  }

  postSecureKey(model: SecureKeyModel): Observable<any> {
    const url = 'key';

    return this.svcHttp.post(url, model);
  }

  deleteKey(id: number): Observable<any> {
    const url = 'key';

    return this.svcHttp.delete(url, id);
  }

  getTypeKeys(): Observable<Array<KeyValue>> {
    const url = 'key/gettypekeys';

    return this.svcHttp.get(url);
  }
}
