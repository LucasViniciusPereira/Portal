import { PreloaderService } from './preloader.service';
import { Component, OnDestroy, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements OnInit, OnDestroy {

  loading = false;
  private subscription: EventEmitter<Boolean>;

  constructor(private svcPreloader: PreloaderService) { }

  ngOnInit() {
    this.subscription = this.svcPreloader.loaderSubject.subscribe(
      (state: boolean) => { this.loading = state; }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
