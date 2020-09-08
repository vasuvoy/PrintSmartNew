import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Images } from '../entities/Images.entity';
declare var $: any;
@Component({
  selector: 'app-invitation-cards',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./invitation-cards.component.css']
})
export class InvitationCardsComponent implements OnInit {

  public img_list: Images;
  public position_lbl: img_position[] = [];

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    $(document).ready(function () {
      $("#innerdiv_invicards").hide();
      //$("#div_invicards img").click(function (e) {
       
        
      //  //$("#myModal").modal('show');
      //  //var src = e.currentTarget.currentSrc;
      //  //$("#img_selected_invicard").attr("src", src);

      //  // ctx.strokeRect(90, 90, 80, 80);


      ////  $('#invi_summernote').summernote({
      ////    placeholder: 'write here...',
      ////    focus: true,
      ////    width: 450,
      ////    height: 200,
      ////    toolbar: [
      ////      ['style', ['bold', 'italic', 'underline', 'clear']],
      ////      ['font', ['superscript', 'subscript']],
      ////      ['fontsize', ['fontsize']],
      ////      ['color', ['color']],
      ////      ['height', ['height']],
      ////      ['para', ['ul', 'ol', 'paragraph']],
      ////    ],
      ////    tooltip: false,

      ////    callbacks: {
      ////      onKeyup: function (e) {
      ////        setTimeout(function () {
      ////          var plainText = $("#invi_summernote").summernote("code");

      ////        }, 200);
      ////      }
      ////    }
      ////  });
      //});

      $("#btn_prview").click(function (e) {
        $("#myPrvModal").modal('show');
        $("#img_selected_invicard_preview").attr("src", "assets/Img/INVITATIONCARD1_empty.jpg");
        $("#div_preview").html($("#invi_summernote").summernote("code"));
      });
    });

    var i ="div_bride";

    $("#div_bride,#div_bride1").click(function (e) {
      $('#div_bride').summernote({
        tooltip: false,
right:200,
        toolbar: [
          ['style', ['bold', 'italic', 'underline', 'clear']],
          ['font', ['superscript', 'subscript']],
          //['fontsize', ['fontsize']],
          ['color', ['color']],
          ['mybutton', ['close']],
        ],
        buttons: {
          close: closebtn
        },
        callbacks: {
          onKeyup: function () {
            $("#lbl_bride").show();
           
              var plainText = $($("#div_bride").summernote("code")).text();
              if (e.currentTarget.children[0].id == "lbl_bride") {
                $("#lbl_bride")[0].innerHTML = plainText;

              }
 
              if (e.currentTarget.children[0].id == "lbl_groom") {
                $("#lbl_groom")[0].innerHTML = plainText;
              }
          
          //  $("#div_bride").html(plainText);
          }
        }
      });
    });

    var closebtn = function (context) {
      var ui = $.summernote.ui;
      var button = ui.button({
        contents: '<i class="far fa-times-circle"></i>',
        click: function () {
          context.invoke('editor.inserttext', 'red');
          
          $("#div_bride").summernote('destroy');


        }
      });
      return button.render();
    }

    this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + localStorage.getItem("Prodl3Id")).subscribe
      ((res: any) => {
        this.img_list = res;
      });
  }

  imgclick() {
    function stringtonum(input: string) {
      var n = Number(input);
      return n;
    }

  //  $("#div_invicards").hide();
    $("#innerdiv_invicards").show();
    this.position_lbl = [{ bottom: 190, left: 168, label_text: "BRIDE NAME", position: "relative" }];
    this.position_lbl.push({ bottom: 150, left: 168, label_text: "GROOM NAME", position:"relative" });
    $("#innerdiv_invicards").show();
    $("#innerdiv_invicards").append('<label id="ID_item" >' + this.position_lbl[0].label_text + '</label><br /><hr />')
    $("#ID_item").css({ "color": "red", "bottom": this.position_lbl[0].bottom + 'px', "left": this.position_lbl[0].left, "position": this.position_lbl[0].position });
    $("#innerdiv_invicards").append('<label id="ID_item1" >' + this.position_lbl[1].label_text + '</label><br /><hr />')
    $("#ID_item").css({ "color": "red", "bottom": this.position_lbl[1].bottom + 'px', "left": this.position_lbl[1].left, "position": this.position_lbl[1].position  });
  }



}

export class img_position {
  bottom: number;
  left: number;
  label_text: string;
  position: string;
}
