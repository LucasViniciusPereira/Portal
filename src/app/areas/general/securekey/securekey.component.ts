import { SecureKeyModel } from './model/securekey.model';
import { SecurekeyService } from './securekey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit {

  private lstSecureKeys: Array<SecureKeyModel> = new Array<any>();

  constructor(
    private svcSecureKey: SecurekeyService
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

}
