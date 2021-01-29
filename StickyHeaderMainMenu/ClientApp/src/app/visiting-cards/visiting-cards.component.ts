import { Component, OnInit } from '@angular/core';
import { ImageList } from '../entities/ImageList.entity';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { productmaterial } from '../entities/productmaterial.entity';

declare var $: any;
let levelid = 0;
@Component({
  selector: 'app-visiting-cards',
  templateUrl: './visiting-cards.component.html',
  styleUrls: ['./visiting-cards.component.css']
})
export class VisitingCardsComponent implements OnInit {

  public img_list: ImageList[];
  public prod_mat: productmaterial;

  constructor(public router: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")+'/'+"viscard").subscribe
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
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    if (sessionStorage.getItem("Prodl3Id") != null) {
      levelid = stringtonum(sessionStorage.getItem("Prodl3Id"));
    }
    else
      levelid = stringtonum(sessionStorage.getItem("Prodl2Id"));
    this.httpClient.get('https://localhost:44302/' + 'api/Productmaterials/' + levelid ).subscribe
      ((res: any) => {
        this.prod_mat = res;
        res.forEach(e => {

          var ddl_prodoption = new Option(e.matDescription, e.matDescription, false, false);
          $('#ddl_prodmat').append(ddl_prodoption).trigger('change');
        });
        //this.prod_mat..forEach(e => {
        //  var newOption_gender = new Option(e.gender, e.gender, false, false);
        //  $('#ddl_gender').append(newOption_gender).trigger('change');
        //});
      });

  }
}
