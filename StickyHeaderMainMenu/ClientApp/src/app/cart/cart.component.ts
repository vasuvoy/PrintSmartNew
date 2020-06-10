import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';

declare var $: any;


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})

export class cartComponent implements OnInit {
  productAddedTocart: Product[];
  constructor(private _exampleService: ProductService) { }
  ngOnInit() {
    this.productAddedTocart = this._exampleService.getProductFromCart();
   
    this._exampleService.addProductToCart(this.productAddedTocart);
    //var item: Item = {
    //  product: this.productService.find('1'),
    //  quantity: 1
    //};
  }
}
