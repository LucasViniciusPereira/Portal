import { BaseModal } from '../../class/base-modal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends BaseModal implements OnInit {

  constructor() { super(); }

  ngOnInit() {
  }

}
