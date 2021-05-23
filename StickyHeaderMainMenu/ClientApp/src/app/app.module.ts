import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';

import { cartComponent } from './cart/cart.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { FloorComponent } from './Floor/Floor.component';

import { IdCardsComponent } from './IdCards/IdCards.component';
import { InvitationCardsComponent } from './invitation-cards/invitation-cards.component';

import { StepsRailingComponent } from './steps-railing/steps-railing.component';
import { BrouchersComponent } from './brouchers/brouchers.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { EditAddressComponent } from './edit-address/edit-address.component';

import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MyordersComponent } from './myorders/myorders.component';
import { PaymentComponent } from './payment/payment.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    cartComponent,
    LoginComponent,
    RegisterComponent,
    FloorComponent,
    IdCardsComponent,
    InvitationCardsComponent,
     StepsRailingComponent,
    BrouchersComponent,
    ForgotpasswordComponent,
    NewAddressComponent,
    AddressListComponent,
    EditAddressComponent,
    AdminComponent,
    ContactComponent,
    MyaccountComponent,
    MyordersComponent,
    PaymentComponent,
    //FileUploadModule
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },

      { path: 'cart', component: cartComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'Floor', component: FloorComponent },

      { path: 'IdCards', component: IdCardsComponent },
      { path: 'invitation-cards', component: InvitationCardsComponent },
      { path: 'steps-railing', component: StepsRailingComponent },
      { path: 'brouchers', component: BrouchersComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'new-address', component: NewAddressComponent },
      { path: 'address-list', component: AddressListComponent },
      { path: 'edit-address/:id', component: EditAddressComponent },

      { path: 'admin', component: AdminComponent },
      { path: 'contact', component: ContactComponent },
      
      { path: 'myaccount', component: MyaccountComponent },
      { path: 'myorders', component: MyordersComponent },
      { path: 'payment', component: PaymentComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
