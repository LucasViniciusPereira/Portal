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

  getSecureKeys(): Observable<Array<SecureKeyModel>> {
    const url = 'http://www.mocky.io/v2/59ce2a5c110000bb03cccd41';

    return this.svcHttp.get(url);
  }
}
