import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {BehaviorSubject, catchError,filter,map,Observable,of,retry} from 'rxjs';
// import { Order } from '../models/order';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  newResponse: any;

  public category = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<any>('');
  lengt!: number;
  constructor(private http: HttpClient) {}

  getProducts<Product>(): Observable<Product> {
    return this.http
      .get<Product>('https://patika-server-app.herokuapp.com/products')
      .pipe();
  }

  getProductDetail<Product>(id: number): Observable<Product> {
    return this.http
      .get<Product>('https://patika-server-app.herokuapp.com/products/' + id)
      .pipe();
  }

  order<Order>(order: Order): Observable<Order> {
    return this.http
      .post<Order>('https://patika-server-app.herokuapp.com/orders', order)
      .pipe();
  }

  getUserOrder<Order>(): Observable<Order> {
    return this.http
      .get<Order>('https://patika-server-app.herokuapp.com/orders')
      .pipe();
  }
}
