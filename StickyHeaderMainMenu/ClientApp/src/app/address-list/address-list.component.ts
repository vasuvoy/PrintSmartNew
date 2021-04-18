import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { strict } from 'assert';
import { ProductService } from '../services/product.service';

declare var $: any;

@Component({
  selector: 'app-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.css']
})
export class AddressListComponent implements OnInit {
  public address_list: User_Address_list[]=[];
  public address_list1: User_Address_list[]=[];
  userid = localStorage.getItem("userid");
  constructor(private http: HttpClient, private router: Router, private prod_service: ProductService) { }
  ex = [];
  public objectKeys = Object.keys;
  ngOnInit() {

   // const action = "addr_list";
    this.http.get(this.prod_service.getUrl()  + 'api/Useraddresses/' + this.userid, { params: {action:"addr_lst"} }).subscribe(
      (res: any[]) => {
        for (var i = 0; i < res.length; i++) {
          this.address_list.push({
            userId: res[i].userId,
            addressLine1: res[i].addressLine1,
            addressLine2: res[i].addressLine2,
            addressLine3: res[i].addressLine3,
            addressLine4: res[i].addressLine4,
            addressLine5: res[i].addressLine5,
            addressType: res[i].addressType,
            pinCode: res[i].pinCode,
            contactNo: res[i].contactNo,
            name: res[i].name,
            addrId:res[i].addrId
          });
        }
        //  for (var i = ((res.length / 2)+1); i <= (res.length); i++) {
        //    this.address_list1.push({
        //      userId: res[i].userId,
        //      addressLine1: res[i].addressLine1,
        //      addressLine2: res[i].addressLine1,
        //      addressLine3: res[i].addressLine1,
        //      addressLine4: res[i].addressLine1,
        //      addressLine5: res[i].addressLine1,
        //      addressType: res[i].addressType,
        //      pinCode: res[i].pinCode,
        //      contactNo: res[i].contactNo,
        //      name: res[i].name,
        //      addrId: res[i].addrId
        //    });
        //}
       // this.address_list = res;
        var tr;
        //alert(res[0].userId);
        //var address_list: User_Address_list = {
        //UserId: res[0].userId
        //res.forEach((res: any) => {
        //  this.address_list.push(res);
        //});
        //for (var i in res)
        //  this.address_list.push([i, res[i]]);
        //for (var i = 0; i < res.length; i++) {
        //  tr = $('<tr/>');
        //  tr.append("<td>" + (i+1) + "</td>");
        //  tr.append("<td>" + res[i].name + "<br/>" + res[i].addressLine1 +","
        //    + res[i].addressLine2 + "," + res[i].addressLine3 + "," + res[i].addressLine4 + "," +
        //    res[i].addressLine5 + "<br/>"+"Pin code:"+res[i].pinCode +"<br/>"+"Contact no:"+ res[i].contactNo  + "</td>");
        //  tr.append("<td>" + "<a href='' class='remove'>"+"Remove"+"</a>"+"&nbsp;"+"<span>|</span>"+"&nbsp;"+"<a>Edit</a>" + "</td>");
        ////  $("#table_address").append(tr);
        //}
        //$("#table_address tr td .remove").click(function () {
        //  //$(this).parent("tr:first").remove()
        //  alert("remove");
        //})
      });
  }

  editaddr(addr: User_Address_list) {
    this.router.navigateByUrl(`edit-address/${addr.addrId}`);

}
  deladdr(addr: User_Address_list) {
    this.http.delete(this.prod_service.getUrl()  + 'api/UserAddresses/' + addr.addrId).subscribe(x => this.setUsersList());
  }

  private setUsersList() {
    this.http.get(this.prod_service.getUrl()  + 'api/Useraddresses/' + this.userid, { params: { action: "addr_lst" } }).subscribe((x:any[]) => {
      this.address_list = x;
    })
  }
}


 interface User_Address_list {
  userId: number;
  name: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressLine5: string;
  pinCode: number;
  contactNo: string;
  isDefault?: boolean;
   addressType: number;
   addrId?: number;
}
