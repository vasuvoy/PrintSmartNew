import { Component, OnInit,Inject,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { getLocaleDateTimeFormat } from '@angular/common';
import { userdetailService } from '../services/shared/userdetail.service';


//import { Userdetail } from 'StickyHeaderMainmenu/printsmart/Userdetail';
declare var $: any;

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})

export class RegisterComponent implements OnInit {
  body: User_Details[]=[];
  myAppUrl: string = "";

  constructor(private httpClient: HttpClient, private _userdetailService: userdetailService,
              @Inject('BASE_URL') baseUrl: string)
  { this.myAppUrl = baseUrl; }
  ngOnInit() {
 
    (function () {
      'use strict';
      window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
          form.addEventListener('submit', function (event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    })();

  }
  register() {
    //this._userdetailService.formData=
    //const headers = new HttpHeaders().set('content-type', 'application/json');

    //var test: User_Details = {
    //  UserId: null, FirstName: "souju", LastName: "nal",
    //  Email: "sowjanya.souju@gmail.com", Dob: null, Pwd: null, Telephone: "12345",
    //  Isactive: null, SecQid: 1, SecQa: null, DtCreate: null, DtModify: null
    //};
    //var json = JSON.stringify(test);
    //this.body.push(test);
    //try {
    //  // this.httpClient.post("https://localhost:44302/api/Userdetail", this.body[0], { headers }).subscribe((response: Response) => response.json());
    //  this.httpClient.get("http://localhost:44302/api/Userdetail");
    //}
    //catch (Error)
    //{ alert( Error.message) }
    //}

}

export interface User_Details {
  UserId: number;
  FirstName:string; 
  LastName :string;
  Email: string;
  Dob: Date;
  Pwd: string;
  Telephone: string;
  Isactive : string;
  SecQid : number;
  SecQa: string;
  DtCreate: null;
  DtModify: null;
}
