function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["switch2-switch2-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/switch2/switch2.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/switch2/switch2.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSwitch2Switch2PageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" routerLink=\"/scroll\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Switch 2</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <h1>Activity 2</h1>\n  <ion-button routerLink=\"/switch1\">Press for previous page</ion-button>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/switch2/switch2-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/switch2/switch2-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: Switch2PageRoutingModule */

  /***/
  function srcAppSwitch2Switch2RoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Switch2PageRoutingModule", function () {
      return Switch2PageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _switch2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./switch2.page */
    "./src/app/switch2/switch2.page.ts");

    var routes = [{
      path: '',
      component: _switch2_page__WEBPACK_IMPORTED_MODULE_3__["Switch2Page"]
    }];

    var Switch2PageRoutingModule = function Switch2PageRoutingModule() {
      _classCallCheck(this, Switch2PageRoutingModule);
    };

    Switch2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], Switch2PageRoutingModule);
    /***/
  },

  /***/
  "./src/app/switch2/switch2.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/switch2/switch2.module.ts ***!
    \*******************************************/

  /*! exports provided: Switch2PageModule */

  /***/
  function srcAppSwitch2Switch2ModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Switch2PageModule", function () {
      return Switch2PageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _switch2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./switch2-routing.module */
    "./src/app/switch2/switch2-routing.module.ts");
    /* harmony import */


    var _switch2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./switch2.page */
    "./src/app/switch2/switch2.page.ts");

    var Switch2PageModule = function Switch2PageModule() {
      _classCallCheck(this, Switch2PageModule);
    };

    Switch2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _switch2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Switch2PageRoutingModule"]],
      declarations: [_switch2_page__WEBPACK_IMPORTED_MODULE_6__["Switch2Page"]]
    })], Switch2PageModule);
    /***/
  },

  /***/
  "./src/app/switch2/switch2.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/switch2/switch2.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppSwitch2Switch2PageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N3aXRjaDIvc3dpdGNoMi5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/switch2/switch2.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/switch2/switch2.page.ts ***!
    \*****************************************/

  /*! exports provided: Switch2Page */

  /***/
  function srcAppSwitch2Switch2PageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Switch2Page", function () {
      return Switch2Page;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Switch2Page = /*#__PURE__*/function () {
      function Switch2Page() {
        _classCallCheck(this, Switch2Page);
      }

      _createClass(Switch2Page, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Switch2Page;
    }();

    Switch2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-switch2',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./switch2.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/switch2/switch2.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./switch2.page.scss */
      "./src/app/switch2/switch2.page.scss"))["default"]]
    })], Switch2Page);
    /***/
  }
}]);
//# sourceMappingURL=switch2-switch2-module-es5.js.map