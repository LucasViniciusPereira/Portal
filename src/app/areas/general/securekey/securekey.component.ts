import { MzModalService } from 'ng2-materialize/dist';
import { SecureKeyModel } from './model/securekey.model';
import { SecurekeyService } from './securekey.service';
import { Component, OnInit, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { SecurekeyDetailsComponent } from './securekey-details/securekey-details.component';

@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit {

  private lstSecureKeys: Array<SecureKeyModel> = new Array<any>();

  constructor(
    private svcSecureKey: SecurekeyService,
    private modalService: MzModalService
  ) { }

  ngOnInit() {
  }

  private loadData() {
    this.svcSecureKey
      .getSecureKeys()
      .subscribe((data: Array<SecureKeyModel>) => {
        this.lstSecureKeys = data;
      });
  }

 public loadModal() {
   this.modalService.open(SecurekeyDetailsComponent, { nome : 'Teste de moodalllll' });
  }
}
