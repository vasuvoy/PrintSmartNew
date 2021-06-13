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
var errr_fname = false;
var errr_lname = false;
var errr_email = false;
var err_dob = false;
var err_pwd = false;
var err_Cnfrmpwd = false;
var err_phn = false;
var err_secq = false;
var err_secans = false;

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


    //--------HTTPGET REQUEST--------
    this.httpClient.get<secqus>(this.prod_service.getUrl() + 'api/Secqmasters').subscribe(
      (res:any) => {
        //this.secq.push(res);
        this.secq = res;
        var test: secqus = res;
        for (var i = 0; i <= res.length-1; i++)
        {
          var newOption = new Option(test[i].secQ, test[i].secQid, false, false);
          $('#ddl_secqus').append(newOption).trigger('change');
        }
 
        
      })

    $(document).ready(function () {

      //$("body").on('click', '.toggle-password', function () {
      //  $(this).toggleClass("fa-eye fa-eye-slash");
      //  var input = $("#Confirmpwd");
      //  if (input.attr("type") === "password") {
      //    input.attr("type", "text");
      //  } else {
      //    input.attr("type", "password");
      //  }

      //});
     
      $('#ddl_secqus').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "select security question",
      })

      $('#ddl_secqus').on('change', function () {
        $('#registration').valid();
      })

      //validation
      $("#firstname_err_msg").hide();
      $("#lastname_err_msg").hide();
      $("#email_err_msg").hide();
      $("#dob_err_msg").hide();
      $("#pwd_err_msg").hide();
      $("#Cnfrmpwd_err_msg").hide();
      $("#phnNum_err_msg").hide();
      $("#secq_err_msg").hide();
      $("#secans_err_msg").hide();
      //$('.datepicker').datepicker();


      //$("#registration").validate({

      //  // Specify validation rules
      //  rules: {
      //    // The key name on the left side is the name attribute
      //    // of an input field. Validation rules are defined
      //    // on the right side
      //    firstname: "required",
      //    lastname: "required",
      //    email: {
      //      required: true,
      //      // Specify that email should be validated
      //      // by the built-in "email" rule
      //      email: true
      //    },
      //    pwd: {
      //      required: true,
      //      minlength: 5
 
      //    },
      //    Confirmpwd: {
      //      required: true,
      //      equalTo: "#pwd"
      //    },
      //    DOB: "required",
      //    Phonenum: { required:true},
      //    ddl_secqus:"required",
      //    ans: "required"
      //  },
      //  // Specify validation error messages
      //  messages: {
      //    firstname: "Please enter your firstname",
      //    lastname: "Please enter your lastname",
      //    pwd: {
      //      required: "Please provide a password",
      //      minlength: "Your password must be at least 5 characters long and 2 characters"

      //    },
      //    Confirmpwd: {
      //      required: "Please provide a password",
      //      equalTo: "Please enter the password same as above"
      //    },
      //    email: "Please enter  valid email address",
      //    DOB: "Please select date of birth",
      //    Phonenum: "Please enter mobile number",
      //    ddl_secqus: "Please select the security question",
      //    ans: "Please enter answer"
      //  },
      //  errorPlacement: function (label, element) {
      //    if (element.hasClass('select2') && element.next('.select2-container').length) {
      //      label.addClass('arrow');
      //      label.insertAfter(element.next('.select2-container'));
      //    }
      //    else {
      //      label.addClass('arrow');
      //    label.insertAfter(element);}
      //    //if (element.attr("name") != "ddl_secqus") {
      //    //  label.addClass('arrow');
      //    //  label.insertAfter(element);
      //    //}
      //    //else {
      //    //  label.removeClass('arrow');
      //    //  label.insertAfter(element);
      //    //}
      //  },
      //  wrapper: 'span',
      //  // Make sure the form is submitted to the destination defined
      //  // in the "action" attribute of the form when valid
      //  submitHandler: function (form) {
      //    // register();
      //   // form.submit();
      //  }
      //});

        // Example starter JavaScript for disabling form submissions if there are invalid fields
        //(function () {
        //  'use strict'

        //  // Fetch all the forms we want to apply custom Bootstrap validation styles to
        //  var forms = document.querySelectorAll('.needs-validation')

        //  // Loop over them and prevent submission
        //  Array.prototype.slice.call(forms)
        //    .forEach(function (form) {
        //      form.addEventListener('submit', function (event) {
        //        if (!form.checkValidity()) {
        //          event.preventDefault()
        //          event.stopPropagation()
        //        }

        //        form.classList.add('was-validated')
        //      }, false)
        //    })
        //})()

      //$('#register').on('click', function () {
      //  $("#registration").valid();
      //});


    });

    $("#firstname").focusout(function () {
      
      errr_fname = false;
      var fname = $("#firstname").val();
      if (fname == "") {
        $("#firstname_err_msg").html("please enter first name");
        $("#firstname_err_msg").show();
        $("#firstname_err_msg").css("font-size", "12px");
        $("#firstname_err_msg").css("color", "red");
        errr_fname = true;
      }
      else {
        $("#firstname_err_msg").hide();
        errr_fname = false;
      }
    });
    $("#lastname").focusout(function () {

      errr_lname = false;
      var lname = $("#lastname").val();
      if (lname == "") {
        $("#lastname_err_msg").html("please enter last name");
        $("#lastname_err_msg").show();
        $("#lastname_err_msg").css("font-size", "12px");
        $("#lastname_err_msg").css("color", "red");
        errr_lname = true;
      }
      else {
        $("#lastname_err_msg").hide();
        errr_lname = false;
      }
    });
    $("#email").focusout(function () {

      errr_email = false;
      var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      var email = $("#email").val();
      if (pattern.test(email)) {
        $("#email_err_msg").hide();
        errr_email = false;
 
      }
      else {
        $("#email_err_msg").html("please enter valid email");
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#email_err_msg").css("font-size", "12px");
        $("#email_err_msg").css("color", "red");
        errr_email = true;
      }
    });
    $("#DOB").focusout(function () {

      err_dob = false;
      var dob = $("#DOB").val();
      if (dob == "") {
        $("#dob_err_msg").html("please enter email");
        $("#dob_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#dob_err_msg").css("font-size", "12px");
        $("#dob_err_msg").css("color", "red");
        err_dob = true;
      }
      else {
        $("#dob_err_msg").hide();
        err_dob = false;
      }
    });
    $("#pwd").focusout(function () {

      err_pwd = false;
      var pwd = $("#pwd").val();
      if (pwd == "") {
        $("#pwd_err_msg").html("please enter password");
        $("#pwd_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#pwd_err_msg").css("font-size", "12px");
        $("#pwd_err_msg").css("color", "red");
        err_pwd = true;
      }
      else {
        $("#pwd_err_msg").hide();
        err_pwd = false;
      }
    });
    $("#Confirmpwd").focusout(function () {

      err_Cnfrmpwd = false;
      var pwd = $("#pwd").val();
      var cpwd = $("#Confirmpwd").val();
      if ( cpwd != pwd) {
        $("#Cnfrmpwd_err_msg").html("Password didnt match");
        $("#Cnfrmpwd_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#Cnfrmpwd_err_msg").css("font-size", "12px");
        $("#Cnfrmpwd_err_msg").css("color", "red");
        err_Cnfrmpwd = true;
      }
      else {
        $("#Cnfrmpwd_err_msg").hide();
        err_Cnfrmpwd = false;
      }
    });
    $("#Phonenum").focusout(function () {

      err_phn = false;
      var phnum = $("#Phonenum").val().length;
     // var pattern =/^[0-9]*$/ ;
      if (phnum ==10) {
        $("#phnNum_err_msg").hide();
        err_phn = false;
      }
      else {
        $("#phnNum_err_msg").html("please enter 10 digit Phone number");
        $("#phnNum_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#phnNum_err_msg").css("font-size", "12px");
        $("#phnNum_err_msg").css("color", "red");
        err_phn = true;
   
      }
    });
    $("#ddl_secqus").focusout(function () {

      err_secq = false;
      var secq = $("#ddl_secqus").val();
      if (secq == "") {
        $("#secq_err_msg").html("please enter Phone number");
        $("#secq_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#secq_err_msg").css("font-size", "12px");
        $("#secq_err_msg").css("color", "red");
        err_secq = true;
      }
      else {
        $("#secq_err_msg").hide();
        err_secq = false;
      }
    });
    $("#ans").focusout(function () {

      err_secans = false;
      var secans = $("#ans").val();
      if (secans == "") {
        $("#secans_err_msg").html("please enter Phone number");
        $("#secans_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#secans_err_msg").css("font-size", "12px");
        $("#secans_err_msg").css("color", "red");
        err_secans = true;
      }
      else {
        $("#secans_err_msg").hide();
        err_secans = false;
      }
    });

    $('#ddl_secqus').on('change', function () {
      $("#secq_err_msg").hide();
      err_secq = false;
    })
  }

  register() {
    errr_fname = false;
    errr_lname = false;
    errr_email = false;
    err_dob = false;
    err_pwd = false;
    err_Cnfrmpwd = false;
    err_phn = false;
    err_secq = false;
    err_secans = false;

    this.check_fname();
    this.check_lname();
    this.check_email();
    this.check_dob();
    this.check_pwd();
    this.check_cpwd();
    this.check_phnumber();
    this.check_secq();
    this.check_secans();
    // this.submitted = true;

    // stop here if form is invalid
    //if (this.registerForm.invalid) {
    //  return;
    //}

    if (errr_fname == false && errr_lname == false && errr_email == false &&
      err_dob == false && err_pwd == false && err_Cnfrmpwd == false && err_phn == false
      && err_secq == false && err_secans == false) { 
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
    this.httpClient.get<User_Details[]>(this.prod_service.getUrl() + 'api/Userdetail/' + $("#email")[0].value).subscribe((res: any) => {
      var email_exists = res;//.where(em_exists => em_exists.email == $("#email")[0].value).FirstOrDefault();
      if (email_exists.length == 0) {
        var test: User_Details = {
          FirstName: $("#firstname")[0].value, LastName: $("#lastname")[0].value,
          email: $("#email")[0].value, Dob: $("#DOB")[0].value, Pwd: $("#pwd")[0].value, Telephone: "+91"+$("#Phonenum")[0].value,
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

        });
        setTimeout(() => {
          this.router.navigateByUrl('/Login')
        }
          , 5000);

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
  }


  check_fname() {
     errr_fname = false;
    var fname = $("#firstname").val();
    if (fname == "") {
      $("#firstname_err_msg").html("please enter first name");
      $("#firstname_err_msg").show();
      $("#firstname_err_msg").css("font-size", "12px");
      $("#firstname_err_msg").css("color", "red");
      errr_fname = true;
    }
    else {
      $("#firstname_err_msg").hide();
      errr_fname = false;
    }
  }

  check_lname() {
    errr_lname = false;
    var lname = $("#lastname").val();
    if (lname == "") {
      $("#lastname_err_msg").html("please enter last name");
      $("#lastname_err_msg").show();
      $("#lastname_err_msg").css("font-size", "12px");
      $("#lastname_err_msg").css("color", "red");
      errr_lname = true;
    }
    else {
      $("#lastname_err_msg").hide();
      errr_lname = false;
    }
  }

  check_email() {
    errr_email = false;
    var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var email = $("#email").val();
    if ( email == "") {
      $("#email_err_msg").html("please enter valid email");
      $("#email_err_msg").show();
      $("#email_err_msg").css("font-size", "12px");
      $("#email_err_msg").css("color", "red");
      errr_email = true;
    }
    else {
      $("#email_err_msg").hide();
      errr_email = false;
    }
  }
  check_dob() {
    err_dob = false;
    var dob = $("#DOB").val();
    if (dob == "") {
      $("#dob_err_msg").html("please enter email");
      $("#dob_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#dob_err_msg").css("font-size", "12px");
      $("#dob_err_msg").css("color", "red");
      err_dob = true;
    }
    else {
      $("#dob_err_msg").hide();
      err_dob = false;
    }
  }

  check_pwd() {
    err_pwd = false;
    var pwd = $("#pwd").val();
    if (pwd == "") {
      $("#pwd_err_msg").html("please enter password");
      $("#pwd_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#pwd_err_msg").css("font-size", "12px");
      $("#pwd_err_msg").css("color", "red");
      err_pwd = true;
    }
    else {
      $("#pwd_err_msg").hide();
      err_pwd = false;
    }
  }

  check_cpwd() {
    err_Cnfrmpwd = false;
    var cpwd = $("#Confirmpwd").val();
    var pwd = $("#pwd").val();
    if (cpwd == "" && cpwd!=pwd) {
      $("#Cnfrmpwd_err_msg").html("Password didnt match");
      $("#Cnfrmpwd_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#Cnfrmpwd_err_msg").css("font-size", "12px");
      $("#Cnfrmpwd_err_msg").css("color", "red");
      err_Cnfrmpwd = true;
    }
    else {
      $("#Cnfrmpwd_err_msg").hide();
      err_Cnfrmpwd = false;
    }
  }

  check_phnumber() {
    err_phn = false;
    var phnum = $("#Phonenum").val().length;
  //  var pattern = /^[a-zA-Z]*$/;
    if (phnum == 10) {
      $("#phnNum_err_msg").hide();
      err_phn = false;
    }
    else {
      $("#phnNum_err_msg").html("please enter 10 digit Phone number");
      $("#phnNum_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#phnNum_err_msg").css("font-size", "12px");
      $("#phnNum_err_msg").css("color", "red");
      err_phn = true;

    }
  }

  check_secq() {
    err_secq = false;
    var secq = $("#ddl_secqus").val();
    if (secq == "") {
      $("#secq_err_msg").html("please select security question");
      $("#secq_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#secq_err_msg").css("font-size", "12px");
      $("#secq_err_msg").css("color", "red");
      err_secq = true;
    }
    else {
      $("#secq_err_msg").hide();
      err_secq = false;
    }
  }

  check_secans() {
    err_secans = false;
    var secans = $("#ans").val();
    if (secans == "") {
      $("#secans_err_msg").html("please enter secutiry question answer");
      $("#secans_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#secans_err_msg").css("font-size", "12px");
      $("#secans_err_msg").css("color", "red");
      err_secans = true;
    }
    else {
      $("#secans_err_msg").hide();
      err_secans = false;
    }
  }
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

