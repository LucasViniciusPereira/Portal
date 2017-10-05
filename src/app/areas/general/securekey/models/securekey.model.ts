import { Validators, FormBuilder } from '@angular/forms';

export class SecureKeyModel {

  KeyID = [null, Validators.required];
  Description = [null, Validators.required];
  Url = [null, Validators.required];
  DateRefresh = [null, Validators.required];
  Password = [null, Validators.required];

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
