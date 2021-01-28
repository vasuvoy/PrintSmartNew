import { Component, OnInit } from '@angular/core';
import { Images } from '../entities/Images.entity';
import { HttpClient } from '@angular/common/http';
import { Product } from '../entities/Product.entity';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';

declare var $: any;
let qty: any;
let qty_update: any;
let detailid = 0;

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  public img_list: Images;
  public products_get: Product[] = [];
  public prod: Product[];

  constructor(private httpClient: HttpClient, private prod_service: ProductService, private _sharedservice: SharedService) { }

  ngOnInit() {
    $(document).ready(function () {
      $("#innerdiv_WC").hide();
      $('#ddl_Qty').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Quantity",
      })

      $("#ddl_Qty").change(function () {
        qty = $('#ddl_Qty :selected').text();

      });

    });
    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });
  }

  imgclick(e, f, g) {
    $("#div_WC").hide();
    $("#innerdiv_WC").show();
    $("#img_selected_WC").attr("src", f);
    $("#lbl_desc").text(g);
    sessionStorage.setItem('ModelId', e);
   
  }

  AddToCart() {
    if (sessionStorage.getItem("userid") != null) {
      function stringtonum(input: string) {
        var n = Number(input);
        return n;
      }
      var s = "l3menu";
      this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res: any) => {
        this.products_get = res;


        if (this.products_get.length == 0) {

          this.prod = this.prod_service.insertProduct(qty, detailid,300,0);
          this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.prod[0]).subscribe(res => { alert("invi post"); });
          let d = stringtonum(sessionStorage.getItem("cartcount"));
          this._sharedservice.updateCartCount(d + this.prod.length);
        }
        else {
          detailid = 1;
          qty_update = this.products_get[0].quantity + stringtonum(qty);
          this.prod = this.prod_service.insertProduct(qty_update, this.products_get[0].detailId,300,0);
          this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products_get[0].detailId, this.prod[0]).subscribe(res => { alert("invi put"); });
          let d = stringtonum(sessionStorage.getItem("cartcount"));
          this._sharedservice.updateCartCount(d);
          alert("product added to cart");
        }
      });
    }
    else { alert("Please loginwwwwwlwl") }
  }
}
