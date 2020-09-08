import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { ImageList } from '../entities/ImageList.entity';

declare var $: any;


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
    this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/'+ localStorage.getItem("userid")+"/"+"cartpage").subscribe(
      (r: any) =>
      
      {

        this.productAddedTocart = r;

        this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + localStorage.getItem("ModelId")).subscribe(
          (r:any) =>
          {
          this.img_list = r;
          })
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
