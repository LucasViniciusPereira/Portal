import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseModal } from '../../../../shared/class/base-modal';
import { FilterException } from '../../../../shared/decorators/filter-exception';
import { SecurekeyService } from '../securekey.service';

@Component({
  selector: 'app-securekey-delete',
  templateUrl: './securekey-delete.component.html',
  styleUrls: ['./securekey-delete.component.css']
})
export class SecurekeyDeleteComponent extends BaseModal implements OnInit, OnDestroy {

  constructor(
    private svcSecureKey: SecurekeyService
  ) {
    super();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.model = null;
  }

  @FilterException
  delete() {
    this.svcSecureKey.deleteKey(this.model.KeyID)
    .subscribe((data: any) => console.log(data));
  }
}
