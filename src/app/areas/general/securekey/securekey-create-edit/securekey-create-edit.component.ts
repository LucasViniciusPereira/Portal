import { SecureKeyModel } from './../models/securekey.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { BaseModal } from '../../../../shared/class/base-modal';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { FilterException } from '../../../../shared/decorators/filter-exception';

@Component({
  selector: 'app-securekey-create-edit',
  templateUrl: './securekey-create-edit.component.html',
  styleUrls: ['./securekey-create-edit.component.css']
})
export class SecurekeyCreateEditComponent extends BaseModal implements OnInit, OnDestroy {

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

    isValidCustom() {
      return this.secureKeyModel.controls.Description.valid &&
             this.secureKeyModel.controls.Url.valid &&
             this.secureKeyModel.controls.Password.valid;
    }

    @FilterException
    save() {
        if (!this.isValidCustom()) {
          return console.log('Existem campos obrigatorios.');
        }
      alert('Implementar metodo de salvar');
    }
  }
