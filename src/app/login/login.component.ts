import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required]
  });
  le = false;
  errorMessage: string;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin() {
    const email = this.loginForm.getRawValue().email;
    const password = this.loginForm.getRawValue().password;
    const result = this.authService.login({email: email, password: password});

    if (result.errorMessage.length > 0) {
      this.le = true;
      this.errorMessage = result.errorMessage;
    } else {
      this.le = false;
      this.router.navigate(['/shops']);
    }
  }

}
