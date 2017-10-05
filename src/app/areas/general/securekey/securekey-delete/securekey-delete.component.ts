import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseModal } from '../../../../shared/class/base-modal';
import { FilterException } from '../../../../shared/decorators/filter-exception';

@Component({
  selector: 'app-securekey-delete',
  templateUrl: './securekey-delete.component.html',
  styleUrls: ['./securekey-delete.component.css']
})
export class SecurekeyDeleteComponent extends BaseModal implements OnInit, OnDestroy {

  constructor() {
    super();
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.model = null;
  }

  @FilterException
  delete() {
    alert('Implementar exclusão: ' + this.model.KeyID);
  }
}
