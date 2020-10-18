import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var $: any;
let prodid: any;
let p: ProductList[];

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public prod_lst: ProductList[];

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

    //handleFileInput(file: FileList) {
    //  this.fileupload = file.item(0);
    //  var image_type = file.item(0).type;
    //  alert(image_type);
    //}
    }
    
  firstDropDownChanged(e) {
    alert("sdSD");
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
