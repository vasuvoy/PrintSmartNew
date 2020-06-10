import { Component, OnInit } from '@angular/core';
import { Product } from '../entities/product.entity';
import { ProductService } from '../services/product.service';

declare var $: any;
@Component({
  selector: 'nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
  providers: [ProductService]
})
export class NavMenuComponent implements OnInit  {
  public products: Product[];
  constructor( private _exampleService: ProductService)
  //private productService: ProductService
  {
  }
  ngOnInit() {
   
    $(document).ready(function () {
      $(".dropdown").hover(
        function () {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
          $('#photogifts_submenu').hide();
          $(this).toggleClass('open');
        },

        function () {
          $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
          $(this).toggleClass('open');
        }
      );
      $("#photogift_menu").hover(
        function () { $('#photogifts_submenu').show(); }
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
