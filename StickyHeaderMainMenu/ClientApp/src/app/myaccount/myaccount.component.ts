import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Userdetail } from '../entities/Userdetail.entity';
import { ProductService } from '../services/product.service';



declare var $: any;
let username = "";
let userid = 0;
@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

  public userdetails: Userdetail[];
  constructor(private http: HttpClient, private prod_service: ProductService) { }

  ngOnInit() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    //user details
    username = localStorage.getItem('emailid');
    userid = stringtonum(localStorage.getItem('userid'));
    this.http.get<Userdetail[]>(this.prod_service.getUrl() + 'api/Userdetail/' + username).subscribe(
      result => {
        this.userdetails = result;
      });

    $(document).ready(function () {

    });
  }
  //acc_edit() {
  //  $("#txt_phonenum")[0].disabled = false;
  //  $("#txt_fname")[0].disabled = false;
  //  $("#txt_lname")[0].disabled = false;
  //  $("#txt_dob")[0].disabled = false;
  //}

  acc_save() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    var dt_update: Userdetail = {
      UserId: stringtonum(localStorage.getItem("userid")),
      FirstName: $("#txt_fname")[0].value, LastName: $("#txt_lname")[0].value,
      Pwd: localStorage.getItem('password'),
      Email: $("#txt_email")[0].value, Telephone: $("#txt_phonenum")[0].value,
      SecQa: localStorage.getItem('seqa'), SecQid: stringtonum(localStorage.getItem('seq')),
      Isactive: 1, DtModify: null

    };

    this.http.put(this.prod_service.getUrl() + 'api/Userdetail/' + userid, dt_update).subscribe(res => {

      $("#success-alert")[0].hidden = false;
      $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
        $("#success-alert").slideUp(1000);
      });
    });
  }
}
