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
let total = 0;
let qty: any;
let productAddedTocart_0: Product[] = [];
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})

export class cartComponent implements OnInit {
  cartItemCount: number = 0;
  productAddedTocart: Product[]=[];
  public img_list: ImageList[];
  constructor( private prod_service: ProductService, private router: Router, private httpClient: HttpClient, private _sharedservice: SharedService) { }
  ngOnInit() {
    total = 0;
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

    document.addEventListener("change", function (event) {
      function stringtonum(input: string) {
        var n = Number(input);
        return n;
      }
      //alert((<HTMLInputElement>event.target).value);
      qty = (<HTMLInputElement>event.target).value;//event.srcElement.value
     // total = qty * $("#price").text();
      let index = (<HTMLInputElement>event.target).placeholder;
      let myobjarray = [];
      $("#qtywheel").val();
      //for (let i = 0; i < productAddedTocart_0.length; i++) {
      //  alert(total);
        // if (i != stringtonum(index)) {
        //   total = (productAddedTocart_0[i].itemPrice) * (productAddedTocart_0[i].quantity);
          // myobjarray.push(total);
       //  }
        //  else {
      total = total - ((productAddedTocart_0[index].itemPrice) * (($("#qtywheel").val() - (productAddedTocart_0[index].quantity))));
      let diff = $("#qtywheel").val() - (productAddedTocart_0[index].quantity);
      total = total + ((productAddedTocart_0[index].itemPrice) * $("#qtywheel").val() );
        //   myobjarray.push(total);
       //  }
     // }
      $("#lbltotal").text(total);
    })
    
    this.cartitems();
  

  }

  cartitems() {
   
    this.httpClient.get(this.prod_service.getUrl() + 'api/OdCarts/' + localStorage.getItem("userid") + "/" + "cart").subscribe(
      (r: any) => {

        this.productAddedTocart = r;
        productAddedTocart_0 = this.productAddedTocart;
        for (let i = 0; i < r.length; i++) {
          if (qty == undefined)
            total = (total + this.productAddedTocart[i].itemPrice) * this.productAddedTocart[i].quantity;
          else
            total = (total + this.productAddedTocart[i].itemPrice) * qty;
        }
      //  alert(total);
        $("#lbltotal").text(total);
        //total = 0;
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
      var tt = trash.itemPrice * trash.quantity;
      $("#lbltotal").text(total-tt);
    })

    
  }

  cartcount() {
    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
  }

  paynow() {

    localStorage.setItem('carttotal_amount', $("#lbltotal").text());
    this.router.navigateByUrl('/payment');
   //this.router.navigateByUrl(`edit-address/${addr.addrId}`);
  }
}

//interface cartitems {
//  total: number;
//  orderedby: number;
//}
