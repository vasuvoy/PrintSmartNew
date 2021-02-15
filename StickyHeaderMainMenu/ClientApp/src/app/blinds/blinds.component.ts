import { Component, OnInit } from '@angular/core';
import { InvitationCardsComponent } from '../invitation-cards/invitation-cards.component';
import { ProductService } from '../services/product.service';
import { SharedService } from '../services/shared.service';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-blinds',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./blinds.component.css',
    './invitation-cards.component.css'
  ]
})
export class BlindsComponent implements OnInit {
  // private httpClient: HttpClient;
  constructor() {  }

  ngOnInit() {
    //$("#innerdiv_invicards").hide();
    //$("#div_invicards").show();

    //this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id") + '/' + "invi").subscribe
    //  ((res: any) => {
    //    this.img_list = res;
    //  });

  }


}
