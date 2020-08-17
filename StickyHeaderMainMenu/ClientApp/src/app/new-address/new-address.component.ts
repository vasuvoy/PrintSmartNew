import { Component, OnInit } from '@angular/core';
import { privateDecrypt } from 'crypto';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var $: any;

@Component({
  selector: 'app-new-address',
  templateUrl: './new-address.component.html',
  styleUrls: ['./new-address.component.css']
})
export class NewAddressComponent implements OnInit {
  //user_address: newAddress[]=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    $(document).ready(function () {
      $('#ddl_addtype').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "select Address type",
      })
    });
    
  }

  add_address() {
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
      this.http.post('https://localhost:44302/' + 'api/UserAddresses', user_address, { headers }).subscribe(r=>alert("address ok"));
    }
    else { }
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


