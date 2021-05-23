import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { Item } from '../entities/item.entity';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { HttpClient } from '@angular/common/http';
import { ImageList } from '../entities/ImageList.entity';
import { Router } from '@angular/router';

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
  constructor(private prod_service: ProductService, private router: Router, private httpClient: HttpClient, private _sharedservice: SharedService) { }
  ngOnInit() {
    $("input[type='number']").inputSpinner({

      // button text/icons
      decrementButton: "<strong>-</strong>",
      incrementButton: "<strong>+</strong>",

      // class of input group
      groupClass: "input-group-spinner",

      // button class
      buttonsClass: "btn-outline-secondary",

      // button width
      buttonsWidth: "2.5em",

      // text alignment
      textAlign: "center",

      // delay in milliseconds
      autoDelay: 500,

      // interval in milliseconds
      autoInterval: 100,

      // set this `true` to disable the possibility to enter or paste the number via keyboard
      buttonsOnly: false,

      // set this to `false` to disallow the use of the up and down arrow keys to step
      keyboardStepping: true,

      // the locale, per default detected automatically from the browser
      locale: navigator.language,

      // the editor (parsing and rendering of the input)


      // the template of the input
      template: // the template of the input
        '<div class="input-group ${groupClass}">' +
        '<div class="input-group-prepend"><button style="min-width: ${buttonsWidth}" class="btn btn-decrement ${buttonsClass} btn-minus" type="button">${decrementButton}</button></div>' +
        '<input type="text" inputmode="decimal" style="text-align: ${textAlign}" class="form-control form-control-text-input"/>' +
        '<div class="input-group-append"><button style="min-width: ${buttonsWidth}" class="btn btn-increment ${buttonsClass} btn-plus" type="button">${incrementButton}</button></div>' +
        '</div>'

    });
    let v = 8;

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
    this.cartitems();
  
 //   this.productAddedTocart = this._exampleService.getProductFromCart();
    //this._exampleService.addProductToCart(this.productAddedTocart);
    //var item: Item = {
    //  product: this.productService.find('1'),
    //  quantity: 1
    //};
  }

  cartitems() {
   // $("#qtywheel").val('50');
    this.httpClient.get(this.prod_service.getUrl() + 'api/OdCarts/' + localStorage.getItem("userid") + "/" + "cart").subscribe(
      (r: any) => {

        this.productAddedTocart = r;
        if (r.length > 0) {
          localStorage.setItem("cartcount", r.length);
          if (localStorage.getItem("ModelId") != null) {
            this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels/' + localStorage.getItem("ModelId") + '/' + "cart").subscribe(
              (r: any) => {
                this.img_list = r;

              })
          }
          else {

          }
        }
        else {
          $("#tblcart")[0].hidden = true;
          $("#emptycart")[0].hidden = false;
        }
      });
    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }
  trash(trash: Product) {
    this.httpClient.delete(this.prod_service.getUrl() + 'api/Orderdetails/' + trash.detailId).subscribe(r => {
      this.httpClient.get(this.prod_service.getUrl() + 'api/OdCarts/' + localStorage.getItem("userid") + "/" + "cart").subscribe(
        (r: any) => {

          this.productAddedTocart = r;
          localStorage.setItem("cartcount", r.length);
          this._sharedservice.updateCartCount(r.length);

         // this.cartcount();
        });
      
    })

    
  }

  cartcount() {
    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }

  paynow() {
    this.router.navigateByUrl('/payment');
  }
}
