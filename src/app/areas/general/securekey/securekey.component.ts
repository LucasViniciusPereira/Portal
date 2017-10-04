import { SecurekeyDeleteComponent } from './securekey-delete/securekey-delete.component';
import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { MzModalService, MzToastService } from 'ng2-materialize/dist';

import { SecureKeyModel, SecureKeyListModel } from './models/securekey.model';
import { SecurekeyService } from './securekey.service';
import { SecurekeyDetailsComponent } from './securekey-details/securekey-details.component';
import { SecurekeyCreateEditComponent } from './securekey-create-edit/securekey-create-edit.component';
import { HelperMessage } from './../../../shared/class/helper-message';
import { Enumerations } from './../../../shared/enumerators/enumerations';
import { FilterException } from '../../../shared/decorators/filter-exception';
import { Exception } from '../../../shared/class/exception-validation';

@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit {

  private lstSecureKeys: Array<SecureKeyListModel> = new Array<any>();

  constructor(
    private svcSecureKey: SecurekeyService,
    private modalService: MzModalService,
    private toastService: MzToastService,
    private helperMessage: HelperMessage
  ) { }

  ngOnInit() {
  }

  private loadData() {
    this.svcSecureKey
      .getSecureKeys()
      .subscribe((data: Array<SecureKeyListModel>) => {
        this.lstSecureKeys = data;
      });
  }

  private view(item: SecureKeyListModel) {
    this.svcSecureKey.getSecureKey(null).subscribe((data: SecureKeyModel) => {
      this.modalService.open(SecurekeyDetailsComponent, { model: data });
    });
  }

  private edit(item: SecureKeyListModel) {
    this.svcSecureKey.getSecureKey(null).subscribe((data: SecureKeyModel) => {
      this.modalService.open(SecurekeyCreateEditComponent, { model: data });
    });
  }

  private delete(item: SecureKeyListModel) {
    this.modalService.open(SecurekeyDeleteComponent);
  }

  private create(item: SecureKeyListModel) {
    this.modalService.open(SecurekeyCreateEditComponent, { model: null });
  }

  // @FilterException
  // teste() {
  //   const aux = null;
  //   aux.pro = null;
  //   console.log(aux.pro);

  //   const validation:  Exception.BusinessValidation = new Exception.BusinessValidation();
  //   validation.addValidation(new Exception.RuleValidationSimple('O campo [e-mail] não foi preenchido.'));

  //   if (validation.hasValidation) {
  //     return validation;
  //   }
  // }
}
