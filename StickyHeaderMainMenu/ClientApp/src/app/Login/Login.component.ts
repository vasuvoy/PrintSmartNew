import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from '../entities/user.entity';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

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
    private _sharedservice: SharedService, private httpClient: HttpClient,
    private router: Router) { }

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
      this.httpClient.get<User_Details[]>('https://localhost:44302/' + 'api/Userdetail/' + user_name).subscribe(
        result => {
          this.userdetails = result
          var email_exists = result.findIndex(em_exists => em_exists.email == user_name);

            if (email_exists == -1) {
              swal("Email doesn't exist");
            }
            else {
              let userid = this.userdetails[0].userId;
              sessionStorage.setItem('userid', userid.toString());
              localStorage.setItem('userid', userid.toString());
             // localStorage.setItem('Name', this.userdetails[0].FirstName);
              user_id = this.userdetails[0].userId;
              password = this.userdetails[0].pwd;
              email = this.userdetails[0].email;
              if (user_name == email && pwd == password) {
                swal("Login success");
                this.router.navigateByUrl('/Home');
                this._sharedservice.loginSuccess("Sign Out");
                this._sharedservice.loginSuccessUsername(this.userdetails[0].firstName);
                this._sharedservice.loginSuccesschangepwd("Change Password");
                
              }
              else {
                swal("Incorrect Passowrd");
                }
            }
        });
    }
    if (localStorage.getItem('userid') != null) {
      var s = "appPage";

      this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + localStorage.getItem('userid') + '/' + s).subscribe(
        (res: any) => {
          localStorage.setItem("cartcount", res.length);
          this._sharedservice.updateCartCount(res.length);

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
}
