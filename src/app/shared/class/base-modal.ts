import { MzBaseModal } from 'ng2-materialize';
import { Input } from '@angular/core';

export abstract class BaseModal extends MzBaseModal {
  // Model for recive data in modal
  protected model: any;

}
