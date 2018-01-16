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
    protected http: HttpClient ,
    protected svcToken: TokenService,
  ) { }

  get(url: string, params?: any, headers: boolean = true): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    let options = null;
    if (headers === true) {
      options = this.setHeaderRequest();
    }

    return this.http.get(url, { headers: options, params: params })
    .map((response: Response) => {
      this.callbackSuccess(response);
      return response.json();
    })
    .catch(this.callbackError);

    // return this.http
    //   .get(url, { search: params, headers: options })
    //   .map((response: Response) => {
    //     this.callbackSuccess(response);
    //     return response.json();
    //   })
    //   .catch(this.callbackError);
  }

  post(url: string, model: any, headers: boolean = true): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    let options = null;
    if (headers === true) {
      options = this.setHeaderRequest();
    }

    return this.http
    .post(url, model, options)
    // .map((res: Response) => res.text() ? res.json() : res)
    .catch(this.callbackError);
  }

  delete(url: string, id: any, headers: boolean = true): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    let options = null;
    if (headers === true) {
      options = this.setHeaderRequest();
    }

   return this.http.delete( url + '/' + id, { headers: options })
    .map((res: Response) => res.text() ? res.json() : res)
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

  protected callbackSuccess(data: Response | any) {
    const msg = data.json().Message || data.json();

    // se não encontrar nenhum dado
    if (data.status === 200 && msg.length <= 0) {
      new HelperMessage().showMessage(Enumerations.eTypeMessage.INFO, ['Nenhum item foi encontrado.']);
    }
  }

  protected setHeaderRequest(): HttpHeaders {
    const tokenUser = this.svcToken.getTokenUser();
    debugger;
    const headers = new HttpHeaders();

    headers.set('Content-Type', 'application/json; charset=UTF-8');
    headers.set('Authorization', tokenUser);
    return headers;
  }
}
