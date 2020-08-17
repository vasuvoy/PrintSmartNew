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

  find(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].ProdId == id) {
        return i;
      }
    }
    return -1;
  }

  public insertProduct(products) {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    this.products.push({
      ProdId: stringtonum(localStorage.getItem('ProdId')),
      ProdModelId: stringtonum(localStorage.getItem('ProdModelId')),
      Gender: products.Gender,
      CustomContent: null,
      DimIdSize: null,
      OrderedBy: null,
      DtCreate: null,
      DtModify: null,
      Quantity: 1,
      IsCustomized: 0,
      StatusCode: "C"
    });
  //this.products.push({ 'ProdId': ProdId, 'ProdModelId': , 'size': size, 'color': color, 'qty': qty })
    return this.products;
 
  }

  addProductToCart(prodcuts: any) {
    localStorage.setItem("cart", JSON.stringify(prodcuts));
  }

  getProductFromCart() {
    //return localStorage.getItem("product");
    return JSON.parse(localStorage.getItem('cart'));
  }
}
