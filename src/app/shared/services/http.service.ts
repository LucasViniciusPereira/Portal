import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/Rx';

import { PreloaderService } from './../components/preloader/preloader.service';

@Injectable()
export class HttpService {

  constructor(
    private http: Http,
    private svcPreloader: PreloaderService
  ) {}

  private callbackException(): Observable<any> {
    return;
  }

  get(url: string, params?: RequestOptionsArgs): Observable<any> {
    console.log('init');
    this.onStart();
    return (
      this.http
        .get(url, params)
        .catch(this.callbackException)
        // .delay(500)
        .map((response: Response) => <any>response.json())
        .do(
          (res: Response) => {},
          (error: any) => {
            this.callbackError(error);
          }
        )
        .finally(() => {
          console.log('stop');
          this.onStop();
        })
    );
  }

  private callbackError(error: any): void {
    return;
  }

  private onStop() {
    console.log('hide');
    this.svcPreloader.hide();
  }

  private onStart() {
    console.log('show');
    this.svcPreloader.show();
  }
}
