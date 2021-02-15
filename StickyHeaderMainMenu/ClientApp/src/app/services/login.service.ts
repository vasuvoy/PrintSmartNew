import { Injectable, Inject } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpClient, HttpParams } from '@angular/common/http';
import { user } from '../entities/user.entity';

@Injectable()
export class LoginService {
  public user: user[] = [];
  constructor(private httpClient: HttpClient) { }

  public x = 'https://localhost:44302/';
  //getdetails(): Observable<user> {

  //  return this.httpClient.get<user[]>('https://localhost:44302/' + 'api/LoginDetails/' + localStorage.getItem('emailid')).subscribe(
  //    result => {
  //    this.user = result;

  //  });

  //}
}
