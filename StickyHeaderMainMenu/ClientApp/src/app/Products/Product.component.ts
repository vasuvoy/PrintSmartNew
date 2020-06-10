import { Component, OnInit } from '@angular/core';

import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-Product',
  templateUrl: './Product.component.html',
})
export class ProductComponent implements OnInit  {

  private products: Product[];

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.findAll();
  }
}
