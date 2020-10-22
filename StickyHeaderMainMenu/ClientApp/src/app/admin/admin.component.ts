import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../app.component';


declare var $: any;
let prodid: any;
let p: ProductList[];
let prodid_l3 = "";
let prod_desc = "";
let selected_filename = "";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public prod_lst: ProductList[];
  selectedfile: File = null;
  public s: Productmodel[] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {


    $(document).ready(function () {
   

      $('#ddl_prodl1').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Product",
      });
      $('#ddl_prodl2').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Product",
      });
      $('#ddl_prodl3').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Product",
      });
    });
    var page = "admin";
    var prd_level = "p1";
    let prodid = 0;
    
    this.http.get('https://localhost:44302/' + 'api/Products/' + prd_level + '/' + prodid).subscribe(
      (res1: any) => {
        p = res1;
        this.prod_lst = res1;
        this.prod_lst.forEach(e => {
          if (e.parentId == null) {
            //var newOption = new Option(e.prodDesc, e.prodDesc, false, false);
            $('#ddl_prodl1').append('<option value="' + e.prodId + '">' + e.prodDesc + '</option>');//.trigger('change');
          }
          })
        
      });
   
    $("#ddl_prodl1").change(function () {
      prodid = $('#ddl_prodl1 :selected').val();
      p.forEach(g => {
        if (g.parentId == prodid) {
          $('#ddl_prodl2').append('<option value="' + g.prodId + '">' +g.prodDesc + '</option>');
            }
      });
    });

    $("#ddl_prodl2").change(function () {
      prodid = $('#ddl_prodl2 :selected').val();
      p.forEach(g => {
        if (g.parentId == prodid) {
          $('#ddl_prodl3').append('<option value="' + g.prodId + '">' + g.prodDesc + '</option>');

        }
      });
    });

    $("#ddl_prodl3").change(function () {
      prodid_l3 = $('#ddl_prodl3 :selected').val();
      prod_desc = $('#ddl_prodl3 :selected').text();
    });
  }

  OnFileSelect(event) {
    this.selectedfile = event.target.files[0];
    let formData: FormData = new FormData();
    selected_filename = this.selectedfile.name;
    formData.append('file',this.selectedfile, this.selectedfile.name);
 
    this.http.post('https://localhost:44302/' + 'api/FileUpload', formData).subscribe(e => {  });

   


  }

  save() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    //inserting into prod model
    var test: Prod_model = { ProdId: stringtonum(prodid_l3), ModelCode: "sv", ModelDesc: prod_desc, ModelLink: "assets/" + selected_filename, DtCreate: null, DtModify: null, IsActive: 1 };
    this.http.post('https://localhost:44302/' + 'api/Productmodels', test).subscribe(e => { alert("insert") });
  }
 }

export class ProductList {
  prodId: number;
  prodDesc: string;
  parentId: number;
  isHeader: number;
  isActive: number;
  sequenceId: number;
  dtCreate: null;
  dtModify: null;
  RouterLink: string;
}
export class Prod_model {

  ProdId: number;
  ModelCode: string;
  ModelDesc: string;
  ModelLink: string;
  IsActive: number;
  DtCreate: null;

  DtModify: null;

}
