import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './user';

@Injectable()
export class AuthService {

  ls = localStorage;
  user: User;
  currentUser: User;

  constructor(private router: Router) { }

  registration(user) {
    this.user = new User(user);
    this.ls.setItem('userEmail', this.user.email);
    this.ls.setItem('userPassword', this.user.password);
    this.router.navigate(['/login']);
  }

  login(currentUser: any) {
    if (currentUser.email === this.ls.getItem('userEmail')) {
      if (currentUser.password === this.ls.getItem('userPassword')) {
        this.currentUser = currentUser;
        this.ls.setItem('currentUserEmail', currentUser.email);
        this.ls.setItem('currentUserPassword', currentUser.password);
        return {
          errorMessage: '',
          userLogin: true
        };
      } else {
        return {
          errorMessage: "Wrong password"
        }
      }
    } else {
      return {
        errorMessage: 'Wrong email'
      }
    }
  }

  logout() {
    this.ls.removeItem('currentUserEmail');
    this.ls.removeItem('currentUserPassword');
    this.router.navigate(['/login']);
  }

}
