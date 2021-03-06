import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from '../entities/Images.entity';
import { Product } from '../entities/Product.entity';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { pricedetail } from '../entities/pricedetail.entity';
import { Configuration } from 'jasmine-spec-reporter/built/configuration';
import { LoginService } from '../services/login.service';

declare var $: any;
let qty: any;
let qty_update: any;
let detailid = 0;
let levelid = 0;
@Component({
  selector: 'app-invitation-cards',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./invitation-cards.component.css']
})
export class InvitationCardsComponent implements OnInit {

  public img_list: Images;
  public prod: Product[];
  // public position_lbl: img_position[] = [];
  public position_lbl1: any=[];
  public position_lbl: any;
  public products_get: Product[] = [];
  arr: string[];
  s: string[];
  public url: string;
  public price_detail: pricedetail[];

  constructor(public httpClient: HttpClient, private prod_service: ProductService, private _sharedservice: SharedService)
  {
  }

  ngOnInit() {

    $(document).ready(function () {
      $("#success-alert").hide();
      $("#danger-alert").hide();
      // $('.count').prop('disabled', false);
      $("#spanminus").on('click', function () {
        $('.count').val(parseInt($('.count').val()) - 1);
        qty = $('.count').val();
        if ($('.count').val() == 0) {
          $('.count').val(1);
        }
      });
      $("#spanplus").on('click', function () {
        $('.count').val(parseInt($('.count').val()) + 1);
        qty = $('.count').val();

        });


      $("#innerdiv_invicards").hide();
      $("#ddl_prodser").hide();
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
      //$("#div_invicards img").click(function (e) {
       
        
      //  //$("#myModal").modal('show');
      //  //var src = e.currentTarget.currentSrc;
      //  //$("#img_selected_invicard").attr("src", src);

      //  // ctx.strokeRect(90, 90, 80, 80);


      ////  $('#invi_summernote').summernote({
      ////    placeholder: 'write here...',
      ////    focus: true,
      ////    width: 450,
      ////    height: 200,
      ////    toolbar: [
      ////      ['style', ['bold', 'italic', 'underline', 'clear']],
      ////      ['font', ['superscript', 'subscript']],
      ////      ['fontsize', ['fontsize']],
      ////      ['color', ['color']],
      ////      ['height', ['height']],
      ////      ['para', ['ul', 'ol', 'paragraph']],
      ////    ],
      ////    tooltip: false,

      ////    callbacks: {
      ////      onKeyup: function (e) {
      ////        setTimeout(function () {
      ////          var plainText = $("#invi_summernote").summernote("code");

      ////        }, 200);
      ////      }
      ////    }
      ////  });
      //});

      $("#btn_prview").click(function (e) {
        $("#myPrvModal").modal('show');
        $("#img_selected_invicard_preview").attr("src", "assets/Img/INVITATIONCARD1_empty.jpg");
        $("#div_preview").html($("#invi_summernote").summernote("code"));
      });
    });

    var i ="div_bride";



    if (sessionStorage.getItem("Prodl3Id") != "null") {
      this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id") + '/' + "invi").subscribe
        ((res: any) => {
          this.img_list = res;
        });
    }
    else {
      this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels/' + sessionStorage.getItem("Prodl2Id") + '/' + "invi").subscribe
        ((res: any) => {
          this.img_list = res;
        });
    }
  }

  imgclick(e,f,g) {
    $("#div_invicards").hide();
  

    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    if (sessionStorage.getItem("Prodl3Id") != null) {
      levelid = stringtonum(sessionStorage.getItem("Prodl3Id"));
    }
    else
      levelid = stringtonum(sessionStorage.getItem("Prodl2Id"));
    this.httpClient.get(this.prod_service.getUrl()  + 'api/Productmaterials/' + levelid).subscribe
      ((res: any) => {
       // this.prod_mat = res;
        res.forEach(e => {

          var ddl_prodoption = new Option(e.matDescription, e.matId, false, false);

          $('#ddl_prodmat').append(ddl_prodoption).trigger('change');
        });
        //this.prod_mat..forEach(e => {
        //  var newOption_gender = new Option(e.gender, e.gender, false, false);
        //  $('#ddl_gender').append(newOption_gender).trigger('change');
        //});
      });

    //check for product service dropdown


    this.httpClient.get(this.prod_service.getUrl() + 'api/Productservices/' + levelid).subscribe
      ((r: any) => {
        if (r.length == 0)
          $("#ddl_prodser").hide();
        else
           $("#ddl_prodser").show();
      });
   

  //  $("#div_invicards").hide();
    $("#innerdiv_invicards").show();
    $("#img_selected_invicard").attr("src", f);
    $("#lbl_desc").text(g);
    sessionStorage.setItem('ModelId', e);
    this.httpClient.get(this.prod_service.getUrl()  + 'api/Pricedetails/' + e).subscribe((res: any) => {
      this.price_detail = res;
      if (this.price_detail.length>0) {
      $("#lbl_price").text(this.price_detail[0].maxRetailPrice);
      $("#lbl_price").attr("style", "text-decoration:line-through");
      var numVal1 = this.price_detail[0].maxRetailPrice;
      var numVal2 = this.price_detail[0].percentDisc / 100;
      var totalValue = numVal1 - (numVal1 * numVal2);
      $("#sp_disc").text("("+this.price_detail[0].percentDisc + "%"+")");
        $("#lbl_sellingprice").text(totalValue);
      }
     // document.getElementById("total").value = totalValue.toFixed(2);
    });

    //this.position_lbl = [{ bottom: 190, left: 168, label_text: "BRIDE NAME", position: "relative" }];
    //this.position_lbl.push({ bottom: 150, left: 168, label_text: "GROOM NAME", position:"relative" });
    //$("#innerdiv_invicards").show();
    //$("#innerdiv_invicards").append('<label id="ID_item" >' + this.position_lbl[0].label_text + '</label><br /><hr />')
    //$("#ID_item").css({ "color": "red", "bottom": this.position_lbl[0].bottom + 'px', "left": this.position_lbl[0].left, "position": this.position_lbl[0].position });
    //$("#innerdiv_invicards").append('<label id="ID_item1" >' + this.position_lbl[1].label_text + '</label><br /><hr />')
    //$("#ID_item1").css({ "color": "red", "bottom": this.position_lbl[1].bottom + 'px', "left": this.position_lbl[1].left, "position": this.position_lbl[1].position  });
   // let s: string = '[{"count":2,"1":{ "bottom": 190, "left": 208, "label_text":"BRIDE NAME", "position":"relative"},"2":{ "bottom": 190, "left": 168, "label_text":"GROOM NAME", "position":"relative"}}]';

   // this.position_lbl = JSON.parse(s);
   // for (let i = 1; i <= this.position_lbl[0].count; i++) {
   //   let df: string = "lbl_" + i;
   //   $("#innerdiv_invicards").append('<label id=' + df + ' class="summernote" >' + this.position_lbl[0][i].label_text + '</label><br /><hr />')
   //   $('#'+df).css({ "color": "red", "bottom": this.position_lbl[0][i].bottom + 'px', "left": this.position_lbl[0][i].left, "position": this.position_lbl[0][i].position });
   //   //$('#' + df).click(function () {
   //   // // $('.summernote').summernote('destroy');
   //   // // $('#' + df).summernote('destroy');
   //   //  $('#' + df).summernote({

   //   //    width: 450,
   //   //    height: 200,
   //   //    tooltip: false,
   //   //  });
   //   //});
   // }

   // //$("#innerdiv_invicards table label").click(function (e) {
   // //  debugger;
   // //  alert("hsdjgkfjdhsg");
   // //});
   //// $("#innerdiv_invicards").append('<label id="ID_item" >' + this.position_lbl[0].label_text+ '</label><br /><hr />')
    
   //// $("#innerdiv_invicards").append('<span>&</span>')


    //$(".summernote").click(function (e) {
    //  //$("body").find(".summernote").summernote('destroy');
    //  $('.summernote').each(function (index) {
    //    $(this).summernote('destroy');
    //  })
    //  $('#' + e.target.id).summernote({
    //    width: 200,
    //    height: 30,

    //    bottom:250,
    //    tooltip: false,
    //    toolbar: [
    //      ['style', ['bold', 'italic', 'underline', 'clear']],
    //      ['font', ['superscript', 'subscript']],
    //      //['fontsize', ['fontsize']],
    //      ['color', ['color']],
    //    ],
    //  });
    //});
  }

  AddToCart() {
    if (localStorage.getItem("userid") != null) {
      function stringtonum(input: string) {
        var n = Number(input);
        return n;
      }
      var s = "l3menu";
      this.httpClient.get(this.prod_service.getUrl()  + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res: any) => {
        this.products_get = res;

      
      if (this.products_get.length == 0) {
        //new product
        this.prod = this.prod_service.insertProduct(qty, detailid, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").val()));

        this.httpClient.post(this.prod_service.getUrl() + 'api/Orderdetails', this.prod[0]).subscribe(res => {
          $("#success-alert").show();
          $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#success-alert").slideUp(1000);
          });
        });
        let d = stringtonum(localStorage.getItem("cartcount"));
        this._sharedservice.updateCartCount(d + this.prod.length);
      }
      else {
        //update existing product
        detailid = 1;
        qty_update = this.products_get[0].quantity + stringtonum(qty);
        this.prod = this.prod_service.insertProduct(qty_update, this.products_get[0].detailId, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").text()));
        this.httpClient.put(this.prod_service.getUrl()  + 'api/Orderdetails/' + this.products_get[0].detailId, this.prod[0]).subscribe(res => {  });
        let d = stringtonum(localStorage.getItem("cartcount"));
        this._sharedservice.updateCartCount(d);
        $("#success-alert").show();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
          $("#success-alert").slideUp(1000);
        });
      }
      });
    }
    else {
      $("#danger-alert").show();
      $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#danger-alert").slideUp(1000);
      });
    }
  }

}

//export class img_position {
// // position_text: string;
//  bottom: number;
//  left: number;
//  //position: string;
//  //label_text: string;
//}
