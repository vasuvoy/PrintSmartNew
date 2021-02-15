import { Component, OnInit, HostListener  } from '@angular/core';
//import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';

import { HttpClient } from '@angular/common/http';
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
  navigationSubscription;
  cartItemCount: number = 0;
  login_text: string = "Sign In";
  login_username: string = "";
  change_pwd = "";
  signout_text = "";
  isheader = " ";
  mySubscription;
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

    if (sessionStorage.getItem("userid") == null) {
      sessionStorage.setItem("status_text","Sign In");
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

    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
    this._sharedservice.loginMessage.subscribe(msg => this.login_text = sessionStorage.getItem('status_text'));
    this._sharedservice.UserName.subscribe(name => this.login_username = name);
    this._sharedservice.changepwd.subscribe(changepwd => this.change_pwd = sessionStorage.getItem('changepwd'));
    this._sharedservice.loginMessage_signout.subscribe(signout => this.signout_text = sessionStorage.getItem('signouttext'));
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



    });

  
  
  }

 
  //Sub menu hyperlink click event
  subMenuhyperlinkClick(e) {
    //location.reload();

    sessionStorage.setItem('Prodl3Id', e.target.id);
    //this.router.navigate([this.router.url])
  // this.router.navigate(e.target.href);
  
  }

 

  subL2MenuhyperlinkClick(e) {
    // alert(e.target.innerText+e.target.id);
    sessionStorage.setItem('Prodl2Id', e.target.id);


  }

  //main menu hyperlink click event
  MainMenuhyperlinkClick(e) {

    sessionStorage.setItem('ProdId', e.target.id);
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
         //this.router.navigateByUrl('/Login');
       }
  }

  myaddress() {
    if (this.login_text == 'Sign In') {
      this.router.navigateByUrl('/Login');
    }
    else {
      this.router.navigateByUrl('/new-address');
    }
  }

  signout() {
    sessionStorage.removeItem("user_name");
    sessionStorage.removeItem("changepwd");
    sessionStorage.setItem("status_text", "Sign In");
    sessionStorage.removeItem("signouttext");
    this.router.navigateByUrl('/Login');
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

