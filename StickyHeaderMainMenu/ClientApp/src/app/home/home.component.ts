import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public router: Router)
  //private productService: ProductService
  {

  }

  redirect() {
    //$("img").click(function () {
    //  var loc = $(this).attr("alt");
    //  //alert(loc);
    //  this.router.navigate(['/wallpapers']);
    //  //var loc_str = loc.replace("Img", "3DImages");
    //  //$("#img_ex_wallpaperdesign").attr("src", loc_str);
    //});
    var src = $("div").find('.carousel-inner').find('.active')[2].firstChild.alt;
    if (src == "3dwallpapers") {
      this.router.navigate(['/wallpapers']);
    }
    else if (src == "Tshirt") {
      this.router.navigate(['/Tshirts']);
    }
    else {

    }
  }
  ngOnInit() {
    
    $(document).ready(function () {
      

      $('.carousel').carousel({
        
      })

    });
  }

 
}
