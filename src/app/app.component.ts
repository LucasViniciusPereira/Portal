import { Component, OnInit } from '@angular/core';
import { routerAnimation } from './shared/animations/router.animation';

declare var $: any;

@Component({
  animations: [ routerAnimation ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit(): void {
  }

  getState(outlet) {
    return outlet.activatedRouteData.state;
  }
}
