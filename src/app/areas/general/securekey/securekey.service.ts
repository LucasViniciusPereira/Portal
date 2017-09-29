import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Router } from '@angular/router';
import { HttpService } from '../../../shared/services/http.service';
import { SecureKeyModel } from './model/securekey.model';

@Injectable()
export class SecurekeyService {

  constructor(
    private router: Router,
    private svcHttp: HttpService
  ) { }

  getSecureKeys(): Observable<SecureKeyModel> {
    const url = 'http://www.mocky.io/v2/59cd8e9c110000d101cccb9a';

    return this.svcHttp.get(url);
  }
}
