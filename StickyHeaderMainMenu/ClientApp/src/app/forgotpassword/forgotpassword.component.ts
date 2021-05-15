import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { error } from '@angular/compiler/src/util';
import { threadId } from 'worker_threads';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

declare var $: any;
declare var swal: any;
let userid = 0;

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {
  secq: Array<any>;
  userdetails: User_Details[];

  userdetails_put: User_Details[];
  constructor(private http: HttpClient, private router: Router, private prod_service: ProductService) { }

  ngOnInit() {
    $(document).ready(function () {
      if (localStorage.getItem('changepwd') != null) {
        this.change_pwd = localStorage.getItem('changepwd');
        $("#trcurrentpwd")[0].hidden = false;
      }
      else
        $("#trcurrentpwd")[0].hidden = true;

      $("body").on('click', '.toggle-password', function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $("#Confirmpwd");
        if (input.attr("type") === "password") {
          input.attr("type", "text");
        } else {
          input.attr("type", "password");
        }

      });

      $('#ddl_secqus').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "select security question",
      })
    });

    //HTTPGET Request
    this.http.get<secqus>(this.prod_service.getUrl() + 'api/Secqmasters').subscribe(
      (res: any) => {
        //this.secq.push(res);
        this.secq = res;
        var test: secqus = res;
        for (var i = 0; i <= (res.length-1); i++) {
          var newOption = new Option(test[i].secQ, test[i].secQid, false, false);
          $('#ddl_secqus').append(newOption).trigger('change');
        }

      })

  }

  submit() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var secqid = stringtonum($('#ddl_secqus').val());
    userid = stringtonum(localStorage.getItem('userid'));

 

    let user_name = $("#email").val();
    this.http.get(this.prod_service.getUrl() + 'api/Userdetail/' + user_name).subscribe(
      result => {
       // delete result[0]["secQid"];
        //delete result[0]["secQ"];
    //  this.userdetails = result;

        var userdetails_updated: User_Details = {

          UserId: result[0].userId,FirstName: result[0].firstName, LastName: result[0].lastName,
          Email: result[0].email, Dob: result[0].dob, Pwd: result[0].pwd,
          Telephone: result[0].telephone, Isactive: result[0].isactive, SecQid: result[0].secQid,
          SecQa: result[0].secQa, DtCreate: result[0].dtCreate, DtModify: result[0].dtModify
        };
        //forgot Password
        if (localStorage.getItem('changepwd') == null) {
          if ($("#ddl_secqus").val() == result[0].secQid && $("#ans").val() == result[0].secQa) {
            userdetails_updated.Pwd = $("#pwd").val();
            // userdetails_updated.SecQid = secqid;
            //  userdetails_updated.SecQa = $("#ans").val();

            // var test: User_Details = {
            //   FirstName: "first", LastName: "l",
            //   Email: "skkkk@gmail.com", Dob: null, Pwd:$("#pwd")[0].value, Telephone: "344",
            //  Isactive: 1, SecQid: 3, SecQa: null, DtCreate: null, DtModify: null
            //};

            this.http.put(this.prod_service.getUrl() + 'api/Userdetail/' + userid, userdetails_updated).subscribe(res => {
              // alert("Password changed sucessfully");
              $("#success-alert")[0].hidden = false;
              $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#success-alert").slideUp(1000);
              });
              this.router.navigateByUrl('/Login');
            });
          }
          else {
            $("#danger-alert")[0].hidden = false;
            $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
              $("#danger-alert").slideUp(1000);
            });
          }
        }

        //change password
        else {
          if ($("#currentpwd").val() == result[0].pwd) {
            if ($("#ddl_secqus").val() == result[0].secQid && $("#ans").val() == result[0].secQa) {
              userdetails_updated.Pwd = $("#pwd").val();

              this.http.put(this.prod_service.getUrl() + 'api/Userdetail/' + user_name, userdetails_updated).subscribe(res => {
                // alert("Password changed sucessfully");
                $("#success-alert")[0].hidden = false;
                $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
                  $("#success-alert").slideUp(1000);
                });
                this.router.navigateByUrl('/Login');
              });
            }
            else {
              $("#danger-alert")[0].hidden = false;
              $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#danger-alert").slideUp(1000);
              });
            }
          }
          else {
            $("#danger-alert-currentpwd")[0].hidden = false;
            $("#danger-alert-currentpwd").fadeTo(2000, 500).slideUp(500, function () {
              $("#danger-alert-currentpwd").slideUp(1000);
            });

          }
        }
      });
  }
}
export class secqus {
  secQid: number;
  secQ: string;
}

//export interface User_Details {
//  userId: number;
//  firstName: string;
//  lastName: string;
//  email: string;
//  Dob: Date;
//  pwd: string;
//  Telephone: string;
//  Isactive: string;
//  secQid: number;
//  secQa: string;
//  DtCreate: null;
//  DtModify: null;
//}

export interface User_Details {
  UserId: number;
  FirstName: string;
  LastName: string;
  Email: string;
  Dob: Date;
  Pwd: string;
  Telephone: string;
  Isactive: number;
  SecQid: number;
  SecQa: string;
  DtCreate: null;
  DtModify: null;
}
