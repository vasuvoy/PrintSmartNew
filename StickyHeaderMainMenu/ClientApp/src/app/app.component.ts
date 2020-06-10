import { Component, OnInit } from '@angular/core';
import { Product } from './entities/product.entity';
import { ProductService } from './services/product.service';
import { SharedService } from './services/shared.service';
import { Router } from '@angular/router';

declare var $: any;
let count: number;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
})
export class AppComponent implements OnInit {
  cartItemCount: number = 0
  login_text: string = "Sign In";
  public products: Product[];
  constructor(private _exampleService: ProductService, private router: Router,private _sharedservice: SharedService) {

  }
  ngOnInit() {
    
    this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
    this._sharedservice.loginMessage.subscribe(msg => this.login_text = msg);
    //function theFunction() {

    //  if (this.login_text == 'Sign Out') {
    //    alert('sign out');
    //    this._sharedservice.loginSuccess("Sign In");
    //    this._sharedservice.loginMessage.subscribe(msg => this.login_text = msg);
    //    this.router.navigateByUrl('/')
    //  }
    //}
    $(document).ready(function () {
      var $window = $(window);
      function checkWidth() {
        if ($window.width() >= 768) {
          $('.navbar-collapse').removeClass('in').addClass('collapse');
        }
      }
      $(window).resize(checkWidth);
      $(".dropdown").hover(
        function () {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideToggle(900);
          $('#photogifts_submenu').hide();
          $('#calendar_submenu').hide();
          $('#banner_submenu').hide();
          $('#invitation_submenu').hide();
          $('#label_submenu').hide();
          $('#MAG_submenu').hide();
          $('#pens_submenu').hide();
          $('#visitingcard_submenu').hide();
          $('#SLS_submenu').hide();
          $('#3Dwall_submenu').hide();
          $('#Kitchen_submenu').hide();
          $('#interior_submenu').hide();
          $('#trophy_submenu').hide();
          $(this).toggleClass('open');
        },

        function () {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("3000");
          $(this).toggleClass('open');
        }
      );
      $("#photogift_menu").hover(
        function () { $('#photogifts_submenu').show(); }
      );
      $("#calendar_menu").hover(
        function () { $('#calendar_submenu').show(); }
      );
      $("#banner_menu").hover(
        function () { $('#banner_submenu').show(); }
      );
      $("#invitation_menu").hover(
        function () { $('#invitation_submenu').show(); }
      );
      $("#label_menu").hover(
        function () { $('#label_submenu').show(); }
      );
      $("#MAG_menu").hover(
        function () { $('#MAG_submenu').show(); }
      );
      $("#pens_menu").hover(
        function () { $('#pens_submenu').show(); }
      );
      $("#visitingcard_menu").hover(
        function () { $('#visitingcard_submenu').show(); }
      );
      $("#SLS_menu").hover(
        function () { $('#SLS_submenu').show(); }
      );
      $("#3Dwall_menu").hover(
        function () { $('#3Dwall_submenu').show(); }
      );
      $("#Kitchen_menu").hover(
        function () { $('#Kitchen_submenu').show(); }
      );
      $("#interior_menu").hover(
        function () { $('#interior_submenu').show(); }
      );
      $("#trophy_menu").hover(
        function () { $('#trophy_submenu').show(); }
      );

      $('#media').carousel({
        pause: false,
        interval: false,
      });

      $('.dropdown-menu a').click(function () {
        $('#products_list').hide();
        $('#services_list').hide();
      });

    });

    
  
  }
  isExpanded = false;

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}

