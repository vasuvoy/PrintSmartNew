import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productmodel } from '../app.component';
import { ProductService } from '../services/product.service';
import { pricedetail } from '../entities/pricedetail.entity';
import { isDevMode } from '@angular/core';
import { Router } from '@angular/router';


declare var $: any;
let prodid: any;
let prodid_l2: any;
let p: ProductList[];
let prodid_l3 = "";
let prod_desc = "";
let selected_filename = "";
let modelfolder_name = "";
let modelfolder_name01 = "";
let model_count;
let formData: FormData;
let filename = "";
let prodid_l2_edit: any;
let prodid_l3_edit: any;
let actual_mrp = $("#txtmrp").text();
let actual_disc = $("#txtdis").text();

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public prod_lst: ProductList[];
  selectedfile: File = null;
  public s: Productmodel[] = [];

  public price_detail: pricedetail[];

  constructor(private http: HttpClient, private prod_service: ProductService, private router: Router) { }

  ngOnInit() {


    $(document).ready(function () {
      if (localStorage.getItem("userid") == null && localStorage.getItem("IsAdmin") == null) {

      }
      //  $('.btnsave').hide();
      $("#makeEditable").hide();
      $("#card_edit").hide();
      $("#tbl_edit").hide();
      $("#success-alert").hide();
      $("#btn_edit_submit").hide();
      $('#makeEditable').SetEditable({


      });
      $("#disss").attr("readonly", true);
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

      //edit page
      $('#ddl_prodl1_edit').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Product",
      });
      $('#ddl_prodl2_edit').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Product",
      });
      $('#ddl_prodl3_edit').select2({
        closeOnSelect: true,
        minimumResultsForSearch: -1,
        placeholder: "Select Sub Product",
      });

    });
    var page = "admin";
    var prd_level = "p1";
    let prodid = 0;

    this.http.get(this.prod_service.getUrl() + 'api/Products/' + prd_level + '/' + prodid).subscribe(
      (res1: any) => {
        p = res1;
        this.prod_lst = res1;
        this.prod_lst.forEach(e => {
          if (e.parentId == null) {
            //var newOption = new Option(e.prodDesc, e.prodDesc, false, false);
            $('#ddl_prodl1').append('<option value="' + e.prodId + '">' + e.prodDesc + '</option>');//.trigger('change');
            $('#ddl_prodl1_edit').append('<option value="' + e.prodId + '">' + e.prodDesc + '</option>');//.trigger('change');
          }
        })

      });

    $("#ddl_prodl1").change(function () {
      $("#ddl_prodl2").empty();
      $('#ddl_prodl2').append('<option />');
      prodid = $('#ddl_prodl1 :selected').val();
      p.forEach(g => {
        if (g.prodId == prodid) {
          modelfolder_name01 = g.prodDesc;
          modelfolder_name = modelfolder_name01.replace("-", "_");
        }
        if (g.parentId == prodid) {
          $('#ddl_prodl2').append('<option value="' + g.prodId + '">' + g.prodDesc + '</option>');
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

    //edit page
    $("#ddl_prodl1_edit").change(function () {
      $("#ddl_prodl2_edit").empty();
      $('#ddl_prodl2_edit').append('<option />');
      prodid = $('#ddl_prodl1_edit :selected').val();
      p.forEach(g => {
        if (g.prodId == prodid) {
          modelfolder_name01 = g.prodDesc;
          modelfolder_name = modelfolder_name01.replace("-", "_");
        }
        if (g.parentId == prodid) {
          $('#ddl_prodl2_edit').append('<option value="' + g.prodId + '">' + g.prodDesc + '</option>');
        }
      });
    });

    $("#ddl_prodl2_edit").change(function () {
      prodid_l2_edit = $('#ddl_prodl2_edit :selected').val();


      $("#ddl_prodl3_edit").empty();
      $('#ddl_prodl3_edit').append('<option />');
      p.forEach(g => {
        if (g.parentId == prodid_l2_edit) {
          $('#ddl_prodl3_edit').append('<option value="' + g.prodId + '">' + g.prodDesc + '</option>');

        }
        else {
          $('#ddl_prodl3_edit').hide();
        }
      });

    });

    $("#ddl_prodl3_edit").change(function (e) {

      prodid_l3_edit = $('#ddl_prodl3_edit :selected').val();
      prod_desc = $('#ddl_prodl3_edit :selected').text();

    });
    //table data


  }

  OnFileSelect(event) {

    let time = "";
    let image_name = "";
    //event.target.files[0].name = selected_filename;
    this.selectedfile = event.target.files[0];
    // alert(this.selectedfile.name);
    const oldFileItem: File = event.target.files[0];
    if (prodid_l3 != "") {
      var dt = new Date();
      time = dt.getHours().toString() + dt.getMinutes().toString() + dt.getSeconds().toString() + dt.getMilliseconds().toString();
      image_name = dt.getDate().toString() + dt.getMonth().toString() + dt.getFullYear().toString() + time;
      this.http.get(this.prod_service.getUrl() + 'api/Productmodels/' + prodid_l3 + '/' + "adminpage").subscribe((e: any) => {

        selected_filename = $("#modle_code")[0].value + image_name + '.jpg';// this.selectedfile.name;
        // alert(selected_filename);
        const newFile: File = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
        filename = newFile.name;
        let formData: FormData = new FormData();
        formData.append('file', newFile, newFile.name);
        formData.append('folderName', modelfolder_name);


        if (isDevMode()) {
          // let params = { 'formdata': formData, 'foldername': 'example' }
          formData.append('mode', "dev");
        }
        else
          formData.append('mode', "prod");

        this.http.post(this.prod_service.getUrl() + 'api/FileUpload', formData).subscribe(e => { });


      });
    }
    else {
      var dt = new Date();
      time = dt.getHours().toString() + dt.getMinutes().toString() + dt.getSeconds().toString() + dt.getMilliseconds().toString();
      image_name = dt.getDate().toString() + dt.getMonth().toString() + dt.getFullYear().toString() + time;
      this.http.get(this.prod_service.getUrl() + 'api/Productmodels/' + prodid_l2 + '/' + "adminpage").subscribe((e: any) => {

        selected_filename = $("#modle_code")[0].value + image_name + '.jpg';// this.selectedfile.name;
        const newFile: File = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
        filename = newFile.name;
        let formData: FormData = new FormData();
        formData.append('file', newFile, newFile.name);
        formData.append('folderName', modelfolder_name);


        if (isDevMode()) {
          formData.append('mode', "dev");
        }
        else
          formData.append('mode', "prod");

        this.http.post(this.prod_service.getUrl() + 'api/FileUpload', formData).subscribe(
          (e: any) => {

          });
      });
    }

  }

  save() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }

    if (prodid_l3 != "") {
      //inserting into prod model
      prod_desc = $("#modle_desc").val();
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
        $("#modle_code").val('');
        $("#dis").val('');
        $("#max_price").val('');
        $('#ddl_prodl1').select2('val', '0');
        $("#file").val('');
        $("#modle_desc").val('');
        $('#ddl_prodl3').select2('val', '0');
      });
    }
    else {
      prod_desc = $("#modle_desc").val();
      var test: Prod_model = { ProdId: stringtonum(prodid_l2), ModelCode: $("#modle_code")[0].value, ModelDesc: prod_desc, ModelLink: "assets/" + modelfolder_name + "/" + filename, DtCreate: null, DtModify: null, IsActive: 1 };
      this.http.post(this.prod_service.getUrl() + 'api/Productmodels', test).subscribe((e: any) => {
        let dis_value = $("#dis").val();
        let disc = dis_value / 100;
        let sp = ($("#max_price")[0].value - ($("#max_price")[0].value * disc));
        //alert(sp);
        $("lbl_price").text(sp);
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
        $("#modle_code").val('');
        $("#dis").val('');
        $("#max_price").val('');
        $('#ddl_prodl1').select2('val', '0');
        $("#file").val('');
        $("#modle_desc").val('');
      });
    }
  }

  edit() {
    $("#Admin").hide();
    $("#card_edit").show();
    $("#tbl_edit").show();
    $("#card_create").hide();
    $("#btn_edit_submit").show();
    $("#makeEditable").SetEditable({


    });
  }

  submit() {


    $("#card_create").hide();
    if (prodid_l3_edit != undefined) {
      this.http.get(this.prod_service.getUrl() + 'api/Pricedetails/' + "edit_page" + "/" + prodid_l3_edit).subscribe((e: any) => {
        this.price_detail = e;
        if (e.length > 0)
          $("#makeEditable").show();
        else {
          $("#danger-alert").show();
          $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#danger-alert").slideUp(1000);
          });
        }
      });

    }
    else {

      this.http.get(this.prod_service.getUrl() + 'api/Pricedetails/' + "edit_page" + "/" + prodid_l2_edit).subscribe((e: any) => {
        this.price_detail = e;
        if (e.length > 0)
          $("#makeEditable").show();
        else {
          $("#danger-alert").show();
          $("#danger-alert").fadeTo(2000, 500).slideUp(500, function () {
            $("#danger-alert").slideUp(1000);
          });
        }
      });
    }

  }

  btn_row_click(e, i) {

    for (let j = 0; j < $("table")[2].children[1].children[i].children.length; j++) {
      if ($("table")[2].children[1].children[i].cells[j].children.length > 0) {
        if ($("table")[2].children[1].children[i].cells[j].children[0].className == "edit") {
          $("table")[2].children[1].children[i].cells[j].children[0].disabled = false;
    
          //mrp
        }
      }
    }
    for (let s = 1; s <= 2; s++) {

      // $("table")[2].children[1].children[i].children[6].children[0].children[0].hidden = false;
      $("table")[2].children[1].children[i].children[8].children[s].children[0].hidden = false;
    }

    $("table")[2].children[1].children[i].children[8].children[0].hidden = true;
  }


  btn_newsave(i) {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }
    let mrp_new = $("table")[2].children[1].children[i].cells[3].children[0].value;
    // alert(mrp_new);
    let disc_new = $("table")[2].children[1].children[i].cells[4].children[0].value;
    //  alert(disc_new);
    let model_id_edit = $("table")[2].children[1].children[i].cells[2].innerText;
    let disc = stringtonum(disc_new) / 100;
    let sp = (mrp_new - (mrp_new * disc));
    let detid_edit = $("table")[2].children[1].children[i].cells[1].innerText;
    var pd_edit: pricedetail = {
      PriceDetId: stringtonum(detid_edit),
      maxRetailPrice: stringtonum(mrp_new), percentDisc: stringtonum(disc_new), SellingPrice: sp,
      ModelId: stringtonum(model_id_edit), DtEffectStart: null,
      DtEffectEnd: null, DtModify: null
    };
    this.http.put(this.prod_service.getUrl() + 'api/Pricedetails/' + stringtonum(detid_edit), pd_edit).subscribe(e => {
      $("table")[2].children[1].children[i].children[8].children[0].hidden = true;
      $("#btn_edit_submit").click();
    });


    //this.submit();
    // $("#btn_edit_submit").click();
    //this.http.get(this.prod_service.getUrl() + 'api/Pricedetails/' + "edit_page" + "/" + prodid_l2_edit).subscribe((e: any) => {
    //  this.price_detail = e;
    //});
    this.btn_newcancel(i);
  }

  btn_newcancel(i) {
    for (let j = 0; j < 6; j++) {
      if ($("table")[2].children[1].children[i].cells[j].children.length > 0) {
        if ($("table")[2].children[1].children[i].cells[j].children[0].className == "edit") {
          $("table")[2].children[1].children[i].cells[j].children[0].disabled = true;
          $("table")[2].children[1].children[i].cells[j].children[0].value = actual_mrp;
          $("table")[2].children[1].children[i].cells[j].children[0].value = actual_disc;
        }
      }
    }

    for (let s = 1; s <= 2; s++) {

      // $("table")[2].children[1].children[i].children[6].children[0].children[0].hidden = false;
      $("table")[2].children[1].children[i].children[8].children[s].children[0].hidden = true;
    }

    $("table")[2].children[1].children[i].children[8].children[0].hidden = false;

  }

  back() {
    $("#makeEditable").hide();
    $("#card_edit").hide();
    $("#tbl_edit").hide();
    $("#card_create").show();
    $("#Admin").show();
    $('#ddl_prodl1_edit').select2('val', '0');
    $('#ddl_prodl2_edit').select2('val', '0');
    $('#ddl_prodl3_edit').select2('val', '0');
  //  location.reload();
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
