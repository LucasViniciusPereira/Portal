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
    private svcToken: TokenService
  ) { }

  get(url: string, params?: any): Observable<any> {
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
    this.onStart();

    const options = this.setHeaderRequest();

    return this.http
      .post(url, JSON.stringify(model), { headers: options})
      .map((res: Response) => res.json())
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
    const msg = error.json().Message || error.json();
    new HelperMessage(new MzToastService()).showMessage(Enumerations.eTypeMessage.ERROR, [msg]);
    return Observable.throw(msg);
  }

  private callbackSuccess(data: Response | any) {
    const msg = data.json().Message || data.json();
    if (data.status === 200 && msg.length <= 0) {
      new HelperMessage(new MzToastService()).showMessage(Enumerations.eTypeMessage.INFO, ['Nenhum item foi encontrado.']);
    }
  }

  private onStop() {
    this.svcPreloader.hide();
  }

  private onStart() {
    this.svcPreloader.show();
  }
}
