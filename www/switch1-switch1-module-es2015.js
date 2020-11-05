(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch1-switch1-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/switch1/switch1.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/switch1/switch1.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" routerLink=\"/scroll\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Switch 1</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Activity 1</h1>\n  <ion-button routerLink=\"/switch2\">Press for next page</ion-button>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/switch1/switch1-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/switch1/switch1-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Switch1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch1PageRoutingModule", function() { return Switch1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _switch1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./switch1.page */ "./src/app/switch1/switch1.page.ts");




const routes = [
    {
        path: '',
        component: _switch1_page__WEBPACK_IMPORTED_MODULE_3__["Switch1Page"]
    }
];
let Switch1PageRoutingModule = class Switch1PageRoutingModule {
};
Switch1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Switch1PageRoutingModule);



/***/ }),

/***/ "./src/app/switch1/switch1.module.ts":
/*!*******************************************!*\
  !*** ./src/app/switch1/switch1.module.ts ***!
  \*******************************************/
/*! exports provided: Switch1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch1PageModule", function() { return Switch1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _switch1_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./switch1-routing.module */ "./src/app/switch1/switch1-routing.module.ts");
/* harmony import */ var _switch1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./switch1.page */ "./src/app/switch1/switch1.page.ts");







let Switch1PageModule = class Switch1PageModule {
};
Switch1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _switch1_routing_module__WEBPACK_IMPORTED_MODULE_5__["Switch1PageRoutingModule"]
        ],
        declarations: [_switch1_page__WEBPACK_IMPORTED_MODULE_6__["Switch1Page"]]
    })
], Switch1PageModule);



/***/ }),

/***/ "./src/app/switch1/switch1.page.scss":
/*!*******************************************!*\
  !*** ./src/app/switch1/switch1.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaDEvc3dpdGNoMS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/switch1/switch1.page.ts":
/*!*****************************************!*\
  !*** ./src/app/switch1/switch1.page.ts ***!
  \*****************************************/
/*! exports provided: Switch1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Switch1Page", function() { return Switch1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let Switch1Page = class Switch1Page {
    constructor() { }
    ngOnInit() {
    }
};
Switch1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-switch1',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./switch1.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/switch1/switch1.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./switch1.page.scss */ "./src/app/switch1/switch1.page.scss")).default]
    })
], Switch1Page);



/***/ })

}]);
//# sourceMappingURL=switch1-switch1-module-es2015.js.map