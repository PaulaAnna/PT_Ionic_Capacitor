function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["scroll-scroll-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll/scroll.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/scroll/scroll.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppScrollScrollPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button color=\"secondary\" routerLink=\"/home\">\n        <ion-icon slot=\"icon-only\" ios=\"ellipsis-horizontal\" md=\"ellipsis-vertical\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Scroll List</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\" class=\"ion-padding\">\n\n  <ion-list>\n    <ion-virtual-scroll [items]=\"dataList\">\n      <ion-item *virtualItem=\"let item\">\n        <ion-label>\n          <h2>{{item.name}} {{item.id}}</h2>\n        </ion-label>\n      </ion-item>\n    </ion-virtual-scroll>\n  </ion-list>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/scroll/scroll-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/scroll/scroll-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: ScrollPageRoutingModule */

  /***/
  function srcAppScrollScrollRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollPageRoutingModule", function () {
      return ScrollPageRoutingModule;
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


    var _scroll_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./scroll.page */
    "./src/app/scroll/scroll.page.ts");

    var routes = [{
      path: '',
      component: _scroll_page__WEBPACK_IMPORTED_MODULE_3__["ScrollPage"]
    }];

    var ScrollPageRoutingModule = function ScrollPageRoutingModule() {
      _classCallCheck(this, ScrollPageRoutingModule);
    };

    ScrollPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ScrollPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/scroll/scroll.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/scroll/scroll.module.ts ***!
    \*****************************************/

  /*! exports provided: ScrollPageModule */

  /***/
  function srcAppScrollScrollModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollPageModule", function () {
      return ScrollPageModule;
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


    var _scroll_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./scroll-routing.module */
    "./src/app/scroll/scroll-routing.module.ts");
    /* harmony import */


    var _scroll_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./scroll.page */
    "./src/app/scroll/scroll.page.ts");

    var ScrollPageModule = function ScrollPageModule() {
      _classCallCheck(this, ScrollPageModule);
    };

    ScrollPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _scroll_routing_module__WEBPACK_IMPORTED_MODULE_5__["ScrollPageRoutingModule"]],
      declarations: [_scroll_page__WEBPACK_IMPORTED_MODULE_6__["ScrollPage"]]
    })], ScrollPageModule);
    /***/
  },

  /***/
  "./src/app/scroll/scroll.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/scroll/scroll.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppScrollScrollPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Njcm9sbC9zY3JvbGwucGFnZS5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/scroll/scroll.page.ts":
  /*!***************************************!*\
    !*** ./src/app/scroll/scroll.page.ts ***!
    \***************************************/

  /*! exports provided: ScrollPage */

  /***/
  function srcAppScrollScrollPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollPage", function () {
      return ScrollPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");

    var ScrollPage = /*#__PURE__*/function () {
      function ScrollPage() {
        _classCallCheck(this, ScrollPage);

        this.dataList = [];
        this.getEmployees();
      }

      _createClass(ScrollPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getEmployees",
        value: function getEmployees() {
          for (var i = 0; i < 1000; i++) {
            this.dataList.push({
              name: 'Person',
              id: ++i
            });
          }
        }
      }]);

      return ScrollPage;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["IonVirtualScroll"])], ScrollPage.prototype, "virtualScroll", void 0);
    ScrollPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-scroll',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./scroll.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/scroll/scroll.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./scroll.page.scss */
      "./src/app/scroll/scroll.page.scss"))["default"]]
    })], ScrollPage);
    /***/
  }
}]);
//# sourceMappingURL=scroll-scroll-module-es5.js.map