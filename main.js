(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.html":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  aboutus works!\n</p>\n"

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.scss":
/*!************************************************!*\
  !*** ./src/app/aboutus/aboutus.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/aboutus/aboutus.component.ts":
/*!**********************************************!*\
  !*** ./src/app/aboutus/aboutus.component.ts ***!
  \**********************************************/
/*! exports provided: AboutusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutusComponent", function() { return AboutusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutusComponent = /** @class */ (function () {
    function AboutusComponent() {
    }
    AboutusComponent.prototype.ngOnInit = function () {
    };
    AboutusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutus',
            template: __webpack_require__(/*! ./aboutus.component.html */ "./src/app/aboutus/aboutus.component.html"),
            styles: [__webpack_require__(/*! ./aboutus.component.scss */ "./src/app/aboutus/aboutus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutusComponent);
    return AboutusComponent;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <h1>\n    Welcome to {{ title }}\n  </h1>\n\n  <button [style.color]=\"mycolor\"> save </button> \n  \n  <br/>\n  <button class=\"btn btn-primary\" [class.myclass]=\"isactive\" > isactive </button>\n  <br/>\n  getdata <input type=\"text\" value=\"\" (click)=\"getdata($event)\" /> <br/>\n  showdata <input type=\"text\" #my_name (click)=\"showdata(my_name.value)\" /> \n<button (click)=\"showdata(my_name.value)\" > showdata my name value </button>\n<br/>\n<br/>\nfirst value <input type=\"number\" #first_value value=\"\"/>\n<br/>\nsecond value <input type=\"number\" #second_value value=\"\"/>\n<br/>\n <button (click)=\"add(first_value.value,second_value.value)\"> addition </button>\n\n\n<input [(ngModel)]=\"myname\" (click)=\"getname()\"/>\n<br/>\n<button (click)=\"getname()\"> show name in text box </button>\n<input type=\"text\" [(ngModel)]=\"myname2\"/>\n<br/>\n<br/>\n\n<input type=\"text\"  [(ngModel)]=\"f_name\"/>\n<input type=\"text\"  [(ngModel)]=\"s_name\"/>\n<button (click)=\"get_concate()\"> show name in text box </button>\n<input type=\"text\" [(ngModel)]=\"c_concate\"/>\n<br/>\n<label> {{f_name+s_name| uppercase}}   </label>\n<br/>\n<label> {{f_name+s_name| lowercase}}   </label>\n\n<br/>\nnumber1 <input type=\"number\" [(ngModel)]=\"l_num1\"/>\nnumber2  <input type=\"number\" [(ngModel)]=\"l_num2\"/>\naddition <label> {{l_num1+l_num2 |number: '3.1-2'}}   </label>\naddition <label> {{l_num1+l_num2 |currency: 'INR'}}   </label>\n<br/>\n\n \n<textarea class=\"form-control\" rows=\"3\" id=\"comment\" style=\"width: 30%; margin-left: 30%;\" \n[(ngModel)]=\"l_result\">\n  </textarea>\n<br/>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">7</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">8</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">9</button>\n<br/>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">4</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">5</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">6</button>\n\n<br/>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">1</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">2</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">3</button>\n\n<br/>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">+</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"cal($event)\">0</button>\n<button type=\"button\" class=\"btn btn-primary\" (click)=\"temp_eval()\">=</button>\n\n<br/>\n\n{{myobject.name+\"  \"+myobject.age+\"  \"+myobject.city |uppercase}}\n<br/>\n{{'2-july-2018 2:20:55'| date:\"MM/dd/yy hh:m:ss\"}}\n<br/>\n<button [ngClass]=\"['myclass2','myclass3']\"> check class</button>\n\n<p [ngClass]=\"['myclass2', 'myclass3']\"> \n  Here we will discuss how to use NgClass with array of CSS classes. \n  Suppose we have two CSS classes named as .one and .two. We need to add our CSS \n  classes within bracket [ ] separated by comma (,) and enclosed \n  by single quotes (').\n  </p> \n\n  <input type=\"date\"/>\n  <br/>\n  <br/>\n  <br/>\n  <div [ngStyle]=\"{\n                    'color' :'red',\n                    'backgroundColor':'yellow'\n                   } \">\n                  This is division for ng style\n                  </div>\n<br/>\n<br/>\n<br/>\n\n<div [ngStyle]=\"l_inlinestyle\">  This is division for inline style </div>\n<div *ngIf=\"l_myname==='absc'; else l_elsepart\"> this is division with *ngif </div>\n<ng-template #l_elsepart> this is ng else part </ng-template>\n\n<br/>\n<br/>\n<br/>\n\n<div *ngIf=\"l_myname==='absc'; then l_ifpart else l_elsepart2\">  </div>\n<ng-template #l_ifpart> this is if part </ng-template>\n<ng-template #l_elsepart2> this is else part </ng-template>\n<br/>\n<br/>\n<br/>\n\n\n<br/>\n<br/>\n<br/>\nngifmber <input type=\"number\" [(ngModel)]=\"l_ngifnumber\"/>\n<div *ngIf=\"l_ngifnumber===5; then l_ifpart3 else l_elsepart3\">  </div>\n<ng-template #l_ifpart3> this is five </ng-template>\n<ng-template #l_elsepart3> this is not five </ng-template>\n<br/>\n<br/>\n<br/>\n\n<br/>\n<br/>\n<br/>\ninput a <input type=\"number\" [(ngModel)]=\"l_a\"/>\ninput b <input type=\"number\" [(ngModel)]=\"l_b\"/>\n<div *ngIf=\"l_a>l_b; then l_ifpart4 else l_elsepart4\">  </div>\n<ng-template #l_ifpart4> A greater </ng-template>\n<ng-template #l_elsepart4>B greater </ng-template>\n<br/>\n<br/>\n<br/>\n\ninput evenodd <input type=\"number\" [(ngModel)]=\"l_evenodd\"/>\n<div *ngIf=\"l_evenodd%2===0 then l_ifpart5 else l_elsepart5\"></div> \n<ng-template #l_ifpart5> even </ng-template>\n<ng-template #l_elsepart5>odd </ng-template>\n<br/>\n<br/>\n<br/>\n\n\ninput a <input type=\"number\" [(ngModel)]=\"l_aa\"/>\ninput b <input type=\"number\" [(ngModel)]=\"l_bb\"/>\ninput c <input type=\"number\" [(ngModel)]=\"l_cc\"/>\n\n<ng-container *ngIf=\"l_aa>l_bb; then if1 else elseif1\"> </ng-container>\n<ng-template #if1>\n    <ng-container *ngIf=\"l_aa>l_cc; then if2 else elseif2\"></ng-container>\n    <ng-template #if2 > a is greater  </ng-template>  \n<ng-template #elseif2 > c is greater </ng-template>\n</ng-template>\n<ng-template #elseif1> \n<ng-container *ngIf=\"l_bb>l_cc; then if3 else else3\" > </ng-container> \n<ng-template #if3> b is greater </ng-template> \n<ng-template #else3> c is greater</ng-template>\n</ng-template>\n<br/>\n<br/>\n<br/>\n\ninput -+a <input type=\"number\" [(ngModel)]=\"l_aaa\"/>\n<ng-container *ngIf=\"l_aaa>0 then ifa1 else elsea1 \" > </ng-container>\n<ng-template #ifa1 > +ve </ng-template>\n<ng-template #elsea1> \n <ng-container *ngIf=\"l_aaa<0 then if555 else else555\">  </ng-container>  \n<ng-template #if555> -ve </ng-template>\n<ng-template #else555> zero </ng-template>\n</ng-template>\n\n<br/>\n<br/>\n<br/>\n\ninput l_nname ngSwitch <input type=\"text\" [(ngModel)]=\"l_name\"/>\n<div [ngSwitch]=\"l_name\">\n<div *ngSwitchCase=\" 'ABC' \"> name is ABC</div>\n<div *ngSwitchCase=\" 'XYZ' \"> name is XYZ </div>\n<div *ngSwitchCase=\" 'PQR' \"> name is PQR </div>\n<div *ngSwitchDefault> this is default  </div>  </div>\n\n<br/>\n<br/>\n<br/>\n\ninput l_day ngSwitch <input type=\"text\" [(ngModel)]=\"l_day\"/>\n<div [ngSwitch]=\"l_day\">\n    <div *ngSwitchCase=\" '1' \"> Sunday </div>\n    <div *ngSwitchCase=\" '2' \"> Monday </div>\n    <div *ngSwitchCase=\" '3' \"> Tuesday </div>\n    <div *ngSwitchCase=\" '4' \"> Wednesday </div>\n    <div *ngSwitchCase=\" '5' \"> Thursday </div>\n    <div *ngSwitchCase=\" '6' \"> Friday </div>\n     <div *ngSwitchCase=\" '7' \"> Saturday </div>\n    <div *ngSwitchDefault> invalid input  </div>  </div>\n  <br/>\n  <br/>\n  <br/>\n \n  <div *ngFor=\"let x of l_colors\"> {{x}} </div>\n\n  <br/>\n  <br/>\n  <br/>\n\n  <div *ngFor=\"let xx of l_person\"> {{xx.name}} {{xx.age}} {{xx.city}} </div>\n\n  <br/>\n  <br/>\n  <br/>\n\n  <div  style=\"text-align:center\" >\n  <table>\n    <tr> <th> NAME </th> <th> AGE </th> <th> CITY </th> </tr>\n    <tr *ngFor=\"let xx of l_person\">\n      <td>{{ xx.name }}</td>\n      <td>{{ xx.age }}</td>\n      <td>{{ xx.city }}</td>\n    </tr>\n  </table>\n</div>\n  <br/>\n  <br/>\n  <br/>\n  parent data is {{varparent}};\n  <app-child  [childData]=\"myvar\" (fromchild)=\"varparent=$event\">\n    child set in child.componant.html ng-content\n    \n    <ng-container class=\"heading\">\n        this is card heading\n    </ng-container>\n\n    <ng-container class=\"body\">\n        this is card body\n    </ng-container>\n\n  </app-child> \n \n  <br/>\n  <br/>\n  <br/>\n     <p> costome pipe demo </p>\n             {{ myname|mycustompipe }}\n<br/>\n<br/>\n<br/>    \n    another demo of custome pipe\n        {{ myname|custompipeslice }} \n  <br/>\n  <br/>\n  <br/>\n   <!-- from validation  -->\n \n   <form>\n      <div class=\"container\">\n           <h1>Form Example</h1>\n          <br/>\n          <br/>\n          <br/>\n        <label for=\"username\"> username </label>\n        <input type=\"text\" name=\"username\" id=\"username\"  (click)=\"showmsg(fffname)\" ngModel #fffname=\"ngModel\" \n        pattern=\"Vijay\"  minlength=\"5\"  maxlength=\"10\" required />\n        <div class=\"alert alert-danger\" *ngIf=\"!fffname.valid && fffname.touched\" > \n             <div *ngIf=\"fffname.errors.required\">Please fill out this element</div>\n             <div *ngIf=\"fffname.errors.minlength\">minimam lenght should be 5</div>\n             <div *ngIf=\"fffname.errors.maxlength\"> max lenght should be 10  </div>\n             <div *ngIf=\"fffname.errors.pattern\"> Pattran not matching </div>\n        </div>\n          <label for =\"password\"> Password</label>\n          <input type=\"password\"/>\n          <br/>\n          <input type=\"submit\"/>\n          <br/>\n          <br/>\n          <br/>\n      </div>\n   </form>\n<!--  -->\n<br/>\n<br/>\n<br/>\n\n\n<script> \n  $(document).ready(function(){\n      $(\"#flip\").click(function(){\n          $(\"#panel\").slideToggle(\"slow\");\n      });\n  });\n  </script>\n  \n<div id=\"flip\">Click to slide down panel</div>\n<div id=\"panel\">Hello world!</div>\n\n\n   <br/>\n   <br/>\n   <br/>\n\n   \n\n  <div class=\"container\">\n    <h2>Modal Example</h2>\n    <!-- Button to Open the Modal -->\n    <button type=\"button\" class=\"btn btn-primary\" data-toggle=\"modal\" data-target=\"#myModal\">\n      Open modal\n    </button>\n  \n    <!-- The Modal -->\n    <div class=\"modal\" id=\"myModal\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n        \n          <!-- Modal Header -->\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Modal Heading</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          \n          <!-- Modal body -->\n          <div class=\"modal-body\">\n            Modal body..\n          </div>\n          \n          <!-- Modal footer -->\n          <div class=\"modal-footer\">\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n          </div>\n          \n        </div>\n      </div>\n    </div>\n    \n  </div> \n<br/>\n<br/>\n<!-- <br/>\n<nav class=\"navbar navbar-fixed-top navbar-dark bg-inverse\">\n    <div class=\"container\">\n        <a class=\"navbar-brand\">Angular Router</a>\n        <ul class=\"nav navbar-nav\" routerLinkActive=\"active\">\n            <li class=\"nav-item\"><a class=\"home\" routerLink=\"home\">Home</a></li>\n            <li class=\"nav-item\"><a class=\"services\" routerLink=\"services\">services</a></li>\n            <li class=\"nav-item\"><a class=\"contactus\" routerLink=\"contactus\">contactus</a></li>\n            <li class=\"nav-item\"><a class=\"ourclients\" routerLink=\"aboutus/ourclients\">outclients</a></li>\n            <li class=\"nav-item\"><a class=\"ourheadquoter\" routerLink=\"aboutus/ourheadquoter\">ourheadquoter</a></li>\n            \n        </ul>\n    </div>\n</nav> -->\n\n\n<nav class=\"navbar navbar-expand-sm bg-dark navbar-dark\" >\n  <!-- <a class=\"navbar-brand\" href=\"#\">Navbar</a> \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button> -->\n  <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\"><a class=\"home\" routerLink=\"home\">Home&nbsp;&nbsp; </a> </li>\n      <li class=\"nav-item\"> <a class=\"services\" routerLink=\"services\">services&nbsp;&nbsp;  </a> </li>\n      <li class=\"nav-item\"> <a class=\"contactus\" routerLink=\"contactus\">contactus&nbsp;&nbsp;  </a> </li>    \n      <li class=\"nav-item\"> <a class=\"ourclients\" routerLink=\"aboutus/ourclients\">ourclients&nbsp;&nbsp;  </a> </li>    \n      <li class=\"nav-item\"> <a class=\"ourheadquoter\" routerLink=\"aboutus/ourheadquoter\">ourheadquoter&nbsp;&nbsp;  </a></li>\n      <li class=\"nav-item\"> <a class=\"postc\" routerLink=\"postc\">Posts&nbsp;&nbsp;  </a></li>\n    </ul>\n  </div>  \n</nav>\n\n \n\n<!-- <ul>\n  <li> <a routerLink=\"home\"> home </a>   </li>\n  <li> <a routerLink=\"services\"> services </a>   </li>\n  <li> <a routerLink=\"aboutus\" routerLinkActive=\"active-link\"> aboutus </a>   </li>\n  <li> <a routerLink=\"contactus\"> contactus </a>   </li>\n</ul> -->\n<br/>\n<br/>\n<br/>\n\n\n\n<router-outlet></router-outlet>\n\n\n<input type=\"text\" [(ngModel)]=\"home.fname\">\n<br/>\nfname example for html define = {{home.fname}}\n<br/>\n<br/>\n<br/>\n\n<div style=\"text-align:center\">\n<form (ngSubmit)=\"onsubmit()\" name=\"formname\">\n  <input [(ngModel)]=\"home.fname\" type=\"text\" name=\"fname\" />\n  <input type=\"submit\" name=\"name\"/>\n  <table>\n        <tr> <th> first name </th> </tr>\n        <tr *ngFor=\"let q of myarray\"> \n        <td> {{q.fname}} </td>\n        </tr>\n  </table>\n</form>\n</div>\n<br/>\n<br/>\n<br/>\n<!-- ----------------------------------------- -->\n<form  (ngSubmit)=\"onsubmit()\" name=\"formname\">\n    <!-- <input type=\"submit\" name=\"name\"/>\n  name <input [(ngModel)]=\"home.fname\" type=\"text\" name=\"fname\"/><br/>\n  email <input [(ngModel)]=\"home.email\" type=\"text\" name=\"email\"/>  <br/>\n  mobile <input [(ngModel)]=\"home.mobile\" type=\"text\" name=\"mobile\"/> <br/>\n  -->\n    \n<div class=\"container\">\n    <h2>add </h2>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Mobile</th>\n        </tr>\n      </thead>\n      <tbody>\n          <td> <input [(ngModel)]=\"home.fname\" type=\"text\" name=\"fname\"/><br/></td>\n          <td> <input [(ngModel)]=\"home.email\" type=\"text\" name=\"email\"/>  <br/></td>\n          <td> <input [(ngModel)]=\"home.mobile\" type=\"text\" name=\"mobile\"/></td>\n         </tbody>\n    </table>\n    <input type=\"submit\"  class=\"btn btn-info\" name=\"name\" value={{l_buttion_text}}/>\n  </div>\n\n<div class=\"container\">\n    <h2>Joson table example</h2>\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Email</th>\n          <th>Mobile</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr  *ngFor=\"let q of myarray; let j=index;\">\n          <td>{{q.fname}}</td>\n          <td>{{q.email}}</td>\n          <td>{{q.mobile}} {{j}}</td>\n          <td><button type=\"button\" (click)=\"delete_fun(j)\" class=\"btn btn-info\">Delete</button></td>\n          <td><button type=\"button\" (click)=\"edit_fun(q,j)\" class=\"btn btn-info\">Edit</button></td>\n        </tr>\n         </tbody>\n    </table>\n  </div>\n</form>\n\n<br/>\n<br/>\n<br/>\n\n\n<app-demo></app-demo>\n\n<br/>\n<br/>\n<br/>\n\n\n<h1 class=\"myclass3\" appMycustom ='red' *appMyif> This is services example </h1>\n<div  style=\"text-align:center\" >\n  <table >\n    <tr > <th> services NAME </th> <th> services AGE </th> <th>services CITY </th> </tr>\n    <tr *ngFor=\"let xx of myser\">\n      <td>{{ xx.name }}</td>\n      <td>{{ xx.age }}</td>\n      <td>{{ xx.city }}</td>\n    </tr>\n  </table>\n</div>\n\n<br/>\n<br/>\n<br/>\n\n\n<h1 class=\"myclass3\" appMycustom ='red' *appMyif> This is json file </h1>\n<div  style=\"text-align:center\" >\n  <table >\n    <tr > <th> json NAME </th> <th> json AGE </th> <th>json cars </th> </tr>\n    <tr *ngFor=\"let xx of myarrey3\">\n      <td>{{ xx.userId }}</td>\n      <td>{{ xx.id }}</td>\n      <td>{{ xx.title }}</td>\n    </tr>\n  </table>\n</div>\n\n\n<br/>\n<br/>\n<br/>\n\n\n<h1 class=\"myclass3\" appMycustom ='yellow'> This is json file observable data </h1>\n<div  style=\"text-align:center\" >\n  <table >\n    <tr > <th> json NAME </th> <th> json AGE </th> <th>json cars </th> </tr>\n    <tr *ngFor=\"let xx of showBiodata\">\n      <td>{{ xx.userId }}</td>\n      <td>{{ xx.id }}</td>\n      <td>{{ xx.title }}</td>\n    </tr>\n  </table>\n  <h1> {{showerror}} </h1>\n</div>\n<br/>\n<br/>\n<br/>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".myclass {\n  background-color: black;\n  color: white; }\n\nbutton {\n  margin-left: 2px;\n  margin-bottom: 2px;\n  margin-top: 2px; }\n\n.myclass2 {\n  background-color: cadetblue;\n  color: blue; }\n\n.myclass3 {\n  font-family: cursive;\n  font-weight: bold; }\n\ntable, th, td {\n  border: 1px solid grey;\n  border-collapse: collapse;\n  padding: 5px; }\n\ntable tr:nth-child(odd) {\n  background-color: #f1f1f1; }\n\ntable tr:nth-child(even) {\n  background-color: #ffffff; }\n\n.container {\n  background-color: #9fd4ec; }\n\n#panel, #flip {\n  padding: 5px;\n  text-align: center;\n  background-color: #e5eecc;\n  border: solid 1px #c3c3c3; }\n\n#panel {\n  padding: 50px;\n  display: none; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _servicedata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./servicedata.service */ "./src/app/servicedata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(ser, bioser) {
        this.ser = ser;
        this.bioser = bioser;
        this.title = 'app';
        this.mycolor = "red";
        this.isactive = true;
        this.myser = [];
        this.myarrey3 = [];
        this.showBiodata = [];
        //-------------------------------------
        // ---------------------------------------------
        this.home = new _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]();
        this.myarray = [];
        this.l_index = -1;
        this.l_buttion_text = "Submit";
        this.myname = "vijayabcdefgs";
        this.myname2 = "abc";
        this.f_name = "";
        this.s_name = "";
        this.c_concate = "";
        this.l_num1 = 0;
        this.l_num2 = 0;
        this.l_result = "";
        this.l_result2 = "";
        this.myobject = {
            name: "abc",
            age: 11,
            city: "nagpur"
        };
        this.l_inlinestyle = { 'color': 'red',
            'backgroundColor': 'yellow'
        };
        this.l_myname = "abc";
        this.l_aa = 0;
        this.l_bb = 0;
        this.l_cc = 0;
        this.l_aaa = 0;
        this.l_name = "";
        this.l_day = "";
        this.l_colors = ['red', 'blue', 'green'];
        this.l_person = [{ name: 'abc', age: 21, city: 'nagpur' },
            { name: 'xyz', age: 5, city: 'katol' }];
        // decoretor  input and output
        this.myvar = "this veriable is set by parent";
        this.mystr = this.ser.myfun();
        this.myser = this.ser.myarray();
        console.log(this.mystr);
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ser.getdata().subscribe(function (data) {
            _this.myarrey3 = data;
        });
        // ..................
        this.bioser.biodata().subscribe(function (data) { return _this.showBiodata = data; }, function (error) { return _this.showerror = error; });
    };
    AppComponent.prototype.onsubmit = function () {
        if (this.l_index == -1) {
            this.myarray.push(this.home);
            this.home = new _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]();
            //  console.log(JSON.stringify(this.myarray));
        }
        else {
            this.myarray.splice(this.l_index, 1, this.home);
            this.l_index = -1;
            this.l_buttion_text = "Submit";
        }
        this.home = new _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]();
    };
    // --------------------------------------------
    AppComponent.prototype.delete_fun = function (xx) {
        this.myarray.splice(xx, 1);
    };
    AppComponent.prototype.edit_fun = function (qq, jj) {
        this.home = qq;
        this.l_index = jj;
        this.l_buttion_text = "Update";
    };
    AppComponent.prototype.getdata = function (e) {
        console.log(e.target.value);
    };
    AppComponent.prototype.showdata = function (my_name) {
        console.log(my_name);
    };
    AppComponent.prototype.add = function (first_value, second_value) {
        console.log(parseInt(first_value) + parseInt(second_value));
    };
    AppComponent.prototype.getname = function () {
        this.myname2 = this.myname;
    };
    AppComponent.prototype.get_concate = function () {
        this.c_concate = this.f_name + this.s_name;
    };
    AppComponent.prototype.cal = function (e) {
        this.l_result += e.target.innerHTML;
    };
    AppComponent.prototype.temp_eval = function () {
        this.l_result2 = eval(this.l_result);
        this.l_result = this.l_result2;
    };
    AppComponent.prototype.showmsg = function (abc) {
        console.log(abc);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_myservice_service__WEBPACK_IMPORTED_MODULE_2__["MyserviceService"], _servicedata_service__WEBPACK_IMPORTED_MODULE_3__["ServicedataService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _child_child_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./child/child.component */ "./src/app/child/child.component.ts");
/* harmony import */ var _custompipe_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./custompipe.pipe */ "./src/app/custompipe.pipe.ts");
/* harmony import */ var _customeslice_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./customeslice.pipe */ "./src/app/customeslice.pipe.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.routing.module */ "./src/app/app.routing.module.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./aboutus/aboutus.component */ "./src/app/aboutus/aboutus.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ourclients/ourclients.component */ "./src/app/ourclients/ourclients.component.ts");
/* harmony import */ var _ourheadquoter_ourheadquoter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ourheadquoter/ourheadquoter.component */ "./src/app/ourheadquoter/ourheadquoter.component.ts");
/* harmony import */ var _postc_postc_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./postc/postc.component */ "./src/app/postc/postc.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../demo/demo.component */ "./src/demo/demo.component.ts");
/* harmony import */ var _myservice_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./myservice.service */ "./src/app/myservice.service.ts");
/* harmony import */ var _mycustom_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./mycustom.directive */ "./src/app/mycustom.directive.ts");
/* harmony import */ var _myif_directive__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./myif.directive */ "./src/app/myif.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _child_child_component__WEBPACK_IMPORTED_MODULE_4__["ChildComponent"],
                _custompipe_pipe__WEBPACK_IMPORTED_MODULE_5__["Customepipe"],
                _customeslice_pipe__WEBPACK_IMPORTED_MODULE_6__["Customepipeslice"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_10__["ServicesComponent"],
                _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_11__["ContactusComponent"],
                _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_12__["OurclientsComponent"],
                _ourheadquoter_ourheadquoter_component__WEBPACK_IMPORTED_MODULE_13__["OurheadquoterComponent"],
                _postc_postc_component__WEBPACK_IMPORTED_MODULE_14__["PostcComponent"],
                _post_post_component__WEBPACK_IMPORTED_MODULE_15__["PostComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_16__["DemoComponent"],
                _mycustom_directive__WEBPACK_IMPORTED_MODULE_18__["MycustomDirective"],
                _myif_directive__WEBPACK_IMPORTED_MODULE_19__["MyifDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"]
            ],
            providers: [_myservice_service__WEBPACK_IMPORTED_MODULE_17__["MyserviceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app.routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ "./src/app/contactus/contactus.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/services.component */ "./src/app/services/services.component.ts");
/* harmony import */ var _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ourclients/ourclients.component */ "./src/app/ourclients/ourclients.component.ts");
/* harmony import */ var _ourheadquoter_ourheadquoter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ourheadquoter/ourheadquoter.component */ "./src/app/ourheadquoter/ourheadquoter.component.ts");
/* harmony import */ var _postc_postc_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./postc/postc.component */ "./src/app/postc/postc.component.ts");
/* harmony import */ var _post_post_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./post/post.component */ "./src/app/post/post.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var route = [
    { path: 'demo', component: _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"] },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'aboutus', children: [
            { path: "ourclients", component: _ourclients_ourclients_component__WEBPACK_IMPORTED_MODULE_6__["OurclientsComponent"] },
            { path: "ourheadquoter", component: _ourheadquoter_ourheadquoter_component__WEBPACK_IMPORTED_MODULE_7__["OurheadquoterComponent"] },
        ] },
    { path: 'contactus', component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__["ContactusComponent"] },
    { path: 'services', component: _services_services_component__WEBPACK_IMPORTED_MODULE_5__["ServicesComponent"] },
    { path: 'postc', component: _postc_postc_component__WEBPACK_IMPORTED_MODULE_8__["PostcComponent"] },
    { path: 'postc/:id', component: _post_post_component__WEBPACK_IMPORTED_MODULE_9__["PostComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(route)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/child/child.component.html":
/*!********************************************!*\
  !*** ./src/app/child/child.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  child works! \n</p>\n  <br/>\n  <br/>\n  <br/>\n  {{childData}}\n  <br/>\n  <br/>\n  <br/>\n  <button (click)='myfun()'> click here for child data sending to parent componant </button>\n  <br/>\n  <br/>\n  <br/>\n  <div class=\"card\">\n       <div class=\"card-header\">\n            <ng-content select=\".heading\"></ng-content>\n        </div>\n      <div class=\"card-body\">\n        <ng-content select=\".body\"></ng-content>\n      </div>\n  </div>\n\n"

/***/ }),

/***/ "./src/app/child/child.component.scss":
/*!********************************************!*\
  !*** ./src/app/child/child.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header {\n  background-color: cadetblue; }\n\n.card-body {\n  background-color: blue; }\n"

/***/ }),

/***/ "./src/app/child/child.component.ts":
/*!******************************************!*\
  !*** ./src/app/child/child.component.ts ***!
  \******************************************/
/*! exports provided: ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChildComponent = /** @class */ (function () {
    function ChildComponent() {
        this.fromchild = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ChildComponent.prototype.ngOnInit = function () {
        this.fromchild.emit("data from child to parent vijay11111");
    };
    ChildComponent.prototype.myfun = function () {
        console.log('vijay');
        this.fromchild.emit("data from child to parent vijay2");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "childData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ChildComponent.prototype, "fromchild", void 0);
    ChildComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-child',
            template: __webpack_require__(/*! ./child.component.html */ "./src/app/child/child.component.html"),
            styles: [__webpack_require__(/*! ./child.component.scss */ "./src/app/child/child.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/contactus/contactus.component.html":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  contactus works!\n</p>\n"

/***/ }),

/***/ "./src/app/contactus/contactus.component.scss":
/*!****************************************************!*\
  !*** ./src/app/contactus/contactus.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contactus/contactus.component.ts":
/*!**************************************************!*\
  !*** ./src/app/contactus/contactus.component.ts ***!
  \**************************************************/
/*! exports provided: ContactusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactusComponent", function() { return ContactusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactusComponent = /** @class */ (function () {
    function ContactusComponent() {
    }
    ContactusComponent.prototype.ngOnInit = function () {
    };
    ContactusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contactus',
            template: __webpack_require__(/*! ./contactus.component.html */ "./src/app/contactus/contactus.component.html"),
            styles: [__webpack_require__(/*! ./contactus.component.scss */ "./src/app/contactus/contactus.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactusComponent);
    return ContactusComponent;
}());



/***/ }),

/***/ "./src/app/customeslice.pipe.ts":
/*!**************************************!*\
  !*** ./src/app/customeslice.pipe.ts ***!
  \**************************************/
/*! exports provided: Customepipeslice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customepipeslice", function() { return Customepipeslice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Customepipeslice = /** @class */ (function () {
    function Customepipeslice() {
    }
    Customepipeslice.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        return value.slice(5, 10);
    };
    Customepipeslice = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'custompipeslice' })
    ], Customepipeslice);
    return Customepipeslice;
}());



/***/ }),

/***/ "./src/app/custompipe.pipe.ts":
/*!************************************!*\
  !*** ./src/app/custompipe.pipe.ts ***!
  \************************************/
/*! exports provided: Customepipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customepipe", function() { return Customepipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Customepipe = /** @class */ (function () {
    function Customepipe() {
    }
    Customepipe.prototype.transform = function (value, args) {
        if (!value) {
            return null;
        }
        return value.substring(5, 10);
    };
    Customepipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'mycustompipe' })
    ], Customepipe);
    return Customepipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mycustom.directive.ts":
/*!***************************************!*\
  !*** ./src/app/mycustom.directive.ts ***!
  \***************************************/
/*! exports provided: MycustomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MycustomDirective", function() { return MycustomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MycustomDirective = /** @class */ (function () {
    function MycustomDirective(custdirect) {
        this.custdirect = custdirect;
        this.appMycustom = "";
    }
    MycustomDirective.prototype.ngOnInit = function () {
        // this.custdirect.nativeElement.style.backgroundColor=this.mycustom;
        // this.custdirect.nativeElement.style.color=this.tcolor;
        this.custdirect.nativeElement.style.backgroundColor = this.appMycustom;
    };
    MycustomDirective.prototype.onmouseenter = function () {
        this.custdirect.nativeElement.style.backgroundColor = "yellow";
    };
    MycustomDirective.prototype.onmouseleave = function () {
        this.custdirect.nativeElement.style.backgroundColor = "pink";
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MycustomDirective.prototype, "mycustom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], MycustomDirective.prototype, "tcolor", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MycustomDirective.prototype, "appMycustom", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MycustomDirective.prototype, "onmouseenter", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], MycustomDirective.prototype, "onmouseleave", null);
    MycustomDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMycustom]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MycustomDirective);
    return MycustomDirective;
}());



/***/ }),

/***/ "./src/app/myif.directive.ts":
/*!***********************************!*\
  !*** ./src/app/myif.directive.ts ***!
  \***********************************/
/*! exports provided: MyifDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyifDirective", function() { return MyifDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MyifDirective = /** @class */ (function () {
    function MyifDirective(viewvijay, tempvijayref) {
        this.viewvijay = viewvijay;
        this.tempvijayref = tempvijayref;
    }
    MyifDirective.prototype.ngOnInit = function () {
        // if you false isbool then appMyif will disappeare
        var isbool = false;
        if (isbool) {
            this.viewvijay.createEmbeddedView(this.tempvijayref);
        }
        else {
            this.viewvijay.clear();
        }
    };
    MyifDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMyif]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]])
    ], MyifDirective);
    return MyifDirective;
}());



/***/ }),

/***/ "./src/app/myservice.service.ts":
/*!**************************************!*\
  !*** ./src/app/myservice.service.ts ***!
  \**************************************/
/*! exports provided: MyserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyserviceService", function() { return MyserviceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyserviceService = /** @class */ (function () {
    function MyserviceService(http) {
        this.http = http;
        this.l_myservice_array = [{ name: 'vijay', age: 21, city: 'nagpur' },
            { name: 'jaya', age: 5, city: 'katol' }];
        this.http.get('');
    }
    MyserviceService.prototype.myfun = function () {
        return ("this deta is return by services");
    };
    MyserviceService.prototype.myarray = function () {
        return this.l_myservice_array;
    };
    MyserviceService.prototype.getdata = function () {
        return this.http.get("../assets/myjson.json");
    };
    MyserviceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MyserviceService);
    return MyserviceService;
}());



/***/ }),

/***/ "./src/app/ourclients/ourclients.component.html":
/*!******************************************************!*\
  !*** ./src/app/ourclients/ourclients.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ourclients works!\n</p>\n"

/***/ }),

/***/ "./src/app/ourclients/ourclients.component.scss":
/*!******************************************************!*\
  !*** ./src/app/ourclients/ourclients.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ourclients/ourclients.component.ts":
/*!****************************************************!*\
  !*** ./src/app/ourclients/ourclients.component.ts ***!
  \****************************************************/
/*! exports provided: OurclientsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurclientsComponent", function() { return OurclientsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurclientsComponent = /** @class */ (function () {
    function OurclientsComponent() {
    }
    OurclientsComponent.prototype.ngOnInit = function () {
    };
    OurclientsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourclients',
            template: __webpack_require__(/*! ./ourclients.component.html */ "./src/app/ourclients/ourclients.component.html"),
            styles: [__webpack_require__(/*! ./ourclients.component.scss */ "./src/app/ourclients/ourclients.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurclientsComponent);
    return OurclientsComponent;
}());



/***/ }),

/***/ "./src/app/ourheadquoter/ourheadquoter.component.html":
/*!************************************************************!*\
  !*** ./src/app/ourheadquoter/ourheadquoter.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  ourheadquoter works!\n</p>\n"

/***/ }),

/***/ "./src/app/ourheadquoter/ourheadquoter.component.scss":
/*!************************************************************!*\
  !*** ./src/app/ourheadquoter/ourheadquoter.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ourheadquoter/ourheadquoter.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/ourheadquoter/ourheadquoter.component.ts ***!
  \**********************************************************/
/*! exports provided: OurheadquoterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurheadquoterComponent", function() { return OurheadquoterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OurheadquoterComponent = /** @class */ (function () {
    function OurheadquoterComponent() {
    }
    OurheadquoterComponent.prototype.ngOnInit = function () {
    };
    OurheadquoterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourheadquoter',
            template: __webpack_require__(/*! ./ourheadquoter.component.html */ "./src/app/ourheadquoter/ourheadquoter.component.html"),
            styles: [__webpack_require__(/*! ./ourheadquoter.component.scss */ "./src/app/ourheadquoter/ourheadquoter.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurheadquoterComponent);
    return OurheadquoterComponent;
}());



/***/ }),

/***/ "./src/app/post/post.component.html":
/*!******************************************!*\
  !*** ./src/app/post/post.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  post abc works!\n</p>\n\n<div>\n    {{posts.title}}\n</div>"

/***/ }),

/***/ "./src/app/post/post.component.scss":
/*!******************************************!*\
  !*** ./src/app/post/post.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/post/post.component.ts":
/*!****************************************!*\
  !*** ./src/app/post/post.component.ts ***!
  \****************************************/
/*! exports provided: PostComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostComponent", function() { return PostComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PostComponent = /** @class */ (function () {
    function PostComponent(route) {
        var _this = this;
        this.route = route;
        this.id = 0;
        this.posts = [];
        this.route.params.subscribe(function (res) { return _this.id = res.id; });
        {
            fetch("https://jsonplaceholder.typicode.com/posts/" + this.id)
                .then(function (res) { return res.json(); })
                .then(function (data) { return _this.posts = data; })
                .catch(function (err) { return console.log(err); });
        }
    }
    PostComponent.prototype.ngOnInit = function () {
    };
    PostComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-post',
            template: __webpack_require__(/*! ./post.component.html */ "./src/app/post/post.component.html"),
            styles: [__webpack_require__(/*! ./post.component.scss */ "./src/app/post/post.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], PostComponent);
    return PostComponent;
}());



/***/ }),

/***/ "./src/app/postc/postc.component.html":
/*!********************************************!*\
  !*** ./src/app/postc/postc.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  postc works!\n</p>\n<!-- <h1> Post from then server </h1>\n<div *ngFor=\"let p of posts\">\n  <h3>{{p.title}}</h3>\n  <p> {{p.body}} </p>\n</div> -->\n\n\n<div class=\"container\">\n  <h2>Json Placeholder  https://jsonplaceholder.typicode.com/posts </h2>\n  <p>Josn placeHolder Example</p>                                                                                      \n  \n  <div  class=\"table-responsive\">\n <table class=\"table table-dark table-hover\">\n  <!-- <table class=\"table table-bordered\"> -->\n    <thead>\n        <tr>\n           <th>Id</th>\n          <th>Title</th>\n          <th>Body</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr  *ngFor=\"let p of posts\">\n            <td> {{p.id}}  </td>\n          <td>   <a [routerLink]=[p.id]> {{p.title}} </a> </td>\n          <td>{{p.body}} </td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/postc/postc.component.scss":
/*!********************************************!*\
  !*** ./src/app/postc/postc.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/postc/postc.component.ts":
/*!******************************************!*\
  !*** ./src/app/postc/postc.component.ts ***!
  \******************************************/
/*! exports provided: PostcComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostcComponent", function() { return PostcComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PostcComponent = /** @class */ (function () {
    function PostcComponent() {
        var _this = this;
        this.posts = [];
        {
            fetch("https://jsonplaceholder.typicode.com/posts")
                .then(function (res) { return res.json(); })
                .then(function (data) { return _this.posts = data; })
                .catch(function (err) { return console.log(err); });
        }
    }
    PostcComponent.prototype.ngOnInit = function () {
    };
    PostcComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-postc',
            template: __webpack_require__(/*! ./postc.component.html */ "./src/app/postc/postc.component.html"),
            styles: [__webpack_require__(/*! ./postc.component.scss */ "./src/app/postc/postc.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PostcComponent);
    return PostcComponent;
}());



/***/ }),

/***/ "./src/app/servicedata.service.ts":
/*!****************************************!*\
  !*** ./src/app/servicedata.service.ts ***!
  \****************************************/
/*! exports provided: ServicedataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicedataService", function() { return ServicedataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {_thorw} from 'rxjs/observable/throw';

var ServicedataService = /** @class */ (function () {
    function ServicedataService(http) {
        this.http = http;
    }
    ServicedataService.prototype.biodata = function () {
        var _this = this;
        return this.http.get('../assets/myjson.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (res) { return _this.errorcheck(res); }));
    };
    ServicedataService.prototype.errorcheck = function (res) {
        var statusCode = res.status;
        var body = res;
        var error = {
            statusCode: statusCode,
            error: body.error
        };
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(body.message);
    };
    ServicedataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ServicedataService);
    return ServicedataService;
}());



/***/ }),

/***/ "./src/app/services/services.component.html":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  services works!\n</p>\n"

/***/ }),

/***/ "./src/app/services/services.component.scss":
/*!**************************************************!*\
  !*** ./src/app/services/services.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/services.component.ts":
/*!************************************************!*\
  !*** ./src/app/services/services.component.ts ***!
  \************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/demo/demo.component.scss":
/*!**************************************!*\
  !*** ./src/demo/demo.component.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  font-family: \"Lato\", sans-serif;\n  transition: background-color .5s; }\n\n.sidenav {\n  height: 100%;\n  width: 0;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #111;\n  overflow-x: hidden;\n  transition: 0.5s;\n  padding-top: 60px; }\n\n.sidenav a {\n  padding: 8px 8px 8px 32px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #818181;\n  display: block;\n  transition: 0.3s; }\n\n.sidenav a:hover {\n  color: #f1f1f1; }\n\n.sidenav .closebtn {\n  position: absolute;\n  top: 0;\n  right: 25px;\n  font-size: 36px;\n  margin-left: 50px; }\n\n#main {\n  transition: margin-left .5s;\n  padding: 16px; }\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px; }\n  .sidenav a {\n    font-size: 18px; } }\n"

/***/ }),

/***/ "./src/demo/demo.component.ts":
/*!************************************!*\
  !*** ./src/demo/demo.component.ts ***!
  \************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemoComponent = /** @class */ (function () {
    function DemoComponent() {
    }
    DemoComponent.prototype.ngOnInit = function () {
    };
    DemoComponent.prototype.openNav = function () {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    };
    DemoComponent.prototype.closeNav = function () {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: "\n  \n  <div id=\"mySidenav\" class=\"sidenav\">\n  <a href=\"javascript:void(0)\" class=\"closebtn\" (click)=\"closeNav()\">&times;</a>\n  <a href=\"#\">About</a>\n  <a href=\"#\">Services</a>\n  <a href=\"#\">Clients</a>\n  <a href=\"#\">Contact</a>\n  </div>\n  \n  <div id=\"main\">\n  <h2>Sidenav Push Example</h2>\n  <p>Click on the element below to open the side navigation menu, and push this content to the right. Notice that we add a black see-through background-color to body when the sidenav is opened.</p>\n  <span style=\"font-size:30px;cursor:pointer\" (click)=\"openNav()\">&#9776; open</span>\n  </div>\n  \n  ",
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/demo/demo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DemoComponent);
    return DemoComponent;
}());



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
var environment = {
    production: false
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\vijay\newapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map