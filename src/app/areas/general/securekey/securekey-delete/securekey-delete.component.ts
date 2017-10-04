import { Component, OnInit } from '@angular/core';
import { BaseModal } from '../../../../shared/class/base-modal';

@Component({
  selector: 'app-securekey-delete',
  templateUrl: './securekey-delete.component.html',
  styleUrls: ['./securekey-delete.component.css']
})
export class SecurekeyDeleteComponent extends BaseModal implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
