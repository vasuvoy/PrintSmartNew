import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../services/product.service';

declare var $: any;
@Component({
  selector: 'app-edit-address',
  templateUrl: './edit-address.component.html',
  styleUrls: ['./edit-address.component.css']
})
export class EditAddressComponent implements OnInit {
  addrId = this.route.snapshot.params['id'];
  selectedAddr: User_Address_list[];
  editForm: FormGroup;
  constructor(private route: ActivatedRoute, private prod_service: ProductService, private http: HttpClient, private formbuilder: FormBuilder) { }

  ngOnInit() {
    //const addrId = this.route.snapshot.params['id'];
    this.setForm(this.addrId);
  }
  get editFormData() { return this.editForm.controls; }

  private setForm(addrId: number) {
    this.http.get(this.prod_service.getUrl() + 'api/Useraddresses/' + addrId).subscribe((x: any[]) => {
      this.selectedAddr = x
      this.editForm = this.formbuilder.group({
        firstname: [this.selectedAddr[0].name],
        Phonenum: [this.selectedAddr[0].contactNo],
        AdL1: [this.selectedAddr[0].addressLine1],
        AdL2: [this.selectedAddr[0].addressLine2],
        AdL3: [this.selectedAddr[0].addressLine3],
        AdL4: [this.selectedAddr[0].addressLine4],
        AdL5: [this.selectedAddr[0].addressLine5],
        postalcode: [this.selectedAddr[0].pinCode],
        ddl_addtype: [this.selectedAddr[0].addressType],
        isdefaul: [this.selectedAddr[0].isDefault]
        //lastName: [this.selectedUser.lastName, Validators.required],
        //email: [{ value: this.selectedUser.email, disabled: true }, [Validators.email, Validators.required]],
        //mobileNumber: [this.selectedUser.mobileNumber, Validators.required]
      });

    });

  }

  update_address() {
    var userid = localStorage.getItem("userid");
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    var user_address_update: Address_update = {
      UserId: stringtonum(userid),Name: $("#firstname").val(), AddressLine1: $("#AdL1").val(),
      AddressLine2: $("#AdL2").val(), AddressLine3: $("#AdL3").val(), AddressLine4: $("#AdL4").val(),
      AddressLine5: $("#AdL5").val(), ContactNo: $("#Phonenum").val(), PinCode: stringtonum($("#postalcode").val()),
      IsDefault: $("#isdefaul")[0].checked, AddressType: stringtonum($('#ddl_addtype').val()),
      AddrId: stringtonum(this.addrId)
    }
    this.http.put(this.prod_service.getUrl() + 'api/UserAddresses/' + this.addrId, user_address_update).subscribe(res => { alert("addr updtead"); });
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
  isDefault: boolean;
  addressType: number;
  addrId: number;
}

export interface Address_update {
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
  AddrId: number;
}
