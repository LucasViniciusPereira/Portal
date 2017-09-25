import { Component, OnInit } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-masterpage',
  templateUrl: './masterpage.component.html',
  styleUrls: ['./masterpage.component.css']
})
export class MasterpageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.button-collapse').sideNav({
      closeOnClick: true,
      draggable: true,
    });
  }

}
