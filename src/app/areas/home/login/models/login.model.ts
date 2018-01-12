import { FormBuilder, Validators } from '@angular/forms';
import { Exception } from '../../../../shared/class/exception-validation';

export class LoginModel {
  Email = [null, [Validators.required, Validators.email]];
  Password = [null, [Validators.required, Validators.minLength(6)]];

  constructor(
    private fb: FormBuilder
  ) { }

  public ValidateLogin(): Exception.BusinessValidation {
    const validation: Exception.BusinessValidation = new Exception.BusinessValidation();

    if (this.Email == null || this.Email === undefined) {
      validation.addValidation(new Exception.RuleValidationSimple('O campo e-mail não foi preenchido.'));
    }
    if (this.Password == null || this.Password === undefined) {
      validation.addValidation(new Exception.RuleValidationSimple('O campo senha não foi preenchido.'));
    }
    if (this.Password.length < 6) {
      validation.addValidation(new Exception.RuleValidationSimple('O campo senha não foi preenchido corretamente'));
    }

    return validation;
  }
}
