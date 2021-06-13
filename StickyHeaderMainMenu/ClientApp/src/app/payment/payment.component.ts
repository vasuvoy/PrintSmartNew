import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/product.entity';
import { SharedService } from '../services/shared.service';
import { Local } from 'protractor/built/driverProviders';

declare var $: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  productAddedTocart: Product[];
  public prod: Product[]=[];

  constructor(private prod_service: ProductService, private httpClient: HttpClient,
    private _sharedservice: SharedService) { }

  ngOnInit() {
    $("#success-alert").hide();
    $("#lbltotal").text(localStorage.getItem("carttotal_amount"));
  }

  confirm_order() {
    this.httpClient.get(this.prod_service.getUrl() + 'api/OdCarts/' + localStorage.getItem("userid") + "/" + "cart").subscribe(
      (r: any) => {
        this.productAddedTocart = r;


   

        for (var i = 0; i < this.productAddedTocart.length; i++) {
          this.prod = this.prod_service.updateprod_status(this.productAddedTocart[i].detailId, "O", this.productAddedTocart[i].itemPrice, this.productAddedTocart[i].quantity);

          this.httpClient.put(this.prod_service.getUrl() + 'api/Orderdetails/' + this.productAddedTocart[i].detailId, this.prod[i]).subscribe(
            r => {

            });
          
        }
        $("#success-alert").show();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
          $("#success-alert").slideUp(1000);
        });
        let length = "0";
        localStorage.setItem("cartcount", length);
        this._sharedservice.updateCartCount(0);
      });

    this.prod = [];
  }
}



