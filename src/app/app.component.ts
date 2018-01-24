import { Component, OnInit } from '@angular/core';
import { routerAnimation } from './shared/animations/router.animation';
import {trigger, animate, style, group, animateChild, query, stagger, transition, state} from '@angular/animations';

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
}
