import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { TshirtComponent } from './Tshirts/Tshirts.component';
import { ProductComponent } from './Products/Product.component';
import { cartComponent } from './cart/cart.component';
import { LoginComponent } from './Login/Login.component';
import { RegisterComponent } from './Register/Register.component';
import { FloorComponent } from './Floor/Floor.component';
import { wallpapersComponent } from './wallpapers/wallpapers.component';
import { IdCardsComponent } from './IdCards/IdCards.component';
import { InvitationCardsComponent } from './invitation-cards/invitation-cards.component';
import { CupboardsComponent } from './cupboards/cupboards.component';
import { DoorComponent } from './door/door.component';
import { GlassPartitionComponent } from './glass-partition/glass-partition.component';
import { WindowsComponent } from './windows/windows.component';
import { StepsRailingComponent } from './steps-railing/steps-railing.component';
import { TrophyEngravingComponent } from './trophy-engraving/trophy-engraving.component';
import { TrophyPrintingComponent } from './trophy-printing/trophy-printing.component';
import { BrouchersComponent } from './brouchers/brouchers.component';
import { ClothBlindersComponent } from './cloth-blinders/cloth-blinders.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { NewAddressComponent } from './new-address/new-address.component';
import { AddressListComponent } from './address-list/address-list.component';
import { EditAddressComponent } from './edit-address/edit-address.component';
import { VisitingCardsComponent } from './visiting-cards/visiting-cards.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    TshirtComponent,
    ProductComponent,
    cartComponent,
    LoginComponent,
    RegisterComponent,
    FloorComponent,
    wallpapersComponent,
    IdCardsComponent,
    InvitationCardsComponent,
    CupboardsComponent,
    DoorComponent,
    GlassPartitionComponent,
    WindowsComponent,
    StepsRailingComponent,
    TrophyEngravingComponent,
    TrophyPrintingComponent,
    BrouchersComponent,
    ClothBlindersComponent,
    ForgotpasswordComponent,
    NewAddressComponent,
    AddressListComponent,
    EditAddressComponent,
    VisitingCardsComponent,
    AdminComponent
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
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'Tshirts', component: TshirtComponent },
      { path: 'Products', component: ProductComponent },
      { path: 'cart', component: cartComponent },
      { path: 'Login', component: LoginComponent },
      { path: 'Register', component: RegisterComponent },
      { path: 'Floor', component: FloorComponent },
      { path: 'wallpapers', component: wallpapersComponent },
      { path: 'IdCards', component: IdCardsComponent },
      { path: 'invitation-cards', component: InvitationCardsComponent },
      { path: 'cupboards', component: CupboardsComponent },
      { path: 'door', component: DoorComponent },
      { path: 'glass-partition', component: GlassPartitionComponent },
      { path: 'windows', component: WindowsComponent },
      { path: 'steps-railing', component: StepsRailingComponent },
      { path: 'trophy-printing', component: TrophyPrintingComponent },
      { path: 'trophy-engraving', component: TrophyEngravingComponent },
      { path: 'brouchers', component: BrouchersComponent },
      { path: 'cloth-blinders', component: ClothBlindersComponent },
      { path: 'forgotpassword', component: ForgotpasswordComponent },
      { path: 'new-address', component: NewAddressComponent },
      { path: 'address-list', component: AddressListComponent },
      { path: 'edit-address/:id', component: EditAddressComponent },
      { path: 'visiting-cards', component: VisitingCardsComponent },
      { path: 'admin', component: AdminComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
