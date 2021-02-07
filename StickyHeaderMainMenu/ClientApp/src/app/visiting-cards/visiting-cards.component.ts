import { Component, OnInit } from '@angular/core';
import { ImageList } from '../entities/ImageList.entity';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { productmaterial } from '../entities/productmaterial.entity';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';

declare var $: any;
let levelid = 0;
let detailid = 0;
let qty: any;
let qty_update: any;

@Component({
  selector: 'app-visiting-cards',
  templateUrl: './visiting-cards.component.html',
  styleUrls: ['./visiting-cards.component.css']
})
export class VisitingCardsComponent implements OnInit {

  public img_list: ImageList[];
  public prod_mat: productmaterial;
  public products_get: Product[] = [];
  public prod: Product[];

  constructor(public router: Router, private httpClient: HttpClient
    , private prod_service: ProductService, private _sharedservice: SharedService) { }

  ngOnInit() {
    if (sessionStorage.getItem("Prodl3Id") != null) {
      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id") + '/' + "viscard").subscribe
        ((res: any) => {
          this.img_list = res;
        });
    }
    else
      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl2Id") + '/' + "viscard").subscribe
        ((res: any) => {
          this.img_list = res;
        });
    $(document).ready(function () {
      $("#innerdiv_viscards").hide();

      $('#ddl_Qty').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Quantity",
      })

      $('#ddl_prodmat').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Material",
      })

      $("#ddl_Qty").change(function () {
        qty = $('#ddl_Qty :selected').text();

      });

    });
  

  }

  imgclick(e, f, g) {
    $("#div_idcards").hide();
    $("#innerdiv_viscards").show();
    $("#img_selected_viscard").attr("src", f);
    $("#lbl_desc").text(g);
    sessionStorage.setItem('ModelId', e);
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    if (sessionStorage.getItem("Prodl3Id") != null) {
      levelid = stringtonum(sessionStorage.getItem("Prodl3Id"));
    }
    else
      levelid = stringtonum(sessionStorage.getItem("Prodl2Id"));
    this.httpClient.get('https://localhost:44302/' + 'api/Productmaterials/' + levelid ).subscribe
      ((res: any) => {
        this.prod_mat = res;
        res.forEach(e => {

          var ddl_prodoption = new Option(e.matDescription, e.matDescription, false, false);
          $('#ddl_prodmat').append(ddl_prodoption).trigger('change');
        });
        //this.prod_mat..forEach(e => {
        //  var newOption_gender = new Option(e.gender, e.gender, false, false);
        //  $('#ddl_gender').append(newOption_gender).trigger('change');
        //});
      });

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
          //new product
          this.prod = this.prod_service.insertProduct(qty, detailid, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").val()));
          this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.prod[0]).subscribe(res => { alert("invi post"); });
          let d = stringtonum(sessionStorage.getItem("cartcount"));
          this._sharedservice.updateCartCount(d + this.prod.length);
        }
        else {
          //update existing product
          detailid = 1;
          qty_update = this.products_get[0].quantity + stringtonum(qty);
          this.prod = this.prod_service.insertProduct(qty_update, this.products_get[0].detailId, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").text()));
          this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products_get[0].detailId, this.prod[0]).subscribe(res => { alert("invi put"); });
          let d = stringtonum(sessionStorage.getItem("cartcount"));
          this._sharedservice.updateCartCount(d);
          alert("product added to cart");
        }
      });
    }
    else { alert("Please login") }
  }
}
