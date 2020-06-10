import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})

export class SharedService {
  private CurrentCartCount = new BehaviorSubject(0);

  //private login_success = new BehaviorSubject < any > ({});
  private login_success = new BehaviorSubject('Sign In');
  currentMessage = this.CurrentCartCount.asObservable();
  loginMessage = this.login_success.asObservable();

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
}
