import { Enumerations } from './../enumerators/enumerations';
import { MzToastService } from 'ng2-materialize';
import { Optional, Injectable } from '@angular/core';

@Injectable()
export class HelperMessage {

  constructor(private toastService: MzToastService) {
  }

  public showMessage(typeMessage: Enumerations.eTypeMessage, message: any[]) {

    switch (typeMessage) {
      case Enumerations.eTypeMessage.WARNING:
        message.forEach(element => {
          this.ShowSnackBar(message, 'message-warning');
        });
        break;
      case Enumerations.eTypeMessage.SUCCESS:
        message.forEach(element => {
          this.ShowSnackBar(message, 'message-success');
        });
        break;
      case Enumerations.eTypeMessage.ERROR:
        message.forEach(element => {
          this.ShowSnackBar(element.message, 'message-error');
        });
        break;
      case Enumerations.eTypeMessage.INFO:
        message.forEach(element => {
          this.ShowSnackBar(element.message, 'message-info');
        });
        break;
      default:
        this.ShowSnackBar('Ocorreu algum erro na aplicação, favor tentar novamente.');
        break;
    }
  }

  private ShowSnackBar(message, className = 'default') {
    this.toastService.show(message, 4000, className);
  }
}
