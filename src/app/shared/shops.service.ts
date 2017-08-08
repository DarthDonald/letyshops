import { Injectable } from '@angular/core';
import { Http, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { Shop } from './shop';

@Injectable()
export class ShopsService {

  shopsBuffer: Array<Shop> = [];

  constructor(private http: Http) { }

  getShops(): Observable<Array<Shop>> {
    return this.http.get('http://www.json-generator.com/api/json/get/bZTcBnsIgO')
    .map(response => {
        const rawShops = response.json();
        return rawShops.map(rawShops => rawShops);
      })
      .do(shops => {
        this.shopsBuffer = this.shopsBuffer.concat(shops);
      });
  }

}
