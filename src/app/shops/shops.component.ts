import { Component, OnInit } from '@angular/core';

import { AuthService } from '../shared/auth.service';
import { ShopsService } from '../shared/shops.service';
import { PaginationService } from '../shared/pagination.service';
import { Shop } from '../shared/shop';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.sass']
})
export class ShopsComponent implements OnInit {

  currentUserEmail = localStorage.getItem('currentUserEmail');
  shops: Array<Shop> = [];
  paginationOptions: any = {};
  pageShops: Array<Shop> = [];
  totalShops: number;

  constructor(private authService: AuthService, private shopsService: ShopsService, private paginationService: PaginationService) { }

  ngOnInit() {
    this.onGetShops();
  }

  onGetShops() {
    this.shopsService.getShops().subscribe(shops => {
      this.shops = this.shops.concat(shops);
      this.totalShops = shops.length;
    })

    this.setPage(1);
  }

  setPage(page: number) {
    if (page < 1 || page > this.paginationOptions) {
      return;
    }

    this.paginationOptions = this.paginationService.getPaginationOptions(page);
  }

  onLogout() {
    this.authService.logout();
  }

}
