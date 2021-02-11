(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Floor/Floor.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Floor/Floor.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div id=\"div_invicards\" style=\"width:500px !important;cursor:pointer\">\r\n          <div class=\"container\" style=\"width:500px !important\">\r\n            <div class=\"row\" style=\"width:800px !important\">\r\n              <div class=\"col-sm\">\r\n                <img src=\"assets/Floor/FL1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <img src=\"assets/Floor/FL2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n              </div>\r\n              <div class=\"col-sm\">\r\n                <img src=\"assets/Floor/FL3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n              </div>\r\n            </div>\r\n            <br />\r\n            <div class=\"row\" style=\"width:800px !important\">\r\n              <div class=\"col-sm\">\r\n                <img src=\"assets/Floor/FL4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- 21:9 aspect ratio -->\r\n      <!--<div class=\"embed-responsive embed-responsive-21by9\">\r\n    <iframe class=\"embed-responsive-item\" src=\"assets/Videos/Tiles.mp4\"></iframe>\r\n  </div>-->\r\n      <div class=\"col\">\r\n        <h3>Sample Video</h3>\r\n        <!-- 16:9 aspect ratio -->\r\n        <div class=\"embed-responsive embed-responsive-16by9\" style=\"width:300px;height:300px\">\r\n          <iframe class=\"embed-responsive-item\" src=\"assets/Videos/Tiles.mp4\"></iframe>\r\n        </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/IdCards/IdCards.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/IdCards/IdCards.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n  <div>\r\n    <div id=\"div_idcards\" style=\"width:500px !important;cursor:pointer\">\r\n      <div class=\"container\" style=\"width:500px !important\" >\r\n        <div class=\"row\" style=\"width:800px !important\" >\r\n          <div *ngFor=\"let img of img_list\">\r\n            <div class=\"col-sm\" >\r\n              <img id=\"img_idcards\" (click)=\"imgclick(img.modelLink)\" src=\"{{img.modelLink}}\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n            </div>\r\n            <br/>\r\n          </div>\r\n          <!--<div class=\"col-sm\">\r\n            <img src=\"assets/VistingCards/IDCARD2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n          </div>-->\r\n\r\n        </div>\r\n        <br />\r\n        <!--<div class=\"row\" style=\"width:800px !important\">\r\n          <div class=\"col-sm\">\r\n            <img src=\"assets/Img/IDCARD4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n          </div>\r\n\r\n        </div>-->\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"inner_div_idcards\" class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <img src=\"\" id=\"img_selected_idcard\" style=\"width:400px\" alt=\"selected img\" />\r\n        <label id=\"lbltext\">ggggggg</label>\r\n      </div>\r\n      <!--<div class=\"col\">\r\n    <label>Company Name:</label>\r\n    <br />\r\n    <label>Name:</label>\r\n    <br />\r\n    <label>Designation:</label> &nbsp;&nbsp;<input type=\"text\" placeholder=\"Name\" />\r\n    <br />\r\n    <label>ID No:</label> &nbsp;&nbsp;<input type=\"text\" placeholder=\"Name\" />\r\n    <br />\r\n    <label>Blood:</label> &nbsp;&nbsp;<input type=\"text\" placeholder=\"Name\" />\r\n    <br />\r\n    <label>Email:</label> &nbsp;&nbsp;<input type=\"text\" placeholder=\"Name\" />\r\n    <br />\r\n    <label>Phone No:</label> &nbsp;&nbsp;<input type=\"text\" placeholder=\"Name\" />\r\n  </div>-->\r\n      <div class=\"col\">\r\n        \r\n        <input class=\"e-input\" id=\"txt_name\" (click)=\"myfun();\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Name\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Designation\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter ID Number\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Blood Group\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Email Id\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Phone Number\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Joined Date\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Expire Date\" />\r\n        <br />\r\n        <input class=\"e-input\" style=\"width:170px\" type=\"text\" placeholder=\"Enter Employee Id\" />\r\n        <br />\r\n        <label for=\"file\">Picture Upload</label>\r\n        <input type=\"file\"\r\n               id=\"file\"\r\n               accept=\".jpeg,.jpg\"\r\n               (change)=\"handleFileInput($event.target.files)\">\r\n        <!--<br />\r\n        <input type=\"file\" #Image accept=\".jpg\" />\r\n        <br />\r\n        <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"Submit()\" id=\"btn_AddtoCart\"\r\n                style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n          Submit\r\n        </button>-->\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/Login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Login/Login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  <title></title>\r\n</head>\r\n<body>\r\n\r\n  <div class=\"container\" style=\"height:500px\">\r\n    <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\r\n      <div class=\"global-container\" style=\"width:400px\">\r\n        <div class=\"card login-form\">\r\n          <div class=\"card-body\">\r\n            <h3 class=\"card-title text-center\">Sign In</h3>\r\n            <div class=\"card-text\">\r\n              <form method=\"post\" action=\"\" id=\"loginform\">\r\n\r\n                <div class=\"form-group\">\r\n                  <label for=\"email\">Email address</label>\r\n                  <input type=\"email\" class=\"form-control form-control-sm\" name=\"email\" id=\"email\" aria-describedby=\"emailHelp\">\r\n                </div>\r\n                <div class=\"form-group\">\r\n                  <label for=\"pwd\">Password</label>\r\n                  <a href=\"#\" style=\"float:right;font-size:12px;\" id=\"forgotpwd\" [routerLink]=\"['/forgotpassword']\">Forgot password?</a>\r\n                  <input type=\"password\" class=\"form-control form-control-sm\" name=\"pwd\" id=\"pwd\">\r\n                </div>\r\n                <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"submit()\" style=\"background-color:lightseagreen;border-color:lightseagreen\">Sign in</button>\r\n\r\n                <div class=\"sign-up\">\r\n                  Don't have an account? <a href=\"#\" [routerLink]=\"['/Register']\" style=\"color:lightseagreen\">Create One</a>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Products/Product.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Products/Product.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n  <div class='row'>\r\n    <div class='col-md-6' style=\"border:dotted;height:200px;width:200px\">\r\n      <a href=\"#\">Promos</a>\r\n      <br />\r\n      <a href=\"#\">Discounts</a>\r\n      <br />\r\n      <a href=\"#\">Sale</a>\r\n    </div>\r\n    <div class='col-md-6'>\r\n\r\n      New products/services\r\n      <br>\r\n      <img src=\"assets/Img/brouchers.jpg\" style=\"height:100px;width:100px\" />\r\n      <img src=\"assets/Img/Postcards.jpg\" style=\"height:100px;width:100px\" />\r\n      <img src=\"assets/Img/brouchers.jpg\" style=\"height:100px;width:100px\" />\r\n      <img src=\"assets/Img/Postcards.jpg\" style=\"height:100px;width:100px\" />\r\n\r\n    </div>\r\n    <div class=\"container\">\r\n\r\n      <div class='row'>\r\n        <div class='col-md-8'>\r\n          <div class=\"carousel slide media-carousel\" id=\"media\">\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"item  active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-4\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/brouchers.jpg\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <a data-slide=\"prev\" href=\"#media\" class=\"left carousel-control\"></a>\r\n            <a data-slide=\"next\" href=\"#media\" class=\"right carousel-control\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Register/Register.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Register/Register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  <title></title>\r\n</head>\r\n<body>\r\n\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" style=\"color:lightseagreen;font-size:medium\"><b>Register</b></div>\r\n          <div class=\"card-body\">\r\n            <form id=\"registration\" action=\"\" method=\"post\">\r\n\r\n                <table class=\"table borderless\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"firstname\">First Name:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control\" name=\"firstname\" id=\"firstname\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"lastname\">Last Name:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"lastname\" id=\"lastname\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"email\">Email:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"email\" id=\"email\" style=\"width: 170px \" type=\"email\" required />\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"DOB\">Date Of Birth:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"DOB\" placeholder=\"YYYY-MM-DD\"  id=\"DOB\" style=\"width: 220px \" type=\"date\" required />\r\n                        <!--<div class=\"input-group date\" data-provide=\"datepicker\">\r\n            <input type=\"text\" class=\"form-control\">\r\n            <div class=\"input-group-addon\">\r\n              <span class=\"glyphicon glyphicon-th\"></span>\r\n            </div>\r\n          </div>-->\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"pwd\">Passowrd:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control\" name=\"pwd\" id=\"pwd\" style=\"width: 220px \" type=\"password\" required />\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:175px\">\r\n                        <label class=\"lbl_style\" for=\"Confirmpwd\">Confirm Password:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"Confirmpwd\" id=\"Confirmpwd\" style=\"width: 220px \" type=\"text\" required />\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"Phonenum\">Phone Number:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"Phonenum\" id=\"Phonenum\" style=\"width: 220px \" type=\"number\" required />\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"SecurityQus\">Security Question:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <!--<input class=\"form-control \" id=\"SecurityQus\" style=\"width: 170px \" type=\"text\" required />-->\r\n                        <select class=\"form-control select2\" required name=\"ddl_secqus\" id=\"ddl_secqus\" style=\"width:220px\">\r\n                          <option value=\"\"></option>\r\n\r\n                        </select>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"ans\">Answer:</label><span style=\"color:red\">*</span>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"ans\" id=\"ans\" style=\"width: 220px \" type=\"text\" required />\r\n                      </td>\r\n                    </tr>\r\n\r\n                  </tbody>\r\n                </table>\r\n      \r\n\r\n                <div class=\"col-md-6 offset-md-4\">\r\n                  <button type=\"submit\" (click)=\"register();\" style=\"background-color:lightseagreen\" id=\"register\" class=\"btn btn-primary\">\r\n                    Register\r\n                  </button>\r\n                </div>\r\n</form>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Tshirts/Tshirts.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Tshirts/Tshirts.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  <title></title>\r\n  <style>\r\n\r\n  </style>\r\n</head>\r\n<body>\r\n  <div class=\"container\" id=\"outer_div_tshirts\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div id=\"div_main\">\r\n          <h3>\r\n            T-Shirts\r\n          </h3>\r\n          <div style=\"width:400px\">\r\n            <div id=\"myCarousel\"  class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"false\">\r\n              <!-- Indicators -->\r\n              <div >\r\n                <ol class=\"carousel-indicators\">\r\n                  <li data-target=\"#myCarousel\" *ngFor=\"let img of img_list;let i=index\"\r\n                      [attr.data-slide-to]=\"i\" [ngClass]=\"{'active' : i == 0}\"></li>\r\n                  <!--<li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"6\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"7\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"8\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"9\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"10\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"11\"></li>-->\r\n\r\n                </ol>\r\n\r\n                <!-- Wrapper for slides -->\r\n                <div class=\"carousel-inner\">\r\n                  <div class=\"item\" *ngFor=\"let img1 of img_list;let i = index\" [ngClass]=\"{'active': i == 0}\">\r\n                    <img src=\"{{img1.modelLink}}\" alt=\"Los Angeles\">\r\n                  </div>\r\n\r\n                  <!--<div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/2.jpg\" alt=\"Chicago\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/3.jpg\" alt=\"New york\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/4.jpg\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/5.jpg\" alt=\"Chicago\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/6.jpg\" alt=\"New york\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/7.jpg\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/8.jpg\" alt=\"Chicago\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/9.jpg\" alt=\"New york\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/10.jpg\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/11.jpg\" alt=\"Chicago\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/12.jpg\" alt=\"New york\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/13.jpg\" alt=\"New york\">\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/Tshirt_Imgs/14.jpg\" alt=\"New york\">\r\n    </div>-->\r\n                  <!-- Left and right controls -->\r\n                  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n                    <span class=\"glyphicon glyphicon-chevron-left\" style=\"color:darkblue\"></span>\r\n                    <span class=\"sr-only\">Previous</span>\r\n                  </a>\r\n                  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n                    <span class=\"glyphicon glyphicon-chevron-right\" style=\"color:darkblue\"></span>\r\n                    <span class=\"sr-only\">Next</span>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br />\r\n        <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"shopnow()\" id=\"btn_addtocart\"\r\n                style=\"background: lightseagreen;border-color: lightseagreen;color: white\">\r\n          Shop Now\r\n        </button>\r\n      </div>\r\n      <div class=\"col\" style=\"right:70px\">\r\n        <h3>\r\n          Custom T-Shirts\r\n        </h3>\r\n        <div style=\"position: relative; left: 0; top: 0;\">\r\n          <img id=\"img_tshirt_modal\" style=\"position: relative; left: 0; top: 0;width:400px\" src=\"assets/Tshirt_Imgs/15.jpg\" />\r\n        </div>\r\n        \r\n      </div>\r\n      <!--<div class=\"col\">\r\n            <h3>\r\n              Custom T-Shirts\r\n            </h3>\r\n            <div style=\"position: relative; left: 0; top: 0;\">\r\n              <img id=\"img_tshirt_modal1\" style=\"position: relative; left: 0; top: 0;\" src=\"assets/Tshirt_Imgs/15.jpg\" />\r\n              <div style=\"border:1px solid dotted;width:100px;height:100px\">\r\n        <img src=\"\" hidden=\"hidden\" id=\"img_selected\" style=\"position: absolute;border:dotted;border-color:red; left: 65px; top: 100px;width:100px;height:100px\" />\r\n      </div>\r\n              <div id=\"img_div_write1\" style=\"position: absolute; left: 65px; top: 100px;width:100px\">\r\n                <img id=\"img_tshirt_write1\" style=\"position: absolute; left: 0px; top: 0px;width:100px\"\r\n                     src=\"assets/Img/download.png\" />\r\n\r\n                <img src=\"\" hidden=\"hidden\" id=\"img_selected\" style=\"position: absolute;border:dotted;border-color:red; left: 65px; top: 100px;width:100px;height:100px\" />\r\n              </div>\r\n              <div id=\"text_div\" hidden=\"hidden\" style=\"position: absolute;border:dotted;border-color:red; left: 65px; top: 100px;width:100px\"></div>\r\n            </div>\r\n          </div>-->\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div id=\"inner_div_basictshirts\" style=\"width:500px !important;cursor:pointer\">\r\n    <div class=\"container\" style=\"width:500px !important\">\r\n      <div class=\"row\" style=\"width:800px !important\">\r\n        <!--<div class=\"col-sm\">\r\n          <img src=\"assets/Tshirt_Imgs/1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n        </div>-->\r\n        <div *ngFor=\"let img of img_list\">\r\n          <div class=\"col-sm\">\r\n            <img id=\"img_tshirt\" (click)=\"imgclick(img.modelId,img.modelLink,img.modelDesc)\" src=\"{{img.modelLink}}\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n          </div>\r\n          <br />\r\n        </div>\r\n        \r\n      </div>\r\n      <br />\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" id=\"outer_div_customtshirts_cart\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div>\r\n          <h3>\r\n            T-Shirts\r\n          </h3>\r\n        </div>\r\n        <div style=\"position: relative; left: 0; top: 0;\">\r\n          <img id=\"img_tshirt_modal\" style=\"position: relative; left: 0; top: 0;width:400px\" src=\"assets/Tshirt_Imgs/15.jpg\" />\r\n\r\n          <!--<img id=\"img_tshirt_write\" style=\"position: absolute; left: 65px; top: 100px;width:100px\"\r\n  src=\"assets/Img/download.png\" />-->\r\n          <!--<div id=\"text_div\" style=\"line-height:0.6; position: absolute;border:dotted;border-color:red; left: 156px; top: 100px;width:100px\">-->\r\n          <div id=\"outer_editor_div\" style=\" width:100px\">\r\n            <div id=\"img_tshirt_write\" style=\"position: absolute; left:156px;top:100px\">Custom Text</div>\r\n          </div>\r\n          <!--</div>-->\r\n        </div>\r\n      </div>\r\n      <div class=\"col\" id=\"div_tshirt_fields\">\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_gender\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n          <option value=\"F\">F</option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_size\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n          <option value=\"XS\">Extra small</option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n\r\n        <select class=\"js-example-basic-single\" id=\"ddl_Qty\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n          <option value=\"1\">1</option>\r\n          <option value=\"2\">2</option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n\r\n        <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"AddToCart_custom()\" id=\"btn_AddtoCart\"\r\n                style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n          Add to cart\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" id=\"outer_div_tshirts_cart\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div>\r\n          <h3>\r\n            T-Shirts\r\n          </h3>\r\n        </div>\r\n        <div id=\"div_img_cart\">\r\n          <img src=\"\" id=\"img_selected_tshirt\" style=\"width:300px\" alt=\"Los Angeles\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <br />\r\n        <label style=\"font:bold\" id=\"lbl_desc\"></label>\r\n\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_gender1\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_size1\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n\r\n        <select class=\"js-example-basic-single\" id=\"ddl_Qty1\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n          <option value=\"1\">1</option>\r\n          <option value=\"2\">2</option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n\r\n        <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"AddToCart()\" id=\"btn_AddtoCart\"\r\n                style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n          Add to cart\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div id=\"div_child\" hidden=\"hidden\">\r\n\r\n    <div style=\"vertical-align:middle;text-align:center\">\r\n      <img id=\"img_tshirt_modal\" style=\"height:400px;width:400px\" src=\"assets/Img/tshirt.jpg\" />\r\n\r\n    </div>\r\n\r\n    <!--<map name=\"planetmap\">\r\n      <area shape=\"rect\" href=\"#img_tshirt_write\" style=\"border:1px solid red\" coords=\"0,0,82,126\" alt=\"Sun\">\r\n      <area shape=\"circle\" coords=\"90,58,3\" alt=\"Mercury\" href=\"\">\r\n      <area shape=\"circle\" coords=\"124,58,8\" alt=\"Venus\" href=\"\">\r\n    </map>-->\r\n\r\n    <div class='wrapper'>\r\n      <div class='firstDiv' id=\"txtCustom\" style=\"overflow:hidden;width:150px;height:150px;border:dotted;border-color:black;margin:0 auto;\">\r\n      </div>\r\n      <div class='secondDiv' id=\"sample\" hidden=\"hidden\" style=\"width:150px;height:150px;border:dotted;border-color:red;color:red\">\r\n        <img id=\"scnddiv_img\" src=\"\" />\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div id=\"div_child1\" hidden=\"hidden\">\r\n    <img id=\"img_child1\" src=\"\" />\r\n  </div>\r\n\r\n  <!--<button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"draw()\" id=\"btn_design\"\r\n          style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n    draw canvas\r\n  </button>-->\r\n\r\n\r\n\r\n</body>\r\n\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-list/address-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/address-list/address-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\r\n</head>\r\n<body>\r\n  <h1>Address List</h1>\r\n  <table class=\"table\" id=\"table_address\">\r\n    <tbody>\r\n      <tr>\r\n        <td width=\"100px\">\r\n          <table class=\"table borderless\" id=\"table_address\">\r\n            <tbody>\r\n              <tr *ngFor=\"let address of address_list;let i=index\">\r\n                <td>\r\n                  <label>{{address.name}}</label><br />\r\n                  <label>{{address.addressLine1}}</label><span>,</span>\r\n\r\n                  <label>{{address.addressLine2}}</label><span>,</span>\r\n                  <label>{{address.addressLine3}}</label><span>,</span>\r\n                  <label>{{address.addressLine4}}</label><span>,</span>\r\n                  <label>{{address.addressLine5}}</label><br />\r\n                  <label>Contact no:</label>&nbsp;<label>{{address.contactNo}}</label><br />\r\n                  <label>Pincode:</label>&nbsp;<label>{{address.pinCode}}</label>\r\n                </td>\r\n                <td><button (click)=\"deladdr(address)\" class=\"btn btn-primary\" style=\"width:75px\">Remove</button>&nbsp;<span>|</span>&nbsp;<button class=\"btn btn-primary\" (click)=\"editaddr(address)\">Edit</button></td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </td>\r\n        <td width=\"100px\">\r\n          <table class=\"table borderless\" id=\"table_address\">\r\n            <tbody>\r\n              <tr *ngFor=\"let address of address_list1;let i=index\">\r\n                <td>\r\n                  <label>{{address.name}}</label><br />\r\n                  <label>{{address.addressLine1}}</label><span>,</span>\r\n\r\n                  <label>{{address.addressLine2}}</label><span>,</span>\r\n                  <label>{{address.addressLine3}}</label><span>,</span>\r\n                  <label>{{address.addressLine4}}</label><span>,</span>\r\n                  <label>{{address.addressLine5}}</label><br />\r\n                  <label>Contact no:</label>&nbsp;<label>{{address.contactNo}}</label><br />\r\n                  <label>Pincode:</label>&nbsp;<label>{{address.pinCode}}</label>\r\n                </td>\r\n                <td><button (click)=\"deladdr(address)\" class=\"btn btn-primary\" style=\"width:75px\">Remove</button>&nbsp;<span>|</span>&nbsp;<button class=\"btn btn-primary\" (click)=\"editaddr(address)\">Edit</button></td>\r\n\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n    \r\n    \r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  <title></title>\r\n  <style>\r\n  </style>\r\n</head>\r\n<body>\r\n\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"col-md-8\">\r\n        <div class=\"card\">\r\n          <div class=\"card-header\" style=\"color:lightseagreen;font-size:medium\"><b>Admin</b></div>\r\n          <div class=\"card-body\">\r\n            <form id=\"Admin\" action=\"\" method=\"post\">\r\n\r\n              <table class=\"table borderless\">\r\n                <tbody>\r\n                  <tr>\r\n                    <td><label class=\"lbl_style\" for=\"ddl_prodl1\">Select Product</label></td>\r\n                    &nbsp;\r\n                    <td>\r\n                      <select class=\"js-example-basic-single\" id=\"ddl_prodl1\" style=\"width:150px\">\r\n                        <option></option>\r\n\r\n                      </select>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><label class=\"lbl_style\" for=\"ddl_prodl2\">Select Product Header</label></td>\r\n                    &nbsp;&nbsp;\r\n                    <td>\r\n                      <select class=\"js-example-basic-single\" id=\"ddl_prodl2\" style=\"width:150px\">\r\n                        <option></option>\r\n\r\n                      </select>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><label class=\"lbl_style\" for=\"text\">Select Sub-Product</label></td>\r\n                    &nbsp;&nbsp;\r\n                    <td>\r\n                      <select class=\"js-example-basic-single\" id=\"ddl_prodl3\" style=\"width:150px\">\r\n                        <option></option>\r\n\r\n                      </select>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><label class=\"lbl_style\" for=\"text\">Enter Model Code</label></td>\r\n                    &nbsp;&nbsp;\r\n                    <td>\r\n                      <input class=\"e-input\" id=\"modle_code\" style=\"width:150px\" type=\"text\" placeholder=\"Enter Model Code\" />\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td><label class=\"lbl_style\" for=\"text\">Select Image</label></td>\r\n                    &nbsp;&nbsp;\r\n                    <td>\r\n                      <input type=\"file\"\r\n                             id=\"file\"\r\n                             accept=\".jpeg,.jpg\"\r\n                             (change)=\"OnFileSelect($event)\">\r\n                    </td>\r\n                  </tr>\r\n\r\n                </tbody>\r\n              </table>\r\n\r\n\r\n              <div class=\"col-md-6 offset-md-4\">\r\n                <button class=\"btn btn-primary\" type=\"button\" (click)=\"save()\">Save</button>\r\n                \r\n              </div>\r\n            </form>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  \r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <style>\r\n    .dropdown-menu {\r\n      min-width: 200px;\r\n      /*width: 180px;*/\r\n    }\r\n\r\n      .dropdown-menu.columns-2 {\r\n        min-width: 400px;\r\n      }\r\n\r\n      .dropdown-menu.columns-3 {\r\n        min-width: 600px;\r\n      }\r\n\r\n      .dropdown-menu li a {\r\n        padding: 5px 15px;\r\n        font-weight: 300;\r\n        color: #000000;\r\n      }\r\n\r\n        .dropdown-menu li a:hover {\r\n          text-decoration: none;\r\n          color: #262626;\r\n          background-color: white;\r\n          opacity: 1.0;\r\n          color: blue;\r\n        }\r\n\r\n    .multi-column-dropdown {\r\n      list-style: none;\r\n      margin: 0px;\r\n      padding: 0px;\r\n      color: #ff0000;\r\n    }\r\n\r\n      .multi-column-dropdown li a {\r\n        display: block;\r\n        clear: both;\r\n        line-height: 1.428571429;\r\n        color: #000000;\r\n        white-space: normal;\r\n      }\r\n\r\n        .multi-column-dropdown li a:hover {\r\n          text-decoration: none;\r\n          color: #262626;\r\n          /*background-color: #999;*/\r\n          opacity: 1.0;\r\n          color: blue;\r\n        }\r\n\r\n    .thwidth {\r\n      width:420px;\r\n    }\r\n    @media (max-width: 767px) {\r\n      .dropdown-menu.multi-column {\r\n        min-width: 240px !important;\r\n        overflow-x: hidden;\r\n        background-color: red;\r\n      }\r\n    }\r\n\r\n    @media (min-width: 768px) {\r\n      .navbar-collapse.in {\r\n        overflow-y: visible;\r\n      }\r\n    }\r\n\r\n\r\n\r\n    /*nav bar background colour custom*/\r\n    .navbar-custom {\r\n      background-color: lightseagreen;\r\n    }\r\n\r\n    /*.table td, .table th {\r\n      padding: .75rem;\r\n       vertical-align: text-top;\r\n      border-top: 1px solid #dee2e6;\r\n    }*/\r\n\r\n    i {\r\n      border: solid black;\r\n      border-width: 0 3px 3px 0;\r\n      display: inline-block;\r\n      padding: 3px;\r\n    }\r\n\r\n    .right {\r\n      transform: rotate(-45deg);\r\n      -webkit-transform: rotate(-45deg);\r\n      border-color: lightseagreen;\r\n    }\r\n\r\n    /*#signinddl:hover .dropdown-menu {\r\n      background-color: red;\r\n      display: block;\r\n    }*/\r\n\r\n    /*#divddlmenu a:hover {\r\n      background-color: #ddd;\r\n    }*/\r\n\r\n\r\n    .navbar-nav li:hover > ul.dropdown-menu {\r\n      display: block;\r\n    }\r\n\r\n    .nav .nav-pills li:hover > ul.dropdown-menu {\r\n      display: block;\r\n    }\r\n\r\n    #signinnav:hover {\r\n      display: block;\r\n    }\r\n    .dropdown-submenu {\r\n      position: relative;\r\n    }\r\n\r\n      .dropdown-submenu > .dropdown-menu {\r\n        top: 0;\r\n        left: 100%;\r\n        margin-top: -6px;\r\n      }\r\n\r\n    /* rotate caret on hover */\r\n    .dropdown-menu > li > a:hover:after {\r\n      text-decoration: underline;\r\n      transform: rotate(-90deg);\r\n    }\r\n\r\n    .table > thead > tr > th > ul > li:hover > ul.dropdown-menu {\r\n      display: block;\r\n    }\r\n\r\n    /*/----------------------/*/\r\n    /* Style the header with a grey background and some padding */\r\n\r\n  </style>\r\n</head>\r\n\r\n<body>\r\n  <div class=\"table-responsive-sm\">\r\n    <table class=\"table\">\r\n\r\n      <thead>\r\n        <tr>\r\n          <th scope=\"col\" class=\"thwidth\"><img src=\"assets/Img/Icon.jpg\" style=\"width:100px\" /></th>\r\n          <th scope=\"col\" class=\"thwidth\" style=\"vertical-align:middle;color:lightseagreen\"><h2>Print Smart</h2></th>\r\n\r\n          <th scope=\"col\" class=\"thwidth\" style=\"vertical-align: middle;text-align: center;color: lightseagreen\">\r\n            <!--<a href=\"#\" [routerLink]=\"['Login']\" onclick=\"return theFunction();\">{{login_text}}</a>-->\r\n            <!--<label id=\"lbl_login_name\">{{login_username}}souju</label>-->\r\n            <ul class=\"nav nav-pills\" style=\"width:20px\">\r\n              <li class=\"nav-item dropdown\" id=\"signinddl\">\r\n\r\n                <a class=\"nav-link dropdown-toggle\" id=\"signinnav\" data-toggle=\"dropdown\" href=\"#\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{login_username}}&nbsp;{{login_text}}</a>\r\n\r\n                <ul class=\"dropdown-menu\" id=\"products_list\" aria-labelledby=\"signinnav\" style=\"width:0px\">\r\n                  <li class=\"dropdown-submenu\">\r\n                    <a class=\"dropdown-item\" (click)=\" myaccount();\" [routerLink]=\"\">My Account</a>\r\n                    <a class=\"dropdown-item\" (click)=\" myaddress();\" [routerLink]=\"\" href=\"#\">My Address</a>\r\n                    <a class=\"dropdown-item\" id=\"changePwd\" [routerLink]=\"['forgotpassword']\" href=\"#\">{{change_pwd}}</a>\r\n                    <a class=\"dropdown-item\" (click)=\" signout();\" id=\"signout\" href=\"#\">{{signout_text}}</a>\r\n                  </li>\r\n                </ul>\r\n              </li>\r\n            </ul>\r\n          </th>\r\n        </tr>\r\n      </thead>\r\n\r\n    </table>\r\n\r\n    <div>\r\n\r\n      <nav class=\"navbar navbar-custom navbar-expand-lg navbar-dark \" style=\"margin-top:-33px !important\">\r\n\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n          <ul class=\"navbar-nav mr-auto\">\r\n\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\r\n            </li>\r\n            <li style=\"margin-left:40px\">    </li>\r\n            <!--sample&&&&&&&&&&&&&&&&&&&&&&(((((((((((((((((-->\r\n            <li class=\"nav-item dropdown active\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> Products </a>\r\n              <ul class=\"dropdown-menu\"  id=\"products_list\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n                <div *ngFor=\"let prodli of prodlist_main\" >\r\n                  <li class=\"dropdown-submenu\"  *ngFor=\"let x of prodli.mainmodel\">\r\n\r\n                    <a class=\"dropdown-item\" href=\"#\"  (mouseover)=\"MainMenuhyperlinkClick($event)\" id=\"{{x.ProdId}}\">{{x.ProdDesc}}&nbsp;&nbsp;<i *ngIf=\"x.productModel.length>0\"  class=\"right\"></i></a>\r\n\r\n                    <ul class=\"dropdown-menu multi-column \" *ngIf=\"x.productModel.length>0\" >\r\n     \r\n                        <div class=\"row\" >\r\n                          <div style=\"column-count:2\">\r\n                            <div *ngFor=\"let b of x.productModel\" >\r\n                              <div>\r\n                                <div *ngFor=\"let c of b.prdmodel\">\r\n\r\n\r\n\r\n                                  <ul class=\"multi-column-dropdown\" *ngIf=\"c.l2isHeader==0; else ex\">\r\n\r\n\r\n                                    <li style=\"font-size:small;color:black;\" id=\"{{c.l2prodId}}\">\r\n                                      <a href=\"#\" [routerLink]=\"[c.l2routerLink]\" (click)=\"subL2MenuhyperlinkClick($event)\" id=\"{{c.l2prodId}}\">{{c.l2prodDesc}}</a>\r\n                                    </li>\r\n                            \r\n\r\n                                  </ul>\r\n                                  <ng-template #ex>\r\n                                    <ul class=\"multi-column-dropdown\">\r\n                                      <!--<div  >-->\r\n                                      <li style=\"font-size:small;color:black;width:230px\">&nbsp;&nbsp;&nbsp;<strong>{{c.l2prodDesc}}</strong></li>\r\n                                      <ng-template #content>Pleasssss.</ng-template>\r\n                                      <ng-template #loggedOut>Please friend, login.</ng-template>\r\n                                      <div *ngFor=\"let d of c.testmodel\" style=\"overflow-wrap:break-word;word-wrap: break-word\">\r\n\r\n                                        <div *ngFor=\"let e of d.testmodel\" style=\"width:300px;overflow-wrap:break-word;word-wrap: break-word\">\r\n\r\n                                          <li id=\"{{e.L3ProdId}}\">\r\n                                            <a href=\"#\" [routerLink]=\"[e.RouterLink]\" (click)=\"subMenuhyperlinkClick($event)\" id=\"{{e.l3prodId}}\">{{e.l3prodDesc}}</a>\r\n                                          </li>\r\n\r\n                                        </div>\r\n                                      </div>\r\n\r\n                                      <!--</div>  -->\r\n                                    </ul>\r\n                                  </ng-template>\r\n\r\n                                </div>\r\n\r\n                              </div>\r\n\r\n                            </div>\r\n                          </div>\r\n                        \r\n                      </div>\r\n                    </ul>\r\n        \r\n                  </li>\r\n                </div>\r\n              </ul>\r\n            </li>\r\n            <!---------***********&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&>-->\r\n            \r\n            <li style=\"margin-left:40px\">    </li>\r\n\r\n            <li class=\"nav-item dropdown active\">\r\n              <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                Services\r\n              </a>\r\n              <ul class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" id=\"services_list\">\r\n                <li class=\"dropdown-submenu\" id=\"3Dwall_menu\">\r\n                  <a class=\"dropdown-item \" href=\"#\">3D wallpapers&nbsp; &nbsp;<i class=\"right\"></i></a>\r\n                  <ul class=\"dropdown-menu multi-column columns-3\" id=\"3Dwall_submenu\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4\">\r\n                        <ul class=\"multi-column-dropdown\">\r\n                          <li><a href=\"#\" [routerLink]=\"['wallpapers']\">Wall Decores</a></li>\r\n                          <li><a href=\"\" [routerLink]=\"['Floor']\">Floor Decores</a></li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"dropdown-submenu\" id=\"Kitchen_menu\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Modular kitchens&nbsp; &nbsp;<i class=\"right\"></i></a>\r\n                  <ul class=\"dropdown-menu multi-column columns-3\" id=\"Kitchen_submenu\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4\" style=\"width:500px\">\r\n                        <ul class=\"multi-column-dropdown\">\r\n                          <li style=\"width:100px\"><a href=\"#\">Customized Kitchen Cupboards Designs</a></li>\r\n                          <li><a href=\"#\" [routerLink]=\"['cupboards']\">Customized Bedroom Cupboards Designs</a></li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </ul>\r\n                </li>\r\n                <li class=\"dropdown-submenu\" id=\"interior_menu\">\r\n                  <a class=\"dropdown-item\" href=\"#\">Interior Designs&nbsp; &nbsp;<i class=\"right\"></i></a>\r\n                  <ul class=\"dropdown-menu multi-column columns-3\" id=\"interior_submenu\">\r\n                    <div class=\"row\">\r\n                      <div class=\"col-sm-4\" style=\"width:500px\">\r\n                        <ul class=\"multi-column-dropdown\">\r\n                          <li><a href=\"#\">Glass Elevations</a></li>\r\n                          <li><a href=\"#\" [routerLink]=\"['door']\">Doors</a></li>\r\n                          <li><a href=\"#\" [routerLink]=\"['windows']\">Windows</a></li>\r\n                          <li><a href=\"#\" [routerLink]=\"['glass-partition']\">Customized Glass Partion Printing </a></li>\r\n                          <li><a href=\"#\" [routerLink]=\"['steps-railing']\">Steps railing </a></li>\r\n                        </ul>\r\n                      </div>\r\n                    </div>\r\n                  </ul>\r\n                </li>\r\n\r\n              </ul>\r\n            </li>\r\n            <li style=\"margin-left:40px\"></li>\r\n            <li class=\"nav-item active\">\r\n              <a href=\"#\" class=\"nav-link\" [routerLink]=\"['admin']\">\r\n                Admin\r\n              </a>\r\n            </li>\r\n            <li style=\"margin-left:40px\"></li>\r\n            <li class=\"nav-item active\">\r\n              <a href=\"#\" class=\"nav-link\">\r\n                Contact\r\n              </a>\r\n            </li>\r\n            <li style=\"margin-left:40px\"></li>\r\n\r\n            <li class=\"nav-item active\">\r\n              <a href=\"#\" class=\"nav-link\" [routerLink]=\"['cart']\">\r\n                <span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n                <span id=\"cartcount\">{{cartItemCount}}</span>\r\n                Cart\r\n              </a>\r\n            </li>\r\n          </ul>\r\n\r\n          <!--<ul class=\"nav navbar-nav navbar-right\">\r\n        <form class=\"form-inline my-2 my-lg-0\">\r\n          <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" style=\"color:white\">Search</button>\r\n        </form>\r\n        </ul>-->\r\n          <form class=\"navbar-form navbar-right\">\r\n            <div class=\"input-group\">\r\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"search\">\r\n              <div class=\"input-group-btn\">\r\n                <button class=\"btn btn-default\" type=\"submit\">\r\n                  <i class=\"fas fa-search\"></i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </nav>\r\n    </div>\r\n\r\n    <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/brouchers/brouchers.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/brouchers/brouchers.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Brouchers_A4/BR1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Brouchers_A4/BR2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Brouchers_A4/BR3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n  <br />\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Brouchers_A4/BR4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Brouchers_A4/CR2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Brouchers_A4/CR3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\r\n</head>\r\n<body>\r\n  <div id=\"div_WC\" style=\"width:500px !important;cursor:pointer\">\r\n    <div class=\"container\" style=\"width:500px !important\">\r\n      <div class=\"row\" style=\"width:800px !important\">\r\n        <div *ngFor=\"let img of img_list\">\r\n          <div class=\"col-sm\">\r\n            <img id=\"img_WC\" (click)=\"imgclick(img.modelId,img.modelLink,img.modelDesc)\" src=\"{{img.modelLink}}\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n          </div>\r\n          <br />\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" id=\"innerdiv_WC\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div id=\"div_img_cart\">\r\n          <img src=\"\" id=\"img_selected_WC\" style=\"width:300px\" alt=\"Los Angeles\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <br />\r\n        <label style=\"font:bold\" id=\"lbl_desc\"></label>\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_Qty\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n          <option value=\"1\">1</option>\r\n          <option value=\"2\">2</option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n        <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"AddToCart()\" id=\"btn_AddtoCart\"\r\n                style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n          Add to cart\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title>Shopping Cart</title>\r\n</head>\r\n<body>\r\n  <h1>Shopping Cart</h1>\r\n  <!--<table class=\"table table-bordered table-responsive table-hover\">\r\n    <thead class=\"thead-light\">\r\n      <tr>\r\n        <th>Image</th>\r\n        <th>gender</th>\r\n        <th>size</th>\r\n        <th>color</th>\r\n      </tr>\r\n    </thead>\r\n    <tr *ngFor=\"let prod of productAddedTocart\">\r\n      <td><img src=\"assets/Img/tshirt.jpg\" width=\"250px\" height=\"270px\" /></td>\r\n      <td class=\"text-center\">{{prod.gender}}</td>\r\n      <td>{{prod.size}}</td>\r\n      <td>{{prod.color}}</td>\r\n\r\n    </tr>\r\n  </table>-->\r\n\r\n  <div class=\"table-responsive\">\r\n    <table class=\"table\">\r\n      \r\n      <tbody>\r\n        <tr *ngFor=\"let prod of productAddedTocart\">\r\n          <td scope=\"row\" width=\"100px\" *ngIf=\"prod.isCustomized==1; else elseBlock\">\r\n            <!--<img src=\"assets/Img/tshirt.jpg\" style=\"width:150px;height:150px\" />-->\r\n            <div style=\"position: relative; left: 0; top: 0;\">\r\n              <img id=\"img_tshirt_modal\" style=\"position: relative; left: 0; top: 0;width:150px\" src=\"assets/Tshirt_Imgs/15.jpg\" />\r\n\r\n              <!--<img id=\"img_tshirt_write\" style=\"position: absolute; left: 65px; top: 100px;width:100px\"\r\n    src=\"assets/Img/download.png\" />-->\r\n              <!--<div id=\"text_div\" style=\"line-height:0.6; position: absolute;border:dotted;border-color:red; left: 156px; top: 100px;width:100px\">-->\r\n              <div id=\"outer_editor_div\" style=\" width:50px\">\r\n                \r\n                <div id=\"img_tshirt_write\" style=\"position: absolute; left:60px;top:50px;font-size:6px\" innerHTML=\"{{prod.customContent}}\">\r\n</div>\r\n              </div>\r\n              </div>\r\n          </td>\r\n          <ng-template #elseBlock>\r\n            <td scope=\"row\" width=\"100px\" >\r\n              <img src=\"{{prod.modelLink}}\"  style=\"width:150px;height:150px\" />\r\n              </td>\r\n</ng-template>\r\n          <td >\r\n            <div>\r\n              <span ng-if=\"prod.gender==null; else sizeblock\"></span>\r\n              <ng-template #sizeblock>\r\n                <span><span style=\"font-size:medium;color:blue\">size:</span> {{prod.gender}}</span><br />\r\n              </ng-template>\r\n  <!--<span><span style=\"font-size:medium;color:blue\">color:</span> {{prod.color}}</span><br />-->\r\n              <span><span style=\"font-size:medium;color:blue\">Qty:</span> {{prod.quantity}}</span><br />\r\n              <span><span style=\"font-size:medium;color:blue\">Price:</span> {{prod.itemPrice}}</span>\r\n            </div>\r\n          </td>\r\n        </tr>\r\n        \r\n      </tbody>\r\n    </table>\r\n    </div>\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cloth-blinders/cloth-blinders.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cloth-blinders/cloth-blinders.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/BL2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/BL3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/BLINDERS.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n  <br />\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/CL1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/CL2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/CL2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/CL4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/Cloth_Blinders_A4/CL5.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cupboards/cupboards.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cupboards/cupboards.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\r\n</head>\r\n<body>\r\n\r\n  <div id=\"div_invicards\" style=\"width:500px !important;cursor:pointer\">\r\n    <div class=\"container\" style=\"width:500px !important\">\r\n      <div class=\"row\" style=\"width:800px !important\">\r\n        <div class=\"col-sm\">\r\n          <img src=\"assets/Cupboards/BC1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <img src=\"assets/Cupboards/bc2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n        </div>\r\n        <div class=\"col-sm\">\r\n          <img src=\"assets/Cupboards/bc3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  </body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/door/door.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/door/door.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"div_invicards\" style=\"width:500px !important;cursor:pointer\">\r\n  <div class=\"container\" style=\"width:500px !important\">\r\n    <div class=\"row\" style=\"width:800px !important\">\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/Door/DOOR1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/Door/DOOR2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/Door/DOOR3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n    </div>\r\n    <br/>\r\n      <div class=\"row\" style=\"width:800px !important\">\r\n        <div class=\"col-sm\">\r\n          <img src=\"assets/Door/DOOR5.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n        </div>\r\n        </div>\r\n      \r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-address/edit-address.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-address/edit-address.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" style=\"color:lightseagreen;font-size:medium\"><b>New Address</b></div>\r\n        <div class=\"card-body\">\r\n          <form [formGroup]=\"editForm\" id=\"edit\" >\r\n\r\n            <table class=\"table borderless\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"firstname\">Name:</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" formControlName=\"firstname\" name=\"firstname\" id=\"firstname\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"Phonenum\">Phone Number:</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" formControlName=\"Phonenum\" name=\"Phonenum\" id=\"Phonenum\" style=\"width: 220px \" type=\"number\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL1\">Address Line1</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" formControlName=\"AdL1\" placeholder=\"flat no/house no,appt name\" name=\"AdL1\" id=\"AdL1\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL2\">Address Line2</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL2\" formControlName=\"AdL2\" placeholder=\"Street\" id=\"AdL2\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL3\">Address Line3</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL3\"formControlName=\"AdL3\" placeholder=\"Street\" id=\"AdL3\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL4\">Address Line4</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL4\" formControlName=\"AdL4\" placeholder=\"Street\" id=\"AdL4\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL5\">Address Line5</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL5\" formControlName=\"AdL5\" placeholder=\"Street\" id=\"AdL5\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"postalcode\">ZIP</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"postalcode\" formControlName=\"postalcode\" placeholder=\"postal code\" id=\"postalcode\" style=\"width: 220px \" type=\"number\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"ddl_addtype\">Address Type</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td style=\"width:220px\">\r\n                    <select class=\"form-control select2\" formControlName=\"ddl_addtype\" required name=\"ddl_addtype\" id=\"ddl_addtype\" style=\"width:220px\">\r\n                      <option value=\"1\">Home</option>\r\n                      <option value=\"2\">Office</option>\r\n                    </select>\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td>\r\n                    <input type=\"checkbox\" id=\"isdefaul\" name=\"isdefaul\" formControlName=\"isdefaul\" />&nbsp;\r\n                    <label for=\"isdefaul\">IsDefault</label>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <div class=\"col-md-6 offset-md-4\">\r\n              <button type=\"submit\" (click)=\"update_address();\" style=\"background-color:lightseagreen\" id=\"submit\" class=\"btn btn-primary\">\r\n                Update Address\r\n              </button>\r\n            </div>\r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  <title></title>\r\n</head>\r\n<body>\r\n  \r\n\r\n  <div class=\"container\" style=\"height:500px\">\r\n    <div id=\"login-row\" class=\"row justify-content-center align-items-center\">\r\n      <div class=\"global-container\" style=\"width:500px\">\r\n        <div class=\"card login-form\">\r\n          <div class=\"card-body\">\r\n            <h3 class=\"card-title text-center\">Password Assistance</h3>\r\n            <div class=\"card-text\">\r\n              <!--\r\n              <div class=\"alert alert-danger alert-dismissible fade show\" role=\"alert\">Incorrect username or password.</div> -->\r\n              <form method=\"post\" action=\"\" id=\"forgotpwd_form\">\r\n                <!-- to error: add class \"has-danger\" -->\r\n                <table class=\"table borderless\">\r\n                  <tbody>\r\n                    <tr>\r\n                      <td style=\"width:180px\">\r\n                        <label class=\"lbl_style\" for=\"email\">Email Address:</label>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"email\" id=\"email\" style=\"width: 220px \" type=\"email\" required />\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"pwd\">New Passowrd:</label>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control\" name=\"pwd\" id=\"pwd\" style=\"width: 220px \" type=\"password\" required />\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:175px\">\r\n                        <label class=\"lbl_style\" for=\"Confirmpwd\">Confirm New Password:</label>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"Confirmpwd\" id=\"Confirmpwd\" style=\"width: 220px \" type=\"text\" required />\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"SecurityQus\">Security Question:</label>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <!--<input class=\"form-control \" id=\"SecurityQus\" style=\"width: 170px \" type=\"text\" required />-->\r\n                        <select class=\"form-control select2\" required name=\"ddl_secqus\" id=\"ddl_secqus\" style=\"width:220px\">\r\n                          <option value=\"\"></option>\r\n\r\n                        </select>\r\n\r\n                      </td>\r\n                    </tr>\r\n                    <tr>\r\n                      <td style=\"width:150px\">\r\n                        <label class=\"lbl_style\" for=\"ans\">Answer:</label>&nbsp;\r\n                      </td>\r\n                      <td>\r\n                        <input class=\"form-control \" name=\"ans\" id=\"ans\" style=\"width: 220px \" type=\"text\" required />\r\n                      </td>\r\n                    </tr>\r\n                  </tbody>\r\n                  </table>\r\n                    \r\n                    <button type=\"submit\" class=\"btn btn-primary btn-block\" (click)=\"submit()\" style=\"background-color:lightseagreen;border-color:lightseagreen\">Submit</button>\r\n</form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/glass-partition/glass-partition.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/glass-partition/glass-partition.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <div class=\"container\">\r\n    <div class=\"row\" style=\"width:800px !important\">\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/OFFICEPARTION.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/ROOMPARTION1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/ROOMPARTION2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n  \r\n    </div>\r\n    <br />\r\n    <div class=\"row\" style=\"width:800px !important\">\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/ROOMPARTION3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/ROOMPARTION4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/ROOMPARTION5.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <img src=\"assets/glass_partition/ROOMPARTION6.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  <title></title>\r\n</head>\r\n<body>\r\n  \r\n  <!-- --------------- -->\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm\">\r\n        <div class=\"container\" style=\"width:300px;height:300px\">\r\n          <h3>Promos</h3>\r\n          <div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <!-- Indicators -->\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n\r\n            <!-- Wrapper for slides -->\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"item active\" >\r\n                <img src=\"assets/3DImages/1.jpg\" alt=\"Los Angeles\" style=\"height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>3d Wallpaper</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Door/DOOR1.jpg\" alt=\"Chicago\" style=\"height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Door</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Floor/FL1.jpg\" alt=\"New york\" style=\"height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Floor</h3>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Left and right controls -->\r\n            <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <div class=\"container\" style=\"width:300px;height:300px\">\r\n          <h3>Discounts/sale</h3>\r\n          <div id=\"discountCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <!-- Indicators -->\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#discountCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#discountCarousel\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#discountCarousel\" data-slide-to=\"2\"></li>\r\n            </ol>\r\n\r\n            <!-- Wrapper for slides -->\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"item active\">\r\n                <img src=\"assets/Img/3d2.jpg\" alt=\"Los Angeles\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Los Angeles</h3>\r\n                  <p>LA is always so much fun!</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/Postcards.jpg\" alt=\"Chicago\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Los Angeles</h3>\r\n                  <p>LA is always so much fun!</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/brouchers.jpg\" alt=\"New york\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3>Los Angeles</h3>\r\n                  <p>LA is always so much fun!</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Left and right controls -->\r\n            <a class=\"carousel-control left\" href=\"#discountCarousel\" data-slide=\"prev\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"right carousel-control\" href=\"#discountCarousel\" data-slide=\"next\">\r\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm\">\r\n        <h3>New products/services</h3>\r\n        <div class=\"container\" style=\"width:300px;height:300px\">\r\n          <div id=\"NewprodCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n            <!-- Indicators -->\r\n            <ol class=\"carousel-indicators\">\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"2\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"3\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"4\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"5\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"6\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"7\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"8\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"9\"></li>\r\n              <li data-target=\"#NewprodCarousel\" data-slide-to=\"10\"></li>\r\n            </ol>\r\n\r\n            <!-- Wrapper for slides -->\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"item active\" (click)=\"redirect();\">\r\n                <img src=\"assets/Img/3d1.jpg\"  alt=\"3dwallpapers\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">3D wallpapers</h3>\r\n                  <!--<p>3D wallpapers</p>-->\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/calendar.jpg\" alt=\"calendars\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Calendars</h3>\r\n                  <!--<p>LA is always so much fun!</p>-->\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\" (click)=\"redirect();\">\r\n                <img src=\"assets/Img/king-queen-prince-princess-tshirt.jpg\" alt=\"Tshirt\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Custom T-shirts</h3>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/pens1.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Personalised Pens</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/canvas-frames.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Canvas Frames</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/frames.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Frames</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/notebooks.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Notebooks</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/mug.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Personalised Gifts</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/invitationcard1.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Invitation Cards</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/businesscard1.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Business Cards</h3>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/usb.jpg\" alt=\"New york\" style=\"width:270px;height:270px\">\r\n                <div class=\"carousel-caption\">\r\n                  <h3 style=\"color:deeppink\">Pendrives</h3>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Left and right controls -->\r\n            <a class=\"left carousel-control\" href=\"#NewprodCarousel\" data-slide=\"prev\">\r\n              <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n              <span class=\"sr-only\">Previous</span>\r\n            </a>\r\n            <a class=\"right carousel-control\" href=\"#NewprodCarousel\" data-slide=\"next\">\r\n              <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n              <span class=\"sr-only\">Next</span>\r\n            </a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class='row'>\r\n        <div class='col-sm' style=\"padding-left:100px\">\r\n          <h3>All Products</h3>\r\n          <div class=\"carousel slide media-carousel\" id=\"media\">\r\n            <div class=\"carousel-inner\">\r\n              <div class=\"item  active\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/3d1.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/invitationcard1.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/calendar.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/usb.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/king-queen-prince-princess-tshirt.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/pens1.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/businesscard1.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/mug.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"item\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/canvas-frames.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/frames.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/notebooks.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                  <div class=\"col-md-3\">\r\n                    <a class=\"thumbnail\" href=\"#\"><img alt=\"\" src=\"assets/Img/notebooks.jpg\" style=\"width:150px;height:150px\"></a>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <a data-slide=\"prev\" href=\"#media\" class=\"left carousel-control\"></a>\r\n            <a data-slide=\"next\" href=\"#media\" class=\"right carousel-control\"></a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  </body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/invitation-cards/invitation-cards.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invitation-cards/invitation-cards.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n\r\n</head>\r\n<body>\r\n  <div id=\"div_invicards\" style=\"width:500px !important;cursor:pointer\">\r\n    <div class=\"container\" style=\"width:500px !important\">\r\n      <div class=\"row\" style=\"width:800px !important\">\r\n        <div *ngFor=\"let img of img_list\">\r\n          <div class=\"col-sm\">\r\n            <img id=\"img_Invicards\" (click)=\"imgclick(img.modelId,img.modelLink,img.modelDesc)\" src=\"{{img.modelLink}}\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n          </div>\r\n          <br />\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" id=\"innerdiv_invicards\">\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div id=\"div_img_cart\">\r\n          <img src=\"\" id=\"img_selected_invicard\" style=\"width:300px\" alt=\"Los Angeles\">\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <br />\r\n        <label style=\"font:bold\" id=\"lbl_desc\"></label>\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_Qty\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n          <option value=\"1\">10</option>\r\n          <option value=\"2\">20</option>\r\n\r\n        </select>\r\n        <br />\r\n        <br />\r\n        <select class=\"js-example-basic-single\" id=\"ddl_prodmat\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n        </select>\r\n        <br />\r\n        <br />\r\n        <select hidden class=\"js-example-basic-single\" id=\"ddl_prodser\" style=\"width:150px\">\r\n          <option value=\"\"></option>\r\n        </select>\r\n        <br />\r\n        <br />\r\n        <label style=\"font-size:15px\">Selling Price</label>&nbsp;\r\n        <label style=\"font-size:15px\" id=\"lbl_price\"></label><br />\r\n\r\n        <label style=\"font-size:15px\">Price</label>&nbsp;\r\n        <label style=\"font-size:15px\" id=\"lbl_sellingprice\"></label><span style=\"font-size:15px\" id=\"sp_disc\"></span><br />\r\n        <!-- <label style=\"font:bold\" id=\"lbl_disc\"></label><br />-->\r\n        <br />\r\n        <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"AddToCart()\" id=\"btn_AddtoCart\"\r\n                style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n          Add to cart\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\r\n  <meta name=\"viewport\" content=\"width=device-width,initial-scale=1\" />\r\n  \r\n</head>\r\n\r\n<body>\r\n\r\n  <div style=\"text-align:left;margin-top:-11px\">\r\n    <header>\r\n      <div class=\"container\">\r\n        <div class=\"row\" style=\"margin-left:-60px !important\">\r\n          <div class=\"col-sm\">\r\n            <img src=\"assets/Img/Icon.jpg\" style=\"height:100px;width:100px\" />\r\n          </div>\r\n          <div class=\"col-sm\">\r\n            <h2 style=\"padding-top:30px;padding-left:10px;margin-left:-110px;color:lightseagreen\">\r\n              PrintSmart\r\n            </h2>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </header>\r\n  </div>\r\n  <div>\r\n    <nav class=\"navbar navbar-custom navbar-expand-lg navbar-dark fixed-top\" style=\"height:\">\r\n      <!--<a class=\"navbar-brand\" href=\"#\">Navbar</a>-->\r\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <!--<li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\">Products <span class=\"sr-only\">(current)</span></a>\r\n        </li>-->\r\n          <li class=\"nav-item active\">\r\n            <a class=\"nav-link\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li style=\"margin-left:40px\">    </li>\r\n          <li class=\"dropdown\">\r\n            <a class=\"nav-link dropdown-toggle active\" href=\"#\"\r\n               id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\"\r\n               aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Products\r\n            </a>\r\n            <ul class=\"dropdown-menu\" id=\"products_list\">\r\n              <li><a href=\"#\">Business Cards</a></li>\r\n              <li><a href=\"#\">Clothing & Bags</a></li>\r\n              <li><a href=\"#\">Invitations & Stationery</a></li>\r\n              <li class=\"dropdown-divider\"></li>\r\n              <li><a href=\"#\">Labels & Stickers</a></li>\r\n              <li class=\"divider\"></li>\r\n              <li class=\"dropdown dropright\" id=\"photogift_menu\">\r\n                <a href=\"#\">Photo Gifts</a>\r\n                <ul class=\"dropdown-menu\" id=\"photogifts_submenu\">\r\n                  <li><a href=\"\" [routerLink]=\"['Tshirts']\">T shirts</a></li>\r\n                  <li><a href=\"#\">Pillows</a></li>\r\n                  <li><a href=\"#\">Mouse pads</a></li>\r\n                </ul>\r\n              </li>\r\n              <li><a>Stationery</a></li>\r\n            </ul>\r\n          </li>\r\n          <li style=\"margin-left:40px\">    </li>\r\n          <li class=\"dropdown\">\r\n            <a class=\"nav-link dropdown-toggle active\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              Services\r\n            </a>\r\n            <ul class=\"dropdown-menu\" id=\"services_list\">\r\n              <!--<div class=\"row\">-->\r\n              <!-- <div class=\"col-sm-6\">-->\r\n              <ul class=\"multi-column-dropdown\">\r\n                <li><a href=\"#\">Logo Maker</a></li>\r\n                <li><a href=\"#\">Custom Logo Design</a></li>\r\n                <li><a href=\"#\">Printed Product Design</a></li>\r\n                <!--<li class=\"dropdown-divider\"></li>-->\r\n                <li><a href=\"#\">Design Live</a></li>\r\n                <!--<li class=\"divider\"></li>\r\n              <li><a href=\"#\">One more separated link</a></li>-->\r\n              </ul>\r\n              <!--</div>-->\r\n              <!--<div class=\"col-sm-6\">\r\n              <ul class=\"multi-column-dropdown\">\r\n                <li><a href=\"#\">Action</a></li>\r\n                <li><a href=\"#\">Another action</a></li>\r\n                <li><a href=\"#\">Something else here</a></li>\r\n                <li class=\"dropdown-divider\"></li>\r\n                <li><a href=\"#\">Separated link</a></li>\r\n                <li class=\"divider\"></li>\r\n                <li><a href=\"#\">One more separated link</a></li>\r\n              </ul>\r\n            </div>-->\r\n              <!--</div>-->\r\n            </ul>\r\n          </li>\r\n          <li style=\"margin-left:40px\"></li>\r\n          <li class=\"nav-item active\">\r\n            <a href=\"#\" class=\"nav-link\">\r\n              Enquiry\r\n            </a>\r\n          </li>\r\n          <li style=\"margin-left:40px\"></li>\r\n          <li class=\"nav-item active\">\r\n            <a href=\"#\" class=\"nav-link\">\r\n              Contact\r\n            </a>\r\n          </li>\r\n          <li style=\"margin-left:40px\"></li>\r\n\r\n          <li class=\"nav-item active\">\r\n            <a href=\"#\" class=\"nav-link\">\r\n              <span class=\"glyphicon glyphicon-shopping-cart\"></span>\r\n              Cart\r\n            </a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <form class=\"form-inline my-2 my-lg-0\">\r\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" style=\"color:white\">Search</button>\r\n      </form>\r\n    </nav>\r\n    <app-home></app-home>\r\n  </div>\r\n \r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-address/new-address.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/new-address/new-address.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-md-8\">\r\n      <div class=\"card\">\r\n        <div class=\"card-header\" style=\"color:lightseagreen;font-size:medium\"><b>New Address</b></div>\r\n        <div class=\"card-body\">\r\n          <form  id=\"registration\" action=\"\" method=\"post\">\r\n\r\n            <table class=\"table borderless\">\r\n              <tbody>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"firstname\">Name:</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\"  name=\"firstname\" id=\"firstname\"  style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"Phonenum\">Phone Number:</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"Phonenum\" id=\"Phonenum\" style=\"width: 220px \" type=\"number\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL1\">Address Line1</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" placeholder=\"flat no/house no,appt name\" name=\"AdL1\" id=\"AdL1\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL2\">Address Line2</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL2\" placeholder=\"Street\" id=\"AdL2\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL3\">Address Line3</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL3\" placeholder=\"Street\" id=\"AdL3\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL4\">Address Line4</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL4\" placeholder=\"Street\" id=\"AdL4\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"AdL5\">Address Line5</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"AdL5\" placeholder=\"Street\" id=\"AdL5\" style=\"width: 220px \" type=\"text\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"postalcode\">ZIP</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td>\r\n                    <input class=\"form-control\" name=\"postalcode\" placeholder=\"postal code\" id=\"postalcode\" style=\"width: 220px \" type=\"number\" required />\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td style=\"width:150px\">\r\n                    <label class=\"lbl_style\" for=\"ddl_addtype\">Address Type</label><span style=\"color:red\">*</span>&nbsp;\r\n                  </td>\r\n                  <td style=\"width:220px\">\r\n                    <select class=\"form-control select2\" required name=\"ddl_addtype\" id=\"ddl_addtype\" style=\"width:220px\">\r\n                      <option value=\"1\">Home</option>\r\n                      <option value=\"2\">Office</option>\r\n                    </select>\r\n\r\n                  </td>\r\n                </tr>\r\n                <tr>\r\n                  <td></td>\r\n                  <td>\r\n                    <input type=\"checkbox\" id=\"isdefaul\" name=\"isdefaul\"/>&nbsp;\r\n                    <label for=\"isdefaul\">IsDefault</label>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n\r\n\r\n            <div class=\"col-md-6 offset-md-4\">\r\n              <button type=\"submit\" (click)=\"add_address();\" style=\"background-color:lightseagreen\" id=\"submit\" class=\"btn btn-primary\">\r\n                Add Address\r\n              </button>&nbsp;\r\n              <a href=\"#\" [routerLink]=\"['/address-list']\">Addresses List</a>\r\n            </div>\r\n            \r\n          </form>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/steps-railing/steps-railing.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/steps-railing/steps-railing.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/steps_railing/STEPS1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/steps_railing/STEPS2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/steps_railing/STEPS3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n  <br />\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/steps_railing/STEPS4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n   \r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trophy-engraving/trophy-engraving.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trophy-engraving/trophy-engraving.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n  <br />\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC4.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC5.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC6.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC7.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/trophy-printing/trophy-printing.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/trophy-printing/trophy-printing.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/AC3.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n  <br />\r\n  <div class=\"row\" style=\"width:800px !important\">\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/ACPRINT 1.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n    <div class=\"col-sm\">\r\n      <img src=\"assets/trophy/ACPRINT2.jpg\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/visiting-cards/visiting-cards.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/visiting-cards/visiting-cards.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n  <meta charset=\"utf-8\" />\r\n  <title></title>\r\n</head>\r\n<body>\r\n  <div>\r\n    <div id=\"div_idcards\" style=\"width:500px !important;cursor:pointer\">\r\n      <div class=\"container\" style=\"width:500px !important;height:500px\">\r\n        <div class=\"row\" style=\"width:800px !important\">\r\n          <div *ngFor=\"let img of img_list\">\r\n            <div class=\"col-sm\">\r\n              <img id=\"img_idcards\" (click)=\"imgclick(img.modelId,img.modelLink,img.modelDesc)\" src=\"{{img.modelLink}}\" style=\"border:1px solid;width:230px\" alt=\"Los Angeles\">\r\n            </div>\r\n            <br />\r\n          </div>\r\n\r\n        </div>\r\n        <br />\r\n\r\n      </div>\r\n    </div>\r\n    </div>\r\n    <!--inner div-->\r\n    <div class=\"container\" id=\"innerdiv_viscards\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <div id=\"div_img_cart\">\r\n            <img src=\"\" id=\"img_selected_viscard\" style=\"width:300px\" alt=\"Los Angeles\">\r\n          </div>\r\n        </div>\r\n        <div class=\"col\">\r\n          <br />\r\n          <label style=\"font:bold\" id=\"lbl_desc\"></label>\r\n          <br />\r\n          <br />\r\n          <select class=\"js-example-basic-single\" id=\"ddl_Qty\" style=\"width:150px\">\r\n            <option value=\"\"></option>\r\n            <option value=\"1\">10</option>\r\n            <option value=\"2\">20</option>\r\n\r\n          </select>\r\n          <br />\r\n          <br />\r\n          <select class=\"js-example-basic-single\" id=\"ddl_prodmat\" style=\"width:150px\">\r\n            <option value=\"\"></option>\r\n\r\n\r\n          </select>\r\n          <br />\r\n          <br />\r\n          <select hidden class=\"js-example-basic-single\" id=\"ddl_prodser\" style=\"width:150px\">\r\n            <option value=\"\"></option>\r\n          </select>\r\n          <br />\r\n          <br />\r\n\r\n          <label style=\"font-size:15px\">Selling Price</label>&nbsp;\r\n          <label style=\"font-size:15px\" id=\"lbl_price\"></label><br />\r\n\r\n          <label style=\"font-size:15px\">Price</label>&nbsp;\r\n          <label style=\"font-size:15px\" id=\"lbl_sellingprice\"></label><span style=\"font-size:15px\" id=\"sp_disc\"></span><br />\r\n          <br />\r\n          <button type=\"submit\" class=\"btn btn-outline-success\" (click)=\"AddToCart()\" id=\"btn_AddtoCart\"\r\n                  style=\"background:lightseagreen;border-color:lightseagreen;color:white\">\r\n            Add to cart\r\n          </button>\r\n        </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallpapers/wallpapers.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wallpapers/wallpapers.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\r\n<html>\r\n<head>\r\n    <meta charset=\"utf-8\" />\r\n    <title></title>\r\n</head>\r\n<body>\r\n  <!--Carousel Wrapper-->\r\n  <!--/.Carousel Wrapper-->\r\n  \r\n\r\n  <div class=\"container\"  style=\"height:500px\" >\r\n    <div class=\"row\">\r\n      <div class=\"col\">\r\n        <div class=\"container\" style=\"width:300px\">\r\n          <h3>3D Wallpaper Designs</h3>\r\n          <div id=\"myCarousel\"  class=\"carousel slide\" style=\"width:300px\" data-ride=\"carousel\" data-interval=\"false\">\r\n            <!-- Indicators -->\r\n            <ol class=\"carousel-indicators\" >\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"3\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"4\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"5\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"6\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"7\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"8\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"9\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"10\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"11\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"12\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"13\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"14\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"15\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"16\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"17\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"18\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"19\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"20\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"21\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"22\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"23\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"24\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"25\"></li>\r\n              <li data-target=\"#myCarousel\" data-slide-to=\"26\"></li>\r\n            </ol>\r\n\r\n            <!-- Wrapper for slides -->\r\n            <div class=\"carousel-inner\" style=\"height:300px;display:table-cell;vertical-align:middle;text-align:center\">\r\n              <div class=\"item active\">\r\n                <img src=\"assets/Img/1.jpg\"  alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\" style=\"width:300px;margin:0 auto\"  >\r\n                <img src=\"assets/Img/2.jpg\" style=\"width:100%\"  alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/3.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/4.jpg\"  alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/5.jpg\" alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/6.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/7.jpg\" alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/8.jpg\" alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/9.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/10.jpg\"  alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/11.jpg\"  alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/12.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/13.jpg\"  alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/14.jpg\"  alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/15.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/16.jpg\"  alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/17.jpg\"  alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/18.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/19.jpg\" alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/20.jpg\"  alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/21.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/22.jpg\" alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/23.jpg\"  alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/24.jpg\"  alt=\"New york\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/25.jpg\" alt=\"Los Angeles\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/26.jpg\" alt=\"Chicago\">\r\n              </div>\r\n\r\n              <div class=\"item\">\r\n                <img src=\"assets/Img/27.jpg\" alt=\"New york\">\r\n              </div>\r\n\r\n\r\n              <!-- Left and right controls -->\r\n              <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n                <span class=\"glyphicon glyphicon-chevron-left\" style=\"color:darkblue\"></span>\r\n                <span class=\"sr-only\">Previous</span>\r\n              </a>\r\n              <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n                <span class=\"glyphicon glyphicon-chevron-right\"  style=\"color:darkblue\"></span>\r\n                <span class=\"sr-only\">Next</span>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <p style=\"color:lightseagreen\">Click on the image to see sample</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col\">\r\n        <img  style=\"margin-left: -12rem !important\" src=\"\" id=\"img_ex_wallpaperdesign\" />\r\n\r\n      </div>\r\n    </div>\r\n    </div>\r\n  \r\n</body>\r\n</html>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/windows/windows.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/windows/windows.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>windows works!</p>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Floor/Floor.component.css":
/*!*******************************************!*\
  !*** ./src/app/Floor/Floor.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRmxvb3IvRmxvb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBIiwiZmlsZSI6InNyYy9hcHAvRmxvb3IvRmxvb3IuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/Floor/Floor.component.ts":
/*!******************************************!*\
  !*** ./src/app/Floor/Floor.component.ts ***!
  \******************************************/
/*! exports provided: FloorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorComponent", function() { return FloorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let FloorComponent = class FloorComponent {
    ngOnInit() {
        $(document).ready(function () {
        });
    }
};
FloorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-Floor',
        template: __importDefault(__webpack_require__(/*! raw-loader!./Floor.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Floor/Floor.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./Floor.component.css */ "./src/app/Floor/Floor.component.css")).default]
    })
], FloorComponent);



/***/ }),

/***/ "./src/app/IdCards/IdCards.component.css":
/*!***********************************************!*\
  !*** ./src/app/IdCards/IdCards.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvSWRDYXJkcy9JZENhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSIsImZpbGUiOiJzcmMvYXBwL0lkQ2FyZHMvSWRDYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/IdCards/IdCards.component.ts":
/*!**********************************************!*\
  !*** ./src/app/IdCards/IdCards.component.ts ***!
  \**********************************************/
/*! exports provided: IdCardsComponent, visitingcardsimg_list */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdCardsComponent", function() { return IdCardsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "visitingcardsimg_list", function() { return visitingcardsimg_list; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let IdCardsComponent = class IdCardsComponent {
    constructor(router, httpClient) {
        this.router = router;
        this.httpClient = httpClient;
        this.fileupload = null;
        //fileToUpload: File = null;
        this.img_list = [];
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
        this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe((res) => {
            this.img_list = res;
        });
    }
    handleFileInput(file) {
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
};
IdCardsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
IdCardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-IdCards',
        template: __importDefault(__webpack_require__(/*! raw-loader!./IdCards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/IdCards/IdCards.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./IdCards.component.css */ "./src/app/IdCards/IdCards.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], IdCardsComponent);

class visitingcardsimg_list {
}


/***/ }),

/***/ "./src/app/Login/Login.component.ts":
/*!******************************************!*\
  !*** ./src/app/Login/Login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/app/services/login.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let LoginComponent = class LoginComponent {
    constructor(user_service, _sharedservice, httpClient, router) {
        this.user_service = user_service;
        this._sharedservice = _sharedservice;
        this.httpClient = httpClient;
        this.router = router;
        this.cartItemCount = 0;
    }
    ngOnInit() {
        $(document).ready(function () {
            $("#loginform").validate({
                rules: {
                    email: {
                        required: true,
                        email: true
                    },
                    pwd: { required: true }
                },
                messages: {
                    email: "Please enter valid email address",
                    pwd: "Enter password"
                },
                submitHandler: function (form) {
                    // register();
                    //form.submit();
                }
            });
        });
    }
    submit() {
        let user_name = $("#email").val();
        let pwd = $("#pwd").val();
        let user_id = 0;
        let password = "";
        let email = "";
        sessionStorage.setItem('emailid', user_name);
        if (user_name != "" && pwd != "") {
            this.httpClient.get('https://localhost:44302/' + 'api/Userdetail/' + user_name).subscribe(result => {
                this.userdetails = result;
                var email_exists = result.findIndex(em_exists => em_exists.email == user_name);
                if (email_exists == -1) {
                    swal("Email doesn't exist");
                }
                else {
                    let userid = this.userdetails[0].userId;
                    sessionStorage.setItem('user_name', this.userdetails[0].firstName);
                    sessionStorage.setItem('userid', userid.toString());
                    // localStorage.setItem('Name', this.userdetails[0].FirstName);
                    user_id = this.userdetails[0].userId;
                    password = this.userdetails[0].pwd;
                    email = this.userdetails[0].email;
                    if (user_name == email && pwd == password) {
                        //swal("Login success");
                        this.router.navigateByUrl('/');
                        sessionStorage.setItem("status_text", "Sign Out");
                        sessionStorage.setItem("changepwd", "Change Password");
                        sessionStorage.setItem("signouttext", "Sign Out");
                        this._sharedservice.loginSuccess("Sign Out");
                        this._sharedservice.loginSuccessUsername(this.userdetails[0].firstName);
                        this._sharedservice.loginSuccesschangepwd("Change Password");
                        this._sharedservice.loginSuccesssignout("Sign Out");
                        if (sessionStorage.getItem('userid') != null) {
                            var s = "appPage";
                            this.httpClient.get('https://localhost:44302/' + 'api/OdCarts/' + sessionStorage.getItem("userid")).subscribe((res) => {
                                // var numArr = [10, 20, 30, 40] // sums to value = 100
                                //var sum = 0;
                                //for (var i = 0; i < res.length; i++) {
                                //  sum += res[i].quantity;
                                //}
                                // alert(sum);
                                sessionStorage.setItem("cartcount", res.length);
                                this._sharedservice.updateCartCount(res.length);
                            });
                        }
                    }
                    else {
                        swal("Incorrect Passowrd");
                    }
                }
            });
        }
    }
    changepwd() { }
};
LoginComponent.ctorParameters = () => [
    { type: _services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-Login',
        template: __importDefault(__webpack_require__(/*! raw-loader!./Login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Login/Login.component.html")).default,
        providers: [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]]
    }),
    __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"],
        _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/Products/Product.component.ts":
/*!***********************************************!*\
  !*** ./src/app/Products/Product.component.ts ***!
  \***********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let ProductComponent = class ProductComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.findAll();
    }
};
ProductComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }
];
ProductComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-Product',
        template: __importDefault(__webpack_require__(/*! raw-loader!./Product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Products/Product.component.html")).default,
    }),
    __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
], ProductComponent);



/***/ }),

/***/ "./src/app/Register/Register.component.css":
/*!*************************************************!*\
  !*** ./src/app/Register/Register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lbl_style {\r\n    font-size:15px;\r\n    font-weight:normal;\r\n    font-family:Verdana,sans-serif;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n  border: none;\r\n}\r\n\r\nform div div table tbody tr td td label {\r\n  color: #ff0000 !important;\r\n}\r\n\r\nspan.arrow {\r\n  margin-left: 6px;\r\n  height: 17px;\r\n  background: url('http://i45.tinypic.com/f9ifz6.png') no-repeat left center;\r\n}\r\n\r\n.errorspan::after{\r\n  content: \"\\a\";\r\n  white-space: pre;\r\n}\r\n\r\nlabel.error {\r\n  height: 17px;\r\n  border-top: 1px solid #99182c;\r\n  border-right: 1px solid #99182c;\r\n  border-bottom: 1px solid #99182c;\r\n  margin-left: 9px;\r\n  padding: 1px 5px 0px 5px;\r\n  font-size: 10px !important;\r\n  font-weight:100 !important;\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvUmVnaXN0ZXIvUmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsOEJBQThCO0FBQ2xDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwRUFBMEU7QUFDNUU7O0FBR0U7RUFDQSxhQUFhO0VBQ2IsZ0JBQWdCO0FBQ2xCOztBQUdBO0VBQ0UsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsMEJBQTBCO0VBQzFCLDBCQUEwQjs7QUFFNUIiLCJmaWxlIjoic3JjL2FwcC9SZWdpc3Rlci9SZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxibF9zdHlsZSB7XHJcbiAgICBmb250LXNpemU6MTVweDtcclxuICAgIGZvbnQtd2VpZ2h0Om5vcm1hbDtcclxuICAgIGZvbnQtZmFtaWx5OlZlcmRhbmEsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmJvcmRlcmxlc3MgdGQsIC5ib3JkZXJsZXNzIHRoIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbmZvcm0gZGl2IGRpdiB0YWJsZSB0Ym9keSB0ciB0ZCB0ZCBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZjAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuc3Bhbi5hcnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDZweDtcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCdodHRwOi8vaTQ1LnRpbnlwaWMuY29tL2Y5aWZ6Ni5wbmcnKSBuby1yZXBlYXQgbGVmdCBjZW50ZXI7XHJcbn1cclxuXHJcblxyXG4gIC5lcnJvcnNwYW46OmFmdGVye1xyXG4gIGNvbnRlbnQ6IFwiXFxhXCI7XHJcbiAgd2hpdGUtc3BhY2U6IHByZTtcclxufVxyXG5cclxuXHJcbmxhYmVsLmVycm9yIHtcclxuICBoZWlnaHQ6IDE3cHg7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM5OTE4MmM7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzk5MTgyYztcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzk5MTgyYztcclxuICBtYXJnaW4tbGVmdDogOXB4O1xyXG4gIHBhZGRpbmc6IDFweCA1cHggMHB4IDVweDtcclxuICBmb250LXNpemU6IDEwcHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDoxMDAgIWltcG9ydGFudDtcclxuICBcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Register/Register.component.ts":
/*!************************************************!*\
  !*** ./src/app/Register/Register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent, secqus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secqus", function() { return secqus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_userdetail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/userdetail.service */ "./src/app/services/userdetail.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let RegisterComponent = class RegisterComponent {
    constructor(httpClient, router, _userdetailService, baseUrl) {
        this.httpClient = httpClient;
        this.router = router;
        this._userdetailService = _userdetailService;
        this.body = [];
        this.myAppUrl = "";
        this.myAppUrl = baseUrl;
    }
    ngOnInit() {
        $(function () {
        });
        //--------HTTPGET REQUEST--------
        this.httpClient.get('https://localhost:44302/' + 'api/Secqmasters').subscribe((res) => {
            //this.secq.push(res);
            this.secq = res;
            var test = res;
            for (var i = 0; i <= 10; i++) {
                var newOption = new Option(test[i].secQ, test[i].secQid, false, false);
                $('#ddl_secqus').append(newOption).trigger('change');
            }
            //$('#ddl_secqus').each(test, function (key, value) {
            //  var newOption = new Option(test[key].secQ, test[key].secQid, false, false);
            //  $('#ddl_secqus').append(newOption).trigger('change');
            //});
            // var newOption = new Option(test[0].secQ, test[0].secQid, false, false);
        });
        $(document).ready(function () {
            $('#ddl_secqus').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "select security question",
            });
            $('#ddl_secqus').on('change', function () {
                $('#registration').valid();
            });
            //$('.datepicker').datepicker();
            $("#registration").validate({
                // Specify validation rules
                rules: {
                    // The key name on the left side is the name attribute
                    // of an input field. Validation rules are defined
                    // on the right side
                    firstname: "required",
                    lastname: "required",
                    email: {
                        required: true,
                        // Specify that email should be validated
                        // by the built-in "email" rule
                        email: true
                    },
                    pwd: {
                        required: true,
                        minlength: 5
                    },
                    Confirmpwd: {
                        required: true,
                        equalTo: "#pwd"
                    },
                    DOB: "required",
                    Phonenum: "required",
                    ddl_secqus: "required",
                    ans: "required"
                },
                // Specify validation error messages
                messages: {
                    firstname: "Please enter your firstname",
                    lastname: "Please enter your lastname",
                    pwd: {
                        required: "Please provide a password",
                        minlength: "Your password must be at least 5 characters long"
                    },
                    Confirmpwd: {
                        required: "Please provide a password",
                        equalTo: "Please enter the password same as above"
                    },
                    email: "Please enter  valid email address",
                    DOB: "Please select date of birth",
                    Phonenum: "Please enter mobile number",
                    ddl_secqus: "Please select the security question",
                    ans: "Please enter answer"
                },
                errorPlacement: function (label, element) {
                    if (element.hasClass('select2') && element.next('.select2-container').length) {
                        label.addClass('arrow');
                        label.insertAfter(element.next('.select2-container'));
                    }
                    else {
                        label.addClass('arrow');
                        label.insertAfter(element);
                    }
                    //if (element.attr("name") != "ddl_secqus") {
                    //  label.addClass('arrow');
                    //  label.insertAfter(element);
                    //}
                    //else {
                    //  label.removeClass('arrow');
                    //  label.insertAfter(element);
                    //}
                },
                wrapper: 'span',
                // Make sure the form is submitted to the destination defined
                // in the "action" attribute of the form when valid
                submitHandler: function (form) {
                    // register();
                    // form.submit();
                }
            });
        });
    }
    register() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        //  var test: User_Details = {
        //    FirstName: $("#firstname")[0].value, LastName: $("#lastname")[0].value,
        //    Email: $("#email")[0].value, Dob: null, Pwd: $("#pwd")[0].value, Telephone: $("#Phonenum")[0].value,
        //    Isactive: null, SecQid: $('#ddl_secqus').val(), SecQa: $("#ans")[0].value, DtCreate: null, DtModify: null
        //};
        var secqid = stringtonum($('#ddl_secqus').val());
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        this.httpClient.get('https://localhost:44302/' + 'api/Userdetail').subscribe(res => {
            var email_exists = res.findIndex(em_exists => em_exists.email == $("#email")[0].value);
            if (email_exists == -1) {
                var test = {
                    FirstName: $("#firstname")[0].value, LastName: $("#lastname")[0].value,
                    email: $("#email")[0].value, Dob: $("#DOB")[0].value, Pwd: $("#pwd")[0].value, Telephone: $("#Phonenum")[0].value,
                    Isactive: 1, SecQid: secqid, SecQa: $("#ans")[0].value, DtCreate: null, DtModify: null
                };
                // var test: User_Details = {
                //   FirstName: "first", LastName: "l",
                //   Email: "s@gmail.com", Dob: null, Pwd:$("#pwd")[0].value, Telephone: "344",
                //   Isactive: null, SecQid: 3, SecQa: null, DtCreate: null, DtModify: null
                //};
                this.httpClient.post('https://localhost:44302/' + 'api/Userdetail', test, { headers }).subscribe(res => {
                    alert("Registration successfull");
                    this.router.navigateByUrl('/Login');
                });
                return false;
            }
            else {
                alert("email already exists");
            }
        });
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _services_userdetail_service__WEBPACK_IMPORTED_MODULE_3__["UserdetailService"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
RegisterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-Register',
        template: __importDefault(__webpack_require__(/*! raw-loader!./Register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Register/Register.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./Register.component.css */ "./src/app/Register/Register.component.css")).default]
    }),
    __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_userdetail_service__WEBPACK_IMPORTED_MODULE_3__["UserdetailService"], String])
], RegisterComponent);

class secqus {
}


/***/ }),

/***/ "./src/app/Tshirts/Tshirts.component.css":
/*!***********************************************!*\
  !*** ./src/app/Tshirts/Tshirts.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".select2-container--default .select2-selection--single {\r\n  border: 1px solid red !important;\r\n}\r\n\r\n.select2-selection select2-selection--single {\r\n  border: 1px solid red !important;\r\n}\r\n\r\n/*.container1 {\r\n  position: relative;\r\n  text-align: center;\r\n  color: white;\r\n}*/\r\n\r\n.centered {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 15% auto; /* 15% from the top and centered */\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* The Close Button */\r\n\r\n.close {\r\n  color: #aaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.close:hover,\r\n  .close:focus {\r\n    color: black;\r\n    text-decoration: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n.wrapper {\r\n  /*position: relative;\r\n  /*top: -118px;*/\r\n  /*left: 510px;\r\n  vertical-align:middle;*/\r\n  /*width:100px;\r\n  margin:0 auto;*/\r\n  position: absolute;\r\n  top: 58%;\r\n  left: 48%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.firstDiv, .secondDiv {\r\n  position: absolute;\r\n}\r\n\r\n.note-editor {\r\n  display: inline-block;\r\n  border: none;\r\n  border-color:red;\r\n}\r\n\r\n/*SUMMER NOTE*/\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvVHNoaXJ0cy9Uc2hpcnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7Ozs7RUFJRTs7QUFFRjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQSwyQkFBMkI7O0FBQzNCO0VBQ0UsYUFBYSxFQUFFLHNCQUFzQjtFQUNyQyxlQUFlLEVBQUUsa0JBQWtCO0VBQ25DLFVBQVUsRUFBRSxlQUFlO0VBQzNCLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVyxFQUFFLGVBQWU7RUFDNUIsWUFBWSxFQUFFLGdCQUFnQjtFQUM5QixjQUFjLEVBQUUsNEJBQTRCO0VBQzVDLDRCQUE0QixFQUFFLG1CQUFtQjtFQUNqRCxpQ0FBaUMsRUFBRSxxQkFBcUI7QUFDMUQ7O0FBRUEsc0JBQXNCOztBQUN0QjtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBRSxrQ0FBa0M7RUFDcEQsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVLEVBQUUsb0RBQW9EO0FBQ2xFOztBQUVBLHFCQUFxQjs7QUFDckI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUU7O0lBRUUsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixlQUFlO0VBQ2pCOztBQUdGO0VBQ0U7aUJBQ2U7RUFDZjt5QkFDdUI7RUFDdkI7aUJBQ2U7RUFDZixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFHQSxjQUFjIiwiZmlsZSI6InNyYy9hcHAvVHNoaXJ0cy9Uc2hpcnRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2VsZWN0Mi1jb250YWluZXItLWRlZmF1bHQgLnNlbGVjdDItc2VsZWN0aW9uLS1zaW5nbGUge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc2VsZWN0Mi1zZWxlY3Rpb24gc2VsZWN0Mi1zZWxlY3Rpb24tLXNpbmdsZSB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qLmNvbnRhaW5lcjEge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59Ki9cclxuXHJcbi5jZW50ZXJlZCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLyogVGhlIE1vZGFsIChiYWNrZ3JvdW5kKSAqL1xyXG4ubW9kYWwge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIEhpZGRlbiBieSBkZWZhdWx0ICovXHJcbiAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXHJcbiAgei1pbmRleDogMTsgLyogU2l0IG9uIHRvcCAqL1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlOyAvKiBGdWxsIHdpZHRoICovXHJcbiAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIG92ZXJmbG93OiBhdXRvOyAvKiBFbmFibGUgc2Nyb2xsIGlmIG5lZWRlZCAqL1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7IC8qIEZhbGxiYWNrIGNvbG9yICovXHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjQpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXHJcbn1cclxuXHJcbi8qIE1vZGFsIENvbnRlbnQvQm94ICovXHJcbi5tb2RhbC1jb250ZW50IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmVmZWZlO1xyXG4gIG1hcmdpbjogMTUlIGF1dG87IC8qIDE1JSBmcm9tIHRoZSB0b3AgYW5kIGNlbnRlcmVkICovXHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xyXG4gIHdpZHRoOiA4MCU7IC8qIENvdWxkIGJlIG1vcmUgb3IgbGVzcywgZGVwZW5kaW5nIG9uIHNjcmVlbiBzaXplICovXHJcbn1cclxuXHJcbi8qIFRoZSBDbG9zZSBCdXR0b24gKi9cclxuLmNsb3NlIHtcclxuICBjb2xvcjogI2FhYTtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4gIC5jbG9zZTpob3ZlcixcclxuICAuY2xvc2U6Zm9jdXMge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG4ud3JhcHBlciB7XHJcbiAgLypwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgLyp0b3A6IC0xMThweDsqL1xyXG4gIC8qbGVmdDogNTEwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246bWlkZGxlOyovXHJcbiAgLyp3aWR0aDoxMDBweDtcclxuICBtYXJnaW46MCBhdXRvOyovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTglO1xyXG4gIGxlZnQ6IDQ4JTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG5cclxuLmZpcnN0RGl2LCAuc2Vjb25kRGl2IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ub3RlLWVkaXRvciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItY29sb3I6cmVkO1xyXG59XHJcblxyXG5cclxuLypTVU1NRVIgTk9URSovXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/Tshirts/Tshirts.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Tshirts/Tshirts.component.ts ***!
  \**********************************************/
/*! exports provided: TshirtComponent, Product_custom, Dimensions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TshirtComponent", function() { return TshirtComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product_custom", function() { return Product_custom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dimensions", function() { return Dimensions; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

//import { Product } from '../entities/product.entity';




let gender_text;
let size;
let size1;
let color;
let qty;
let TshirtComponent = class TshirtComponent {
    constructor(router, httpClient, _exampleService, _sharedservice) {
        this.router = router;
        this.httpClient = httpClient;
        this._exampleService = _exampleService;
        this._sharedservice = _sharedservice;
        this.products = [];
        this.products1 = [];
        this.products_exist = [];
    }
    ngOnInit() {
        this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe((res) => {
            this.img_list = res;
        });
        $(document).ready(function () {
            $("#inner_div_basictshirts").hide();
            $("#outer_div_tshirts_cart").hide();
            $("#outer_div_customtshirts_cart").hide();
            //$("#inner_div_basictshirts img").click(function (e) {
            //  $("#outer_div_tshirts").hide();
            //  $("#inner_div_basictshirts").hide();
            //  $("#outer_div_tshirts_cart").show();
            //})
            $("#img_tshirt_modal").click(function () {
                $("#outer_div_tshirts").hide();
                $("#outer_div_customtshirts_cart").show();
            });
            $('#ddl_gender').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Gender",
            });
            $('#ddl_gender1').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Gender",
            });
            $('#ddl_size').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Select Size",
            });
            $('#ddl_size1').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Select Size",
            });
            $('#ddl_Qty1').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Qty",
            });
            var closebtn = function (context) {
                var ui = $.summernote.ui;
                var button = ui.button({
                    contents: '<i class="far fa-times-circle"></i>',
                    tooltip: 'close',
                    click: function () {
                        context.invoke('editor.inserttext', 'red');
                        var src_img = $("#img_tshirt_write").summernote("code");
                        // var src_width_replace = src_img.attr("src");
                        //$('#img_div_write1').html(src_img);
                        $('#img_tshirt_write').append(src_img);
                        $('div p').removeAttr("style");
                        $('div p ').attr("style", "font-size:8px");
                        $('div p img').removeAttr("style");
                        $('div p img').attr("style", "width:115px");
                        $("body").find("#img_tshirt_write").summernote('destroy');
                    }
                });
                return button.render();
            };
            var closebtn_img = function (context) {
                var ui = $.summernote.ui;
                var button = ui.button({
                    contents: '<i class="far fa-times-circle"></i>',
                    tooltip: 'close',
                    click: function () {
                        context.invoke('editor.inserttext', 'red');
                        var src_img = $("#img_tshirt_write1").summernote("code");
                        // var src_width_replace = src_img.attr("src");
                        //$('#img_div_write1').html(src_img);
                        $('#img_div_write1').append(src_img);
                        $('#img_div_write1 p img').removeAttr("style");
                        $('#img_div_write1 p img').attr("style", "width:85px");
                        $("body").find("#img_tshirt_write1").summernote('destroy');
                        $('#img_tshirt_write1').hide();
                        $('#img_selected').show();
                    }
                });
                return button.render();
            };
            var cropbtn = function (context) {
                var ui = $.summernote.ui;
                var button = ui.button({
                    contents: '<i class="fas fa-crop"></i>',
                    tooltip: 'crop',
                    click: function () {
                        context.invoke('editor.inserttext', 'red');
                        $('#div_child').prop("hidden", true);
                        $('#div_child1').prop("hidden", false);
                        var plainText = $("#txtCustom").summernote("code");
                        alert(plainText);
                        $("#img_child1").attr('src', plainText);
                        $("body").find("#txtCustom").summernote('destroy');
                        // $('#txtCustom').prop("hidden", false);
                        //$('#sample').prop("hidden", true);
                    }
                });
                return button.render();
            };
            $("#img_tshirt_write").click(function () {
                $('#img_tshirt_write').summernote({
                    placeholder: 'write here...',
                    focus: true,
                    width: 450,
                    height: 200,
                    right: 100,
                    tooltip: false,
                    toolbar: [
                        ['style', ['bold', 'italic', 'underline', 'clear']],
                        ['font', ['superscript', 'subscript']],
                        //['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['height', ['height']],
                        ['insert', ['picture']],
                        ['mybutton', ['close']],
                    ],
                    buttons: {
                        close: closebtn
                    },
                    callbacks: {
                        onKeydown: function (e) {
                            setTimeout(function () {
                                var plainText = $("#img_tshirt_write").summernote("code");
                                //$("#sample").html(plainText);
                                $("#img_tshirt_write").show();
                                $("#img_tshirt_write").html(plainText);
                                //$('#img_tshirt_write').append(plainText);
                                $('div p img').removeAttr("style");
                                $('div p img').attr("style", "width:115px");
                                if ($("#outer_editor_div").width() <= $("#img_tshirt_write").width()) {
                                    $('#img_tshirt_write').css('font-size', (parseInt($('#img_tshirt_write').css('font-size')) - 1) + "px");
                                }
                                if (e.key == 'Backspace') {
                                    if ($("#outer_editor_div").width() > $("#img_tshirt_write").width()) {
                                        $('#img_tshirt_write').css('font-size', (parseInt($('#img_tshirt_write').css('font-size')) + 1) + "px");
                                    }
                                    else if ($("#outer_editor_div").width() <= $("#img_tshirt_write").width()) {
                                        $('#img_tshirt_write').css('font-size', '');
                                    }
                                }
                                //else if ($("#outer_editor_div").width() ==$("#img_tshirt_write").width())
                                //{
                                //  $('#img_tshirt_write').css('font-size', '')
                                //}
                                // else if ($("#outer_editor_div").width() <=$("#img_tshirt_write").width()){
                                //   $('#img_tshirt_write').css('font-size', (parseInt($('#img_tshirt_write').css('font-size')) + 1) + "px");
                                // $('div p').removeAttr("style");
                                // $('div p ').attr("style", "font-size:8px");
                                //}
                            }, 0);
                        }
                    }
                });
                $('i.note-recent-color').each(function () {
                    $(this).attr('style', 'background-color: transparent;');
                });
            });
            $("#img_tshirt_write1").click(function () {
                $('#img_selected').show();
                $('#img_tshirt_write1').summernote({
                    placeholder: 'write here...',
                    focus: true,
                    width: 300,
                    height: 200,
                    toolbar: [
                        ['style', ['bold', 'italic', 'underline', 'clear']],
                        ['font', ['superscript', 'subscript']],
                        ['fontsize', ['fontsize']],
                        ['color', ['color']],
                        ['height', ['height']],
                        ['insert', ['picture']],
                        ['mybutton', ['close']],
                    ],
                    buttons: {
                        close: closebtn_img
                    },
                    callbacks: {
                        onInit: function () {
                            $("#img_tshirt_write1").on('click', function (e) {
                                console.log('clicked');
                            });
                        },
                        onkeyup: function (e) {
                            setTimeout(function () {
                                var plainText = $("#img_tshirt_write1").summernote("code");
                                alert(plainText);
                                $('#img_selected').attr('src', plainText);
                                //$("#sample").html(plainText);
                                //$("#text_div").html(plainText);;
                            }, 200);
                        }
                    }
                });
                $('i.note-recent-color').each(function () {
                    $(this).attr('style', 'background-color: transparent;');
                });
            });
        });
        $("#ddl_gender").change(function () {
            gender_text = $('#ddl_gender :selected').text();
        });
        $("#ddl_gender1").change(function () {
            gender_text = $('#ddl_gender1 :selected').text();
        });
        $("#ddl_size").change(function () {
            size = $('#ddl_size :selected').val();
        });
        $("#ddl_size1").change(function () {
            size1 = $('#ddl_size1 :selected').val();
        });
        $("#ddl_Qty").change(function () {
            qty = $('#ddl_Qty :selected').text();
        });
        $("#ddl_Qty1").change(function () {
            qty = $('#ddl_Qty1 :selected').text();
        });
    }
    imgclick(e, f, g) {
        $("#inner_div_basictshirts").hide();
        $("#outer_div_tshirts_cart").show();
        // var src = "assets/VisitingCards/Blank-ID-Card-Horz.png";
        sessionStorage.setItem('ModelId', e);
        $("#img_selected_tshirt").attr("src", f);
        $("#lbl_desc").text(g);
        this.httpClient.get('https://localhost:44302/' + 'api/Dimmasters/' + sessionStorage.getItem("ModelId")).subscribe((res) => {
            this.dim = res;
            this.dim.forEach(e => {
                var newOption = new Option(e.dimDescription, e.dimDescription, false, false);
                $('#ddl_size1').append('<option value="' + e.dimId + '">' + e.dimDescription + '</option>').trigger('change');
                $('#ddl_size').append(newOption).trigger('change');
                //  $('#ddl_size1').append(newOption).trigger('change');
                var newOption_gender = new Option(e.gender, e.gender, false, false);
                $('#ddl_gender').append(newOption_gender).trigger('change');
                $('#ddl_gender1').append(newOption_gender).trigger('change');
            });
        });
    }
    AddToCart() {
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        if (sessionStorage.getItem("userid") != null) {
            let n = stringtonum(size1);
            var s = "l3menu";
            this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res) => {
                this.products1 = res;
                this.products1.forEach(e => {
                    if (e.DimId == n) {
                        this.products_exist.push(e);
                    }
                });
                if (this.products_exist.length == 0) {
                    this.products = [{
                            // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                            modelId: stringtonum(sessionStorage.getItem('ModelId')),
                            Gender: gender_text,
                            CustomContent: null,
                            DimId: stringtonum(size1),
                            OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                            DtCreate: null,
                            DtModify: null,
                            quantity: stringtonum(qty),
                            IsCustomized: 0,
                            StatusCode: "C",
                            itemPrice: 500,
                            discAmount: 0,
                            netAmount: 500
                        }];
                    this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.products[0]).subscribe(res => { alert("post"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d + this.products.length);
                    alert("product added to cart");
                }
                else {
                    if (stringtonum(size1) != this.products_exist[0].DimId) {
                        var quantity = stringtonum(qty);
                        this.products = [{
                                detailId: this.products1[0].detailId,
                                // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                                modelId: stringtonum(sessionStorage.getItem('ModelId')),
                                Gender: gender_text,
                                CustomContent: null,
                                DimId: stringtonum(size1),
                                OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                                DtCreate: null,
                                DtModify: null,
                                quantity: quantity,
                                IsCustomized: 0,
                                StatusCode: "C",
                                netAmount: 500,
                                discAmount: 0,
                                itemPrice: 500
                            }];
                        let d = stringtonum(sessionStorage.getItem("cartcount"));
                        this._sharedservice.updateCartCount(d + this.products.length);
                        alert("product added to cart");
                    }
                    else {
                        var quantity = stringtonum(qty);
                        this.products = [{
                                detailId: this.products1[0].detailId,
                                // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                                modelId: stringtonum(sessionStorage.getItem('ModelId')),
                                Gender: gender_text,
                                CustomContent: null,
                                DimId: stringtonum(size1),
                                OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                                DtCreate: null,
                                DtModify: null,
                                quantity: this.products1[0].quantity + quantity,
                                IsCustomized: 0,
                                StatusCode: "C",
                                itemPrice: 900,
                                netAmount: 800,
                                discAmount: 0
                            }];
                        let d = stringtonum(sessionStorage.getItem("cartcount"));
                        this._sharedservice.updateCartCount(d);
                        alert("product added to cart");
                    }
                    this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products1[0].detailId, this.products[0]).subscribe(res => { alert("put"); });
                }
            });
            this.products_exist = [];
        }
        else {
            alert("Please Login to add product to cart");
            this.router.navigateByUrl('/Login');
        }
    }
    AddToCart_custom() {
        sessionStorage.setItem('ModelId', '15'); //reference purpose...remove this on making this dynamic
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        if (sessionStorage.getItem("userid") != null) {
            let n = stringtonum(size);
            n = 2; //remove on makimg dynamic
            var s = "l3menu";
            this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + stringtonum(sessionStorage.getItem('ModelId')) + '/' + s).subscribe((res) => {
                this.products1 = res;
                this.products1.forEach(e => {
                    if (e.DimId == n) {
                        this.products_exist.push(e);
                    }
                });
            });
            if (this.products_exist.length == 0) {
                this.custom_text = [{
                        // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                        modelId: stringtonum(sessionStorage.getItem('ModelId')),
                        Gender: gender_text,
                        CustomContent: $("#img_tshirt_write")[0].innerHTML,
                        DimId: n,
                        OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                        DtCreate: null,
                        DtModify: null,
                        quantity: stringtonum(qty),
                        IsCustomized: 1,
                        StatusCode: "C",
                        itemPrice: 900,
                        netAmount: 800,
                        discAmount: 0
                    }];
                this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.custom_text[0]).subscribe(res => { alert("post_custom"); });
            }
            else {
                if (stringtonum(size) != this.products_exist[0].DimId) {
                    var quantity = stringtonum(qty);
                    this.custom_text = [{
                            detailId: this.products1[0].detailId,
                            //  ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                            modelId: stringtonum(sessionStorage.getItem('ModelId')),
                            Gender: gender_text,
                            CustomContent: null,
                            DimId: stringtonum(size),
                            OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                            DtCreate: null,
                            DtModify: null,
                            quantity: quantity,
                            IsCustomized: 0,
                            StatusCode: "C",
                            itemPrice: 900,
                            netAmount: 800,
                            discAmount: 0
                        }];
                }
                else {
                    var quantity = stringtonum(qty);
                    this.custom_text = [{
                            detailId: this.products1[0].detailId,
                            //ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                            modelId: stringtonum(sessionStorage.getItem('ModelId')),
                            Gender: gender_text,
                            CustomContent: null,
                            DimId: stringtonum(size),
                            OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                            DtCreate: null,
                            DtModify: null,
                            quantity: this.products1[0].quantity + quantity,
                            IsCustomized: 0,
                            StatusCode: "C",
                            itemPrice: 900,
                            netAmount: 800,
                            discAmount: 0
                        }];
                }
                this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products1[0].detailId, this.custom_text[0]).subscribe(res => { alert("put"); });
            }
            let cartC = stringtonum(sessionStorage.getItem("cartcount"));
            this._sharedservice.updateCartCount(cartC + this.custom_text.length);
        }
        else {
            alert("Please Login to add product to cart");
            this.router.navigateByUrl('/Login');
        }
    }
    //AddToCart() {
    //  if (localStorage.getItem('cart') != "null") {
    //    var item: Item = {
    //      product: this._exampleService.find("1"),
    //      quantity: 1
    //    };
    //    let cart: any = localStorage.getItem('cart');
    //    let index: number = -1;
    //    for (var i = 0; i < cart.length; i++) {
    //      item = cart[i];
    //      if (item.product.id == "1") {
    //        index = i;
    //        break;
    //      }
    //    }
    //    if (index == -1) {
    //      cart.push(JSON.stringify(Item));
    //      localStorage.setItem('cart', JSON.stringify(cart));
    //    } else {
    //      let item: Item = JSON.parse(cart[index]);
    //      item.quantity += 1;
    //      cart[index] = JSON.stringify(item);
    //      localStorage.setItem("cart", JSON.stringify(cart));
    //    }
    //  }
    //  else {
    //    //var products: Product[] = this._exampleService.insertProduct('1', gender_text, size, color, qty);
    //    var item: Item = {
    //      product: { id: '1', gender: gender_text, size: size, color: color, qty: qty },
    //      quantity: 1
    //    };
    //   // this.products = this._exampleService.insertProduct('1', gender_text, size, color, qty);
    //    if (localStorage.getItem('cart') == "null") {
    //      let product: any = [];
    //      product.push(JSON.stringify(item));
    //      //localStorage.setItem('product', JSON.stringify(product));
    //      this._exampleService.addProductToCart(product);
    //    }
    //  }
    //  //this.cartItemsCount = this.products.length;
    ////  this._sharedservice.updateCartCount();
    //  //Storing image
    //}
    shopnow() {
        $("#outer_div_tshirts").prop("hidden", true);
        $("#inner_div_basictshirts").show();
        this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe((res) => {
            this.img_list = res;
        });
    }
    StartDesign() {
        $('#div_main').prop("hidden", true);
        $('#div_child').prop("hidden", false);
        // var nextImage = $('.carousel-inner').find('.item .active').find('img').attr('src');
        var nextImage = $('.carousel-inner').children().prevObject.find('.active').find('img').attr('src');
        var canvas = document.getElementById('stage');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            // ctx.fillStyle = "#D74022";
            // ctx.fillRect(25, 25, 150, 150);
            // ctx.fillStyle = "rgba(0,0,0,0.5)";
            // ctx.clearRect(60, 60, 120, 120);
            // ctx.strokeRect(90, 90, 80, 80);
        }
    }
};
TshirtComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
TshirtComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-Tshirts',
        template: __importDefault(__webpack_require__(/*! raw-loader!./Tshirts.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Tshirts/Tshirts.component.html")).default,
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]],
        styles: [__importDefault(__webpack_require__(/*! ./Tshirts.component.css */ "./src/app/Tshirts/Tshirts.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"], _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
], TshirtComponent);

class Product_custom {
}
class Dimensions {
}


/***/ }),

/***/ "./src/app/address-list/address-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/address-list/address-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MtbGlzdC9hZGRyZXNzLWxpc3QuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/address-list/address-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/address-list/address-list.component.ts ***!
  \********************************************************/
/*! exports provided: AddressListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressListComponent", function() { return AddressListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let AddressListComponent = class AddressListComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.address_list = [];
        this.address_list1 = [];
        this.userid = localStorage.getItem("userid");
        this.ex = [];
        this.objectKeys = Object.keys;
    }
    ngOnInit() {
        // const action = "addr_list";
        this.http.get('https://localhost:44302/' + 'api/Useraddresses/' + this.userid, { params: { action: "addr_lst" } }).subscribe((res) => {
            for (var i = 0; i <= (res.length / 2); i++) {
                this.address_list.push({
                    userId: res[i].userId,
                    addressLine1: res[i].addressLine1,
                    addressLine2: res[i].addressLine1,
                    addressLine3: res[i].addressLine1,
                    addressLine4: res[i].addressLine1,
                    addressLine5: res[i].addressLine1,
                    addressType: res[i].addressType,
                    pinCode: res[i].pinCode,
                    contactNo: res[i].contactNo,
                    name: res[i].name,
                });
            }
            for (var i = ((res.length / 2) + 0.5); i <= (res.length); i++) {
                this.address_list1.push({
                    userId: res[i].userId,
                    addressLine1: res[i].addressLine1,
                    addressLine2: res[i].addressLine1,
                    addressLine3: res[i].addressLine1,
                    addressLine4: res[i].addressLine1,
                    addressLine5: res[i].addressLine1,
                    addressType: res[i].addressType,
                    pinCode: res[i].pinCode,
                    contactNo: res[i].contactNo,
                    name: res[i].name,
                });
            }
            // this.address_list = res;
            var tr;
            //alert(res[0].userId);
            //var address_list: User_Address_list = {
            //UserId: res[0].userId
            //res.forEach((res: any) => {
            //  this.address_list.push(res);
            //});
            //for (var i in res)
            //  this.address_list.push([i, res[i]]);
            //for (var i = 0; i < res.length; i++) {
            //  tr = $('<tr/>');
            //  tr.append("<td>" + (i+1) + "</td>");
            //  tr.append("<td>" + res[i].name + "<br/>" + res[i].addressLine1 +","
            //    + res[i].addressLine2 + "," + res[i].addressLine3 + "," + res[i].addressLine4 + "," +
            //    res[i].addressLine5 + "<br/>"+"Pin code:"+res[i].pinCode +"<br/>"+"Contact no:"+ res[i].contactNo  + "</td>");
            //  tr.append("<td>" + "<a href='' class='remove'>"+"Remove"+"</a>"+"&nbsp;"+"<span>|</span>"+"&nbsp;"+"<a>Edit</a>" + "</td>");
            ////  $("#table_address").append(tr);
            //}
            //$("#table_address tr td .remove").click(function () {
            //  //$(this).parent("tr:first").remove()
            //  alert("remove");
            //})
        });
    }
    editaddr(addr) {
        this.router.navigateByUrl(`edit-address/${addr.addrId}`);
    }
    deladdr(addr) {
        this.http.delete('https://localhost:44302/' + 'api/UserAddresses/' + addr.addrId).subscribe(x => this.setUsersList());
    }
    setUsersList() {
        this.http.get('https://localhost:44302/' + 'api/Useraddresses/' + this.userid, { params: { action: "addr_lst" } }).subscribe((x) => {
            this.address_list = x;
        });
    }
};
AddressListComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddressListComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-address-list',
        template: __importDefault(__webpack_require__(/*! raw-loader!./address-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/address-list/address-list.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./address-list.component.css */ "./src/app/address-list/address-list.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AddressListComponent);



/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lbl_style {\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  font-family: Verdana,sans-serif;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n  border: none;\r\n}\r\n\r\nform div div table tbody tr td td label {\r\n  color: #ff0000 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYmxfc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIGRpdiBkaXYgdGFibGUgdGJvZHkgdHIgdGQgdGQgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent, ProductList, Prod_model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prod_model", function() { return Prod_model; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let prodid;
let prodid_l2;
let p;
let prodid_l3 = "";
let prod_desc = "";
let selected_filename = "";
let modelfolder_name = "";
let model_count;
let formData;
let filename = "";
let AdminComponent = class AdminComponent {
    constructor(http) {
        this.http = http;
        this.selectedfile = null;
        this.s = [];
    }
    ngOnInit() {
        $(document).ready(function () {
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
        this.http.get('https://localhost:44302/' + 'api/Products/' + prd_level + '/' + prodid).subscribe((res1) => {
            p = res1;
            this.prod_lst = res1;
            this.prod_lst.forEach(e => {
                if (e.parentId == null) {
                    //var newOption = new Option(e.prodDesc, e.prodDesc, false, false);
                    $('#ddl_prodl1').append('<option value="' + e.prodId + '">' + e.prodDesc + '</option>'); //.trigger('change');
                }
            });
        });
        $("#ddl_prodl1").change(function () {
            $("#ddl_prodl2").empty();
            $('#ddl_prodl2').append('<option />');
            prodid = $('#ddl_prodl1 :selected').val();
            p.forEach(g => {
                if (g.prodId == prodid) {
                    modelfolder_name = g.routerLink;
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
    }
    OnFileSelect(event) {
        //event.target.files[0].name = selected_filename;
        this.selectedfile = event.target.files[0];
        // alert(this.selectedfile.name);
        const oldFileItem = event.target.files[0];
        if (prodid_l3 != "") {
            this.http.get('https://localhost:44302/' + 'api/Productmodels/' + prodid_l3 + '/' + "adminpage").subscribe((e) => {
                model_count = e.length;
                selected_filename = $("#modle_code")[0].value + '_' + model_count + '.jpg'; // this.selectedfile.name;
                // alert(selected_filename);
                const newFile = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
                filename = newFile.name;
                let formData = new FormData();
                formData.append('file', newFile, newFile.name);
                formData.append('folderName', modelfolder_name);
                // let params = { 'formdata': formData, 'foldername': 'example' }
                this.http.post('https://localhost:44302/' + 'api/FileUpload', formData).subscribe(e => { });
            });
        }
        else {
            this.http.get('https://localhost:44302/' + 'api/Productmodels/' + prodid_l2 + '/' + "adminpage").subscribe((e) => {
                model_count = e.length;
                selected_filename = $("#modle_code")[0].value + '_' + model_count + '.jpg'; // this.selectedfile.name;
                // alert(selected_filename);
                const newFile = new File([event.target.files[0]], selected_filename, { type: oldFileItem.type });
                filename = newFile.name;
                let formData = new FormData();
                formData.append('file', newFile, newFile.name);
                formData.append('folderName', modelfolder_name);
                // let params = { 'formdata': formData, 'foldername': 'example' }
                this.http.post('https://localhost:44302/' + 'api/FileUpload', formData).subscribe(e => { });
            });
        }
        //sessionStorage.setItem("folder", modelfolder_name);
        //if (selected_filename != "") {
        //}
    }
    save() {
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        if (prodid_l3 != "") {
            //inserting into prod model
            var test = { ProdId: stringtonum(prodid_l3), ModelCode: $("#modle_code")[0].value, ModelDesc: prod_desc, ModelLink: "assets/" + modelfolder_name + "/" + filename, DtCreate: null, DtModify: null, IsActive: 1 };
            this.http.post('https://localhost:44302/' + 'api/Productmodels', test).subscribe(e => { alert("Image Uploaded"); });
        }
        else {
            var test = { ProdId: stringtonum(prodid_l2), ModelCode: $("#modle_code")[0].value, ModelDesc: prod_desc, ModelLink: "assets/" + modelfolder_name + "/" + filename, DtCreate: null, DtModify: null, IsActive: 1 };
            this.http.post('https://localhost:44302/' + 'api/Productmodels', test).subscribe(e => { alert("Image Uploaded"); });
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }
];
AdminComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: __importDefault(__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/admin/admin.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]])
], AdminComponent);

class ProductList {
}
class Prod_model {
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent, Product_list, Productmodel, testModel, l2model, mainmodel, prod_View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Product_list", function() { return Product_list; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productmodel", function() { return Productmodel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "testModel", function() { return testModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l2model", function() { return l2model; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainmodel", function() { return mainmodel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prod_View", function() { return prod_View; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

//import { Product } from './entities/product.entity';





let count;
let AppComponent = class AppComponent {
    constructor(http, _location, _exampleService, router, _sharedservice) {
        this.http = http;
        this._location = _location;
        this._exampleService = _exampleService;
        this.router = router;
        this._sharedservice = _sharedservice;
        this.cartItemCount = 0;
        this.login_text = "Sign In";
        this.login_username = "";
        this.change_pwd = "";
        this.signout_text = "";
        this.isheader = " ";
        //public products: Product[];
        this.prodlist = [];
        this.prodlist_main = [];
        this.prodView1 = [];
        this.prodView2 = [];
        this.test = [];
        this.test_l2prod = [];
        this.test_l2prod1 = [];
        this.test_l2prod2 = [];
        this.groubedByTeam = [];
        this.groubedByTeam_l2 = [];
        this.groubedByTeam_l3 = [];
        this.testmodel = [];
        this.count = 0;
        this.isExpanded = false;
        //this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        //this.mySubscription = this.router.events.subscribe((event) => {
        //  if (event instanceof NavigationEnd) {
        //    // Trick the Router into believing it's last link wasn't previously loaded
        //    this.router.navigated = false;
        //  }
        // }); 
    }
    ngOnInit() {
        if (sessionStorage.getItem("userid") == null) {
            sessionStorage.setItem("status_text", "Sign In");
        }
        //from db loading prod list dynamically
        this.http.get('https://localhost:44302/' + 'api/Products').subscribe((res1) => {
            this.prodView = res1;
            var groupBy = function (xs, key) {
                return xs.reduce(function (rv, x) {
                    (rv[x[key]] = rv[x[key]] || []).push(x);
                    return rv;
                }, {});
            };
            this.groubedByTeam = groupBy(this.prodView, 'l1parentId');
            for (let key1 in this.groubedByTeam) {
                if (this.groubedByTeam[key1].length > 1 || this.groubedByTeam[key1][0].l2prodId != undefined) {
                    //for (let r in this.groubedByTeam[key1]) {
                    //  if (this.groubedByTeam[key1][r].l2isHeader == "0") {
                    //    this.prodView1.push(this.groubedByTeam[key1][r]);
                    //    this.groubedByTeam_l2 = groupBy(this.prodView1, 'l3prodId');
                    //  }
                    //  else {
                    //    this.prodView2.push(this.groubedByTeam[key1][r]);
                    //    this.groubedByTeam_l2 = groupBy(this.prodView2, 'l2prodId');
                    //  }
                    //}
                    // this.groubedByTeam_l3 = this.groubedByTeam_l3.concat(this.groubedByTeam_l2);
                    this.groubedByTeam_l2 = groupBy(this.groubedByTeam[key1], 'l2prodId');
                    //if (this.groubedByTeam[key1].l2isHeader == 1) {
                    // this.groubedByTeam_l2 = groupBy(this.groubedByTeam[key1], 'l2prodId');
                    //}
                    //else {
                    //  this.groubedByTeam_l2 = this.groubedByTeam[key1];
                    //}
                    count = 0;
                }
                else {
                    this.groubedByTeam_l2 = this.groubedByTeam[key1];
                    count = 1;
                }
                var output = [];
                for (let key in this.groubedByTeam_l2) {
                    if (count == 0) {
                        //  if (this.groubedByTeam_l2[key].length == 1) {
                        //this.testmodel.push({
                        //  l3prodId: this.groubedByTeam_l2[key][0].l2prodId,
                        //  l3prodDesc: this.groubedByTeam_l2[key][0].l2prodDesc,
                        //  l2prodDesc: ""
                        //})
                        // }
                        // else {
                        this.groubedByTeam_l2[key].forEach(e => {
                            if (e.routerLink != null)
                                this.testmodel.push({ l3prodId: e.l3prodId, l3prodDesc: e.l3prodDesc, l2prodDesc: e.l2prodDesc, RouterLink: e.routerLink, ModelId: e.modelId });
                            else {
                                e.routerLink = " ";
                                this.testmodel.push({ l3prodId: e.l3prodId, l3prodDesc: e.l3prodDesc, l2prodDesc: e.l2prodDesc, RouterLink: e.routerLink, ModelId: e.modelId });
                            }
                        });
                        // }
                        this.test.push({ testmodel: this.testmodel });
                        // if (this.groubedByTeam_l2[key].length == 1) {
                        // this.test_l2prod = [{ l2prodDesc: "", testmodel: this.test }];
                        // }
                        // else {
                        this.test_l2prod = [{ l2prodId: this.groubedByTeam_l2[key][0].l2prodId, l2routerLink: this.groubedByTeam_l2[key][0].routerLink, l2prodDesc: this.groubedByTeam_l2[key][0].l2prodDesc, testmodel: this.test, l2isHeader: this.groubedByTeam_l2[key][0].l2isHeader }];
                        //}
                        this.test_l2prod1.push({ prdmodel: this.test_l2prod });
                        this.prodlist = [{
                                ProdId: this.groubedByTeam_l2[key][0].l1parentId,
                                ProdDesc: this.groubedByTeam_l2[key][0].l1prodDesc,
                                productModel: this.test_l2prod1
                                //productModel: [{ testmodel: this.testmodel }]
                            }];
                    }
                    else {
                        this.prodlist = [{
                                ProdId: this.groubedByTeam_l2[0].l1parentId,
                                ProdDesc: this.groubedByTeam_l2[0].l1prodDesc,
                                productModel: []
                                //productModel: [{ testmodel: this.testmodel }]
                            }];
                    }
                    //this.prodlist.push({ ProdId: this.groubedByTeam[1] })
                    this.testmodel = [];
                    this.test = [];
                }
                this.prodlist_main.push({ mainmodel: this.prodlist });
                this.test_l2prod1 = [];
                this.prodlist = [];
            }
        });
        // localStorage.setItem('cart', null);
        this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
        this._sharedservice.loginMessage.subscribe(msg => this.login_text = sessionStorage.getItem('status_text'));
        this._sharedservice.UserName.subscribe(name => this.login_username = name);
        this._sharedservice.changepwd.subscribe(changepwd => this.change_pwd = sessionStorage.getItem('changepwd'));
        this._sharedservice.loginMessage_signout.subscribe(signout => this.signout_text = sessionStorage.getItem('signouttext'));
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
            $('#media').carousel({
                pause: false,
                interval: false,
            });
        });
    }
    //Sub menu hyperlink click event
    subMenuhyperlinkClick(e) {
        //location.reload();
        sessionStorage.setItem('Prodl3Id', e.target.id);
        this.router.navigate([this.router.url]);
        //   this.router.navigate(e.target.href);
        //alert(this._location.path());
    }
    subL2MenuhyperlinkClick(e) {
        // alert(e.target.innerText+e.target.id);
        sessionStorage.setItem('Prodl2Id', e.target.id);
    }
    //main menu hyperlink click event
    MainMenuhyperlinkClick(e) {
        sessionStorage.setItem('ProdId', e.target.id);
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
    myaccount() {
        if (this.login_text == 'Sign In') {
            this.router.navigateByUrl('/Login');
        }
        else {
            //this.router.navigateByUrl('/Login');
        }
    }
    myaddress() {
        if (this.login_text == 'Sign In') {
            this.router.navigateByUrl('/Login');
        }
        else {
            this.router.navigateByUrl('/new-address');
        }
    }
    signout() {
        sessionStorage.removeItem("user_name");
        sessionStorage.removeItem("changepwd");
        sessionStorage.setItem("status_text", "Sign In");
        sessionStorage.removeItem("signouttext");
        this.router.navigateByUrl('/Login');
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
], AppComponent);

class Product_list {
}
class Productmodel {
}
class testModel {
}
class l2model {
}
class mainmodel {
}
class prod_View {
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _Tshirts_Tshirts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Tshirts/Tshirts.component */ "./src/app/Tshirts/Tshirts.component.ts");
/* harmony import */ var _Products_Product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Products/Product.component */ "./src/app/Products/Product.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _Login_Login_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Login/Login.component */ "./src/app/Login/Login.component.ts");
/* harmony import */ var _Register_Register_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Register/Register.component */ "./src/app/Register/Register.component.ts");
/* harmony import */ var _Floor_Floor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Floor/Floor.component */ "./src/app/Floor/Floor.component.ts");
/* harmony import */ var _wallpapers_wallpapers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./wallpapers/wallpapers.component */ "./src/app/wallpapers/wallpapers.component.ts");
/* harmony import */ var _IdCards_IdCards_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./IdCards/IdCards.component */ "./src/app/IdCards/IdCards.component.ts");
/* harmony import */ var _invitation_cards_invitation_cards_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./invitation-cards/invitation-cards.component */ "./src/app/invitation-cards/invitation-cards.component.ts");
/* harmony import */ var _cupboards_cupboards_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cupboards/cupboards.component */ "./src/app/cupboards/cupboards.component.ts");
/* harmony import */ var _door_door_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./door/door.component */ "./src/app/door/door.component.ts");
/* harmony import */ var _glass_partition_glass_partition_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./glass-partition/glass-partition.component */ "./src/app/glass-partition/glass-partition.component.ts");
/* harmony import */ var _windows_windows_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./windows/windows.component */ "./src/app/windows/windows.component.ts");
/* harmony import */ var _steps_railing_steps_railing_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./steps-railing/steps-railing.component */ "./src/app/steps-railing/steps-railing.component.ts");
/* harmony import */ var _trophy_engraving_trophy_engraving_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./trophy-engraving/trophy-engraving.component */ "./src/app/trophy-engraving/trophy-engraving.component.ts");
/* harmony import */ var _trophy_printing_trophy_printing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./trophy-printing/trophy-printing.component */ "./src/app/trophy-printing/trophy-printing.component.ts");
/* harmony import */ var _brouchers_brouchers_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./brouchers/brouchers.component */ "./src/app/brouchers/brouchers.component.ts");
/* harmony import */ var _cloth_blinders_cloth_blinders_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cloth-blinders/cloth-blinders.component */ "./src/app/cloth-blinders/cloth-blinders.component.ts");
/* harmony import */ var _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./forgotpassword/forgotpassword.component */ "./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var _new_address_new_address_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./new-address/new-address.component */ "./src/app/new-address/new-address.component.ts");
/* harmony import */ var _address_list_address_list_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./address-list/address-list.component */ "./src/app/address-list/address-list.component.ts");
/* harmony import */ var _edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./edit-address/edit-address.component */ "./src/app/edit-address/edit-address.component.ts");
/* harmony import */ var _visiting_cards_visiting_cards_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./visiting-cards/visiting-cards.component */ "./src/app/visiting-cards/visiting-cards.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _calender_calender_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./calender/calender.component */ "./src/app/calender/calender.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



































let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _Tshirts_Tshirts_component__WEBPACK_IMPORTED_MODULE_10__["TshirtComponent"],
            _Products_Product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["cartComponent"],
            _Login_Login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"],
            _Register_Register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"],
            _Floor_Floor_component__WEBPACK_IMPORTED_MODULE_15__["FloorComponent"],
            _wallpapers_wallpapers_component__WEBPACK_IMPORTED_MODULE_16__["wallpapersComponent"],
            _IdCards_IdCards_component__WEBPACK_IMPORTED_MODULE_17__["IdCardsComponent"],
            _invitation_cards_invitation_cards_component__WEBPACK_IMPORTED_MODULE_18__["InvitationCardsComponent"],
            _cupboards_cupboards_component__WEBPACK_IMPORTED_MODULE_19__["CupboardsComponent"],
            _door_door_component__WEBPACK_IMPORTED_MODULE_20__["DoorComponent"],
            _glass_partition_glass_partition_component__WEBPACK_IMPORTED_MODULE_21__["GlassPartitionComponent"],
            _windows_windows_component__WEBPACK_IMPORTED_MODULE_22__["WindowsComponent"],
            _steps_railing_steps_railing_component__WEBPACK_IMPORTED_MODULE_23__["StepsRailingComponent"],
            _trophy_engraving_trophy_engraving_component__WEBPACK_IMPORTED_MODULE_24__["TrophyEngravingComponent"],
            _trophy_printing_trophy_printing_component__WEBPACK_IMPORTED_MODULE_25__["TrophyPrintingComponent"],
            _brouchers_brouchers_component__WEBPACK_IMPORTED_MODULE_26__["BrouchersComponent"],
            _cloth_blinders_cloth_blinders_component__WEBPACK_IMPORTED_MODULE_27__["ClothBlindersComponent"],
            _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_28__["ForgotpasswordComponent"],
            _new_address_new_address_component__WEBPACK_IMPORTED_MODULE_29__["NewAddressComponent"],
            _address_list_address_list_component__WEBPACK_IMPORTED_MODULE_30__["AddressListComponent"],
            _edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_31__["EditAddressComponent"],
            _visiting_cards_visiting_cards_component__WEBPACK_IMPORTED_MODULE_32__["VisitingCardsComponent"],
            _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"],
            _calender_calender_component__WEBPACK_IMPORTED_MODULE_34__["CalenderComponent"]
            //FileUploadModule
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
                { path: 'Tshirts', component: _Tshirts_Tshirts_component__WEBPACK_IMPORTED_MODULE_10__["TshirtComponent"] },
                { path: 'Products', component: _Products_Product_component__WEBPACK_IMPORTED_MODULE_11__["ProductComponent"] },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_12__["cartComponent"] },
                { path: 'Login', component: _Login_Login_component__WEBPACK_IMPORTED_MODULE_13__["LoginComponent"] },
                { path: 'Register', component: _Register_Register_component__WEBPACK_IMPORTED_MODULE_14__["RegisterComponent"] },
                { path: 'Floor', component: _Floor_Floor_component__WEBPACK_IMPORTED_MODULE_15__["FloorComponent"] },
                { path: 'wallpapers', component: _wallpapers_wallpapers_component__WEBPACK_IMPORTED_MODULE_16__["wallpapersComponent"] },
                { path: 'IdCards', component: _IdCards_IdCards_component__WEBPACK_IMPORTED_MODULE_17__["IdCardsComponent"] },
                { path: 'invitation-cards', component: _invitation_cards_invitation_cards_component__WEBPACK_IMPORTED_MODULE_18__["InvitationCardsComponent"] },
                { path: 'cupboards', component: _cupboards_cupboards_component__WEBPACK_IMPORTED_MODULE_19__["CupboardsComponent"] },
                { path: 'door', component: _door_door_component__WEBPACK_IMPORTED_MODULE_20__["DoorComponent"] },
                { path: 'glass-partition', component: _glass_partition_glass_partition_component__WEBPACK_IMPORTED_MODULE_21__["GlassPartitionComponent"] },
                { path: 'windows', component: _windows_windows_component__WEBPACK_IMPORTED_MODULE_22__["WindowsComponent"] },
                { path: 'steps-railing', component: _steps_railing_steps_railing_component__WEBPACK_IMPORTED_MODULE_23__["StepsRailingComponent"] },
                { path: 'trophy-printing', component: _trophy_printing_trophy_printing_component__WEBPACK_IMPORTED_MODULE_25__["TrophyPrintingComponent"] },
                { path: 'trophy-engraving', component: _trophy_engraving_trophy_engraving_component__WEBPACK_IMPORTED_MODULE_24__["TrophyEngravingComponent"] },
                { path: 'brouchers', component: _brouchers_brouchers_component__WEBPACK_IMPORTED_MODULE_26__["BrouchersComponent"] },
                { path: 'cloth-blinders', component: _cloth_blinders_cloth_blinders_component__WEBPACK_IMPORTED_MODULE_27__["ClothBlindersComponent"] },
                { path: 'forgotpassword', component: _forgotpassword_forgotpassword_component__WEBPACK_IMPORTED_MODULE_28__["ForgotpasswordComponent"] },
                { path: 'new-address', component: _new_address_new_address_component__WEBPACK_IMPORTED_MODULE_29__["NewAddressComponent"] },
                { path: 'address-list', component: _address_list_address_list_component__WEBPACK_IMPORTED_MODULE_30__["AddressListComponent"] },
                { path: 'edit-address/:id', component: _edit_address_edit_address_component__WEBPACK_IMPORTED_MODULE_31__["EditAddressComponent"] },
                { path: 'visiting-cards', component: _visiting_cards_visiting_cards_component__WEBPACK_IMPORTED_MODULE_32__["VisitingCardsComponent"] },
                { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_33__["AdminComponent"] },
                { path: 'calender', component: _calender_calender_component__WEBPACK_IMPORTED_MODULE_34__["CalenderComponent"] }
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/brouchers/brouchers.component.css":
/*!***************************************************!*\
  !*** ./src/app/brouchers/brouchers.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jyb3VjaGVycy9icm91Y2hlcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/brouchers/brouchers.component.ts":
/*!**************************************************!*\
  !*** ./src/app/brouchers/brouchers.component.ts ***!
  \**************************************************/
/*! exports provided: BrouchersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrouchersComponent", function() { return BrouchersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let BrouchersComponent = class BrouchersComponent {
    constructor() { }
    ngOnInit() {
    }
};
BrouchersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-brouchers',
        template: __importDefault(__webpack_require__(/*! raw-loader!./brouchers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/brouchers/brouchers.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./brouchers.component.css */ "./src/app/brouchers/brouchers.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], BrouchersComponent);



/***/ }),

/***/ "./src/app/calender/calender.component.css":
/*!*************************************************!*\
  !*** ./src/app/calender/calender.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGVuZGVyL2NhbGVuZGVyLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/calender/calender.component.ts":
/*!************************************************!*\
  !*** ./src/app/calender/calender.component.ts ***!
  \************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let qty;
let qty_update;
let detailid = 0;
let CalenderComponent = class CalenderComponent {
    constructor(httpClient, prod_service, _sharedservice) {
        this.httpClient = httpClient;
        this.prod_service = prod_service;
        this._sharedservice = _sharedservice;
        this.products_get = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $("#innerdiv_WC").hide();
            $('#ddl_Qty').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Quantity",
            });
            $("#ddl_Qty").change(function () {
                qty = $('#ddl_Qty :selected').text();
            });
        });
        this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id")).subscribe((res) => {
            this.img_list = res;
        });
    }
    imgclick(e, f, g) {
        $("#div_WC").hide();
        $("#innerdiv_WC").show();
        $("#img_selected_WC").attr("src", f);
        $("#lbl_desc").text(g);
        sessionStorage.setItem('ModelId', e);
    }
    AddToCart() {
        if (sessionStorage.getItem("userid") != null) {
            function stringtonum(input) {
                var n = Number(input);
                return n;
            }
            var s = "l3menu";
            this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res) => {
                this.products_get = res;
                if (this.products_get.length == 0) {
                    this.prod = this.prod_service.insertProduct(qty, detailid, 300, 0);
                    this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.prod[0]).subscribe(res => { alert("invi post"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d + this.prod.length);
                }
                else {
                    detailid = 1;
                    qty_update = this.products_get[0].quantity + stringtonum(qty);
                    this.prod = this.prod_service.insertProduct(qty_update, this.products_get[0].detailId, 300, 0);
                    this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products_get[0].detailId, this.prod[0]).subscribe(res => { alert("invi put"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d);
                    alert("product added to cart");
                }
            });
        }
        else {
            alert("Please loginwwwwwlwl");
        }
    }
};
CalenderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
CalenderComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-calender',
        template: __importDefault(__webpack_require__(/*! raw-loader!./calender.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calender/calender.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./calender.component.css */ "./src/app/calender/calender.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
], CalenderComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: cartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cartComponent", function() { return cartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let cartpage = "";
let cartComponent = class cartComponent {
    constructor(_exampleService, httpClient, _sharedservice) {
        this._exampleService = _exampleService;
        this.httpClient = httpClient;
        this._sharedservice = _sharedservice;
        this.cartItemCount = 0;
    }
    ngOnInit() {
        //this.httpClient.get('https://localhost:44302/' + 'api/OdCarts/' + sessionStorage.getItem("userid")).subscribe(
        //  (r: any) =>
        //  {
        //    this.productAddedTocart = r;
        //    this.productAddedTocart.forEach(r => {
        //      this.productAddedTocart[r.ModelLink] == "ss";
        //    })
        //    cartpage = "cart";
        //    this.productAddedTocart.forEach(res => {
        //      //this.productAddedTocart[0].modelId
        //      // alert(res.modelId);
        //      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + res.modelId + '/' + cartpage).subscribe(
        //        (r: any) => {
        //          this.img_list.push(r);
        //        })
        //    })
        //    if (sessionStorage.getItem("ModelId") != null) {
        //      this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("ModelId")+ '/' + cartpage).subscribe(
        //        (r: any) => {
        //          this.img_list = r;
        //        })
        //    }
        //    else {
        //    }
        //});
        this.httpClient.get('https://localhost:44302/' + 'api/OdCarts/' + sessionStorage.getItem("userid")).subscribe((r) => {
            this.productAddedTocart = r;
            if (sessionStorage.getItem("ModelId") != null) {
                this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("ModelId") + '/' + "cart").subscribe((r) => {
                    this.img_list = r;
                });
            }
            else {
            }
        });
        this._sharedservice.currentMessage.subscribe(msg => this.cartItemCount = msg);
        //   this.productAddedTocart = this._exampleService.getProductFromCart();
        //this._exampleService.addProductToCart(this.productAddedTocart);
        //var item: Item = {
        //  product: this.productService.find('1'),
        //  quantity: 1
        //};
    }
};
cartComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }
];
cartComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cart',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
    }),
    __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]])
], cartComponent);



/***/ }),

/***/ "./src/app/cloth-blinders/cloth-blinders.component.css":
/*!*************************************************************!*\
  !*** ./src/app/cloth-blinders/cloth-blinders.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3RoLWJsaW5kZXJzL2Nsb3RoLWJsaW5kZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/cloth-blinders/cloth-blinders.component.ts":
/*!************************************************************!*\
  !*** ./src/app/cloth-blinders/cloth-blinders.component.ts ***!
  \************************************************************/
/*! exports provided: ClothBlindersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClothBlindersComponent", function() { return ClothBlindersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ClothBlindersComponent = class ClothBlindersComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClothBlindersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cloth-blinders',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cloth-blinders.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cloth-blinders/cloth-blinders.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cloth-blinders.component.css */ "./src/app/cloth-blinders/cloth-blinders.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], ClothBlindersComponent);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/cupboards/cupboards.component.css":
/*!***************************************************!*\
  !*** ./src/app/cupboards/cupboards.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2N1cGJvYXJkcy9jdXBib2FyZHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/cupboards/cupboards.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cupboards/cupboards.component.ts ***!
  \**************************************************/
/*! exports provided: CupboardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CupboardsComponent", function() { return CupboardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CupboardsComponent = class CupboardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
CupboardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-cupboards',
        template: __importDefault(__webpack_require__(/*! raw-loader!./cupboards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cupboards/cupboards.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./cupboards.component.css */ "./src/app/cupboards/cupboards.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], CupboardsComponent);



/***/ }),

/***/ "./src/app/door/door.component.css":
/*!*****************************************!*\
  !*** ./src/app/door/door.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rvb3IvZG9vci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/door/door.component.ts":
/*!****************************************!*\
  !*** ./src/app/door/door.component.ts ***!
  \****************************************/
/*! exports provided: DoorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DoorComponent", function() { return DoorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let DoorComponent = class DoorComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoorComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-door',
        template: __importDefault(__webpack_require__(/*! raw-loader!./door.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/door/door.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./door.component.css */ "./src/app/door/door.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], DoorComponent);



/***/ }),

/***/ "./src/app/edit-address/edit-address.component.css":
/*!*********************************************************!*\
  !*** ./src/app/edit-address/edit-address.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtYWRkcmVzcy9lZGl0LWFkZHJlc3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/edit-address/edit-address.component.ts":
/*!********************************************************!*\
  !*** ./src/app/edit-address/edit-address.component.ts ***!
  \********************************************************/
/*! exports provided: EditAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditAddressComponent", function() { return EditAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let EditAddressComponent = class EditAddressComponent {
    constructor(route, http, formbuilder) {
        this.route = route;
        this.http = http;
        this.formbuilder = formbuilder;
        this.addrId = this.route.snapshot.params['id'];
    }
    ngOnInit() {
        //const addrId = this.route.snapshot.params['id'];
        this.setForm(this.addrId);
    }
    get editFormData() { return this.editForm.controls; }
    setForm(addrId) {
        this.http.get('https://localhost:44302/' + 'api/Useraddresses/' + addrId).subscribe((x) => {
            this.selectedAddr = x;
            this.editForm = this.formbuilder.group({
                firstname: [this.selectedAddr[0].name],
                Phonenum: [this.selectedAddr[0].contactNo],
                AdL1: [this.selectedAddr[0].addressLine1],
                AdL2: [this.selectedAddr[0].addressLine2],
                AdL3: [this.selectedAddr[0].addressLine3],
                AdL4: [this.selectedAddr[0].addressLine4],
                AdL5: [this.selectedAddr[0].addressLine5],
                postalcode: [this.selectedAddr[0].pinCode],
                ddl_addtype: [this.selectedAddr[0].addressType],
                isdefaul: [this.selectedAddr[0].isDefault]
                //lastName: [this.selectedUser.lastName, Validators.required],
                //email: [{ value: this.selectedUser.email, disabled: true }, [Validators.email, Validators.required]],
                //mobileNumber: [this.selectedUser.mobileNumber, Validators.required]
            });
        });
    }
    update_address() {
        var userid = localStorage.getItem("userid");
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        var user_address_update = {
            UserId: stringtonum(userid), Name: $("#firstname").val(), AddressLine1: $("#AdL1").val(),
            AddressLine2: $("#AdL2").val(), AddressLine3: $("#AdL3").val(), AddressLine4: $("#AdL4").val(),
            AddressLine5: $("#AdL5").val(), ContactNo: $("#Phonenum").val(), PinCode: stringtonum($("#postalcode").val()),
            IsDefault: $("#isdefaul")[0].checked, AddressType: stringtonum($('#ddl_addtype').val()),
            AddrId: stringtonum(this.addrId)
        };
        this.http.put('https://localhost:44302/' + 'api/UserAddresses/' + this.addrId, user_address_update).subscribe(res => { alert("addr updtead"); });
    }
};
EditAddressComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
EditAddressComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-edit-address',
        template: __importDefault(__webpack_require__(/*! raw-loader!./edit-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/edit-address/edit-address.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./edit-address.component.css */ "./src/app/edit-address/edit-address.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], EditAddressComponent);



/***/ }),

/***/ "./src/app/entities/Userdetail.entity.ts":
/*!***********************************************!*\
  !*** ./src/app/entities/Userdetail.entity.ts ***!
  \***********************************************/
/*! exports provided: Userdetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Userdetail", function() { return Userdetail; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
class Userdetail {
}


/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.css":
/*!*************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".borderless td, .borderless th {\r\n  border: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9yZ290cGFzc3dvcmQvZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZvcmdvdHBhc3N3b3JkL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9yZGVybGVzcyB0ZCwgLmJvcmRlcmxlc3MgdGgge1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/*!************************************************************!*\
  !*** ./src/app/forgotpassword/forgotpassword.component.ts ***!
  \************************************************************/
/*! exports provided: ForgotpasswordComponent, secqus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotpasswordComponent", function() { return ForgotpasswordComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secqus", function() { return secqus; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let ForgotpasswordComponent = class ForgotpasswordComponent {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#ddl_secqus').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "select security question",
            });
        });
        //HTTPGET Request
        this.http.get('https://localhost:44302/' + 'api/Secqmasters').subscribe((res) => {
            //this.secq.push(res);
            this.secq = res;
            var test = res;
            for (var i = 0; i <= 10; i++) {
                var newOption = new Option(test[i].secQ, test[i].secQid, false, false);
                $('#ddl_secqus').append(newOption).trigger('change');
            }
        });
    }
    submit() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        var secqid = stringtonum($('#ddl_secqus').val());
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        let user_name = $("#email").val();
        this.http.get('https://localhost:44302/' + 'api/Userdetail/' + user_name).subscribe(result => {
            // delete result[0]["secQid"];
            //delete result[0]["secQ"];
            //  this.userdetails = result;
            var userdetails_updated = {
                UserId: result[0].userId, FirstName: result[0].firstName, LastName: result[0].lastName,
                Email: result[0].email, Dob: result[0].dob, Pwd: result[0].pwd,
                Telephone: result[0].telephone, Isactive: result[0].isactive, SecQid: result[0].secQid,
                SecQa: result[0].secQa, DtCreate: result[0].dtCreate, DtModify: result[0].dtModify
            };
            if ($("#ddl_secqus").val() == result[0].secQid && $("#ans").val() == result[0].secQa) {
                userdetails_updated.Pwd = $("#pwd").val();
                // userdetails_updated.SecQid = secqid;
                //  userdetails_updated.SecQa = $("#ans").val();
                // var test: User_Details = {
                //   FirstName: "first", LastName: "l",
                //   Email: "skkkk@gmail.com", Dob: null, Pwd:$("#pwd")[0].value, Telephone: "344",
                //  Isactive: 1, SecQid: 3, SecQa: null, DtCreate: null, DtModify: null
                //};
                this.http.put('https://localhost:44302/' + 'api/Userdetail/' + user_name, userdetails_updated).subscribe(res => {
                    alert("Password changed sucessfully");
                    this.router.navigateByUrl('/Login');
                });
            }
            else {
                swal("incorrect security qus");
            }
        });
    }
};
ForgotpasswordComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ForgotpasswordComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-forgotpassword',
        template: __importDefault(__webpack_require__(/*! raw-loader!./forgotpassword.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/forgotpassword/forgotpassword.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./forgotpassword.component.css */ "./src/app/forgotpassword/forgotpassword.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ForgotpasswordComponent);

class secqus {
}


/***/ }),

/***/ "./src/app/glass-partition/glass-partition.component.css":
/*!***************************************************************!*\
  !*** ./src/app/glass-partition/glass-partition.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dsYXNzLXBhcnRpdGlvbi9nbGFzcy1wYXJ0aXRpb24uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/glass-partition/glass-partition.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/glass-partition/glass-partition.component.ts ***!
  \**************************************************************/
/*! exports provided: GlassPartitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlassPartitionComponent", function() { return GlassPartitionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let GlassPartitionComponent = class GlassPartitionComponent {
    constructor() { }
    ngOnInit() {
    }
};
GlassPartitionComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-glass-partition',
        template: __importDefault(__webpack_require__(/*! raw-loader!./glass-partition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/glass-partition/glass-partition.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./glass-partition.component.css */ "./src/app/glass-partition/glass-partition.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], GlassPartitionComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: 1px;\r\n  max-width: 1268px;\r\n}\r\n\r\n\r\n.container {\r\n  \r\n}\r\n\r\n\r\n.media-carousel {\r\n  margin-bottom: 0;\r\n  padding: 0 40px 30px 40px;\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n/* Previous button  */\r\n\r\n\r\n.media-carousel .carousel-control.left {\r\n    /*left: -12px;*/\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\") !important;\r\n    background: none repeat scroll 0 0;\r\n    border: 4px solid #FFFFFF;\r\n    border-radius: 23px 23px 23px 23px;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-top: 30px;\r\n    content: none;\r\n  }\r\n\r\n\r\n/* Next button  */\r\n\r\n\r\n.media-carousel .carousel-control.right {\r\n    right: -12px !important;\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\") !important;\r\n    background: none repeat scroll 0 0;\r\n    border: 4px solid #FFFFFF;\r\n    border-radius: 23px 23px 23px 23px;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-top: 30px\r\n  }\r\n\r\n\r\n/* Changes the position of the indicators */\r\n\r\n\r\n.media-carousel .carousel-indicators {\r\n    right: 50%;\r\n    top: auto;\r\n    bottom: 0px;\r\n    margin-right: -19px;\r\n  }\r\n\r\n\r\n/* Changes the colour of the indicators */\r\n\r\n\r\n.media-carousel .carousel-indicators li {\r\n      background: #c0c0c0;\r\n    }\r\n\r\n\r\n.media-carousel .carousel-indicators .active {\r\n      background: #333333;\r\n    }\r\n\r\n\r\n.media-carousel img {\r\n    width: 250px;\r\n    height: 100px\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COzs7QUFHQTs7QUFFQTs7O0FBQ0U7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtBQUNsQjs7O0FBQ0UscUJBQXFCOzs7QUFDckI7SUFDRSxlQUFlO0lBQ2YsMk5BQTJOO0lBQzNOLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7RUFDZjs7O0FBQ0EsaUJBQWlCOzs7QUFDakI7SUFDRSx1QkFBdUI7SUFDdkIsMk5BQTJOO0lBQzNOLGtDQUFrQztJQUNsQyx5QkFBeUI7SUFDekIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWixXQUFXO0lBQ1g7RUFDRjs7O0FBQ0EsMkNBQTJDOzs7QUFDM0M7SUFDRSxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxtQkFBbUI7RUFDckI7OztBQUNFLHlDQUF5Qzs7O0FBQ3pDO01BQ0UsbUJBQW1CO0lBQ3JCOzs7QUFFQTtNQUNFLG1CQUFtQjtJQUNyQjs7O0FBRUY7SUFDRSxZQUFZO0lBQ1o7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcHg7XHJcbiAgbWF4LXdpZHRoOiAxMjY4cHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFpbmVyIHtcclxuICBcclxufVxyXG4gIC5tZWRpYS1jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAwIDQwcHggMzBweCA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuICAvKiBQcmV2aW91cyBidXR0b24gICovXHJcbiAgLm1lZGlhLWNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xyXG4gICAgLypsZWZ0OiAtMTJweDsqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjMwMDAnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHggMjNweCAyM3B4IDIzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICAvKiBOZXh0IGJ1dHRvbiAgKi9cclxuICAubWVkaWEtY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xyXG4gICAgcmlnaHQ6IC0xMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyMzAwMCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweCAyM3B4IDIzcHggMjNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweFxyXG4gIH1cclxuICAvKiBDaGFuZ2VzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaW5kaWNhdG9ycyAqL1xyXG4gIC5tZWRpYS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOXB4O1xyXG4gIH1cclxuICAgIC8qIENoYW5nZXMgdGhlIGNvbG91ciBvZiB0aGUgaW5kaWNhdG9ycyAqL1xyXG4gICAgLm1lZGlhLWNhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICAgYmFja2dyb3VuZDogI2MwYzBjMDtcclxuICAgIH1cclxuXHJcbiAgICAubWVkaWEtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gIC5tZWRpYS1jYXJvdXNlbCBpbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweFxyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor(router) {
        this.router = router;
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
            $('.carousel').carousel({});
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/invitation-cards/invitation-cards.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/invitation-cards/invitation-cards.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludml0YXRpb24tY2FyZHMvaW52aXRhdGlvbi1jYXJkcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/invitation-cards/invitation-cards.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/invitation-cards/invitation-cards.component.ts ***!
  \****************************************************************/
/*! exports provided: InvitationCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvitationCardsComponent", function() { return InvitationCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




let qty;
let qty_update;
let detailid = 0;
let levelid = 0;
let InvitationCardsComponent = class InvitationCardsComponent {
    constructor(httpClient, prod_service, _sharedservice) {
        this.httpClient = httpClient;
        this.prod_service = prod_service;
        this._sharedservice = _sharedservice;
        // public position_lbl: img_position[] = [];
        this.position_lbl1 = [];
        this.products_get = [];
    }
    ngOnInit() {
        $(document).ready(function () {
            $("#innerdiv_invicards").hide();
            $("#ddl_prodser").hide();
            $('#ddl_Qty').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Quantity",
            });
            $('#ddl_prodmat').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Select Material",
            });
            $("#ddl_Qty").change(function () {
                qty = $('#ddl_Qty :selected').text();
            });
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
        var i = "div_bride";
        this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id") + '/' + "invi").subscribe((res) => {
            this.img_list = res;
        });
    }
    imgclick(e, f, g) {
        $("#div_invicards").hide();
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        if (sessionStorage.getItem("Prodl3Id") != null) {
            levelid = stringtonum(sessionStorage.getItem("Prodl3Id"));
        }
        else
            levelid = stringtonum(sessionStorage.getItem("Prodl2Id"));
        this.httpClient.get('https://localhost:44302/' + 'api/Productmaterials/' + levelid).subscribe((res) => {
            // this.prod_mat = res;
            res.forEach(e => {
                var ddl_prodoption = new Option(e.matDescription, e.matId, false, false);
                $('#ddl_prodmat').append(ddl_prodoption).trigger('change');
            });
            //this.prod_mat..forEach(e => {
            //  var newOption_gender = new Option(e.gender, e.gender, false, false);
            //  $('#ddl_gender').append(newOption_gender).trigger('change');
            //});
        });
        //check for product service dropdown
        this.httpClient.get('https://localhost:44302/' + 'api/Productservices/' + levelid).subscribe((r) => {
            if (r.length == 0)
                $("#ddl_prodser").hide();
            else
                $("#ddl_prodser").show();
        });
        //  $("#div_invicards").hide();
        $("#innerdiv_invicards").show();
        $("#img_selected_invicard").attr("src", f);
        $("#lbl_desc").text(g);
        sessionStorage.setItem('ModelId', e);
        this.httpClient.get('https://localhost:44302/' + 'api/Pricedetails/' + e).subscribe((res) => {
            this.price_detail = res;
            $("#lbl_price").text(this.price_detail[0].maxRetailPrice);
            $("#lbl_price").attr("style", "text-decoration:line-through");
            var numVal1 = this.price_detail[0].maxRetailPrice;
            var numVal2 = this.price_detail[0].percentDisc / 100;
            var totalValue = numVal1 - (numVal1 * numVal2);
            $("#sp_disc").text("(" + this.price_detail[0].percentDisc + "%" + ")");
            $("#lbl_sellingprice").text(totalValue);
            // document.getElementById("total").value = totalValue.toFixed(2);
        });
        //this.position_lbl = [{ bottom: 190, left: 168, label_text: "BRIDE NAME", position: "relative" }];
        //this.position_lbl.push({ bottom: 150, left: 168, label_text: "GROOM NAME", position:"relative" });
        //$("#innerdiv_invicards").show();
        //$("#innerdiv_invicards").append('<label id="ID_item" >' + this.position_lbl[0].label_text + '</label><br /><hr />')
        //$("#ID_item").css({ "color": "red", "bottom": this.position_lbl[0].bottom + 'px', "left": this.position_lbl[0].left, "position": this.position_lbl[0].position });
        //$("#innerdiv_invicards").append('<label id="ID_item1" >' + this.position_lbl[1].label_text + '</label><br /><hr />')
        //$("#ID_item1").css({ "color": "red", "bottom": this.position_lbl[1].bottom + 'px', "left": this.position_lbl[1].left, "position": this.position_lbl[1].position  });
        // let s: string = '[{"count":2,"1":{ "bottom": 190, "left": 208, "label_text":"BRIDE NAME", "position":"relative"},"2":{ "bottom": 190, "left": 168, "label_text":"GROOM NAME", "position":"relative"}}]';
        // this.position_lbl = JSON.parse(s);
        // for (let i = 1; i <= this.position_lbl[0].count; i++) {
        //   let df: string = "lbl_" + i;
        //   $("#innerdiv_invicards").append('<label id=' + df + ' class="summernote" >' + this.position_lbl[0][i].label_text + '</label><br /><hr />')
        //   $('#'+df).css({ "color": "red", "bottom": this.position_lbl[0][i].bottom + 'px', "left": this.position_lbl[0][i].left, "position": this.position_lbl[0][i].position });
        //   //$('#' + df).click(function () {
        //   // // $('.summernote').summernote('destroy');
        //   // // $('#' + df).summernote('destroy');
        //   //  $('#' + df).summernote({
        //   //    width: 450,
        //   //    height: 200,
        //   //    tooltip: false,
        //   //  });
        //   //});
        // }
        // //$("#innerdiv_invicards table label").click(function (e) {
        // //  debugger;
        // //  alert("hsdjgkfjdhsg");
        // //});
        //// $("#innerdiv_invicards").append('<label id="ID_item" >' + this.position_lbl[0].label_text+ '</label><br /><hr />')
        //// $("#innerdiv_invicards").append('<span>&</span>')
        //$(".summernote").click(function (e) {
        //  //$("body").find(".summernote").summernote('destroy');
        //  $('.summernote').each(function (index) {
        //    $(this).summernote('destroy');
        //  })
        //  $('#' + e.target.id).summernote({
        //    width: 200,
        //    height: 30,
        //    bottom:250,
        //    tooltip: false,
        //    toolbar: [
        //      ['style', ['bold', 'italic', 'underline', 'clear']],
        //      ['font', ['superscript', 'subscript']],
        //      //['fontsize', ['fontsize']],
        //      ['color', ['color']],
        //    ],
        //  });
        //});
    }
    AddToCart() {
        if (sessionStorage.getItem("userid") != null) {
            function stringtonum(input) {
                var n = Number(input);
                return n;
            }
            var s = "l3menu";
            this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res) => {
                this.products_get = res;
                if (this.products_get.length == 0) {
                    //new product
                    this.prod = this.prod_service.insertProduct(qty, detailid, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").val()));
                    this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.prod[0]).subscribe(res => { alert("invi post"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d + this.prod.length);
                }
                else {
                    //update existing product
                    detailid = 1;
                    qty_update = this.products_get[0].quantity + stringtonum(qty);
                    this.prod = this.prod_service.insertProduct(qty_update, this.products_get[0].detailId, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").text()));
                    this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products_get[0].detailId, this.prod[0]).subscribe(res => { alert("invi put"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d);
                    alert("product added to cart");
                }
            });
        }
        else {
            alert("Please loginwwwwwlwl");
        }
    }
};
InvitationCardsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"] }
];
InvitationCardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-invitation-cards',
        template: __importDefault(__webpack_require__(/*! raw-loader!./invitation-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/invitation-cards/invitation-cards.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./invitation-cards.component.css */ "./src/app/invitation-cards/invitation-cards.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]])
], InvitationCardsComponent);

//export class img_position {
// // position_text: string;
//  bottom: number;
//  left: number;
//  //position: string;
//  //label_text: string;
//}


/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.dropdown-menu {\r\n  min-width: 200px;\r\n}\r\n\r\n.dropdown-menu.columns-2 {\r\n  min-width: 400px;\r\n}\r\n\r\n.dropdown-menu.columns-3 {\r\n  min-width: 600px;\r\n}\r\n\r\n.dropdown-menu li a {\r\n  padding: 5px 15px;\r\n  font-weight: 300;\r\n  color: #000000;\r\n}\r\n\r\n.dropdown-menu li a:hover {\r\n    text-decoration: none;\r\n    color: #262626;\r\n    /*background-color: none !important;*/\r\n    opacity: 1.0;\r\n    color: blue;\r\n  }\r\n\r\n.multi-column-dropdown {\r\n  list-style: none;\r\n  margin: 0px;\r\n  padding: 0px;\r\n  color: #ff0000;\r\n}\r\n\r\n.multi-column-dropdown li a {\r\n    display: block;\r\n    clear: both;\r\n    line-height: 1.428571429;\r\n    color: #000000;\r\n    white-space: normal;\r\n  }\r\n\r\n.multi-column-dropdown li a:hover {\r\n      text-decoration: none;\r\n      color: #262626;\r\n      /*background-color: #999;*/\r\n      opacity: 1.0;\r\n      color: blue;\r\n    }\r\n\r\n@media (max-width: 767px) {\r\n  .dropdown-menu.multi-column {\r\n    min-width: 240px !important;\r\n    overflow-x: hidden;\r\n  }\r\n}\r\n\r\n/*nav bar background colour custom*/\r\n\r\n.navbar-custom {\r\n  background-color: lightseagreen;\r\n}\r\n\r\n/*body carousel*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUU7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHFDQUFxQztJQUNyQyxZQUFZO0lBQ1osV0FBVztFQUNiOztBQUVGO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFRTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLGNBQWM7SUFDZCxtQkFBbUI7RUFDckI7O0FBRUU7TUFDRSxxQkFBcUI7TUFDckIsY0FBYztNQUNkLDBCQUEwQjtNQUMxQixZQUFZO01BQ1osV0FBVztJQUNiOztBQUVKO0VBQ0U7SUFDRSwyQkFBMkI7SUFDM0Isa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsbUNBQW1DOztBQUNuQztFQUNFLCtCQUErQjtBQUNqQzs7QUFFQSxnQkFBZ0IiLCJmaWxlIjoic3JjL2FwcC9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5kcm9wZG93bi1tZW51IHtcclxuICBtaW4td2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24tbWVudS5jb2x1bW5zLTIge1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1tZW51LmNvbHVtbnMtMyB7XHJcbiAgbWluLXdpZHRoOiA2MDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duLW1lbnUgbGkgYSB7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBjb2xvcjogIzAwMDAwMDtcclxufVxyXG5cclxuICAuZHJvcGRvd24tbWVudSBsaSBhOmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgLypiYWNrZ3JvdW5kLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7Ki9cclxuICAgIG9wYWNpdHk6IDEuMDtcclxuICAgIGNvbG9yOiBibHVlO1xyXG4gIH1cclxuXHJcbi5tdWx0aS1jb2x1bW4tZHJvcGRvd24ge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGNvbG9yOiAjZmYwMDAwO1xyXG59XHJcblxyXG4gIC5tdWx0aS1jb2x1bW4tZHJvcGRvd24gbGkgYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDI5O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgICAubXVsdGktY29sdW1uLWRyb3Bkb3duIGxpIGE6aG92ZXIge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjMjYyNjI2O1xyXG4gICAgICAvKmJhY2tncm91bmQtY29sb3I6ICM5OTk7Ki9cclxuICAgICAgb3BhY2l0eTogMS4wO1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgIH1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5kcm9wZG93bi1tZW51Lm11bHRpLWNvbHVtbiB7XHJcbiAgICBtaW4td2lkdGg6IDI0MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgfVxyXG59XHJcblxyXG4vKm5hdiBiYXIgYmFja2dyb3VuZCBjb2xvdXIgY3VzdG9tKi9cclxuLm5hdmJhci1jdXN0b20ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0c2VhZ3JlZW47XHJcbn1cclxuXHJcbi8qYm9keSBjYXJvdXNlbCovXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let NavMenuComponent = class NavMenuComponent {
    constructor(_exampleService) {
        this._exampleService = _exampleService;
        this.isExpanded = false;
    }
    ngOnInit() {
        $(document).ready(function () {
            $(".dropdown").hover(function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideDown("400");
                $('#photogifts_submenu').hide();
                $(this).toggleClass('open');
            }, function () {
                $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("400");
                $(this).toggleClass('open');
            });
            $("#photogift_menu").hover(function () { $('#photogifts_submenu').show(); });
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
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent.ctorParameters = () => [
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"] }
];
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]],
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    }),
    __metadata("design:paramtypes", [_services_product_service__WEBPACK_IMPORTED_MODULE_1__["ProductService"]])
], NavMenuComponent);



/***/ }),

/***/ "./src/app/new-address/new-address.component.css":
/*!*******************************************************!*\
  !*** ./src/app/new-address/new-address.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".lbl_style {\r\n  font-size: 15px;\r\n  font-weight: normal;\r\n  font-family: Verdana,sans-serif;\r\n}\r\n\r\n.borderless td, .borderless th {\r\n  border: none;\r\n}\r\n\r\nform div div table tbody tr td td label {\r\n  color: #ff0000 !important;\r\n}\r\n\r\nspan.arrow {\r\n  margin-left: 6px;\r\n  height: 17px;\r\n  background: url('http://i45.tinypic.com/f9ifz6.png') no-repeat left center;\r\n}\r\n\r\nlabel.error {\r\n  height: 17px;\r\n  border-top: 1px solid #99182c;\r\n  border-right: 1px solid #99182c;\r\n  border-bottom: 1px solid #99182c;\r\n  margin-left: 9px;\r\n  padding: 1px 5px 0px 5px;\r\n  font-size: 10px !important;\r\n  font-weight: 100 !important;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3LWFkZHJlc3MvbmV3LWFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWiwwRUFBMEU7QUFDNUU7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLCtCQUErQjtFQUMvQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIsMkJBQTJCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbmV3LWFkZHJlc3MvbmV3LWFkZHJlc3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYmxfc3R5bGUge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtZmFtaWx5OiBWZXJkYW5hLHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG59XHJcblxyXG5mb3JtIGRpdiBkaXYgdGFibGUgdGJvZHkgdHIgdGQgdGQgbGFiZWwge1xyXG4gIGNvbG9yOiAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnNwYW4uYXJyb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIGJhY2tncm91bmQ6IHVybCgnaHR0cDovL2k0NS50aW55cGljLmNvbS9mOWlmejYucG5nJykgbm8tcmVwZWF0IGxlZnQgY2VudGVyO1xyXG59XHJcblxyXG5sYWJlbC5lcnJvciB7XHJcbiAgaGVpZ2h0OiAxN3B4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjOTkxODJjO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5OTE4MmM7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM5OTE4MmM7XHJcbiAgbWFyZ2luLWxlZnQ6IDlweDtcclxuICBwYWRkaW5nOiAxcHggNXB4IDBweCA1cHg7XHJcbiAgZm9udC1zaXplOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDEwMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/new-address/new-address.component.ts":
/*!******************************************************!*\
  !*** ./src/app/new-address/new-address.component.ts ***!
  \******************************************************/
/*! exports provided: NewAddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAddressComponent", function() { return NewAddressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let NewAddressComponent = class NewAddressComponent {
    //user_address: newAddress[]=[];
    constructor(http) {
        this.http = http;
    }
    ngOnInit() {
        $(document).ready(function () {
            $('#ddl_addtype').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "select Address type",
            });
        });
    }
    add_address() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]().set('content-type', 'application/json');
        var userid = localStorage.getItem("userid");
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        //  this.http.get<newAddress>('https://localhost:44302/' + 'api/Useraddresses'+ userid).subscribe(res => alert("ijh"));
        var user_address = {
            UserId: stringtonum(userid), Name: $("#firstname").val(), AddressLine1: $("#AdL1").val(),
            AddressLine2: $("#AdL2").val(), AddressLine3: $("#AdL3").val(), AddressLine4: $("#AdL4").val(),
            AddressLine5: $("#AdL5").val(), ContactNo: $("#Phonenum").val(), PinCode: stringtonum($("#postalcode").val()),
            IsDefault: $("#isdefaul")[0].checked, AddressType: stringtonum($('#ddl_addtype').val())
        };
        if (userid != undefined) {
            this.http.post('https://localhost:44302/' + 'api/UserAddresses', user_address, { headers }).subscribe(r => alert("address ok"));
        }
        else { }
    }
};
NewAddressComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NewAddressComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-new-address',
        template: __importDefault(__webpack_require__(/*! raw-loader!./new-address.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/new-address/new-address.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./new-address.component.css */ "./src/app/new-address/new-address.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], NewAddressComponent);



/***/ }),

/***/ "./src/app/services/login.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/login.service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let LoginService = class LoginService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.user = [];
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoginService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoginService);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let ProductService = class ProductService {
    constructor() {
        this.products = [];
    }
    show() {
        let prodlength = this.products.length;
        return prodlength;
    }
    findAll() {
        return this.products;
    }
    find(id) {
        return this.products[this.getSelectedIndex(id)];
    }
    getSelectedIndex(id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].modelId == id) {
                return i;
            }
        }
        return -1;
    }
    insertProduct(qty, detailid, price, prodmat) {
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        this.products = [];
        if (detailid == 0) {
            this.products.push({
                // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                modelId: stringtonum(sessionStorage.getItem('ModelId')),
                Gender: null,
                CustomContent: null,
                DimId: null,
                MatId: prodmat,
                OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                DtCreate: null,
                DtModify: null,
                quantity: stringtonum(qty),
                IsCustomized: 0,
                StatusCode: "C",
                itemPrice: price,
                discAmount: 0,
                netAmount: price
            });
        }
        else {
            this.products.push({
                detailId: detailid,
                // ProdId: stringtonum(sessionStorage.getItem('ProdId')),
                modelId: stringtonum(sessionStorage.getItem('ModelId')),
                Gender: null,
                CustomContent: null,
                DimId: null,
                OrderedBy: stringtonum(sessionStorage.getItem('userid')),
                DtCreate: null,
                DtModify: null,
                quantity: stringtonum(qty),
                IsCustomized: 0,
                StatusCode: "C",
                itemPrice: price,
                discAmount: 0,
                netAmount: price
            });
        }
        //this.products.push({ 'ProdId': ProdId, 'ProdModelId': , 'size': size, 'color': color, 'qty': qty })
        return this.products;
    }
    addProductToCart(prodcuts) {
        localStorage.setItem("cart", JSON.stringify(prodcuts));
    }
    getProductFromCart() {
        //return localStorage.getItem("product");
        return JSON.parse(localStorage.getItem('cart'));
    }
};
ProductService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ProductService);



/***/ }),

/***/ "./src/app/services/shared.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/shared.service.ts ***!
  \********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let SharedService = class SharedService {
    constructor() {
        this.CurrentCartCount = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](stringtonum(sessionStorage.getItem("cartcount")));
        //private login_success = new BehaviorSubject < any > ({});
        this.login_success = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('Sign In');
        this.currentMessage = this.CurrentCartCount.asObservable();
        this.loginMessage = this.login_success.asObservable();
        this.login_success_username = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](sessionStorage.getItem("user_name"));
        this.UserName = this.login_success_username.asObservable();
        this.login_success_changepwd = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.changepwd = this.login_success_changepwd.asObservable();
        this.login_success_signout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.loginMessage_signout = this.login_success_signout.asObservable();
    }
    updateCartCount(count) {
        this.CurrentCartCount.next(count);
    }
    loginSuccess(success) {
        this.login_success.next(success);
    }
    show_login() {
        return this.login_success;
    }
    loginSuccessUsername(success) {
        this.login_success_username.next(success);
    }
    loginSuccesssignout(success) {
        this.login_success_signout.next(success);
    }
    loginSuccesschangepwd(success) {
        this.login_success_changepwd.next(success);
    }
};
SharedService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [])
], SharedService);

function stringtonum(input) {
    var n = Number(input);
    return n;
}


/***/ }),

/***/ "./src/app/services/userdetail.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/userdetail.service.ts ***!
  \************************************************/
/*! exports provided: UserdetailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailService", function() { return UserdetailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _entities_Userdetail_entity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../entities/Userdetail.entity */ "./src/app/entities/Userdetail.entity.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let UserdetailService = class UserdetailService {
    //  list: PaymentDetail[];
    constructor(http) {
        this.http = http;
        this.formData = new _entities_Userdetail_entity__WEBPACK_IMPORTED_MODULE_2__["Userdetail"]();
        this.rootURL = 'http://localhost:44302/api';
    }
    postPaymentDetail() {
        return this.http.post(this.rootURL + '/Userdetail', this.formData);
        //return this.http.get(this.rootURL + '/LoginDetails');
    }
};
UserdetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserdetailService = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], UserdetailService);



/***/ }),

/***/ "./src/app/steps-railing/steps-railing.component.css":
/*!***********************************************************!*\
  !*** ./src/app/steps-railing/steps-railing.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0ZXBzLXJhaWxpbmcvc3RlcHMtcmFpbGluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/steps-railing/steps-railing.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/steps-railing/steps-railing.component.ts ***!
  \**********************************************************/
/*! exports provided: StepsRailingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepsRailingComponent", function() { return StepsRailingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let StepsRailingComponent = class StepsRailingComponent {
    constructor() { }
    ngOnInit() {
    }
};
StepsRailingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-steps-railing',
        template: __importDefault(__webpack_require__(/*! raw-loader!./steps-railing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/steps-railing/steps-railing.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./steps-railing.component.css */ "./src/app/steps-railing/steps-railing.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], StepsRailingComponent);



/***/ }),

/***/ "./src/app/trophy-engraving/trophy-engraving.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/trophy-engraving/trophy-engraving.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ryb3BoeS1lbmdyYXZpbmcvdHJvcGh5LWVuZ3JhdmluZy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/trophy-engraving/trophy-engraving.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/trophy-engraving/trophy-engraving.component.ts ***!
  \****************************************************************/
/*! exports provided: TrophyEngravingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrophyEngravingComponent", function() { return TrophyEngravingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TrophyEngravingComponent = class TrophyEngravingComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrophyEngravingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-trophy-engraving',
        template: __importDefault(__webpack_require__(/*! raw-loader!./trophy-engraving.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trophy-engraving/trophy-engraving.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./trophy-engraving.component.css */ "./src/app/trophy-engraving/trophy-engraving.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], TrophyEngravingComponent);



/***/ }),

/***/ "./src/app/trophy-printing/trophy-printing.component.css":
/*!***************************************************************!*\
  !*** ./src/app/trophy-printing/trophy-printing.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Ryb3BoeS1wcmludGluZy90cm9waHktcHJpbnRpbmcuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/trophy-printing/trophy-printing.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/trophy-printing/trophy-printing.component.ts ***!
  \**************************************************************/
/*! exports provided: TrophyPrintingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrophyPrintingComponent", function() { return TrophyPrintingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let TrophyPrintingComponent = class TrophyPrintingComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrophyPrintingComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-trophy-printing',
        template: __importDefault(__webpack_require__(/*! raw-loader!./trophy-printing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/trophy-printing/trophy-printing.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./trophy-printing.component.css */ "./src/app/trophy-printing/trophy-printing.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], TrophyPrintingComponent);



/***/ }),

/***/ "./src/app/visiting-cards/visiting-cards.component.css":
/*!*************************************************************!*\
  !*** ./src/app/visiting-cards/visiting-cards.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Zpc2l0aW5nLWNhcmRzL3Zpc2l0aW5nLWNhcmRzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/visiting-cards/visiting-cards.component.ts":
/*!************************************************************!*\
  !*** ./src/app/visiting-cards/visiting-cards.component.ts ***!
  \************************************************************/
/*! exports provided: VisitingCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitingCardsComponent", function() { return VisitingCardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/shared.service */ "./src/app/services/shared.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





let levelid = 0;
let detailid = 0;
let qty;
let qty_update;
let VisitingCardsComponent = class VisitingCardsComponent {
    constructor(router, httpClient, prod_service, _sharedservice) {
        this.router = router;
        this.httpClient = httpClient;
        this.prod_service = prod_service;
        this._sharedservice = _sharedservice;
        this.products_get = [];
    }
    ngOnInit() {
        if (sessionStorage.getItem("Prodl3Id") != null) {
            this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl3Id") + '/' + "viscard").subscribe((res) => {
                this.img_list = res;
            });
        }
        else
            this.httpClient.get('https://localhost:44302/' + 'api/Productmodels/' + sessionStorage.getItem("Prodl2Id") + '/' + "viscard").subscribe((res) => {
                this.img_list = res;
            });
        $(document).ready(function () {
            $("#innerdiv_viscards").hide();
            $('#ddl_Qty').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Quantity",
            });
            $('#ddl_prodmat').select2({
                closeOnSelect: true,
                minimumResultsForSearch: -1,
                placeholder: "Select Material",
            });
            $("#ddl_Qty").change(function () {
                qty = $('#ddl_Qty :selected').text();
            });
        });
    }
    imgclick(e, f, g) {
        $("#div_idcards").hide();
        $("#innerdiv_viscards").show();
        $("#img_selected_viscard").attr("src", f);
        $("#lbl_desc").text(g);
        sessionStorage.setItem('ModelId', e);
        function stringtonum(input) {
            var n = Number(input);
            return n;
        }
        if (sessionStorage.getItem("Prodl3Id") != null) {
            levelid = stringtonum(sessionStorage.getItem("Prodl3Id"));
        }
        else
            levelid = stringtonum(sessionStorage.getItem("Prodl2Id"));
        this.httpClient.get('https://localhost:44302/' + 'api/Productmaterials/' + levelid).subscribe((res) => {
            this.prod_mat = res;
            res.forEach(e => {
                var ddl_prodoption = new Option(e.matDescription, e.matDescription, false, false);
                $('#ddl_prodmat').append(ddl_prodoption).trigger('change');
            });
            //this.prod_mat..forEach(e => {
            //  var newOption_gender = new Option(e.gender, e.gender, false, false);
            //  $('#ddl_gender').append(newOption_gender).trigger('change');
            //});
        });
    }
    AddToCart() {
        if (sessionStorage.getItem("userid") != null) {
            function stringtonum(input) {
                var n = Number(input);
                return n;
            }
            var s = "l3menu";
            this.httpClient.get('https://localhost:44302/' + 'api/Orderdetails/' + sessionStorage.getItem('ModelId') + '/' + s).subscribe((res) => {
                this.products_get = res;
                if (this.products_get.length == 0) {
                    //new product
                    this.prod = this.prod_service.insertProduct(qty, detailid, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").val()));
                    this.httpClient.post('https://localhost:44302/' + 'api/Orderdetails', this.prod[0]).subscribe(res => { alert("invi post"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d + this.prod.length);
                }
                else {
                    //update existing product
                    detailid = 1;
                    qty_update = this.products_get[0].quantity + stringtonum(qty);
                    this.prod = this.prod_service.insertProduct(qty_update, this.products_get[0].detailId, stringtonum($("#lbl_price").text()), stringtonum($("#ddl_prodmat").text()));
                    this.httpClient.put('https://localhost:44302/' + 'api/Orderdetails/' + this.products_get[0].detailId, this.prod[0]).subscribe(res => { alert("invi put"); });
                    let d = stringtonum(sessionStorage.getItem("cartcount"));
                    this._sharedservice.updateCartCount(d);
                    alert("product added to cart");
                }
            });
        }
        else {
            alert("Please login");
        }
    }
};
VisitingCardsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] },
    { type: _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"] }
];
VisitingCardsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-visiting-cards',
        template: __importDefault(__webpack_require__(/*! raw-loader!./visiting-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/visiting-cards/visiting-cards.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./visiting-cards.component.css */ "./src/app/visiting-cards/visiting-cards.component.css")).default]
    }),
    __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"], _services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]])
], VisitingCardsComponent);



/***/ }),

/***/ "./src/app/wallpapers/wallpapers.component.css":
/*!*****************************************************!*\
  !*** ./src/app/wallpapers/wallpapers.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container {\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  margin-right: auto;\r\n  margin-left: 1px;\r\n  max-width: 1268px;\r\n}\r\n\r\n\r\n.container {\r\n}\r\n\r\n\r\n.media-carousel {\r\n  margin-bottom: 0;\r\n  padding: 0 40px 30px 40px;\r\n  margin-top: 30px;\r\n}\r\n\r\n\r\n/* Previous button  */\r\n\r\n\r\n.media-carousel .carousel-control.left {\r\n    /*left: -12px;*/\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E\") !important;\r\n    background: none repeat scroll 0 0;\r\n    border: 4px solid #FFFFFF;\r\n    border-radius: 23px 23px 23px 23px;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-top: 30px;\r\n    content: none;\r\n  }\r\n\r\n\r\n/* Next button  */\r\n\r\n\r\n.media-carousel .carousel-control.right {\r\n    right: -12px !important;\r\n    background-image: url(\"data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E\") !important;\r\n    background: none repeat scroll 0 0;\r\n    border: 4px solid #FFFFFF;\r\n    border-radius: 23px 23px 23px 23px;\r\n    height: 40px;\r\n    width: 40px;\r\n    margin-top: 30px\r\n  }\r\n\r\n\r\n/* Changes the position of the indicators */\r\n\r\n\r\n.media-carousel .carousel-indicators {\r\n    right: 50%;\r\n    top: auto;\r\n    bottom: 0px;\r\n    margin-right: -19px;\r\n  }\r\n\r\n\r\n/* Changes the colour of the indicators */\r\n\r\n\r\n.media-carousel .carousel-indicators li {\r\n      background: #c0c0c0;\r\n    }\r\n\r\n\r\n.media-carousel .carousel-indicators .active {\r\n      background: #333333;\r\n    }\r\n\r\n\r\n.media-carousel img {\r\n    width: 250px;\r\n    height: 100px\r\n  }\r\n\r\n\r\n.carousel-indicators .active {\r\n  width: 12px;\r\n  height: 12px;\r\n  margin: 0;\r\n  background-color: rgb(0, 38, 255) !important;\r\n}\r\n\r\n\r\n.carousel-indicators li {\r\n  display: inline-block;\r\n  width: 10px;\r\n  height: 10px;\r\n  margin: 1px;\r\n  text-indent: -999px;\r\n  cursor: pointer;\r\n  background-color: #000\\9;\r\n  background-color: rgba(0,0,0,0);\r\n  border: 1px solid rgb(0, 38, 255);\r\n  border-radius: 10px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2FsbHBhcGVycy93YWxscGFwZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COzs7QUFHQTtBQUNBOzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix5QkFBeUI7RUFDekIsZ0JBQWdCO0FBQ2xCOzs7QUFDRSxxQkFBcUI7OztBQUNyQjtJQUNFLGVBQWU7SUFDZiwyTkFBMk47SUFDM04sa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsYUFBYTtFQUNmOzs7QUFDQSxpQkFBaUI7OztBQUNqQjtJQUNFLHVCQUF1QjtJQUN2QiwyTkFBMk47SUFDM04sa0NBQWtDO0lBQ2xDLHlCQUF5QjtJQUN6QixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaLFdBQVc7SUFDWDtFQUNGOzs7QUFDQSwyQ0FBMkM7OztBQUMzQztJQUNFLFVBQVU7SUFDVixTQUFTO0lBQ1QsV0FBVztJQUNYLG1CQUFtQjtFQUNyQjs7O0FBQ0UseUNBQXlDOzs7QUFDekM7TUFDRSxtQkFBbUI7SUFDckI7OztBQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOzs7QUFFRjtJQUNFLFlBQVk7SUFDWjtFQUNGOzs7QUFFRjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osU0FBUztFQUNULDRDQUE0QztBQUM5Qzs7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix3QkFBd0I7RUFDeEIsK0JBQStCO0VBQy9CLGlDQUFpQztFQUNqQyxtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC93YWxscGFwZXJzL3dhbGxwYXBlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMXB4O1xyXG4gIG1heC13aWR0aDogMTI2OHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhaW5lciB7XHJcbn1cclxuXHJcbi5tZWRpYS1jYXJvdXNlbCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBwYWRkaW5nOiAwIDQwcHggMzBweCA0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuICAvKiBQcmV2aW91cyBidXR0b24gICovXHJcbiAgLm1lZGlhLWNhcm91c2VsIC5jYXJvdXNlbC1jb250cm9sLmxlZnQge1xyXG4gICAgLypsZWZ0OiAtMTJweDsqL1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9dXRmOCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyBmaWxsPSclMjMwMDAnIHZpZXdCb3g9JzAgMCA4IDgnJTNFJTNDcGF0aCBkPSdNNS4yNSAwbC00IDQgNCA0IDEuNS0xLjUtMi41LTIuNSAyLjUtMi41LTEuNS0xLjV6Jy8lM0UlM0Mvc3ZnJTNFXCIpICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIzcHggMjNweCAyM3B4IDIzcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBjb250ZW50OiBub25lO1xyXG4gIH1cclxuICAvKiBOZXh0IGJ1dHRvbiAgKi9cclxuICAubWVkaWEtY2Fyb3VzZWwgLmNhcm91c2VsLWNvbnRyb2wucmlnaHQge1xyXG4gICAgcmlnaHQ6IC0xMnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7Y2hhcnNldD11dGY4LCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIGZpbGw9JyUyMzAwMCcgdmlld0JveD0nMCAwIDggOCclM0UlM0NwYXRoIGQ9J00yLjc1IDBsLTEuNSAxLjUgMi41IDIuNS0yLjUgMi41IDEuNSAxLjUgNC00LTQtNHonLyUzRSUzQy9zdmclM0VcIikgIWltcG9ydGFudDtcclxuICAgIGJhY2tncm91bmQ6IG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjRkZGRkZGO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjNweCAyM3B4IDIzcHggMjNweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzBweFxyXG4gIH1cclxuICAvKiBDaGFuZ2VzIHRoZSBwb3NpdGlvbiBvZiB0aGUgaW5kaWNhdG9ycyAqL1xyXG4gIC5tZWRpYS1jYXJvdXNlbCAuY2Fyb3VzZWwtaW5kaWNhdG9ycyB7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdG9wOiBhdXRvO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC0xOXB4O1xyXG4gIH1cclxuICAgIC8qIENoYW5nZXMgdGhlIGNvbG91ciBvZiB0aGUgaW5kaWNhdG9ycyAqL1xyXG4gICAgLm1lZGlhLWNhcm91c2VsIC5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICAgICAgYmFja2dyb3VuZDogI2MwYzBjMDtcclxuICAgIH1cclxuXHJcbiAgICAubWVkaWEtY2Fyb3VzZWwgLmNhcm91c2VsLWluZGljYXRvcnMgLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbiAgICB9XHJcblxyXG4gIC5tZWRpYS1jYXJvdXNlbCBpbWcge1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweFxyXG4gIH1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIC5hY3RpdmUge1xyXG4gIHdpZHRoOiAxMnB4O1xyXG4gIGhlaWdodDogMTJweDtcclxuICBtYXJnaW46IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDM4LCAyNTUpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbmRpY2F0b3JzIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbjogMXB4O1xyXG4gIHRleHQtaW5kZW50OiAtOTk5cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDBcXDk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwKTtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMCwgMzgsIDI1NSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/wallpapers/wallpapers.component.ts":
/*!****************************************************!*\
  !*** ./src/app/wallpapers/wallpapers.component.ts ***!
  \****************************************************/
/*! exports provided: wallpapersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wallpapersComponent", function() { return wallpapersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let wallpapersComponent = class wallpapersComponent {
    ngOnInit() {
        $(document).ready(function () {
            $('.carousel').carousel({});
            $("img").click(function () {
                var loc = $(this).attr("src");
                var loc_str = loc.replace("Img", "3DImages");
                $("#img_ex_wallpaperdesign").attr("src", loc_str);
            });
        });
    }
};
wallpapersComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-wallpapers',
        template: __importDefault(__webpack_require__(/*! raw-loader!./wallpapers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/wallpapers/wallpapers.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./wallpapers.component.css */ "./src/app/wallpapers/wallpapers.component.css")).default]
    })
], wallpapersComponent);



/***/ }),

/***/ "./src/app/windows/windows.component.css":
/*!***********************************************!*\
  !*** ./src/app/windows/windows.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dpbmRvd3Mvd2luZG93cy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/windows/windows.component.ts":
/*!**********************************************!*\
  !*** ./src/app/windows/windows.component.ts ***!
  \**********************************************/
/*! exports provided: WindowsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowsComponent", function() { return WindowsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let WindowsComponent = class WindowsComponent {
    constructor() { }
    ngOnInit() {
    }
};
WindowsComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-windows',
        template: __importDefault(__webpack_require__(/*! raw-loader!./windows.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/windows/windows.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./windows.component.css */ "./src/app/windows/windows.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], WindowsComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false,
    apiUrl: 'http://localhost:4000'
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Work\PrintSmart\master\PrintSmartNew\StickyHeaderMainMenu\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map