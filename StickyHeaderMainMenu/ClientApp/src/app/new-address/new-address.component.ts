import { Component, OnInit } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ProductService } from '../services/product.service';

declare var $: any;

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

      $("#registration").validate({

        // Specify validation rules
        rules: {
          // The key name on the left side is the name attribute
          // of an input field. Validation rules are defined
          // on the right side
          firstname: "required",
          lastname: "required",
          Phonenum:"required",
          postalcode: "required",
          AdL1: "required",
          AdL2: "required",
          AdL3: "required",
          AdL4: "required",
          AdL5: "required",


        },
        // Specify validation error messages
        messages: {
          firstname: "Please enter your firstname",
          lastname: "Please enter your lastname",
          postalcode: "Please enter postal code",
          AdL1: "Please enter address",
          AdL2: "Please enter address",
          AdL3: "Please enter address",
          AdL4: "Please enter address",
          AdL5: "Please enter address",
          Phonenum:"Please enter Phone Number"
        },
        errorPlacement: function (label, element) {
          if (element.hasClass('select2') && element.next('.select2-container').length) {
            label.addClass('arrow');
            label.insertAfter(element.next('.select2-container'));
          }
          else {
            label.addClass('arrow');
            label.insertAfter(element);
          }
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
    });
  }

  add_address() {
    if ($("#registration").valid() == true) {


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


