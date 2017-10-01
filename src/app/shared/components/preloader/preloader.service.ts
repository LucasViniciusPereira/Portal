import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PreloaderService {

  loaderSubject = new EventEmitter<boolean>();

  constructor() { }

  show() {
    this.loaderSubject.emit(true);
  }

  hide() {
    this.loaderSubject.emit(false);
  }
}
