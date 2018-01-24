import { routerAnimation } from './../../animations/router.animation';
import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../services/token.service';
import { UserAplication } from '../../class/user-aplication';
import { MenuAplication } from '../../class/menu-aplication';
import { Router } from '@angular/router';

@Component({
  animations: [ routerAnimation ],
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  public lstMenu: Array<MenuAplication> = new Array<MenuAplication>();
  public user: UserAplication = new UserAplication();

  constructor(
    private svc: TokenService,
    private router: Router) { }

  ngOnInit() {
    const url = this.router.url.substring(1);
    this.lstMenu = JSON.parse(this.svc.GetMenuTokenUser()).filter(function (item) { return item.Url === url; });
    this.user = JSON.parse(this.svc.GetInformationUser());
  }
}
