import { Component, OnInit, HostListener  } from '@angular/core';
//import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';

import { HttpClient, HttpUrlEncodingCodec } from '@angular/common/http';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';




declare var $: any;
let count: number;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent implements OnInit {

  //url = `/project/${encodeURIComponent('R&D Some Other Text')}`;
  //dashboardUrl = '/dashboard/?isopen=true&name=' + name;

  navigationSubscription;
  cartItemCount: number;
  login_text: string = "Sign In";
  login_username: string = "";
  change_pwd = "";
  my_orders = "";
  signout_text = "";
  isheader = " ";
  mySubscription;
  isadmin_result = "";
  //public products: Product[];
  public prodlist: Product_list[] = [];
  public prodlist_main: mainmodel[] = [];
  public prodlist1: Product_list[];

  public prodView: prod_View[];
  public prodView1: prod_View[] = [];
  public prodView2: prod_View[] = [];
  public test1: Productmodel[];
  public test: Productmodel[] = [];
  public test_l2prod: Productmodel[] = [];
  public test_l2prod1: l2model[] = [];
  public test_l2prod2: Productmodel[] = [];
  public groubedByTeam = [];
  public groubedByTeam_l2 = [];
  public groubedByTeam_l3 = [];
  public testmodel: testModel[] = [];
  public count = 0;


  constructor(private http: HttpClient,
    private _location: Location, private prod_service: ProductService,
    private router: Router, private _sharedservice: SharedService) {

    //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    //this.mySubscription = this.router.events.subscribe((event) => {
    //  if (event instanceof NavigationEnd) {
    //    // Trick the Router into believing it's last link wasn't previously loaded
    //    this.router.navigated = false;
    //  }
   // }); 
  }

  
  ngOnInit() {
    //admin li item

    if (localStorage.getItem("userid") == null) {
      localStorage.setItem("status_text", "Sign In");
    }
    //from db loading prod list dynamically

    this.http.get(this.prod_service.getUrl() + 'api/Products').subscribe(
      (res1: any) => {
        this.prodView = res1;

        var groupBy = function (xs, key) {
          return xs.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
          }, {});
        };
        this.groubedByTeam = groupBy(this.prodView, 'l1parentId');
        for (let key1 in this.groubedByTeam) {
          if (this.groubedByTeam[key1].length > 1 || this.groubedByTeam[key1][0].l2prodId != undefined) {
            //for (let r in this.groubedByTeam[key1]) {
            //  if (this.groubedByTeam[key1][r].l2isHeader == "0") {
            //    this.prodView1.push(this.groubedByTeam[key1][r]);
            //    this.groubedByTeam_l2 = groupBy(this.prodView1, 'l3prodId');
            //  }
            //  else {
            //    this.prodView2.push(this.groubedByTeam[key1][r]);
            //    this.groubedByTeam_l2 = groupBy(this.prodView2, 'l2prodId');
            //  }
            //}

            // this.groubedByTeam_l3 = this.groubedByTeam_l3.concat(this.groubedByTeam_l2);
            this.groubedByTeam_l2 = groupBy(this.groubedByTeam[key1], 'l2prodId');


            //if (this.groubedByTeam[key1].l2isHeader == 1) {
            // this.groubedByTeam_l2 = groupBy(this.groubedByTeam[key1], 'l2prodId');
            //}
            //else {
            //  this.groubedByTeam_l2 = this.groubedByTeam[key1];
            //}
            count = 0;
          }
          else {
            this.groubedByTeam_l2 = this.groubedByTeam[key1];
            count = 1;
          }


          var output = [];


          for (let key in this.groubedByTeam_l2) {

            if (count == 0) {
              //  if (this.groubedByTeam_l2[key].length == 1) {
              //this.testmodel.push({
              //  l3prodId: this.groubedByTeam_l2[key][0].l2prodId,
              //  l3prodDesc: this.groubedByTeam_l2[key][0].l2prodDesc,
              //  l2prodDesc: ""
              //})
              // }
              // else {
              this.groubedByTeam_l2[key].forEach(e => {
                if (e.routerLink != null)
                  this.testmodel.push({ l3prodId: e.l3prodId, l3prodDesc: e.l3prodDesc, l2prodDesc: e.l2prodDesc, RouterLink: e.routerLink, ModelId: e.modelId })
                else {
                  e.routerLink = " ";
                  this.testmodel.push({ l3prodId: e.l3prodId, l3prodDesc: e.l3prodDesc, l2prodDesc: e.l2prodDesc, RouterLink: e.routerLink, ModelId: e.modelId })
                }
              });

              // }
              this.test.push({ testmodel: this.testmodel });
              // if (this.groubedByTeam_l2[key].length == 1) {
              // this.test_l2prod = [{ l2prodDesc: "", testmodel: this.test }];
              // }
              // else {
              this.test_l2prod = [{ l2prodId: this.groubedByTeam_l2[key][0].l2prodId, l2routerLink: this.groubedByTeam_l2[key][0].routerLink, l2prodDesc: this.groubedByTeam_l2[key][0].l2prodDesc, testmodel: this.test, l2isHeader: this.groubedByTeam_l2[key][0].l2isHeader }];
              //}
              this.test_l2prod1.push({ prdmodel: this.test_l2prod });
              this.prodlist = [{
                ProdId: this.groubedByTeam_l2[key][0].l1parentId,
                ProdDesc: this.groubedByTeam_l2[key][0].l1prodDesc,
                productModel: this.test_l2prod1
                //productModel: [{ testmodel: this.testmodel }]
              }];
            }
            else {
              this.prodlist = [{
                ProdId: this.groubedByTeam_l2[0].l1parentId,
                ProdDesc: this.groubedByTeam_l2[0].l1prodDesc,
                productModel: []
                //productModel: [{ testmodel: this.testmodel }]
              }];
            }

            //this.prodlist.push({ ProdId: this.groubedByTeam[1] })
            this.testmodel = [];
            this.test = [];

          }

          this.prodlist_main.push({ mainmodel: this.prodlist });
          this.test_l2prod1 = [];
          this.prodlist = [];
        }
      });



    // localStorage.setItem('cart', null);
    //  $("#ex_lbl").text(localStorage.getItem('ex_username'));
    this._sharedservice.currentMessage.subscribe(msg => {
      this.cartItemCount = msg;
      if (this.cartItemCount == 0) {
        $("#cartcount")[0].hidden = true;
      }
      else
        $("#cartcount")[0].hidden = false;
  });
    
    this._sharedservice.loginMessage.subscribe(msg => this.login_text = localStorage.getItem('status_text'));
    this._sharedservice.UserName.subscribe(name => {
      if (localStorage.getItem('user_name') != null) {
        this.login_username = name
      }

    });
    this._sharedservice.changepwd.subscribe(changepwd => { 
      if (localStorage.getItem('changepwd') != null) {
        this.change_pwd = localStorage.getItem('changepwd');
        $("#changePwd")[0].hidden = false;
      }
      else
        $("#changePwd")[0].hidden = true;
    });

    this._sharedservice.myorders.subscribe(myorders => {
      if (localStorage.getItem('myorders') != null) {
        this.my_orders = localStorage.getItem('myorders');
        $("#myorders")[0].hidden = false;
      }
      else
        $("#myorders")[0].hidden = true;
    });

    this._sharedservice.loginMessage_signout.subscribe(signout => {
      if (localStorage.getItem('signouttext') != null) {
        this.signout_text = localStorage.getItem('signouttext');
        $("#signout")[0].hidden = false;
      }
      else
        $("#signout")[0].hidden = true;
    });
    this._sharedservice.IsAdmin_res_service.subscribe(r => {
      this.isadmin_result = r;
      if (this.isadmin_result == "Admin") {
        $("#liAdmin")[0].hidden = false;
        $("#lispaceAdmin")[0].hidden = false;
      }
      else {
       // $("#liAdmin")[0].hidden = true;
      //  $("#lispaceAdmin")[0].hidden = true;


      }
    })
    //function theFunction() {

    //  if (this.login_text == 'Sign Out') {
    //    alert('sign out');
    //    this._sharedservice.loginSuccess("Sign In");
    //    this._sharedservice.loginMessage.subscribe(msg => this.login_text = msg);
    //    this.router.navigateByUrl('/')
    //  }
    //}


    $(document).ready(function () {
      var $window = $(window);
      function checkWidth() {
        if ($window.width() >= 768) {
          $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
      }
      $(window).resize(checkWidth);
     
      $('#media').carousel({
        pause: false,
        interval: false,
      });

      localStorage.setItem("tile_id", "");
      localStorage.setItem("nav_home", "");

    });

  
  
  }

 
  //Sub menu hyperlink click event
  subMenuhyperlinkClick(e) {
    //location.reload();
    localStorage.setItem("Prodl2Id", null);
    localStorage.setItem('Prodl3Id', e.target.id);
    localStorage.setItem('Prodl2_name', e.target.innerText);
    //this.router.navigate([this.router.url])
    this.router.navigate(e.target.href);

  //  localStorage.setItem('Prodl3Id', e.target.id)
  }

 

  subL2MenuhyperlinkClick(j) {
    // alert(e.target.innerText+e.target.id);
    localStorage.setItem("Prodl3Id", null);
    localStorage.setItem('Prodl2Id', j.target.id);
    localStorage.setItem('Prodl2_name', j.target.innerText);
    this.router.navigate(j.target.href);

 //   localStorage.setItem('Prodl3Id', e.target.id)
  }

  //main menu hyperlink click event
  MainMenuhyperlinkClick(e) {

    localStorage.setItem('ProdId', e.target.id);
    localStorage.setItem('Prod_name', e.target.innerText);
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }


  myaccount() {
       if (this.login_text == 'Sign In') {

         this.router.navigateByUrl('/Login');
       }
       else {
         this.router.navigateByUrl('/myaccount');
       }
  }

  myaddress() {
    if (this.login_text == 'Sign In') {
      this.router.navigateByUrl('/Login');
    }
    else {
      this.router.navigateByUrl('/address-list');
    }
  }

  signout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("changepwd");
    localStorage.setItem("status_text", "Sign In");
    localStorage.removeItem("signouttext");
    localStorage.removeItem("cartcount");
    localStorage.removeItem("userid");
    localStorage.removeItem("IsAdmin");
    localStorage.removeItem("Prodl3Id");
    localStorage.removeItem("Prodl2Id");
    localStorage.removeItem("Prodl2_name");
    localStorage.removeItem("ProdId");
    localStorage.removeItem("Prod_name");
    localStorage.removeItem("ModelId");
    localStorage.removeItem("myorders");
    this._sharedservice.IsAdminresservice("");
    this.router.navigateByUrl('/Login');
  }

  headerImg() {
    this.router.navigateByUrl('/');
  }
}


export class Product_list {
  ProdId?: number;
  ProdDesc?: string;
  //ProdLink: number;
  //IsActive: number;
  productModel?: l2model[];
}

export class Productmodel {
  l2prodDesc?: string;
  l2isHeader?: number;
  l2routerLink?: string;
  testmodel?: testModel[];
  l2prodId?: number;
  //modelDesc: string;
 // modelIdLink: string;
  //isActive: number;

}

export class testModel {
  l3prodId?: number;
  //prodId: number;
  l3prodDesc?: number;
  l2prodDesc?: string;
  RouterLink?: string;
  ModelId?: number;
  l2isHeader?: number;
}

export class l2model {
  prdmodel?: Productmodel[];
}

export class mainmodel {
  mainmodel?: Product_list[];
}

export class prod_View {
  prodId: number;
  prodDesc: string;
  modelId: number;
  modelCode: string;
  modelDesc: string;
  routerLink: string;
}

