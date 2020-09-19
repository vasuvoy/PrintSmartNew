import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class SharedService {

  private CurrentCartCount = new BehaviorSubject(stringtonum(sessionStorage.getItem("cartcount")));

  //private login_success = new BehaviorSubject < any > ({});

  private login_success = new BehaviorSubject(sessionStorage.getItem("status_text"));
  currentMessage = this.CurrentCartCount.asObservable();
  loginMessage = this.login_success.asObservable();


  private login_success_username = new BehaviorSubject(sessionStorage.getItem("user_name"));
  UserName = this.login_success_username.asObservable();

  private login_success_changepwd = new BehaviorSubject('');
  changepwd = this.login_success_changepwd.asObservable();

  constructor() { }
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

  loginSuccesschangepwd(success: any) {
    this.login_success_changepwd.next(success);
  }
}

function stringtonum(input: string) {
  var n = Number(input);
  return n;
}
