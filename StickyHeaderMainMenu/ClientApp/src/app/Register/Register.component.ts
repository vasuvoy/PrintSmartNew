import { Component, OnInit,Inject,Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { getLocaleDateTimeFormat } from '@angular/common';
import { Router } from '@angular/router';
import { UserdetailService } from '../services/userdetail.service';
import { error } from 'protractor';
import { ProductService } from '../services/product.service';


//import { Userdetail } from 'StickyHeaderMainmenu/printsmart/Userdetail';
declare var $: any;

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})

export class RegisterComponent implements OnInit {
  body: User_Details[] = [];
  //secq: secqus[];
  secq: Array<any>;
  test1: Array<any>;
  myAppUrl: string = "";
  registerForm: FormGroup;
  submitted = false;

  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private prod_service: ProductService, private router: Router, private _userdetailService: UserdetailService,
    @Inject('BASE_URL') baseUrl: string) { this.myAppUrl = baseUrl; }
  ngOnInit() {
    //this.registerForm = this.formBuilder.group({
    //  title: ['', Validators.required],
    //  firstName: ['', Validators.required],
    //  lastName: ['', Validators.required],
    //  // validates date format yyyy-mm-dd
    //  dob: ['', [Validators.required, Validators.pattern(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)]],
    //  email: ['', [Validators.required, Validators.email]],
    //  password: ['', [Validators.required, Validators.minLength(6)]],
    //  confirmPassword: ['', Validators.required],
    //  acceptTerms: [false, Validators.requiredTrue]
    //}, {
     // validator: MustMatch('password', 'confirmPassword')
    //});

    //--------HTTPGET REQUEST--------
    this.httpClient.get<secqus>(this.prod_service.getUrl() + 'api/Secqmasters').subscribe(
      (res:any) => {
        //this.secq.push(res);
        this.secq = res;
        var test: secqus = res;
        for (var i = 0; i <= 10; i++)
        {
          var newOption = new Option(test[i].secQ, test[i].secQid, false, false);
          $('#ddl_secqus').append(newOption).trigger('change');
        }
        //$('#ddl_secqus').each(test, function (key, value) {
        //  var newOption = new Option(test[key].secQ, test[key].secQid, false, false);
        //  $('#ddl_secqus').append(newOption).trigger('change');
        //});
       // var newOption = new Option(test[0].secQ, test[0].secQid, false, false);
        
      })

    $(document).ready(function () {

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

      $('#ddl_secqus').on('change', function () {
        $('#registration').valid();
      })
      //$('.datepicker').datepicker();


      $("#registration").validate({

        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          firstname: "required",
          lastname: "required",
          email: {
            required: true,
            // Specify that email should be validated
            // by the built-in "email" rule
            email: true
          },
          pwd: {
            required: true,
            minlength: 5
 
          },
          Confirmpwd: {
            required: true,
            equalTo: "#pwd"
          },
          DOB: "required",
          Phonenum: "required",
          ddl_secqus:"required",
          ans: "required"
        },
        // Specify validation error messages
        messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          pwd: {
            required: "Please provide a password",
            minlength: "Your password must be at least 5 characters long and 2 characters"

          },
          Confirmpwd: {
            required: "Please provide a password",
            equalTo: "Please enter the password same as above"
          },
          email: "Please enter  valid email address",
          DOB: "Please select date of birth",
          Phonenum: "Please enter mobile number",
          ddl_secqus: "Please select the security question",
          ans: "Please enter answer"
        },
        errorPlacement: function (label, element) {
          if (element.hasClass('select2') && element.next('.select2-container').length) {
            label.addClass('arrow');
            label.insertAfter(element.next('.select2-container'));
          }
          else {
            label.addClass('arrow');
          label.insertAfter(element);}
          //if (element.attr("name") != "ddl_secqus") {
          //  label.addClass('arrow');
          //  label.insertAfter(element);
          //}
          //else {
          //  label.removeClass('arrow');
          //  label.insertAfter(element);
          //}
        },
        wrapper: 'span',
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function (form) {
          // register();
         // form.submit();
        }
      });

      $('#register').on('click', function () {
        $("#registration").valid();
      });


    });
  }

  register() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


    const headers = new HttpHeaders().set('content-type', 'application/json');
 
    //  var test: User_Details = {
    //    FirstName: $("#firstname")[0].value, LastName: $("#lastname")[0].value,
    //    Email: $("#email")[0].value, Dob: null, Pwd: $("#pwd")[0].value, Telephone: $("#Phonenum")[0].value,
    //    Isactive: null, SecQid: $('#ddl_secqus').val(), SecQa: $("#ans")[0].value, DtCreate: null, DtModify: null
    //};
    var secqid = stringtonum($('#ddl_secqus').val());
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    this.httpClient.get<User_Details[]>(this.prod_service.getUrl() + 'api/Userdetail').subscribe(res => {
      var email_exists = res.findIndex(em_exists => em_exists.email == $("#email")[0].value);
      if (email_exists == -1) {
        var test: User_Details = {
          FirstName: $("#firstname")[0].value, LastName: $("#lastname")[0].value,
          email: $("#email")[0].value, Dob: $("#DOB")[0].value, Pwd: $("#pwd")[0].value, Telephone: $("#Phonenum")[0].value,
          Isactive: 1, SecQid: secqid, SecQa: $("#ans")[0].value, DtCreate: null, DtModify: null, isAdmin: null

        };

        // var test: User_Details = {
        //   FirstName: "first", LastName: "l",
        //   Email: "s@gmail.com", Dob: null, Pwd:$("#pwd")[0].value, Telephone: "344",
        //   Isactive: null, SecQid: 3, SecQa: null, DtCreate: null, DtModify: null
        //};

        this.httpClient.post(this.prod_service.getUrl() + 'api/Userdetail', test, { headers }).subscribe(res => {
          $("#success-alert")[0].hidden = false;
          $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#success-alert").slideUp(1000);
          });
          this.router.navigateByUrl('/Login'); 
        });
        return false;
      }
      else {
        $("#danger-alert")[0].hidden = false;
        $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
          $("#danger-alert").slideUp(1000);
        });
      }
    });


  }

  get f() { return this.registerForm.controls; }

}
export interface User_Details {
  
  FirstName: string;
  LastName: string;
  email: string;
  Dob: Date;
  Pwd: string;
  Telephone: string;
  Isactive: number;
  SecQid: number;
  SecQa: string;
  DtCreate: null;
  DtModify: null;
  isAdmin: number;
}

export class secqus {
  secQid: number;
  secQ: string;
 
}

