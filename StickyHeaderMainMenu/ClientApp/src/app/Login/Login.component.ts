import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from '../entities/user.entity';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Session } from 'inspector';
import { ProductService } from '../services/product.service';

declare var $: any;
declare var swal: any;

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  providers: [LoginService]
})


export class LoginComponent implements OnInit {


  userdetails: User_Details[];
  cartItemCount: number = 0;
  constructor(private user_service: LoginService,
    private _sharedservice: SharedService, private httpClient: HttpClient, private prod_service: ProductService
    ,private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {

 
  

      $("#loginform").validate({
        rules: {
          email: {
            required: true,
            email: true
          },
          pwd: { required: true }
        },
        messages: {
          email: "Please enter valid email address",
          pwd: "Enter password"
        },
        submitHandler: function (form) {
          // register();
          //form.submit();
        }
      });
     
    });
  }


  submit() {
  
    let user_name = $("#email").val();
    let pwd = $("#pwd").val();
    let user_id = 0;
    let password = "";
    let email = "";
    localStorage.setItem('emailid', user_name);
 
    if (user_name != "" && pwd != "") {
      this.httpClient.get<User_Details[]>(this.prod_service.getUrl()+ 'api/Userdetail/' + user_name).subscribe(
        result => {
          this.userdetails = result
          var email_exists = result.findIndex(em_exists => em_exists.email == user_name);

            if (email_exists == -1) {
              swal("Email doesn't exist");
            }
            else {
              let userid = this.userdetails[0].userId;
              //  localStorage.setItem('ex_username', this.userdetails[0].firstName);

              // localStorage.setItem('Name', this.userdetails[0].FirstName);
              user_id = this.userdetails[0].userId;
              password = this.userdetails[0].pwd;
              email = this.userdetails[0].email;
              let isadmin = this.userdetails[0].isAdmin;
              if (user_name == email && pwd == password) {
    
                localStorage.setItem('user_name', this.userdetails[0].firstName);
                localStorage.setItem('userid', userid.toString());
                if (isadmin == "1") {
                  this._sharedservice.IsAdminresservice("Admin");
                  localStorage.setItem("IsAdmin","Admin");
                }
                //swal("Login success");
               // window.location.reload();
                this.router.navigateByUrl('/');
                //this.router.navigateByUrl(this.prod_service.getUrl());

                localStorage.setItem("status_text", "");
                localStorage.setItem("changepwd", "Change Password");
                localStorage.setItem("myorders", "My Orders");
                localStorage.setItem("signouttext", "Sign Out");
                this._sharedservice.loginSuccess("Sign Out");
                this._sharedservice.loginSuccessUsername(this.userdetails[0].firstName);
                this._sharedservice.loginSuccesschangepwd("Change Password");
                this._sharedservice.loginSuccesssignout("Sign Out");
                if (localStorage.getItem('userid') != null) {
                  var s = "appPage";

                  this.httpClient.get(this.prod_service.getUrl() + 'api/OdCarts/' + localStorage.getItem("userid")).subscribe(
                    (res: any) => {
                     // var numArr = [10, 20, 30, 40] // sums to value = 100
                      //var sum = 0;
                      //for (var i = 0; i < res.length; i++) {
                      //  sum += res[i].quantity;
                      //}
                     // alert(sum);
                      localStorage.setItem("cartcount", res.length);
                      this._sharedservice.updateCartCount(res.length);

                    });

                }

              }
              else {

                $("#danger-alert")[0].hidden = false;
                $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
                  $("#danger-alert").slideUp(1000);
                });
                }
            }
        });
    }
    
  }

  changepwd() { }
}

export interface User_Details {
  userId: number;
  firstName: string;
  LastName: string;
  email: string;
  Dob: Date;
  pwd: string;
  Telephone: string;
  Isactive: string;
  SecQid: number;
  SecQa: string;
  DtCreate: null;
  DtModify: null;
  isAdmin: string;
}
