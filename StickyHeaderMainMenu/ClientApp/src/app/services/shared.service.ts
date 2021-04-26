import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class SharedService {


  private CurrentCartCount = new BehaviorSubject(stringtonum(localStorage.getItem("cartcount")));

  //private login_success = new BehaviorSubject < any > ({});

  private login_success = new BehaviorSubject('Sign In');

  currentMessage = this.CurrentCartCount.asObservable();
  loginMessage = this.login_success.asObservable();


  private login_success_username = new BehaviorSubject(localStorage.getItem("user_name"));
  UserName = this.login_success_username.asObservable();

  private login_success_changepwd = new BehaviorSubject('');
  changepwd = this.login_success_changepwd.asObservable();

  private login_success_signout = new BehaviorSubject('');
  loginMessage_signout = this.login_success_signout.asObservable();

  private IsAdmin_res = new BehaviorSubject(localStorage.getItem("IsAdmin"));
  IsAdmin_res_service = this.IsAdmin_res.asObservable();

  private login_success_myorders = new BehaviorSubject('');
  myorders = this.login_success_myorders.asObservable();

  constructor(private router: Router) { }
    updateCartCount(count: number){
      this.CurrentCartCount.next(count);
  }

  loginSuccess(success: any) {
    this.login_success.next (success);
  }

  show_login() {
    return this.login_success;
  }

  loginSuccessUsername(success: any) {
    this.login_success_username.next(success);
  }

  loginSuccesssignout(success: any) {
    this.login_success_signout.next(success);
  }

  loginSuccesschangepwd(success: any) {
    this.login_success_changepwd.next(success);
  }

  loginsuccessmyorders(success: any) {
    this.login_success_myorders.next(success);
  }


  IsAdminresservice(success: any) {
 
    //  this.router.navigateByUrl('/');
    this.IsAdmin_res.next(success);
  }
}

function stringtonum(input: string) {
  var n = Number(input);
  return n;
}
