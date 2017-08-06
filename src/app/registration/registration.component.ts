import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../shared/auth.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.sass']
})
export class RegistrationComponent implements OnInit {

  registrationForm = this.fb.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  });
  pm = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
  }

  onRegistration() {
    const email = this.registrationForm.getRawValue().email;
    const password = this.registrationForm.getRawValue().password;
    const confirmPassword = this.registrationForm.getRawValue().confirmPassword;

    if (password === confirmPassword) {
      this.pm = false;
      this.authService.registration({email: email, password: password});
    } else {
      this.pm = true;
    }
  }

}
