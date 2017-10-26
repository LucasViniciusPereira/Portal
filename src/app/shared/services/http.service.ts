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

  get(url: string, params?: RequestOptionsArgs): Observable<any> {
    this.onStart();

    const options = this.headerRequest();

    return this.http
      .get(url, options)
      .map((response: Response) => response.json())
      .catch(this.callbackError)
      .finally(() => {
        this.onStop();
      });
  }

  post(url: string, model: any): Observable<any> {
    this.onStart();

    const options = this.headerRequest();

    return this.http
      .post(url, JSON.stringify(model), options)
      .map((res: Response) => res.json())

      // .do(
      //   (res: Response) => {},
      //   (error: any) => {
      //     this.callbackError(error);
      //   }
      // )
      .finally(() => {
        this.onStop();
      });
  }

  private headerRequest(): RequestOptions {
    // Token user application
    const tokenUser = this.svcToken.getTokenUser();
    const headers = new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'X-TokenApp': tokenUser
    });
    const options = new RequestOptions({
      // method: RequestMethod.Post,
      headers: headers
    });

    return options;
  }

  private callbackError(error: Response | any) {
    return  Observable.throw(error.json());

   // throw new Error('This request has failed ' + error.status);

    // const res = error._body;
    // return  Observable.throw(new HelperMessage(new MzToastService()).showMessage(Enumerations.eTypeMessage.ERROR, [res]));
    // return new HelperMessage(new MzToastService())
    //   .showMessage(Enumerations.eTypeMessage.ERROR, [res]);
  }

  private onStop() {
    this.svcPreloader.hide();
  }

  private onStart() {
    this.svcPreloader.show();
  }
}
