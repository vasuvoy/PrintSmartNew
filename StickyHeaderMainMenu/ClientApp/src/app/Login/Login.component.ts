import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { user } from '../entities/user.entity';
import { SharedService } from '../services/shared.service';
import { Router } from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  providers: [LoginService]
})


export class LoginComponent implements OnInit {
  userdetails: user[];
  constructor(private user_service: LoginService,
    private _sharedservice: SharedService, private httpClient: HttpClient,
    private router: Router) { }

  ngOnInit() {
    $(document).ready(function () {
      $("#frgotpwd").click(function (e) {
        $("#myModal").modal('show');
      });
    });
  }


  submit() {

    let user_name = $("#username").val();
    let pwd = $("#password").val();
    localStorage.setItem('emailid', user_name);
    //this.httpClient.get<user[]>('https://localhost:44302/' + 'api/LoginDetails/' + localStorage.getItem('emailid')).subscribe(
    //  result => {
    //    this.userdetails = result;
    //    if (result.length > 0) {
    //      if (this.userdetails[0].emailid == user_name && this.userdetails[0].password == pwd) {
    //        this._sharedservice.loginSuccess("Sign Out");
    //        this.router.navigateByUrl('/')
    //      }
    //      else { alert('Invalid UserName/Passowrd') }
    //    }
    //  });
    
    //if (this.userdetails.length > 0) {
    //  if (this.userdetails[0].emailid == user_name && this.userdetails[0].password == pwd) { 
    //    this._sharedservice.loginSuccess("Sign Out");
    //    this.router.navigateByUrl('/')
    //}
    //else { alert('Invalid UserName/Passowrd') }
    //}
    //;
  }
  
}
