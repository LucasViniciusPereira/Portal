import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { MzModalService } from 'ng2-materialize/dist';

import { SecureKeyModel, SecureKeyListModel } from './models/securekey.model';
import { SecurekeyService } from './securekey.service';
import { SecurekeyDetailsComponent } from './securekey-details/securekey-details.component';
import { SecurekeyCreateEditComponent } from './securekey-create-edit/securekey-create-edit.component';

@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit {

  private lstSecureKeys: Array<SecureKeyListModel> = new Array<any>();

  constructor(
    private svcSecureKey: SecurekeyService,
    private modalService: MzModalService
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
    alert('Falta implementação');
  }

  private create(item: SecureKeyListModel) {
    alert('Falta implementação');
  }
}
