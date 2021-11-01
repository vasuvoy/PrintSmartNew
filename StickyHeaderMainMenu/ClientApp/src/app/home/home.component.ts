import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { Images } from '../entities/Images.entity';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public img_list: Images;
  public img_list_trnnow: Images;
  public img_list_sale: Images;
  public img_list_newprods: Images;
  public img_list_tiles: Images;

  constructor(public router: Router, private prod_service: ProductService, private httpClient: HttpClient)
  //private productService: ProductService
  {

  }

  redirect_trndingnow() {
    var src = $("#div_trndingnow")[0].firstChild.alt;
    this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels').subscribe
      ((res: any) => {
        this.img_list = res;
        if (res.length > 0) {
          for (let i = 0; i < res.length; i++) {
         
            if (this.img_list[i].modelLink == src) {
              var prodid = this.img_list[i].prodId;
              localStorage.setItem("Prodl3Id", prodid);
              this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 'p1' + '/' + prodid).subscribe(
                (r: any) => {
                  for (let i = 0; i < r.length; i++) {
                    if (prodid == r[i].prodId) {
                      //
                      localStorage.setItem('Prod_name', "");
                      localStorage.setItem('Prodl2_name', r[i].prodDesc);
                    }
                  }

                });

              this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 'p2' + '/' + prodid).subscribe(
                (r: any) => {
                  for (let i = 0; i < r.length; i++) {
                    if (prodid == r[i].prodId) {
                      //
                      localStorage.setItem('Prod_name', "");
                      localStorage.setItem('Prodl2_name', r[i].prodDesc);
                    }
                  }

                });

              this.router.navigate(['/invitation-cards']);
            }
          }
        }
        // this.img_list.ModelLink
      });
  
  }

  redirect_sale() {
    var src = $("#div_sale")[0].firstChild.alt;
    this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels').subscribe
      ((res: any) => {
        this.img_list = res;
        for (let i = 0; i < res.length; i++) {
          if (this.img_list[i].modelLink == src) {
            var prodid = this.img_list[i].prodId;
            localStorage.setItem("Prodl3Id", prodid);
            this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 'p1' + '/' + prodid).subscribe(
              (r: any) => {
                for (let i = 0; i < r.length; i++) {
                  if (prodid == r[i].prodId) {
                    //
                    localStorage.setItem('Prod_name', "");
                    localStorage.setItem('Prodl2_name', r[i].prodDesc);
                  }
                }

              });

            this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 'p2' + '/' + prodid).subscribe(
              (r: any) => {
                for (let i = 0; i < r.length; i++) {
                  if (prodid == r[i].prodId) {
                    localStorage.setItem('Prod_name', "");
                    localStorage.setItem('Prodl2_name', r[i].prodDesc);
                  }
                }

              });

            this.router.navigate(['/invitation-cards']);
          }
        }
        // this.img_list.ModelLink
      });

  }

  redirect_newprods() {
    var src = $("#div_newprods")[0].firstChild.alt;
    this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels').subscribe
      ((res: any) => {
        this.img_list = res;
        for (let i = 0; i < res.length; i++) {
          if (this.img_list[i].modelLink == src) {
            var prodid = this.img_list[i].prodId;
            localStorage.setItem("Prodl3Id", prodid);
            this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 'p1' + '/' + prodid).subscribe(
              (r: any) => {
                for (let i = 0; i < r.length; i++) {
                  if (prodid == r[i].prodId) {
                    //
                    localStorage.setItem('Prod_name', "");
                    localStorage.setItem('Prodl2_name', r[i].prodDesc);
                  }
                }

              });

            this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 'p2' + '/' + prodid).subscribe(
              (r: any) => {
                for (let i = 0; i < r.length; i++) {
                  if (prodid == r[i].prodId) {
                    //
                    localStorage.setItem('Prod_name', "");
                    localStorage.setItem('Prodl2_name', r[i].prodDesc);
                  }
                }

              });

            this.router.navigate(['/invitation-cards']);
          }
        }
        // this.img_list.ModelLink
      });

  }

  redirect() {
    //$("img").click(function () {
    //  var loc = $(this).attr("alt");
    //  //alert(loc);
    //  this.router.navigate(['/wallpapers']);
    //  //var loc_str = loc.replace("Img", "3DImages");
    //  //$("#img_ex_wallpaperdesign").attr("src", loc_str);
    //});
    var src = $("div").find('.carousel-inner').find('.active')[2].firstChild.alt;
    this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels').subscribe
      ((res: any) => {
        this.img_list = res;
        for (let i = 0; i <= res.length; i++) {
          if (this.img_list[i].modelLink == src) {
            var prodid = this.img_list[i].prodId;
            localStorage.setItem("Prodl3Id", prodid);
            this.router.navigate(['/invitation-cards']);
          }
        }
       // this.img_list.ModelLink
      });
    if (src == "3dwallpapers") {
      this.router.navigate(['/wallpapers']);
    }
    else if (src == "Tshirt") {
      this.router.navigate(['/Tshirts']);
    }
    else {

    }
  }
  ngOnInit() {
    //trending now
    this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + "trendingnow").subscribe((r:any) => {
      this.img_list_trnnow = r;
    });

    //sale
    this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 2+'/'+"sale").subscribe((res: any) => {
      this.img_list_sale = res;
    });

    //new products
    this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 3 + '/' + "newprods"+"/"+"home").subscribe((result: any) => {
      this.img_list_newprods = result;
    });

    //tiles
    this.httpClient.get(this.prod_service.getUrl() + 'api/Products/' + 4 + '/' + "newtiles" + "/" + "home"+"/"+"tile").subscribe((result: any) => {
      this.img_list_tiles = result;
    });
    
    $(document).ready(function () {
   
      $('.carousel').carousel({
        
      })

      $(".container .row .box").click(function () {
        this.router.navigate(['/invitation-cards']);
      });
    });
  }

  tile_click(id,name) {
    localStorage.setItem('Prod_name', "");
    localStorage.setItem('Prodl2_name',name)
    localStorage.setItem("Prodl3Id", "null");
    localStorage.setItem("Prodl2Id", "null");
    localStorage.setItem("tile_id", id);
    localStorage.setItem("nav_home", "home");
    this.router.navigate(['/invitation-cards']);
  }
 
}
