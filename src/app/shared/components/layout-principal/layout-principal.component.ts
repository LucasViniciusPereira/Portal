import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserAplication } from '../../class/user-aplication';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent implements OnInit {
  public canShowMenuPrincipal: boolean;
  public user: UserAplication = new UserAplication();
  
  constructor(
    private svcAuth: AuthService,
    private svc: TokenService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.canShowMenuPrincipal = this.router.url.indexOf('/home/index') !== 0;

    this.user = JSON.parse(this.svc.GetInformationUser());
  }

  logout() {
    const isLogged = this.svcAuth.logout();

    if (isLogged === false) {
      this.router.navigate(['/']);
    }
  }
}
