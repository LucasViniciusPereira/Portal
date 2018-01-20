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
    let params: HttpParams = new HttpParams();
    params = params.append('pageIndex', data.PageIndex);
    params = params.append('pageSize', data.PageSize);

    if (data.Description) {
      params = params.append('Description', data.Description);
    }
    if (data.DateRefresh) {
      params = params.append('DateRefresh', data.DateRefresh);
    }

    if (hasPreloader === false) {
      return this.svcBaseHttp.get(url, params);
    } else {
      return this.svcHttp.get(url, params);
    }
  }

  getSecureKey(id: number): Observable<SecureKeyModel> {
    const url = 'key/' + id;

    // let params: HttpParams = new HttpParams();
    // params = params.append('id', id.toString());

    return this.svcHttp.get(url);
  }

  postSecureKey(model: SecureKeyModel): Observable<any> {
    const url = 'key';

    return this.svcHttp.post(url, model);
  }

  deleteKey(id: number): Observable<any> {
    const url = 'key/' + id;

    return this.svcHttp.post(url, null);
  }

  getTypeKeys(): Observable<Array<KeyValue>> {
    const url = 'key/get-type-keys';

    return this.svcHttp.get(url);
  }
}
