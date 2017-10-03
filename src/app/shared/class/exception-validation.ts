export namespace Exception {
  export interface IRuleValidation {
    message: string;
  }

  export class BusinessValidation {
    validations: Array<IRuleValidation>;

    constructor() {
      this.validations = new Array<IRuleValidation>();
    }

    addValidation(validate: IRuleValidation) {
      this.validations.push(validate);
    }

    hasValidation() {
      return this.validations && this.validations.length > 0;
    }
  }

  export class RuleValidationSimple implements IRuleValidation {
    message: string;

    constructor(_message: string) {
      this.message = _message;
    }
  }
}
