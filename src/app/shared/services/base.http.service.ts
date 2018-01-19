import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { MzToastService } from 'ng2-materialize/dist';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { PreloaderService } from './../components/preloader/preloader.service';
import { Exception } from './../class/exception-validation';
import { FilterException } from '../decorators/filter-exception';
import { Enumerations } from '../enumerators/enumerations';
import { HelperMessage } from './../class/helper-message';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';

@Injectable()
export class BaseHttpService {
  constructor(
    protected http: HttpClient,
    protected svcToken: TokenService,
  ) { }

  get(url: string, params?: any, header: boolean = true): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    let options = new HttpHeaders();
    if (header === true) {
       options = this.setHeaderRequest();
    }

    return this.http.get(url, { headers: options, params: params })
    .catch(this.callbackError);
  }

  post(url: string, model: any, params: boolean = true): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    let options = new HttpHeaders();
    if (params === true) {
      options = this.setHeaderRequest();
    }

    return this.http
    .post(url, model, { headers: options })
    .catch(this.callbackError);
  }

  delete(url: string, params: any, headers: boolean = true): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    let options = null;
    if (headers === true) {
      options = this.setHeaderRequest();
    }

    return this.http
    .delete(url, { headers: options, params: params })
    .catch(this.callbackError);
  }

  protected callbackError(error: Response | any) {
    let msg = '';

    if (error.status === 0) {
      msg = 'Problema no servidor, se encontra em manutenção.';
    } else {
      msg = error.error.Message;
    }

    new HelperMessage().showMessage(Enumerations.eTypeMessage.ERROR, [msg]);
    return Observable.throw(msg);
  }

  protected setHeaderRequest(): any {
    const tokenUser = this.svcToken.getTokenUser();

    let headers  = new HttpHeaders()
          .set('Content-Type', 'application/json')
          .set('Authorization', tokenUser || '');

    return headers;
  }
}
