import { SecurekeyService } from './securekey.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-securekey',
  templateUrl: './securekey.component.html',
  styleUrls: ['./securekey.component.css']
})
export class SecurekeyComponent implements OnInit {

  constructor(
    private svcSecureKey: SecurekeyService
  ) { }

  ngOnInit() {
  }

  private loadData() {
    const result = this.svcSecureKey.getSecureKeys();
    console.log(result);
    return result;
  }

}
