import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { ImageList } from '../entities/ImageList.entity';

declare var $: any;
let cartpage = "";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})

export class cartComponent implements OnInit {
  cartItemCount: number = 0;
  productAddedTocart: Product[];
  public img_list: ImageList[];
  constructor(private _exampleService: ProductService, private httpClient: HttpClient, private _sharedservice: SharedService) { }
  ngOnInit() {
    //this.httpClient.get('https://localhost:44302/' + 'api/OdCarts/' + sessionStorage.getItem("userid")).subscribe(
    //  (r: any) =>
      
    //  {

    //    this.productAddedTocart = r;
    //    this.productAddedTocart.forEach(r => {
    //      this.productAddedTocart[r.ModelLink] == "ss";
    //    })
    //    cartpage = "cart";
    //    this.productAddedTocart.forEach(res => {
    //      //this.productAddedTocart[0].modelId
    //      // alert(res.modelId);
    //      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + res.modelId + '/' + cartpage).subscribe(
    //        (r: any) => {
    //          this.img_list.push(r);
    //        })
    //    })
    //    if (sessionStorage.getItem("ModelId") != null) {
    //      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("ModelId")+ '/' + cartpage).subscribe(
    //        (r: any) => {
    //          this.img_list = r;
    //        })
    //    }
    //    else {

    //    }
    //});

    this.httpClient.get('https://localhost:44302/' + 'api/OdCarts/' + sessionStorage.getItem("userid")).subscribe(
      (r: any) => {

        this.productAddedTocart = r;

        if (sessionStorage.getItem("ModelId") != null) {
          this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("ModelId") + '/' + "cart").subscribe(
            (r: any) => {
              this.img_list = r;
            })
        }
        else {

        }
      });
    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
 //   this.productAddedTocart = this._exampleService.getProductFromCart();
    //this._exampleService.addProductToCart(this.productAddedTocart);
    //var item: Item = {
    //  product: this.productService.find('1'),
    //  quantity: 1
    //};
  }
}
