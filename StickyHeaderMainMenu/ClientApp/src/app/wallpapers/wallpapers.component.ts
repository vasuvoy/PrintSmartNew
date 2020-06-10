import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-wallpapers',
  templateUrl: './wallpapers.component.html',
  styleUrls: ['./wallpapers.component.css']
})
export class wallpapersComponent implements OnInit {
  ngOnInit() {
    $(document).ready(function () {
      $('.carousel').carousel({

      })
      $("img").click(function () {
        var loc = $(this).attr("src");
        var loc_str = loc.replace("Img", "3DImages");
        $("#img_ex_wallpaperdesign").attr("src", loc_str);
      });
    });

  }
}
