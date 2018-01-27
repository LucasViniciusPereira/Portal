import { Validators, FormBuilder } from '@angular/forms';

export class ChangePasswordModel {

    OldPassword = [null, Validators.compose([Validators.required, Validators.maxLength(150), Validators.minLength(6)])];
    NewPassword = [null, Validators.compose([Validators.required, Validators.maxLength(150), Validators.minLength(6)])];

    constructor(
        private fb: FormBuilder
      ) { }
      
}