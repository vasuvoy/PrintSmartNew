import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { ImageList } from '../entities/ImageList.entity';
import { ProductService } from '../services/product.service';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../services/shared.service';

declare var $: any;

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  productAddedTocart: Product[]=[];
  products_myorders: Product[];
  public img_list: ImageList[];

  constructor(private prod_service: ProductService, private httpClient: HttpClient, private _sharedservice: SharedService) { }
  ngOnInit() {
    //this.httpClient.get('https://localhost:44302/' + 'api/OdCarts/' + sessionStorage.getItem("userid")).subscribe(
    //  (r: any) =>

    //  {

    //    this.productAddedTocart = r;
    //    this.productAddedTocart.forEach(r => {
    //      this.productAddedTocart[r.ModelLink] == "ss";
    //    })
    //    cartpage = "cart";
    //    this.productAddedTocart.forEach(res => {
    //      //this.productAddedTocart[0].modelId
    //      // alert(res.modelId);
    //      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + res.modelId + '/' + cartpage).subscribe(
    //        (r: any) => {
    //          this.img_list.push(r);
    //        })
    //    })
    //    if (sessionStorage.getItem("ModelId") != null) {
    //      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("ModelId")+ '/' + cartpage).subscribe(
    //        (r: any) => {
    //          this.img_list = r;
    //        })
    //    }
    //    else {

    //    }
    //});

    this.httpClient.get(this.prod_service.getUrl() + 'api/OdCarts/' + localStorage.getItem("userid")+"/"+"myorders").subscribe(
      (r: any) => {

       //.where(u => u.StatusCode == "O").ToList();
      //  this.products_myorders = this.productAddedTocart;//.forEach(e => e.StatusCode == "O");
        if (r.length > 0) {
          this.productAddedTocart = r;
          if (localStorage.getItem("ModelId") != null) {
            this.httpClient.get(this.prod_service.getUrl() + 'api/Productmodels/' + localStorage.getItem("ModelId") + '/' + "cart").subscribe(
              (r: any) => {
                this.img_list = r;
              })
          }
        }
        else {
          $("#divHistory")[0].hidden = false;
        }
 
      });
   
  }

}
