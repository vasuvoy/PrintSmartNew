import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { HttpRequest } from '@angular/common/http';
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
  ngOnInit() {

    $(document).ready(function () {
      $("#inner_div_idcards").hide();
      $("#div_idcards img").click(function (e) {
        $("#div_idcards").hide();
        $("#inner_div_idcards").show();
        var src = e.currentTarget.currentSrc;
        $("#img_selected_idcard").attr("src", src);

      });
    });
   
  }

  handleFileInput(file: FileList) {
    this.fileupload = file.item(0);
    var image_type = file.item(0).type;
    alert(image_type);
  }

  Submit() {
    
  }
  //handleFileInput(files: FileList) {
  //  this.fileToUpload = files.item(0);
  //}
}
