import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout-principal',
  templateUrl: './layout-principal.component.html',
  styleUrls: ['./layout-principal.component.css']
})
export class LayoutPrincipalComponent implements OnInit {

  constructor(
    private svcAuth: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  logout() {
    const isLogged = this.svcAuth.logout();

    if (isLogged === false) {
      this.router.navigate(['/']);
    }
  }
}
