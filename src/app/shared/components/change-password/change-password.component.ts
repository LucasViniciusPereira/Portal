import { BaseModal } from '../../class/base-modal';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder } from '@angular/forms';

import { ChangePasswordModel } from './change-password.model';
import { FilterException } from '../../../shared/decorators/filter-exception';
import { HelperMessage } from '../../../shared/class/helper-message';
import { Enumerations } from '../../../shared/enumerators/enumerations';
import { AuthService } from '../../../shared/services/auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent extends BaseModal implements OnInit, OnDestroy {

  changePasswordModel = this.fb.group(new ChangePasswordModel(this.fb));

  constructor(
    private helperMessage: HelperMessage,
    private fb: FormBuilder,
    private svc: AuthService
  ) { super(); }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.model = null;
    this.changePasswordModel.reset();
  }

  isValidCustom() {
    return this.changePasswordModel.controls.NewPassword.valid &&
      this.changePasswordModel.controls.OldPassword.valid;
  }

  @FilterException
  save() {
    if (!this.isValidCustom()) {
      return this.helperMessage.showMessage(Enumerations.eTypeMessage.ERROR,
        ['Há Campos obrigatórios que não foram preenchidos.']);
    }

    this.svc.changePassword(this.changePasswordModel.value)
      .subscribe((data: any) => {
        this.modalComponent.close();
        this.helperMessage.showMessage(Enumerations.eTypeMessage.SUCCESS,
          ['Senha Alterada com sucesso.']);
      });
  }
}
