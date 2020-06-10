import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-invitation-cards',
  templateUrl: './invitation-cards.component.html',
  styleUrls: ['./invitation-cards.component.css']
})
export class InvitationCardsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#div_invicards img").click(function (e) {
        $("#myModal").modal('show');
        var src = e.currentTarget.currentSrc;
        $("#img_selected_invicard").attr("src", src);

        // ctx.strokeRect(90, 90, 80, 80);


        $('#invi_summernote').summernote({
          placeholder: 'write here...',
          focus: true,
          width: 450,
          height: 200,
          toolbar: [
            ['style', ['bold', 'italic', 'underline', 'clear']],
            ['font', ['superscript', 'subscript']],
            ['fontsize', ['fontsize']],
            ['color', ['color']],
            ['height', ['height']],
            ['para', ['ul', 'ol', 'paragraph']],
          ],
          tooltip: false,

          callbacks: {
            onKeyup: function (e) {
              setTimeout(function () {
                var plainText = $("#invi_summernote").summernote("code");

              }, 200);
            }
          }
        });
      });

      $("#btn_prview").click(function (e) {
        $("#myPrvModal").modal('show');
        $("#img_selected_invicard_preview").attr("src", "assets/Img/INVITATIONCARD1_empty.jpg");
        $("#div_preview").html($("#invi_summernote").summernote("code"));
      });
    });
  }

}
