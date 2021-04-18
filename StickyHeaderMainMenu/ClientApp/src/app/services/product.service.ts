import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

  private products: Product[] = [];
  public url: string;
  constructor() {

  }

  public show() {
    let prodlength = this.products.length;
    return prodlength;
  }

  public getUrl() {
    this.url = 'https://localhost:44302/';
    //this.url = "http://printsmart.in/";
    return this.url;
}


  findAll(): Product[] {
    return this.products;
  }

  find(id: number): Product {
    return this.products[this.getSelectedIndex(id)];
  }

  private getSelectedIndex(id: number) {
    for (var i = 0; i < this.products.length; i++) {
      if (this.products[i].modelId == id) {
        return i;
      }
    }
    return -1;
  }

  public insertProduct(qty,detailid,price,prodmat,prodser) {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    this.products = [];
    if (detailid == 0) {
      this.products.push({

        // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
        modelId: stringtonum(localStorage.getItem('ModelId')),
        Gender: null,
        CustomContent: null,
        DimId: null,
        MatId: prodmat,
        ServId:prodser,
        OrderedBy: stringtonum(localStorage.getItem('userid')),
        DtCreate: null,
        DtModify: null,
        quantity: stringtonum(qty),
        IsCustomized: 0,
        StatusCode: "C",
        itemPrice: price,
        discAmount: 0,
        netAmount:price
      });
    }
    else {
      this.products.push({
        detailId: detailid,
       // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
        modelId: stringtonum(localStorage.getItem('ModelId')),
        Gender: null,
        CustomContent: null,
        DimId: null,
        OrderedBy: stringtonum(localStorage.getItem('userid')),
        DtCreate: null,
        DtModify: null,
        quantity: stringtonum(qty),
        IsCustomized: 0,
        StatusCode: "C",
        itemPrice: price,
        discAmount: 0,
        netAmount: price
      });
    }
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
