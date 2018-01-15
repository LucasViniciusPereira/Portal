import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../../shared/services/token.service';
import { MenuAplication } from './../../../shared/class/menu-aplication';
import { UserAplication } from './../../../shared/class/user-aplication';

@Component({
  selector: 'app-index-home',
  templateUrl: './index-home.component.html',
  styleUrls: ['./index-home.component.css']
})
export class IndexHomeComponent implements OnInit {
  public modules: Array<MenuAplication> = new Array<MenuAplication>();

  constructor(private svc: TokenService) { }

  ngOnInit() {
    this.modules = JSON.parse(this.svc.GetMenuTokenUser());
  }
}
