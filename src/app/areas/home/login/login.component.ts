import { LoginModel } from './models/login.model';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../../shared/services/auth.service';
import { FilterException } from '../../../shared/decorators/filter-exception';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginModel = this.fb.group(new LoginModel(this.fb));

  constructor(
    private svcAuth: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    const token = this.svcAuth.getTokenUser();
    if (token != null) {
      this.router.navigate(['/']);
    }
  }

  @FilterException
  submit() {

    const model = { email: this.loginModel.controls['Email'].value,
    password: this.loginModel.controls['Password'].value };

    this.svcAuth.login(model)
    .subscribe(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      });
    // .subscribe(data => {
    //   debugger;
    //   this.svcAuth.CreateTokenUser(data);
    //   this.router.navigate(['/']);
    //  });
  }
}
