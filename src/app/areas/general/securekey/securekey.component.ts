import { SecurekeyDeleteComponent } from './securekey-delete/securekey-delete.component';
import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { MzModalService, MzToastService } from 'ng2-materialize/dist';

import { SecureKeyModel, SecureKeyListModel, SecureKeyFilterModel } from './models/securekey.model';
import { SecurekeyService } from './securekey.service';
import { SecurekeyDetailsComponent } from './securekey-details/securekey-details.component';
import { SecurekeyCreateEditComponent } from './securekey-create-edit/securekey-create-edit.component';
import { HelperMessage } from './../../../shared/class/helper-message';
import { Enumerations } from './../../../shared/enumerators/enumerations';
import { FilterException } from '../../../shared/decorators/filter-exception';
import { Exception } from '../../../shared/class/exception-validation';
import { FormBuilder } from '@angular/forms';
import { KeyValue } from '../../../shared/class/key-value';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit, OnDestroy {

  private lstSecureKeys: Array<SecureKeyListModel> = new Array<any>();
  private filterModel = this.fb.group(new SecureKeyFilterModel(this.fb));

  constructor(
    private svcSecureKey: SecurekeyService,
    private modalService: MzModalService,
    private toastService: MzToastService,
    private helperMessage: HelperMessage,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {

  }

  private loadData() {
    const params = this.filterModel.value;

    this.svcSecureKey
      .getSecureKeys(params)
      .subscribe((data: Array<SecureKeyListModel>) => {
        this.lstSecureKeys = data;
      });
  }

  private view(item: SecureKeyListModel) {

    this.svcSecureKey.getSecureKey(item.KeyID).subscribe((data: SecureKeyModel) => {
      this.modalService.open(SecurekeyDetailsComponent, { model: data });
    });
  }

  private edit(item: SecureKeyListModel) {
    const key = this.svcSecureKey.getSecureKey(item.KeyID);
    const list = this.svcSecureKey.getTypeKeys();

    Observable.forkJoin([key, list]).subscribe(results => {
      this.modalService.open(SecurekeyCreateEditComponent, {
        model: results[0],
        listTypeKeys: results[1]
      });
    });
  }

  private delete(item: SecureKeyListModel) {
    this.modalService.open(SecurekeyDeleteComponent, { model : item});
  }

  private create() {
    this.svcSecureKey.getTypeKeys().subscribe((data: any) => {
      this.modalService.open(SecurekeyCreateEditComponent, { model: null, listTypeKeys: data });
    });
  }
}
