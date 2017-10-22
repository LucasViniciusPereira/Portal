import { TokenService } from './token.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Headers, Http, RequestMethod, RequestOptions, RequestOptionsArgs, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { PreloaderService } from './../components/preloader/preloader.service';
import { Exception } from './../class/exception-validation';
import { FilterException } from '../decorators/filter-exception';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private svcPreloader: PreloaderService,
    private svcToken: TokenService
    // private svcAuth: AuthService
  ) { }

  get(url: string, params?: RequestOptionsArgs): Observable<any> {
    this.onStart();

    return this.http.get(url, params)
      .catch(this.callbackException)
      .map((response: Response) => <any>response.json())
      .do((res: Response) => { }, (error: any) => { this.callbackError(error); })
      .finally(() => {
        this.onStop();
      });
  }

  post(url: string, model: any): Observable<any> {
    this.onStart();

    // Token user application
    const tokenUser = this.svcToken.getTokenUser();
    const headers = new Headers({
      'Content-Type': 'application/json; charset=UTF-8',
      'X-TokenApp': tokenUser
    });
    const options = new RequestOptions( {method: RequestMethod.Post, headers: headers });

    return this.http.post(url, JSON.stringify(model), options)
      .map((res: Response) => res.json())
      .do((res: Response) => { }, (error: any) => { this.callbackError(error); })
      .finally(() => {
        this.onStop();
      });
  }

  private callbackException(): Observable<any> {
    return;
  }

  @FilterException
  private callbackError(error: any): void {
    const validation:  Exception.BusinessValidation = new Exception.BusinessValidation();
    return validation.addValidation(new Exception.RuleValidationSimple(error.Message));
  }

  private onStop() {
    this.svcPreloader.hide();
  }

  private onStart() {
    this.svcPreloader.show();
  }
}
