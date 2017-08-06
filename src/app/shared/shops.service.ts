import { Injectable } from '@angular/core';

import { Http, URLSearchParams, RequestOptions } from '@angular/http';

@Injectable()
export class ShopsService {

  constructor(private http: Http) { }

  getShops() {
    this.http.get('http://www.json-generator.com/api/json/get/bZTcBnsIgO').map(response => {
      console.log(response)
    });
  }

}
