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

  public insertProduct(qty,detailid) {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    this.products = [];
    if (detailid == 0) {
      this.products.push({

        ProdId: stringtonum(sessionStorage.getItem('ProdId')),
        ProdModelId: stringtonum(sessionStorage.getItem('ModelId')),
        Gender: null,
        CustomContent: null,
        dimIdSize: null,
        OrderedBy: stringtonum(sessionStorage.getItem('userid')),
        DtCreate: null,
        DtModify: null,
        quantity: stringtonum(qty),
        IsCustomized: 0,
        StatusCode: "C"
      });
    }
    else {
      this.products.push({
        detailId: detailid,
        ProdId: stringtonum(sessionStorage.getItem('ProdId')),
        ProdModelId: stringtonum(sessionStorage.getItem('ModelId')),
        Gender: null,
        CustomContent: null,
        dimIdSize: null,
        OrderedBy: stringtonum(sessionStorage.getItem('userid')),
        DtCreate: null,
        DtModify: null,
        quantity: stringtonum(qty),
        IsCustomized: 0,
        StatusCode: "C"
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
