import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { HttpRequest, HttpClient } from '@angular/common/http';
import { Item } from '../entities/item.entity';

declare var $: any;


@Component({
  selector: 'app-IdCards',
  templateUrl: './IdCards.component.html',
  styleUrls: ['./IdCards.component.css']
})
export class IdCardsComponent implements OnInit {
  fileupload: File = null;
  //fileToUpload: File = null;
  public img_list: visitingcardsimg_list[] = [];
  constructor(public router: Router, private httpClient: HttpClient)
  //private productService: ProductService
  {
  }
  ngOnInit() {

    $(document).ready(function () {
      $("#inner_div_idcards").hide();
      $("#img_idcards").click(function (e) {
        debugger;
        $("#div_idcards").hide();
        $("#inner_div_idcards").show();
        var src = e.currentTarget.currentSrc;
        $("#img_selected_idcard").attr("src", src);

      });
    });

    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + localStorage.getItem("Prodl3Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });
  }

  handleFileInput(file: FileList) {
    this.fileupload = file.item(0);
    var image_type = file.item(0).type;
    alert(image_type);
  }

  imgclick(e) {

    $("#div_idcards").hide();
    $("#inner_div_idcards").show();
    var src = "assets/VisitingCards/Blank-ID-Card-Horz.png";

    $("#img_selected_idcard").attr("src", src);
  }

  myfun() {

    $('#txt_name').summernote({
      placeholder: 'write here...',
      width: 450,
      height: 200,
      tooltip: false,
      toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['color', ['color']]
      ],
      callbacks: {
        onKeyup: function (e) { }
      }
    });
 
  }

  Submit() {
    
  }
}

export class visitingcardsimg_list {
  ModelId: number;
  ProdId: number;
  ModelDesc: string;
  ModelLink: string;
  IsActive: number;
}
