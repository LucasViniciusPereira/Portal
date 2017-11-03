import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseModal } from '../../../../shared/class/base-modal';
import { FilterException } from '../../../../shared/decorators/filter-exception';
import { SecurekeyService } from '../securekey.service';
import { HelperMessage } from '../../../../shared/class/helper-message';
import { Enumerations } from '../../../../shared/enumerators/enumerations';

@Component({
  selector: 'app-securekey-delete',
  templateUrl: './securekey-delete.component.html',
  styleUrls: ['./securekey-delete.component.css']
})
export class SecurekeyDeleteComponent extends BaseModal implements OnInit, OnDestroy {

  constructor(
    private svcSecureKey: SecurekeyService,
    private helperMessage: HelperMessage,
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
    .subscribe((data: any) => this.helperMessage.showMessage(Enumerations.eTypeMessage.SUCCESS,
      ['O registro foi excluido com sucesso.']));
  }
}
