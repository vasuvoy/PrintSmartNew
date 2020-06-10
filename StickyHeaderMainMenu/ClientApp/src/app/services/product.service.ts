import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

  private products: Product[]=[];

  constructor() {

  }

  public show() {
    let prodlength = this.products.length;
    return prodlength;
  }


  findAll(): Product[] {
    return this.products;
  }

  find(id: string): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: string) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].id == id) {
        return i;
      }
    }
    return -1;
  }

  public insertProduct(id: string, gender: string, size: string, color: string, qty: number) {
    this.products.push({ 'id': id, 'gender': gender, 'size': size, 'color': color, 'qty': qty })
    return this.products;
 
  }

  addProductToCart(prodcuts: any) {
    localStorage.setItem("product", JSON.stringify(prodcuts));
  }

  getProductFromCart() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('product'));
  }
}
