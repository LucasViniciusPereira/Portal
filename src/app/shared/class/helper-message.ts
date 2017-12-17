import { Enumerations } from './../enumerators/enumerations';
import { MzToastService } from 'ng2-materialize';
import { Optional, Injectable } from '@angular/core';
// import izitoast from 'izitoast';

@Injectable()
export class HelperMessage {

  constructor() { }

  public showMessage(typeMessage: Enumerations.eTypeMessage, message: any[]) {

    switch (typeMessage) {
      case Enumerations.eTypeMessage.WARNING:
        message.forEach(element => {
          this.ShowSnackBar(message, 'message-warning', 'Aviso',
          'http://cdn.lucasvinicius.net/Images/icon/neutral.png');
        });
        break;
      case Enumerations.eTypeMessage.SUCCESS:
        message.forEach(element => {
          this.ShowSnackBar(message, 'message-success', 'Sucesso',
          'http://cdn.lucasvinicius.net/Images/icon/smille.png');
        });
        break;
      case Enumerations.eTypeMessage.ERROR:
        message.forEach(element => {
          this.ShowSnackBar(message, 'message-error', 'Erro',
          'http://cdn.lucasvinicius.net/Images/icon/bad.png');
        });
        break;
      case Enumerations.eTypeMessage.INFO:
        message.forEach(element => {
          this.ShowSnackBar(message, 'message-info', 'Informação',
          'http://cdn.lucasvinicius.net/Images/icon/info.png');
        });
        break;
      default:
        this.ShowSnackBar('Ocorreu algum erro na aplicação, favor tentar novamente.', 'message-error', 'Erro',
        'http://cdn.lucasvinicius.net/Images/icon/bad.png');
        break;
    }
  }

  private ShowSnackBar(message, className = 'default', title, imageToast) {
    const svc = new MzToastService();
    svc.show(message, 5000, className);
    // izitoast.success({
    //   title: '<b>' + title + '</b>',
    //   titleSize: '15',
    //   titleLineHeight: '19px',
    //   backgroundColor: 'white',
    //   messageColor: 'black',
    //   iconColor: 'black',
    //   titleColor: 'black',
    //   drag: true,
    //   image: imageToast,
    //   timeout: 5000,
    //   layout: 2,
    //   maxWidth: 350,
    //   class: className,
    //   theme: 'dark',
    //   position: 'topRight',
    //   message: message,
    //   // onClosed: function () {
    //   //   const hash = (arguments[0].title + arguments[0].message).hashCode();
    //   //   const index = this.showMessageMD.arrayMessage.indexOf(hash);
    //   //   this.showMessageMD.arrayMessage.splice(index, 1);
    //   // }.bind(this)
    //  });
  }
}
