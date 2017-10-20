import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { PreloaderService } from './../components/preloader/preloader.service';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private svcPreloader: PreloaderService,
    private svcAuth: AuthService
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

    const body = JSON.stringify(model);
    const headersRequest = new Headers({'Content-Type': 'application/json'});

    // Token user application
    const tokenUser = this.svcAuth.getTokenUser();
    headersRequest.append('X-TokenApp', tokenUser);

    const options = new RequestOptions({ headers: headersRequest });

    return this.http.post(url, body, options)
      .catch(this.callbackException)
      .map((response: Response) => <any>response.json())
      .do((res: Response) => { }, (error: any) => { this.callbackError(error); })
      .finally(() => {
        this.onStop();
      });
  }

  private callbackException(): Observable<any> {
    return;
  }

  private callbackError(error: any): void {
    return;
  }

  private onStop() {
    this.svcPreloader.hide();
  }

  private onStart() {
    this.svcPreloader.show();
  }
}
