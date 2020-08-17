import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Userdetail } from '../entities/Userdetail.entity';

@Injectable({
  providedIn: 'root'
})
export class UserdetailService {


  formData= new Userdetail();
  readonly rootURL = 'http://localhost:44302/api';
//  list: PaymentDetail[];

  constructor(private http: HttpClient) { }

  postPaymentDetail() {
  return this.http.post(this.rootURL + '/Userdetail', this.formData);
    //return this.http.get(this.rootURL + '/LoginDetails');
  }
//  putPaymentDetail() {
//    return this.http.put(this.rootURL + '/PaymentDetail/' + this.formData.PMId, this.formData);
//  }
//  deletePaymentDetail(id) {
//    return this.http.delete(this.rootURL + '/PaymentDetail/' + id);
//  }

//  refreshList() {
//    this.http.get(this.rootURL + '/PaymentDetail')
//      .toPromise()
//      .then(res => this.list = res as PaymentDetail[]);
//  }
//}

//constructor() { }

//}
}
