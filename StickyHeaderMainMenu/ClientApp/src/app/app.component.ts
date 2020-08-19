import { Component, OnInit } from '@angular/core';
//import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


declare var $: any;
let count: number;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0
  login_text: string = "Sign In";
  login_username: string = "";
  change_pwd = "";
  
  //public products: Product[];
  public prodlist: Product_list[] = [];
  public prodlist_main: mainmodel[] = [];
  public prodlist1: Product_list[];

  public prodView: prod_View[];
  public test1: Productmodel[];
  public test: Productmodel[] = [];
  public test_l2prod: Productmodel[] = [];
  public test_l2prod1: l2model[] = [];
  public test_l2prod2: Productmodel[] = [];
  public groubedByTeam = [];
  public groubedByTeam_l2 = [];
  public testmodel: testModel[] = [];
  public count=0;
  constructor(private http: HttpClient, private _exampleService: ProductService, private router: Router, private _sharedservice: SharedService) {

  }
  ngOnInit() {
    //from db loading prod list dynamically
    this.http.get('https://localhost:44302/' + 'api/Products').subscribe(
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
            this.groubedByTeam_l2 = groupBy(this.groubedByTeam[key1], 'l2prodId');
            count = 0;
          }
          else {
            this.groubedByTeam_l2 = this.groubedByTeam[key1];
            count = 1;
          }


          var output = [];

          for (let key in this.groubedByTeam_l2) {
            if (count == 0) {
              this.groubedByTeam_l2[key].forEach(e => { this.testmodel.push({ l3prodId: e.l3prodId, l3prodDesc: e.l3prodDesc, l2prodDesc: e.l2prodDesc }) });

              this.test.push({ testmodel: this.testmodel });
              this.test_l2prod = [{ l2prodDesc: this.groubedByTeam_l2[key][0].l2prodDesc, testmodel: this.test }];
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

 

    localStorage.setItem('cart', null);
    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
    this._sharedservice.loginMessage.subscribe(msg => this.login_text = msg);
    this._sharedservice.UserName.subscribe(name => this.login_username = name);
    this._sharedservice.changepwd.subscribe(changepwd => this.change_pwd = changepwd);
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
   // alert(e.target.innerText+e.target.id);
    localStorage.setItem('Prodl2Id', e.target.id);
  }

  //main menu hyperlink click event
  MainMenuhyperlinkClick(e) {

    localStorage.setItem('ProdId', e.target.id);
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
  testmodel?: testModel[];

  //modelDesc: string;
 // modelIdLink: string;
  //isActive: number;

}

export class testModel {
  l3prodId?: number;
  //prodId: number;
  l3prodDesc?: number;
  l2prodDesc?: string;
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
}

