import { FormBuilder } from '@angular/forms';
import { any } from 'codelyzer/util/function';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { MzBaseModal, MzModalComponent } from 'ng2-materialize';

import { BaseModal } from '../../../../shared/class/base-modal';
import { SecureKeyModel } from '../models/securekey.model';

@Component({
  selector: 'app-securekey-details',
  templateUrl: './securekey-details.component.html',
  styleUrls: ['./securekey-details.component.css']
})
export class SecurekeyDetailsComponent extends BaseModal implements OnInit, OnDestroy {

  secureKeyModel = this.fb.group(new SecureKeyModel(this.fb));

  constructor(
    private fb: FormBuilder
  ) {
    super();
  }

  ngOnInit() {
    // Assing properties
    this.secureKeyModel.patchValue(this.model || '');
  }

  ngOnDestroy() {
    this.model = null;
    this.secureKeyModel.reset();
  }
}
