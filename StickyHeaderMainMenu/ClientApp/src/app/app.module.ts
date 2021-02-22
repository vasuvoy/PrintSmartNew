import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { TshirtComponent } from './Tshirts/Tshirts.component';
import { cartComponent } from './cart/cart.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { FloorComponent } from './Floor/Floor.component';
import { wallpapersComponent } from './wallpapers/wallpapers.component';
import { IdCardsComponent } from './IdCards/IdCards.component';
import { InvitationCardsComponent } from './invitation-cards/invitation-cards.component';

import { StepsRailingComponent } from './steps-railing/steps-railing.component';
import { BrouchersComponent } from './brouchers/brouchers.component';

import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { VisitingCardsComponent } from './visiting-cards/visiting-cards.component';
import { AdminComponent } from './admin/admin.component';
import { CalenderComponent } from './calender/calender.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CounterComponent,
    TshirtComponent,
    cartComponent,
    LoginComponent,
    RegisterComponent,
    FloorComponent,
    wallpapersComponent,
    IdCardsComponent,
    InvitationCardsComponent,
     StepsRailingComponent,
    BrouchersComponent,
    ForgotpasswordComponent,
    NewAddressComponent,
    AddressListComponent,
    EditAddressComponent,
    VisitingCardsComponent,
    AdminComponent,
    CalenderComponent
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
      { path: 'Tshirts', component: TshirtComponent },
      { path: 'cart', component: cartComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'Floor', component: FloorComponent },
      { path: 'wallpapers', component: wallpapersComponent },
      { path: 'IdCards', component: IdCardsComponent },
      { path: 'invitation-cards', component: InvitationCardsComponent },
      { path: 'steps-railing', component: StepsRailingComponent },
      { path: 'brouchers', component: BrouchersComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'new-address', component: NewAddressComponent },
      { path: 'address-list', component: AddressListComponent },
      { path: 'edit-address/:id', component: EditAddressComponent },
      { path: 'visiting-cards', component: VisitingCardsComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'calender', component: CalenderComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
