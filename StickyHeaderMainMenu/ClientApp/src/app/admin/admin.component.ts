import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../app.component';
import { ProductService } from '../services/product.service';
import { pricedetail } from '../entities/pricedetail.entity';


declare var $: any;
let prodid: any;
let prodid_l2:any;
let p: ProductList[];
let prodid_l3 = "";
let prod_desc = "";
let selected_filename = "";
let modelfolder_name = "";
let modelfolder_name01 = "";
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



  constructor(private http: HttpClient, private prod_service: ProductService) { }

  ngOnInit() {


    $(document).ready(function () {
      $("#success-alert").hide();

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
    
    this.http.get(this.prod_service.getUrl()  + 'api/Products/' + prd_level + '/' + prodid).subscribe(
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
          modelfolder_name01  = g.prodDesc;
modelfolder_name =modelfolder_name01.replace("-","_");
        }
        if (g.parentId == prodid) {
          $('#ddl_prodl2').append('<option value="' + g.prodId + '">' +g.prodDesc + '</option>');
            }
      });
    });

    $("#ddl_prodl2").change(function () {
      prodid_l2 = $('#ddl_prodl2 :selected').val();

      $("#ddl_prodl3").empty();
      $('#ddl_prodl3').append('<option />');
      p.forEach(g => {
        if (g.parentId == prodid_l2) {
          $('#ddl_prodl3').append('<option value="' + g.prodId + '">' + g.prodDesc + '</option>');

        }
        else {
          $('#ddl_prodl3').hide();
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
    if (prodid_l3 != "") {
      var dt = new Date();
      var time = dt.getHours() + "_" + dt.getMinutes() + "_" + dt.getSeconds() + "_" + dt.getMilliseconds();
      var image_name = dt.getDate() + "_" + dt.getMonth() + "_" + dt.getFullYear() + "_" + time;
      this.http.get(this.prod_service.getUrl() + 'api/Productmodels/' + prodid_l3+'/'+"adminpage").subscribe((e: any) => {

        selected_filename = $("#modle_code")[0].value + '_' + image_name + '.jpg';// this.selectedfile.name;
        // alert(selected_filename);
        const newFile: File = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
        filename = newFile.name;
        let formData: FormData = new FormData();
        formData.append('file', newFile, newFile.name);
        formData.append('folderName', modelfolder_name);

        // let params = { 'formdata': formData, 'foldername': 'example' }
        this.http.post(this.prod_service.getUrl()  + 'api/FileUpload', formData).subscribe(e => { });


      });
    }
    else {
      var dt = new Date();
      var time = dt.getHours() + "_" + dt.getMinutes() + "_" + dt.getSeconds() + "_" + dt.getMilliseconds();
      var image_name = dt.getDate() + "_" + dt.getMonth() + "_" + dt.getFullYear()+"_"+ time;
      this.http.get(this.prod_service.getUrl()  + 'api/Productmodels/' + prodid_l2 + '/' + "adminpage").subscribe((e: any) => {

        selected_filename = $("#modle_code")[0].value + '_' + image_name + '.jpg';// this.selectedfile.name;
        const newFile: File = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
        filename = newFile.name;
        let formData: FormData = new FormData();
        formData.append('file', newFile, newFile.name);
        formData.append('folderName', modelfolder_name);

        this.http.post(this.prod_service.getUrl()  + 'api/FileUpload', formData).subscribe(e => { });

      });
    }

    

    //sessionStorage.setItem("folder", modelfolder_name);
    
    //if (selected_filename != "") {
     

    //}


  }

  save() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }

    if (prodid_l3 != "") {
      //inserting into prod model
      var test: Prod_model = { ProdId: stringtonum(prodid_l3), ModelCode: $("#modle_code")[0].value, ModelDesc: prod_desc, ModelLink: "assets/" + modelfolder_name + "/" + filename, DtCreate: null, DtModify: null, IsActive: 1 };
      this.http.post(this.prod_service.getUrl() + 'api/Productmodels', test).subscribe((e: any) => {
        let dis_value = $("#dis").val();
        let disc = dis_value / 100;
        let sp = ($("#max_price")[0].value - ($("#max_price")[0].value * disc));

        var price_detail: pricedetail = {
          ModelId: e.modelId, maxRetailPrice: stringtonum($("#max_price")[0].value), percentDisc: stringtonum(dis_value), SellingPrice: sp,
          DtEffectStart: null, DtEffectEnd: null, DtModify: null
        }
        this.http.post(this.prod_service.getUrl() + 'api/Pricedetails', price_detail).subscribe(e => {
        });
        $("#success-alert").show();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
          $("#success-alert").slideUp(1000);
        });
      });
    }
    else {
      var test: Prod_model = { ProdId: stringtonum(prodid_l2), ModelCode: $("#modle_code")[0].value, ModelDesc: prod_desc, ModelLink: "assets/" + modelfolder_name + "/" + filename, DtCreate: null, DtModify: null, IsActive: 1 };
      this.http.post(this.prod_service.getUrl() + 'api/Productmodels', test).subscribe((e: any) => {
        let dis_value = $("#dis").val();
        let disc = dis_value / 100;
        let sp = ($("#max_price")[0].value - ($("#max_price")[0].value * disc));
        //alert(sp);
        $("lbl_price").text(sp);
        var price_detail: pricedetail = {
          ModelId: e.modelId, maxRetailPrice: stringtonum($("#max_price")[0].value), percentDisc: stringtonum(dis_value), SellingPrice:sp,
          DtEffectStart: null, DtEffectEnd: null, DtModify: null


        }
        this.http.post(this.prod_service.getUrl() + 'api/Pricedetails', price_detail).subscribe(e => {
        });
        $("#success-alert").show();
        $("#success-alert").fadeTo(2000, 500).slideUp(500, function () {
          $("#success-alert").slideUp(1000);
        });
      });
    }
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
