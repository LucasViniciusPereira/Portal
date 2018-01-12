import { HttpClient } from '@angular/common/http';
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
import { BaseHttpService } from './base.http.service';

@Injectable()
export class HttpService extends BaseHttpService {

  constructor(
    protected http: HttpClient,
    protected svcPreloader: PreloaderService,
    protected svcToken: TokenService,
  ) {
    super(http, svcToken);
  }

  get(url: string, params?: any): Observable<any> {

    this.onStart();

    return super.get(url, params)
    .finally(() => {
      this.onStop();
    });
  }

  post(url: string, model: any): Observable<any> {

    this.onStart();

    return super.post(url, model)
      .finally(() => {
        this.onStop();
      });
  }

  delete(url: string, id: any): Observable<any> {

    this.onStart();

   return super.delete(url, id)
    .finally(() => {
      this.onStop();
    });
  }

  private onStop() {
    this.svcPreloader.hide();
  }

  private onStart() {
    this.svcPreloader.show();
  }
}
