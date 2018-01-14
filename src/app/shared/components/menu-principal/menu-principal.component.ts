import { Component, OnInit } from '@angular/core';

import { TokenService } from '../../services/token.service';
import { UserAplication } from '../../class/user-aplication';
import { MenuAplication } from '../../class/menu-aplication';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {
  public lstMenu: Array<MenuAplication> = new Array<MenuAplication>();
  public user: UserAplication = new UserAplication();

  constructor(private svc: TokenService) { }

  ngOnInit() {
    this.lstMenu = JSON.parse(this.svc.GetMenuTokenUser());
    this.user = JSON.parse(this.svc.GetInformationUser());
  }
}
