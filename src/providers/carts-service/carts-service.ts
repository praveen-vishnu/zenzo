import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CartsServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CartsService {
  private data = [
    
  ];
 
  private cart = [];
 
  constructor(public http: HttpClient) {
    console.log('Hello CartsServiceProvider Provider');
  }
 
  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }
  setCart(cart){
    this.cart = cart;
  }
}
