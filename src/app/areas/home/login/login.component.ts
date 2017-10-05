import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private svcAuth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // this.router.navigate(['/']);
  }

  submit() {
    // Implementar validação do usuário

    this.router.navigate(['/']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
