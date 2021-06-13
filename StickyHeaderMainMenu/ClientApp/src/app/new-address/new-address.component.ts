import { Component, OnInit } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../services/product.service';

declare var $: any;
var errr_fname = false;
var err_phn = false;
var err_addl1 = false;
var err_addl2 = false;
var err_addl4 = false;
var err_addl5 = false;
var err_zip = false;

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {
  //user_address: newAddress[]=[];

  constructor(private http: HttpClient, private prod_service: ProductService) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#ddl_addtype').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "select Address type",
      })

      //validation
      $("#firstname_err_msg").hide();
      $("#phnNum_err_msg").hide();
      $("#addl1_err_msg").hide();
      $("#addl2_err_msg").hide();
      $("#addl4_err_msg").hide();
      $("#addl5_err_msg").hide();
      $("#zip_err_msg").hide();
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
    $("#Phonenum").focusout(function () {

      err_phn = false;
      var phnum = $("#Phonenum").val().length;
      var pattern = /^[a-zA-Z]*$/;
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
    });
    $("#AdL1").focusout(function () {

      err_addl1 = false;
      var adl1 = $("#AdL1").val();
      if (adl1 =="") {
        $("#addl1_err_msg").html("please enter address");
        $("#addl1_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#addl1_err_msg").css("font-size", "12px");
        $("#addl1_err_msg").css("color", "red");
        err_addl1 = true;
      }
      else {
        $("#addl1_err_msg").hide();
        err_addl1 = false;
      }
    });
    $("#AdL2").focusout(function () {

      err_addl2 = false;
      var adl2 = $("#AdL2").val();
      if (adl2 == "") {
        $("#addl2_err_msg").html("please enter address");
        $("#addl2_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#addl2_err_msg").css("font-size", "12px");
        $("#addl2_err_msg").css("color", "red");
        err_addl1 = true;
      }
      else {
        $("#addl2_err_msg").hide();
        err_addl2 = false;
      }
    });
    $("#AdL4").focusout(function () {

      err_addl4 = false;
      var adl4= $("#AdL4").val();
      if (adl4 == "") {
        $("#addl4_err_msg").html("please enter city");
        $("#addl4_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#addl4_err_msg").css("font-size", "12px");
        $("#addl4_err_msg").css("color", "red");
        err_addl4 = true;
      }
      else {
        $("#addl4_err_msg").hide();
        err_addl4 = false;
      }
    });
    $("#AdL5").focusout(function () {

      err_addl5 = false;
      var adl5= $("#AdL5").val();
      if (adl5 == "") {
        $("#addl5_err_msg").html("please enter state");
        $("#addl5_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#addl5_err_msg").css("font-size", "12px");
        $("#addl5_err_msg").css("color", "red");
        err_addl5 = true;
      }
      else {
        $("#addl5_err_msg").hide();
        err_addl5 = false;
      }
    });

    $("#postalcode").focusout(function () {

      err_zip = false;
      var zipnum = $("#postalcode").val().length;
    //  var pattern = /^[a-zA-Z]*$/;
      if (zipnum ==6) {

        $("#zip_err_msg").hide();
        err_zip = false;
        }
      
      else {
        $("#zip_err_msg").html("please enter 6 digit postal code");
        $("#zip_err_msg").show();
        //  $("#email_err_msg").css("border-bottom", "2px solid green");
        $("#zip_err_msg").css("font-size", "12px");
        $("#zip_err_msg").css("color", "red");
        err_zip = true;

      }
    });
  }

  add_address() {
    errr_fname = false;
    err_phn = false;
    err_addl1 = false;
    err_addl2 = false;
    err_addl4 = false;
    err_addl5 = false;
    err_zip = false;

    this.check_fname();
    this.check_phnumber();
    this.check_addl1();
    this.check_addl2();
    this.check_addl4();
    this.check_addl5();
    this.check_zip();

    if (errr_fname == false && err_phn == false && err_addl1 == false &&
      err_addl2 == false && err_addl4 == false && err_addl5 == false && err_zip==false) {


      const headers = new HttpHeaders().set('content-type', 'application/json');
      var userid = localStorage.getItem("userid");
      function stringtonum(input: string) {
        var n = Number(input);
        return n;
      }
      //  this.http.get<newAddress>('https://localhost:44302/' + 'api/Useraddresses'+ userid).subscribe(res => alert("ijh"));
      var user_address: newAddress = {
        UserId: stringtonum(userid), Name: $("#firstname").val(), AddressLine1: $("#AdL1").val(),
        AddressLine2: $("#AdL2").val(), AddressLine3: $("#AdL3").val(), AddressLine4: $("#AdL4").val(),
        AddressLine5: $("#AdL5").val(), ContactNo: $("#Phonenum").val(), PinCode: stringtonum($("#postalcode").val()),
        IsDefault: $("#isdefaul")[0].checked, AddressType: stringtonum($('#ddl_addtype').val())
      }
      if (userid != undefined) {
        this.http.post(this.prod_service.getUrl() + 'api/UserAddresses', user_address, { headers }).subscribe(r => {
          $("#success-alert")[0].hidden = false;
          $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#success-alert").slideUp(1000);
          });
        });
      }
      else { }

      //clear fields
      $("#Phonenum").val('');
      $("#firstname").val('');
      $("#AdL1").val('');
      $("#AdL2").val('');
      $("#AdL3").val('');
      $("#AdL4").val('');
      $("#AdL5").val('');
      $("#postalcode").val('');
      $("#ddl_addtype").selectedIndex = 0;
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

  check_phnumber() {
    err_phn = false;
    var phnum = $("#Phonenum").val().length;
    
    if (phnum==10) {
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

  check_addl1() {
    err_addl1 = false;
    var adl1 = $("#AdL1").val();
    if (adl1 == "") {
      $("#addl1_err_msg").html("please enter address");
      $("#addl1_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#addl1_err_msg").css("font-size", "12px");
      $("#addl1_err_msg").css("color", "red");
      err_addl1 = true;
    }
    else {
      $("#addl1_err_msg").hide();
      err_addl1 = false;
    }
  }

  check_addl2() {
    err_addl2 = false;
    var adl2 = $("#AdL2").val();
    if (adl2 == "") {
      $("#addl2_err_msg").html("please enter address");
      $("#addl2_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#addl2_err_msg").css("font-size", "12px");
      $("#addl2_err_msg").css("color", "red");
      err_addl1 = true;
    }
    else {
      $("#addl2_err_msg").hide();
      err_addl2 = false;
    }
  }

  check_addl4() {

    err_addl4 = false;
    var adl4 = $("#AdL4").val();
    if (adl4 == "") {
      $("#addl4_err_msg").html("please enter city");
      $("#addl4_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#addl4_err_msg").css("font-size", "12px");
      $("#addl4_err_msg").css("color", "red");
      err_addl4 = true;
    }
    else {
      $("#addl4_err_msg").hide();
      err_addl4 = false;
    }
  }

  check_addl5() {
    err_addl5 = false;
    var adl5 = $("#AdL5").val();
    if (adl5 == "") {
      $("#addl5_err_msg").html("please enter state");
      $("#addl5_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#addl5_err_msg").css("font-size", "12px");
      $("#addl5_err_msg").css("color", "red");
      err_addl5 = true;
    }
    else {
      $("#addl5_err_msg").hide();
      err_addl5 = false;
    }
  }

  check_zip() {
    err_zip = false;
    var zipnum = $("#postalcode").val().length;
    if (zipnum == 6) {

      $("#zip_err_msg").hide();
      err_zip = false;
    }

    else {
      $("#zip_err_msg").html("please enter 6 digit postal code");
      $("#zip_err_msg").show();
      //  $("#email_err_msg").css("border-bottom", "2px solid green");
      $("#zip_err_msg").css("font-size", "12px");
      $("#zip_err_msg").css("color", "red");
      err_zip = true;

    }
  }
}

export interface newAddress {
  UserId: number;
  Name: string;
  AddressLine1: string;
  AddressLine2: string;
  AddressLine3: string;
  AddressLine4: string;
  AddressLine5: string;
  PinCode: number;
  ContactNo: string;
  IsDefault: boolean;
  AddressType: number;
}


