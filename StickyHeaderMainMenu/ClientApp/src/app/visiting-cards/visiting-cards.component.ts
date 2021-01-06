import { Component, OnInit } from '@angular/core';
import { ImageList } from '../entities/ImageList.entity';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visiting-cards',
  templateUrl: './visiting-cards.component.html',
  styleUrls: ['./visiting-cards.component.css']
})
export class VisitingCardsComponent implements OnInit {

  public img_list: ImageList[];

  constructor(public router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl2Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });
  }

}
