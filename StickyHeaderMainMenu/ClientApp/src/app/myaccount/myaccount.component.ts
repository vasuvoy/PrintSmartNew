import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdetail } from '../entities/Userdetail.entity';
import { ProductService } from '../services/product.service';



declare var $: any;

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  public userdetails: Userdetail[];
  constructor(private http: HttpClient, private prod_service: ProductService) { }

  ngOnInit() {

    //user details
    let username = localStorage.getItem('emailid');

    this.http.get<Userdetail[]>(this.prod_service.getUrl() + 'api/Userdetail/' + username).subscribe(
      result => {
        this.userdetails = result
      });

    $(document).ready(function () {
      
    });
  }

}
