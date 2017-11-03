import { Validators, FormBuilder } from '@angular/forms';

export class SecureKeyModel {

  KeyID = [null, Validators.required];
  Description = [null, Validators.compose([Validators.required, Validators.maxLength(150)])];
  Url = [null, Validators.compose([Validators.required, Validators.maxLength(150)])];
  DateRefresh = [null, Validators.required];
  TypeKey = [null, Validators.required];
  Type = [null, Validators.nullValidator];
  Login = [null, Validators.compose([Validators.required, Validators.maxLength(150)])];
  Password = [null, Validators.compose([Validators.required, Validators.maxLength(150)])];

  constructor(
    private fb: FormBuilder
  ) { }
}

export class SecureKeyListModel {
  KeyID: number;
  Description: string;
  Url: string;
  DateRefresh: Date;
}

export class SecureKeyFilterModel {
  Description = [null, Validators.nullValidator];
  DateRefresh = [null, Validators.nullValidator];

  constructor(
    private fb: FormBuilder
  ) { }
}
