import { Component, OnInit } from '@angular/core';
import { ImageList } from '../entities/ImageList.entity';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-visiting-cards',
  templateUrl: './visiting-cards.component.html',
  styleUrls: ['./visiting-cards.component.css']
})
export class VisitingCardsComponent implements OnInit {

  public img_list: ImageList[];

  constructor(public router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });

    $(document).ready(function () {
      $("#innerdiv_viscards").hide();
      $('#ddl_prodmat').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Material",
      })
    });
  

  }

  imgclick(e, f, g) {
    $("#div_idcards").hide();
    $("#innerdiv_viscards").show();
    $("#img_selected_viscard").attr("src", f);
    $("#lbl_desc").text(g);
    sessionStorage.setItem('ModelId', e);
  }
}
