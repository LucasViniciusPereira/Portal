import { environment } from '../../../environments/environment';
import { HelperMessage } from './../class/helper-message';
import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import {
  Headers,
  Http,
  RequestMethod,
  RequestOptions,
  RequestOptionsArgs,
  Response
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { PreloaderService } from './../components/preloader/preloader.service';
import { Exception } from './../class/exception-validation';
import { FilterException } from '../decorators/filter-exception';
import { Enumerations } from '../enumerators/enumerations';
import { MzToastService } from 'ng2-materialize/dist';

@Injectable()
export class HttpService {
  constructor(
    private http: Http,
    private svcPreloader: PreloaderService,
    private svcToken: TokenService,
    // private helperMessage: HelperMessage
  ) { }

  get(url: string, params?: any): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    this.onStart();

    const options = this.setHeaderRequest();

    return this.http
      .get(url, { search: params, headers: options })
      .map((response: Response) => {
        this.callbackSuccess(response);
        return response.json();
      })
      .catch(this.callbackError)
      .finally(() => {
        this.onStop();
      });
  }

  post(url: string, model: any): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    this.onStart();

    const options = this.setHeaderRequest();

    return this.http
      .post(url, JSON.stringify(model), { headers: options})
      .map((res: Response) => res.text() ? res.json() : res)
      .catch(this.callbackError)
      .finally(() => {
        this.onStop();
      });
  }

  delete(url: string, id: any): Observable<any> {
    url = `${environment.BaseUrl + url}`;

    this.onStart();

    const options = this.setHeaderRequest();

   return this.http.delete( url + '/' + id, { headers: options })
    .map((res: Response) => res.text() ? res.json() : res)
    .catch(this.callbackError)
    .finally(() => {
      this.onStop();
    });
  }

  private setHeaderRequest(): Headers {
    // Token user application
    const tokenUser = this.svcToken.getTokenUser();
    const headers = new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'X-TokenApp': tokenUser
    });

    return headers;
  }

  private callbackError(error: Response | any) {
    let msg = '';
    if (error.status === 0) {
      msg = 'Problema no servidor, se encontra em manutenção.';
    } else {
      msg = error.json().Message || error.json();
    }

    new HelperMessage().showMessage(Enumerations.eTypeMessage.ERROR, [msg]);
    return Observable.throw(msg);
  }

  private callbackSuccess(data: Response | any) {
    const msg = data.json().Message || data.json();

    // se não encontrar nenhum dado
    if (data.status === 200 && msg.length <= 0) {
      new HelperMessage().showMessage(Enumerations.eTypeMessage.INFO, ['Nenhum item foi encontrado.']);
    }
  }

  private onStop() {
    this.svcPreloader.hide();
  }

  private onStart() {
    this.svcPreloader.show();
  }
}
