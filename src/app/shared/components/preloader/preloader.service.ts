import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {

  loaderSubject = new EventEmitter<boolean>();

  constructor() { }

  show() {
    console.log('show emit');
    this.loaderSubject.emit(true);
  }

  hide() {
    console.log('hide emit');
    this.loaderSubject.emit(false);
  }
}
