import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { ShopsService } from '../shared/shops.service';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.sass']
})
export class ShopsComponent implements OnInit {

  currentUserEmail = localStorage.getItem('currentUserEmail');
  shops = this.shopsService.getShops();

  constructor(private authService: AuthService, private shopsService: ShopsService) { }

  ngOnInit() {
  }

  onLogout() {
    this.authService.logout();
  }

}
