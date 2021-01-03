import { Component, OnInit, ɵɵNgOnChangesFeature, EventEmitter,Input } from '@angular/core';
//import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router'
import { SharedService } from '../services/shared.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Image } from '../entities/Image.entity';
import { using } from 'rxjs/internal/observable/using';
import { Item } from '../entities/item.entity';
import { Product } from '../entities/product.entity';
import { ImageList } from '../entities/ImageList.entity';

declare var $: any;

let gender_text: string;
let size: any;
let size1: any;
let color: string;
let qty: any;

@Component({
  selector: 'app-Tshirts',
  templateUrl: './Tshirts.component.html',
  styleUrls: ['./Tshirts.component.css'],
  providers: [ProductService]
})

export class TshirtComponent implements OnInit {

  public cartItems: Cart[];
  public item: Item[];

  public products: Product[] = [];
  public image_detail: Image[];
  public dim: Dimensions[];
  public products1: Product[]=[];
  public custom_text: Product[];
  public img_list: ImageList[];
  public products_exist: Product[] = [];
  constructor(public router: Router, private httpClient: HttpClient, private _exampleService: ProductService, private _sharedservice: SharedService)
  //private productService: ProductService
  {
  }


  ngOnInit() {
    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });
    $(document).ready(function () {

      $("#inner_div_basictshirts").hide();
      $("#outer_div_tshirts_cart").hide();
      $("#outer_div_customtshirts_cart").hide();
      //$("#inner_div_basictshirts img").click(function (e) {
        
      //  $("#outer_div_tshirts").hide();
      //  $("#inner_div_basictshirts").hide();
      //  $("#outer_div_tshirts_cart").show();
      //})

      $("#img_tshirt_modal").click(function () {
        $("#outer_div_tshirts").hide();
        $("#outer_div_customtshirts_cart").show();

      })

      $('#ddl_gender').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Gender",
      })

      $('#ddl_gender1').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Gender",
      })

      $('#ddl_size').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Size",
      })

      $('#ddl_size1').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Size",
      })



      $('#ddl_Qty1').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Qty",
      })

      var closebtn = function (context) {
        var ui = $.summernote.ui;
        var button = ui.button({
          contents: '<i class="far fa-times-circle"></i>',
          tooltip: 'close',
          click: function () {
            context.invoke('editor.inserttext', 'red');
            var src_img = $("#img_tshirt_write").summernote("code");
            // var src_width_replace = src_img.attr("src");
            //$('#img_div_write1').html(src_img);
            $('#img_tshirt_write').append(src_img);
            $('div p').removeAttr("style");
            $('div p ').attr("style", "font-size:8px");
            $('div p img').removeAttr("style");
            $('div p img').attr("style", "width:115px");
            $("body").find("#img_tshirt_write").summernote('destroy');


          }
        });
        return button.render();
      }

      var closebtn_img = function (context) {
        var ui = $.summernote.ui;
        var button = ui.button({
          contents: '<i class="far fa-times-circle"></i>',
          tooltip: 'close',
          click: function () {
            context.invoke('editor.inserttext', 'red');
            var src_img = $("#img_tshirt_write1").summernote("code");
           // var src_width_replace = src_img.attr("src");
            //$('#img_div_write1').html(src_img);
            $('#img_div_write1').append(src_img);
            $('#img_div_write1 p img').removeAttr("style");
            $('#img_div_write1 p img').attr("style","width:85px");
            $("body").find("#img_tshirt_write1").summernote('destroy');
            $('#img_tshirt_write1').hide();
            $('#img_selected').show();
          }
        });
        return button.render();
      }

      var cropbtn = function (context) {
        var ui = $.summernote.ui;
        var button = ui.button({
          contents: '<i class="fas fa-crop"></i>',
          tooltip: 'crop',
          click: function () {
            context.invoke('editor.inserttext', 'red');
            $('#div_child').prop("hidden", true);
            $('#div_child1').prop("hidden", false);
            var plainText = $("#txtCustom").summernote("code");
            alert(plainText);
            $("#img_child1").attr('src', plainText);
            $("body").find("#txtCustom").summernote('destroy');
            // $('#txtCustom').prop("hidden", false);
            //$('#sample').prop("hidden", true);
          }
        });
        return button.render();
      }
    
      $("#img_tshirt_write").click(function () {

        $('#img_tshirt_write').summernote({
          placeholder: 'write here...',
          focus: true,
          width: 450,
          height: 200,
          right: 100,
          tooltip: false,
          toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            //['fontsize', ['fontsize']],
            ['color', ['color']],
            ['height', ['height']],
            ['insert', ['picture']],
            ['mybutton', ['close']],
          ],

          buttons: {
            close: closebtn
          },
          callbacks: {
            onKeydown: function (e) {
              setTimeout(function () {
                var plainText = $("#img_tshirt_write").summernote("code");
                
                //$("#sample").html(plainText);
                $("#img_tshirt_write").show();
                $("#img_tshirt_write").html(plainText);
                //$('#img_tshirt_write').append(plainText);
               
                $('div p img').removeAttr("style");
                $('div p img').attr("style", "width:115px");
                if ($("#outer_editor_div").width() <= $("#img_tshirt_write").width()) {
                  $('#img_tshirt_write').css('font-size', (parseInt($('#img_tshirt_write').css('font-size')) - 1) + "px");
                }
                if (e.key == 'Backspace') {
                  if ($("#outer_editor_div").width() > $("#img_tshirt_write").width()) {
                    $('#img_tshirt_write').css('font-size', (parseInt($('#img_tshirt_write').css('font-size')) + 1) + "px");
                  }
                  else if ($("#outer_editor_div").width() <= $("#img_tshirt_write").width()) {
                    $('#img_tshirt_write').css('font-size', '');
                  }
                }
                //else if ($("#outer_editor_div").width() ==$("#img_tshirt_write").width())
                //{
                //  $('#img_tshirt_write').css('font-size', '')
                //}
               // else if ($("#outer_editor_div").width() <=$("#img_tshirt_write").width()){
               //   $('#img_tshirt_write').css('font-size', (parseInt($('#img_tshirt_write').css('font-size')) + 1) + "px");
                 // $('div p').removeAttr("style");
                 // $('div p ').attr("style", "font-size:8px");
                //}
              }, 0);
            }
          }
        });

        $('i.note-recent-color').each(function () {
          $(this).attr('style', 'background-color: transparent;');
        });
      });
      $("#img_tshirt_write1").click(function () {
        
        $('#img_selected').show();
        $('#img_tshirt_write1').summernote({
          placeholder: 'write here...',
          focus: true,
          width: 300,
          height: 200,
          toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['height', ['height']],
            ['insert', ['picture']],
            ['mybutton', ['close']],
          ],

          buttons: {
            close: closebtn_img
          },
          callbacks: {
            onInit: function () {
              $("#img_tshirt_write1").on('click', function (e) {
                console.log('clicked');
              });
            },
            onkeyup: function (e) {
              setTimeout(function () {
                var plainText = $("#img_tshirt_write1").summernote("code");
                alert(plainText);
                $('#img_selected').attr('src', plainText);
                //$("#sample").html(plainText);
                //$("#text_div").html(plainText);;
              }, 200);
            }
          }
        });

        $('i.note-recent-color').each(function () {
          $(this).attr('style', 'background-color: transparent;');
        });
      });

    

    });


    $("#ddl_gender").change(function () {
      gender_text = $('#ddl_gender :selected').text();

    });


    $("#ddl_gender1").change(function () {
      gender_text = $('#ddl_gender1 :selected').text();

    });

    $("#ddl_size").change(function () {
      size = $('#ddl_size :selected').val();

    });

    $("#ddl_size1").change(function () {

      size1 = $('#ddl_size1 :selected').val();

    });


    $("#ddl_Qty").change(function () {
      qty = $('#ddl_Qty :selected').text();

    });

    $("#ddl_Qty1").change(function () {
      qty = $('#ddl_Qty1 :selected').text();

    });

  

  }

  imgclick(e,f,g) {

    $("#inner_div_basictshirts").hide();
    $("#outer_div_tshirts_cart").show();
   // var src = "assets/VisitingCards/Blank-ID-Card-Horz.png";
    sessionStorage.setItem('ModelId', e);
    $("#img_selected_tshirt").attr("src", f);
    $("#lbl_desc").text(g);
    this.httpClient.get('https://localhost:44302/' + 'api/Dimmasters/' + sessionStorage.getItem("ModelId")).subscribe(
      (res: any) => {
        this.dim = res
        this.dim.forEach(e => {
          var newOption = new Option(e.dimDescription, e.dimDescription, false, false);
          $('#ddl_size1').append('<option value="' + e.dimId + '">' + e.dimDescription + '</option>').trigger('change');
          $('#ddl_size').append(newOption).trigger('change');
          //  $('#ddl_size1').append(newOption).trigger('change');
          var newOption_gender = new Option(e.gender, e.gender, false, false);
          $('#ddl_gender').append(newOption_gender).trigger('change');
          $('#ddl_gender1').append(newOption_gender).trigger('change');
        })
      }
    );
  }

  AddToCart() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    if (sessionStorage.getItem("userid") != null) {

      let n = stringtonum(size1);

      var s = "l3menu";
      this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res: any) => {
        this.products1 = res;
        this.products1.forEach(e => {
          if (e.DimIdSize == n) {
            this.products_exist.push(e);
          }
        });
        if (this.products_exist.length == 0) {
          this.products = [{
           // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
            modelId: stringtonum(sessionStorage.getItem('ModelId')),
            Gender: gender_text,
            CustomContent: null,
            DimIdSize: stringtonum(size1),
            OrderedBy: stringtonum(sessionStorage.getItem('userid')),
            DtCreate: null,
            DtModify: null,
            quantity: stringtonum(qty),
            IsCustomized: 0,
            StatusCode: "C",
            itemPrice: 500,
            discAmount: 0,
            netAmount:500
          }];

          this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.products[0]).subscribe(res => { alert("post"); });
          let d = stringtonum(sessionStorage.getItem("cartcount"));
          this._sharedservice.updateCartCount(d + this.products.length);
          alert("product added to cart");
        }
        else {
          if (stringtonum(size1) != this.products_exist[0].DimIdSize) {
            var quantity = stringtonum(qty);
            this.products = [{
              detailId: this.products1[0].detailId,
             // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
              modelId: stringtonum(sessionStorage.getItem('ModelId')),
              Gender: gender_text,
              CustomContent: null,
              DimIdSize: stringtonum(size1),
              OrderedBy: stringtonum(sessionStorage.getItem('userid')),
              DtCreate: null,
              DtModify: null,
              quantity: quantity,
              IsCustomized: 0,
              StatusCode: "C",
              netAmount: 500,
              discAmount: 0,
              itemPrice:500
            }];
                   let d = stringtonum(sessionStorage.getItem("cartcount"));
            this._sharedservice.updateCartCount(d + this.products.length);
          alert("product added to cart");
          }
          else {
            var quantity = stringtonum(qty);
            this.products = [{
              detailId: this.products1[0].detailId,
             // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
              modelId: stringtonum(sessionStorage.getItem('ModelId')),
              Gender: gender_text,
              CustomContent: null,
              DimIdSize: stringtonum(size1),
              OrderedBy: stringtonum(sessionStorage.getItem('userid')),
              DtCreate: null,
              DtModify: null,
              quantity: this.products1[0].quantity + quantity,
              IsCustomized: 0,
              StatusCode: "C",
              itemPrice: 900,
              netAmount: 800,
              discAmount:0
            }];
            let d = stringtonum(sessionStorage.getItem("cartcount"));
            this._sharedservice.updateCartCount(d);
            alert("product added to cart");
          }

          this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products1[0].detailId, this.products[0]).subscribe(res => { alert("put"); });
   
        }
      
      });
      this.products_exist = [];
    }
    else {
      alert("Please Login to add product to cart");
      this.router.navigateByUrl('/Login');
    }
  }

  AddToCart_custom() {
    sessionStorage.setItem('ModelId', '15');//reference purpose...remove this on making this dynamic
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }

    if (sessionStorage.getItem("userid") != null) {
      let n = stringtonum(size);
      n = 2;//remove on makimg dynamic
      var s = "l3menu";
      this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + stringtonum(sessionStorage.getItem('ModelId')) + '/' + s).subscribe((res: any) => {
        this.products1 = res;
        this.products1.forEach(e => {
          if (e.DimIdSize == n) {
            this.products_exist.push(e);
          }
        });
      });
      if (this.products_exist.length ==0) {
        this.custom_text = [{
         // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
          modelId: stringtonum(sessionStorage.getItem('ModelId')),
          Gender: gender_text,
          CustomContent: $("#img_tshirt_write")[0].innerHTML,
          DimIdSize: n,//stringtonum(size),
          OrderedBy: stringtonum(sessionStorage.getItem('userid')),
          DtCreate: null,
          DtModify: null,
          quantity: stringtonum(qty),
          IsCustomized: 1,
          StatusCode: "C",
          itemPrice: 900,
          netAmount: 800,
          discAmount: 0
        }];
        this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.custom_text[0]).subscribe(res => { alert("post_custom"); });
      }

      else {
        if (stringtonum(size) != this.products_exist[0].DimIdSize) {
          var quantity = stringtonum(qty);
          this.custom_text = [{
            detailId: this.products1[0].detailId,
          //  ProdId: stringtonum(sessionStorage.getItem('ProdId')),
            modelId: stringtonum(sessionStorage.getItem('ModelId')),
            Gender: gender_text,
            CustomContent: null,
            DimIdSize: stringtonum(size),
            OrderedBy: stringtonum(sessionStorage.getItem('userid')),
            DtCreate: null,
            DtModify: null,
            quantity: quantity,
            IsCustomized: 0,
            StatusCode: "C",
            itemPrice: 900,
            netAmount: 800,
            discAmount: 0
          }];
        }
        else {
          var quantity = stringtonum(qty);
          this.custom_text = [{
            detailId: this.products1[0].detailId,
            //ProdId: stringtonum(sessionStorage.getItem('ProdId')),
            modelId: stringtonum(sessionStorage.getItem('ModelId')),
            Gender: gender_text,
            CustomContent: null,
            DimIdSize: stringtonum(size),
            OrderedBy: stringtonum(sessionStorage.getItem('userid')),
            DtCreate: null,
            DtModify: null,
            quantity: this.products1[0].quantity + quantity,
            IsCustomized: 0,
            StatusCode: "C",
            itemPrice: 900,
            netAmount: 800,
            discAmount: 0
          }];
        }

        this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products1[0].detailId, this.custom_text[0]).subscribe(res => { alert("put"); });
      }
      let cartC = stringtonum(sessionStorage.getItem("cartcount"));
      this._sharedservice.updateCartCount(cartC + this.custom_text.length);
     
    }
    else {
      alert("Please Login to add product to cart");
      this.router.navigateByUrl('/Login');
    }
    }
  //AddToCart() {

  //  if (localStorage.getItem('cart') != "null") {
  //    var item: Item = {
  //      product: this._exampleService.find("1"),
  //      quantity: 1
  //    };

  //    let cart: any = localStorage.getItem('cart');
  //    let index: number = -1;

  //    for (var i = 0; i < cart.length; i++) {

  //      item = cart[i];
  //      if (item.product.id == "1") {
  //        index = i;
  //        break;
  //      }
  //    }
  //    if (index == -1) {
  //      cart.push(JSON.stringify(Item));
  //      localStorage.setItem('cart', JSON.stringify(cart));
  //    } else {
  //      let item: Item = JSON.parse(cart[index]);
  //      item.quantity += 1;
  //      cart[index] = JSON.stringify(item);
  //      localStorage.setItem("cart", JSON.stringify(cart));
  //    }
    
  //  }
  //  else {
  //    //var products: Product[] = this._exampleService.insertProduct('1', gender_text, size, color, qty);
  //    var item: Item = {
  //      product: { id: '1', gender: gender_text, size: size, color: color, qty: qty },
  //      quantity: 1
  //    };
  //   // this.products = this._exampleService.insertProduct('1', gender_text, size, color, qty);
  //    if (localStorage.getItem('cart') == "null") {
  //      let product: any = [];
  //      product.push(JSON.stringify(item));
  //      //localStorage.setItem('product', JSON.stringify(product));
  //      this._exampleService.addProductToCart(product);
  //    }

        
  //  }
  //  //this.cartItemsCount = this.products.length;
  ////  this._sharedservice.updateCartCount();
   
   
  //  //Storing image

  //}


  shopnow() {
    $("#outer_div_tshirts").prop("hidden", true);
    $("#inner_div_basictshirts").show();
    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });
  }
  StartDesign() {
    $('#div_main').prop("hidden", true);
    $('#div_child').prop("hidden", false);
    // var nextImage = $('.carousel-inner').find('.item .active').find('img').attr('src');
    var nextImage = $('.carousel-inner').children().prevObject.find('.active').find('img').attr('src')
    var canvas = <HTMLCanvasElement>document.getElementById('stage');
    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');

      // ctx.fillStyle = "#D74022";
      // ctx.fillRect(25, 25, 150, 150);

      // ctx.fillStyle = "rgba(0,0,0,0.5)";
      // ctx.clearRect(60, 60, 120, 120);
      // ctx.strokeRect(90, 90, 80, 80);

      

      
    }
  }
}

export class Product_custom {
  OrderId: number;
  ProdId: number;
  ProdModelId: number;
  IsCustomized: number;
  Gender: string;
  DimIdSize: number;
  CustomContent: number;
  Quantity: number;
  StatusCode: string;
  OrderedBy?: number;
  DtCreate: null;
  DtModify: null;

}


export class Dimensions {

  dimId: number;
  ProdId: number;
  ProdModelId: number;
  gender: string;
  dimDescription: string;
  IsActive: number;
  DtCreate: null;
  DtModify: null;
}


interface Cart {
  gender: string;
  size: number;
  color: string;
}


