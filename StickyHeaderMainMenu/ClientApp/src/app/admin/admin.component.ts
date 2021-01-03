import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../app.component';


declare var $: any;
let prodid: any;
let p: ProductList[];
let prodid_l3 = "";
let prod_desc = "";
let selected_filename = "";
let modelfolder_name = "";
let model_count;
let formData: FormData;
let filename = "";

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
        placeholder: "Select Sub Product",
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
      $("#ddl_prodl2").empty();
      $('#ddl_prodl2').append('<option />');
      prodid = $('#ddl_prodl1 :selected').val();
      p.forEach(g => {
        if (g.prodId == prodid) {
          modelfolder_name = g.routerLink
        }
        if (g.parentId == prodid) {
          $('#ddl_prodl2').append('<option value="' + g.prodId + '">' +g.prodDesc + '</option>');
            }
      });
    });

    $("#ddl_prodl2").change(function () {
      prodid = $('#ddl_prodl2 :selected').val();
      $("#ddl_prodl3").empty();
      $('#ddl_prodl3').append('<option />');
      p.forEach(g => {
        if (g.parentId == prodid) {
          $('#ddl_prodl3').append('<option value="' + g.prodId + '">' + g.prodDesc + '</option>');

        }
      });
    });

    $("#ddl_prodl3").change(function (e) {

      prodid_l3 = $('#ddl_prodl3 :selected').val();
      prod_desc = $('#ddl_prodl3 :selected').text();

    });


  }

  OnFileSelect(event) {


    //event.target.files[0].name = selected_filename;
    this.selectedfile = event.target.files[0];
   // alert(this.selectedfile.name);
    const oldFileItem: File = event.target.files[0];
    this.http.get('https://localhost:44302/' + 'api/Productmodels/' + prodid_l3).subscribe((e: any) => {
      model_count = e.length;
      selected_filename = $("#modle_code")[0].value + '_' + model_count + '.jpg';// this.selectedfile.name;
      // alert(selected_filename);
      const newFile: File = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
      filename = newFile.name;
      let formData: FormData = new FormData();
      formData.append('file', newFile, newFile.name);
      formData.append('folderName', modelfolder_name);
      
      // let params = { 'formdata': formData, 'foldername': 'example' }
      this.http.post('https://localhost:44302/' + 'api/FileUpload', formData).subscribe(e => {  });
    });

    

    //sessionStorage.setItem("folder", modelfolder_name);
    
    //if (selected_filename != "") {
     

    //}


  }

  save() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
  
  
    //inserting into prod model
    var test: Prod_model = { ProdId: stringtonum(prodid_l3), ModelCode: $("#modle_code")[0].value, ModelDesc: prod_desc, ModelLink: "assets/" + modelfolder_name+"/" + filename, DtCreate: null, DtModify: null, IsActive: 1 };
    this.http.post('https://localhost:44302/' + 'api/Productmodels', test).subscribe(e => { alert("Image Uploaded") });
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
  routerLink: string;
  modelFolder: string;
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
