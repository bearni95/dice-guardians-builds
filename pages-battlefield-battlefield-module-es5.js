function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-battlefield-battlefield-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/battlefield/battlefield.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/battlefield/battlefield.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBattlefieldBattlefieldPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content>\n  <div\n    class=\"main {{lib.board.cursorClass}}\"\n  >\n\n\n    <div class=\"drawer central-drawer\">\n      <app-board [lib]=\"lib\"></app-board>\n    </div>\n\n\n\n  </div>\n\n\n  <div class=\"user-card user-card-blue\">\n    <app-profile\n      [board]=\"lib.board\"\n      [player]=\"lib.board.players.blue\"\n    ></app-profile>\n  </div>\n\n\n  <div class=\"user-card user-card-red\">\n    <app-profile\n      [board]=\"lib.board\"\n      [player]=\"lib.board.players.red\"\n    ></app-profile>\n  </div>\n\n\n  <div class=\"bottom-drawer drawer {{lib.board.deckContainerClass}}\">\n    <app-card\n      *ngFor=\"let card of lib.board.players.red.deckCards\"\n      [card]=\"card\"\n      [board]=\"lib.board\"\n      [player]=\"lib.board.players.red\"\n      [width]=\"200\"\n      [showMagnify]=\"true\"\n      innerAlign=\"flex-start\"\n    >\n    </app-card>\n  </div>\n\n\n  <div\n    class=\"card-view-modal {{lib.board.cardModalClasses.join(' ')}}\"\n  >\n  <div\n    class=\"close-card-modal\"\n    (click)=\"lib.board.cardModal(lib.board.activeCard)\"\n  >x</div>\n    <app-card [card]=\"lib.board.activeCard\" [width]=\"600\" >\n    </app-card>\n  </div>\n\n\n\n</ion-content>\n\n<app-splash [board]=\"lib.board\"></app-splash>\n";
    /***/
  },

  /***/
  "./src/app/pages/battlefield/battlefield-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/battlefield/battlefield-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: BattlefieldPageRoutingModule */

  /***/
  function srcAppPagesBattlefieldBattlefieldRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BattlefieldPageRoutingModule", function () {
      return BattlefieldPageRoutingModule;
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


    var _battlefield_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./battlefield.page */
    "./src/app/pages/battlefield/battlefield.page.ts");

    var routes = [{
      path: '',
      component: _battlefield_page__WEBPACK_IMPORTED_MODULE_3__["BattlefieldPage"]
    }];

    var BattlefieldPageRoutingModule = function BattlefieldPageRoutingModule() {
      _classCallCheck(this, BattlefieldPageRoutingModule);
    };

    BattlefieldPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BattlefieldPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/battlefield/battlefield.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/battlefield/battlefield.module.ts ***!
    \*********************************************************/

  /*! exports provided: BattlefieldPageModule */

  /***/
  function srcAppPagesBattlefieldBattlefieldModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BattlefieldPageModule", function () {
      return BattlefieldPageModule;
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


    var _battlefield_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./battlefield-routing.module */
    "./src/app/pages/battlefield/battlefield-routing.module.ts");
    /* harmony import */


    var _battlefield_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./battlefield.page */
    "./src/app/pages/battlefield/battlefield.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var BattlefieldPageModule = function BattlefieldPageModule() {
      _classCallCheck(this, BattlefieldPageModule);
    };

    BattlefieldPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _battlefield_routing_module__WEBPACK_IMPORTED_MODULE_5__["BattlefieldPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_battlefield_page__WEBPACK_IMPORTED_MODULE_6__["BattlefieldPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], BattlefieldPageModule);
    /***/
  },

  /***/
  "./src/app/pages/battlefield/battlefield.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/battlefield/battlefield.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBattlefieldBattlefieldPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".left-drawer {\n  left: 0;\n  top: 0;\n  width: 300px;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.8);\n  padding: 10px;\n  z-index: 5;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.left-drawer.shown {\n  transform: translateX(0);\n}\n\n.left-drawer.hidden {\n  transform: translateX(-300px);\n}\n\n.toggle-button {\n  width: 30px;\n  height: 30px;\n  position: absolute;\n  background-color: black;\n  border: 3px solid white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 25px;\n  border-radius: 100%;\n}\n\n.left-drawer .toggle-button {\n  right: -40px;\n  top: 40px;\n  top: 0;\n}\n\n.bottom-drawer .toggle-button {\n  top: 5px;\n  left: calc(50vw - 15px);\n  z-index: 9999;\n}\n\n.central-drawer {\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  /*overflow:scroll;*/\n}\n\n.right-drawer {\n  width: 500px;\n  height: 100vh;\n  top: 0;\n  right: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  background-color: black;\n  overflow-y: scroll;\n}\n\n.bottom-drawer {\n  transition: 500ms;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  position: fixed;\n  width: 900px;\n  z-index: 9999;\n  top: 110vh;\n  left: calc(50vw - 450px);\n  background-color: rgba(37, 48, 54, 0.6);\n  border: 1px solid #78909c;\n  height: calc(100vh - 20px);\n  overflow-y: scroll;\n}\n\n.bottom-drawer .card-outer {\n  justify-content: flex-start !important;\n}\n\n.bottom-drawer.shown {\n  transform: translateY(0);\n}\n\n.bottom-drawer.hidden {\n  transform: translateY(300px);\n}\n\n.card-view-modal {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.6);\n  transition: 300ms;\n  opacity: 1;\n  visibility: visible;\n  z-index: 9999;\n}\n\n.card-view-modal.hidden {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.close-card-modal {\n  width: 50px;\n  height: 50px;\n  font-size: 2em;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  border-radius: 100%;\n  background-color: black;\n  border: 5px solid white;\n  color: white;\n  position: absolute;\n  top: 50px;\n  right: 50px;\n}\n\n.main {\n  position: fixed;\n  width: 100vw;\n  height: 100vh;\n  top: 0;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n* {\n  cursor: url(/assets/icons/cursor.png), auto;\n}\n\n.main.cursor-0 {\n  cursor: url(/assets/icons/cursor.png), auto;\n}\n\n.main.cursor-1 {\n  cursor: url(/assets/icons/cursor-1.png), auto;\n}\n\n.main.cursor-2 {\n  cursor: url(/assets/icons/cursor-2.png), auto;\n}\n\n.main.cursor-3 {\n  cursor: url(/assets/icons/cursor-3.png), auto;\n}\n\n.main.cursor-4 {\n  cursor: url(/assets/icons/cursor-4.png), auto;\n}\n\n.main.cursor-5 {\n  cursor: url(/assets/icons/cursor-5.png), auto;\n}\n\n.main.cursor-6 {\n  cursor: url(/assets/icons/cursor-6.png), auto;\n}\n\n.main.cursor-7 {\n  cursor: url(/assets/icons/cursor-7.png), auto;\n}\n\n.main.cursor-8 {\n  cursor: url(/assets/icons/cursor-8.png), auto;\n}\n\n.main.cursor-9 {\n  cursor: url(/assets/icons/cursor-9.png), auto;\n}\n\n.main.cursor-plus-9 {\n  cursor: url(/assets/icons/cursor-plus-9.png), auto;\n}\n\n.user-card {\n  z-index: 999;\n  position: fixed;\n  background-color: rgba(38, 50, 56, 0.95);\n  border: 1px solid #78909c;\n  border-bottom: 1px solid #607d8b;\n  padding: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.user-card-blue {\n  top: 10px;\n  left: 10px;\n}\n\n.user-card-red {\n  top: 10px;\n  right: 10px;\n}\n\napp-profile {\n  width: 100%;\n}\n\n.view-deck {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.bottom-drawer.full {\n  top: 10px;\n}\n\n.tutorial {\n  width: 100vw;\n  height: 100vh;\n  z-index: 9999999;\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n\n.tutorial-pointer {\n  position: absolute;\n}\n\n.tutorial-square {\n  width: 150px;\n  height: 150px;\n  -webkit-filter: drop-shadow(0px 0px 10px white);\n          filter: drop-shadow(0px 0px 10px white);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9wYWdlcy9iYXR0bGVmaWVsZC9iYXR0bGVmaWVsZC5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLE9BQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNGLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0hBOztBRE9BO0VBQ0Usd0JBQUE7QUNKRjs7QURPQTtFQUNFLDZCQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDSkY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLE1BQUE7QUNIRjs7QURNQTtFQUNFLFFBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0hGOztBRE1BO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUNIRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNGLHdCQUFBO0VBQ0EsdUNBQUE7RUFDQSx5QkFBQTtFQUVBLDBCQUFBO0VBQ0Esa0JBQUE7QUNKQTs7QURNRTtFQUNFLHNDQUFBO0FDSko7O0FEUUE7RUFDRSx3QkFBQTtBQ0xGOztBRFFBO0VBQ0UsNEJBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ0xGOztBRFFBO0VBQ0UsVUFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEUUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNMRjs7QURRQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNMRjs7QURRQTtFQUNFLDJDQUFBO0FDTEY7O0FET0E7RUFDRSwyQ0FBQTtBQ0pGOztBRE1BO0VBQ0UsNkNBQUE7QUNIRjs7QURLQTtFQUNFLDZDQUFBO0FDRkY7O0FESUE7RUFDRSw2Q0FBQTtBQ0RGOztBREdBO0VBQ0UsNkNBQUE7QUNBRjs7QURFQTtFQUNFLDZDQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2Q0FBQTtBQ0VGOztBREFBO0VBQ0UsNkNBQUE7QUNHRjs7QUREQTtFQUNFLDZDQUFBO0FDSUY7O0FERkE7RUFDRSw2Q0FBQTtBQ0tGOztBREhBO0VBQ0Usa0RBQUE7QUNNRjs7QURIQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNNRjs7QURIQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDTUY7O0FESEE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtBQ01GOztBREhBO0VBQ0UsV0FBQTtBQ01GOztBREhBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDTUY7O0FERUE7RUFDRSxTQUFBO0FDQ0Y7O0FER0E7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0FDQUY7O0FESUE7RUFDRSxrQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSwrQ0FBQTtVQUFBLHVDQUFBO0VBQ0EsbUJBQUE7QUNERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhdHRsZWZpZWxkL2JhdHRsZWZpZWxkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kcmF3ZXIge1xuXG59XG5cbi5sZWZ0LWRyYXdlcntcbiAgbGVmdDowO1xuICB0b3A6MDtcbiAgd2lkdGg6MzAwcHg7XG4gIGhlaWdodDoxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC44KTtcbiAgcGFkZGluZzoxMHB4O1xuICB6LWluZGV4OjU7XG4gIGRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuanVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbi5sZWZ0LWRyYXdlci5zaG93bntcbiAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMCk7XG59XG5cbi5sZWZ0LWRyYXdlci5oaWRkZW57XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC0zMDBweCk7XG59XG5cbi50b2dnbGUtYnV0dG9ue1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuLmxlZnQtZHJhd2VyIC50b2dnbGUtYnV0dG9ue1xuICByaWdodDogLTQwcHg7XG4gIHRvcDo0MHB4O1xuICB0b3A6MDtcbn1cblxuLmJvdHRvbS1kcmF3ZXIgLnRvZ2dsZS1idXR0b257XG4gIHRvcDo1cHg7XG4gIGxlZnQ6Y2FsYyg1MHZ3IC0gMTVweCk7XG4gIHotaW5kZXg6OTk5OTtcbn1cblxuLmNlbnRyYWwtZHJhd2Vye1xuICBoZWlnaHQ6IDEwMHZoO1xuICB3aWR0aDoxMDB2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIC8qb3ZlcmZsb3c6c2Nyb2xsOyovXG59XG5cbi5yaWdodC1kcmF3ZXJ7XG4gIHdpZHRoOjUwMHB4O1xuICBoZWlnaHQ6MTAwdmg7XG4gIHRvcDowO1xuICByaWdodDowO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICBmbGV4LXdyYXA6d3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcbiAgb3ZlcmZsb3cteTpzY3JvbGw7XG59XG5cbi5ib3R0b20tZHJhd2Vye1xuICB0cmFuc2l0aW9uOjUwMG1zO1xuICBkaXNwbGF5OmZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG4gIGZsZXgtd3JhcDp3cmFwO1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgd2lkdGg6OTAwcHg7XG4gIHotaW5kZXg6OTk5OTtcbiAgdG9wOiAxMTB2aDtcbmxlZnQ6IGNhbGMoNTB2dyAtIDQ1MHB4KTtcbmJhY2tncm91bmQtY29sb3I6cmdiYSgzNywgNDgsIDU0LCAwLjYpO1xuYm9yZGVyOjFweCBzb2xpZCAjNzg5MDljO1xuXG5oZWlnaHQ6Y2FsYygxMDB2aCAtIDIwcHgpO1xub3ZlcmZsb3cteTpzY3JvbGw7XG5cbiAgLmNhcmQtb3V0ZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0ICFpbXBvcnRhbnQ7XG4gIH1cbn1cblxuLmJvdHRvbS1kcmF3ZXIuc2hvd257XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDApO1xufVxuXG4uYm90dG9tLWRyYXdlci5oaWRkZW57XG4gIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDMwMHB4KTtcbn1cblxuLmNhcmQtdmlldy1tb2RhbHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6MDtcbiAgbGVmdDowO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNik7XG4gIHRyYW5zaXRpb246MzAwbXM7XG4gIG9wYWNpdHk6MTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDo5OTk5O1xufVxuXG4uY2FyZC12aWV3LW1vZGFsLmhpZGRlbntcbiAgb3BhY2l0eTowO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jbG9zZS1jYXJkLW1vZGFse1xuICB3aWR0aDo1MHB4O1xuICBoZWlnaHQ6NTBweDtcbiAgZm9udC1zaXplOjJlbTtcbiAgZGlzcGxheTpmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICB0ZXh0LWFsaWduOmNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czoxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xuICBib3JkZXI6NXB4IHNvbGlkIHdoaXRlO1xuICBjb2xvcjp3aGl0ZTtcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIHRvcDo1MHB4O1xuICByaWdodDo1MHB4O1xufVxuXG4ubWFpbntcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHdpZHRoOjEwMHZ3O1xuICBoZWlnaHQ6MTAwdmg7XG4gIHRvcDowO1xuICBsZWZ0OjA7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbip7XG4gIGN1cnNvcjp1cmwoL2Fzc2V0cy9pY29ucy9jdXJzb3IucG5nKSwgYXV0bztcbn1cbi5tYWluLmN1cnNvci0we1xuICBjdXJzb3I6dXJsKC9hc3NldHMvaWNvbnMvY3Vyc29yLnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItMXtcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci0xLnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItMntcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci0yLnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItM3tcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci0zLnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItNHtcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci00LnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItNXtcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci01LnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItNntcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci02LnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItN3tcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci03LnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItOHtcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci04LnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItOXtcbiAgY3Vyc29yOnVybCgvYXNzZXRzL2ljb25zL2N1cnNvci05LnBuZyksIGF1dG87XG59XG4ubWFpbi5jdXJzb3ItcGx1cy05e1xuICBjdXJzb3I6dXJsKC9hc3NldHMvaWNvbnMvY3Vyc29yLXBsdXMtOS5wbmcpLCBhdXRvO1xufVxuXG4udXNlci1jYXJke1xuICB6LWluZGV4Ojk5OTtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgzOCwgNTAsIDU2LCAwLjk1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4OTA5YztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDdkOGI7XG4gIHBhZGRpbmc6MTBweDtcbiAgZGlzcGxheTpmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczpjZW50ZXI7XG59XG5cbi51c2VyLWNhcmQtYmx1ZXtcbiAgdG9wOjEwcHg7XG4gIGxlZnQ6MTBweDtcbn1cblxuLnVzZXItY2FyZC1yZWR7XG4gIHRvcDoxMHB4O1xuICByaWdodDoxMHB4O1xufVxuXG5hcHAtcHJvZmlsZSB7XG4gIHdpZHRoOjEwMCU7XG59XG5cbi52aWV3LWRlY2t7XG4gIHdpZHRoOjEwMCU7XG4gIGRpc3BsYXk6ZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOmNlbnRlcjtcbn1cblxuXG4ubWluaW1pemVke1xuXG59XG5cbi5ib3R0b20tZHJhd2VyLmZ1bGx7XG4gIHRvcDoxMHB4O1xufVxuXG5cbi50dXRvcmlhbHtcbiAgd2lkdGg6MTAwdnc7XG4gIGhlaWdodDoxMDB2aDtcbiAgei1pbmRleDo5OTk5OTk5O1xuICBwb3NpdGlvbjpmaXhlZDtcbiAgdG9wOjA7XG4gIGxlZnQ6MDtcblxufVxuXG4udHV0b3JpYWwtcG9pbnRlcntcbiAgcG9zaXRpb246YWJzb2x1dGU7XG59XG5cbi50dXRvcmlhbC1zcXVhcmV7XG4gIHdpZHRoOjE1MHB4O1xuICBoZWlnaHQ6MTUwcHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czoxMHB4O1xufVxuIiwiLmxlZnQtZHJhd2VyIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMzAwcHg7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgcGFkZGluZzogMTBweDtcbiAgei1pbmRleDogNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0LWRyYXdlci5zaG93biB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbn1cblxuLmxlZnQtZHJhd2VyLmhpZGRlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpO1xufVxuXG4udG9nZ2xlLWJ1dHRvbiB7XG4gIHdpZHRoOiAzMHB4O1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4ubGVmdC1kcmF3ZXIgLnRvZ2dsZS1idXR0b24ge1xuICByaWdodDogLTQwcHg7XG4gIHRvcDogNDBweDtcbiAgdG9wOiAwO1xufVxuXG4uYm90dG9tLWRyYXdlciAudG9nZ2xlLWJ1dHRvbiB7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiBjYWxjKDUwdncgLSAxNXB4KTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmNlbnRyYWwtZHJhd2VyIHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLypvdmVyZmxvdzpzY3JvbGw7Ki9cbn1cblxuLnJpZ2h0LWRyYXdlciB7XG4gIHdpZHRoOiA1MDBweDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuLmJvdHRvbS1kcmF3ZXIge1xuICB0cmFuc2l0aW9uOiA1MDBtcztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogOTAwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG4gIHRvcDogMTEwdmg7XG4gIGxlZnQ6IGNhbGMoNTB2dyAtIDQ1MHB4KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNywgNDgsIDU0LCAwLjYpO1xuICBib3JkZXI6IDFweCBzb2xpZCAjNzg5MDljO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMHB4KTtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuLmJvdHRvbS1kcmF3ZXIgLmNhcmQtb3V0ZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQgIWltcG9ydGFudDtcbn1cblxuLmJvdHRvbS1kcmF3ZXIuc2hvd24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG59XG5cbi5ib3R0b20tZHJhd2VyLmhpZGRlbiB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgzMDBweCk7XG59XG5cbi5jYXJkLXZpZXctbW9kYWwge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB0cmFuc2l0aW9uOiAzMDBtcztcbiAgb3BhY2l0eTogMTtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuLmNhcmQtdmlldy1tb2RhbC5oaWRkZW4ge1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5jbG9zZS1jYXJkLW1vZGFsIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICBib3JkZXI6IDVweCBzb2xpZCB3aGl0ZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTBweDtcbiAgcmlnaHQ6IDUwcHg7XG59XG5cbi5tYWluIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4qIHtcbiAgY3Vyc29yOiB1cmwoL2Fzc2V0cy9pY29ucy9jdXJzb3IucG5nKSwgYXV0bztcbn1cblxuLm1haW4uY3Vyc29yLTAge1xuICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb25zL2N1cnNvci5wbmcpLCBhdXRvO1xufVxuXG4ubWFpbi5jdXJzb3ItMSB7XG4gIGN1cnNvcjogdXJsKC9hc3NldHMvaWNvbnMvY3Vyc29yLTEucG5nKSwgYXV0bztcbn1cblxuLm1haW4uY3Vyc29yLTIge1xuICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb25zL2N1cnNvci0yLnBuZyksIGF1dG87XG59XG5cbi5tYWluLmN1cnNvci0zIHtcbiAgY3Vyc29yOiB1cmwoL2Fzc2V0cy9pY29ucy9jdXJzb3ItMy5wbmcpLCBhdXRvO1xufVxuXG4ubWFpbi5jdXJzb3ItNCB7XG4gIGN1cnNvcjogdXJsKC9hc3NldHMvaWNvbnMvY3Vyc29yLTQucG5nKSwgYXV0bztcbn1cblxuLm1haW4uY3Vyc29yLTUge1xuICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb25zL2N1cnNvci01LnBuZyksIGF1dG87XG59XG5cbi5tYWluLmN1cnNvci02IHtcbiAgY3Vyc29yOiB1cmwoL2Fzc2V0cy9pY29ucy9jdXJzb3ItNi5wbmcpLCBhdXRvO1xufVxuXG4ubWFpbi5jdXJzb3ItNyB7XG4gIGN1cnNvcjogdXJsKC9hc3NldHMvaWNvbnMvY3Vyc29yLTcucG5nKSwgYXV0bztcbn1cblxuLm1haW4uY3Vyc29yLTgge1xuICBjdXJzb3I6IHVybCgvYXNzZXRzL2ljb25zL2N1cnNvci04LnBuZyksIGF1dG87XG59XG5cbi5tYWluLmN1cnNvci05IHtcbiAgY3Vyc29yOiB1cmwoL2Fzc2V0cy9pY29ucy9jdXJzb3ItOS5wbmcpLCBhdXRvO1xufVxuXG4ubWFpbi5jdXJzb3ItcGx1cy05IHtcbiAgY3Vyc29yOiB1cmwoL2Fzc2V0cy9pY29ucy9jdXJzb3ItcGx1cy05LnBuZyksIGF1dG87XG59XG5cbi51c2VyLWNhcmQge1xuICB6LWluZGV4OiA5OTk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzOCwgNTAsIDU2LCAwLjk1KTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzc4OTA5YztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM2MDdkOGI7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udXNlci1jYXJkLWJsdWUge1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDEwcHg7XG59XG5cbi51c2VyLWNhcmQtcmVkIHtcbiAgdG9wOiAxMHB4O1xuICByaWdodDogMTBweDtcbn1cblxuYXBwLXByb2ZpbGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnZpZXctZGVjayB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJvdHRvbS1kcmF3ZXIuZnVsbCB7XG4gIHRvcDogMTBweDtcbn1cblxuLnR1dG9yaWFsIHtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICB6LWluZGV4OiA5OTk5OTk5O1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLnR1dG9yaWFsLXBvaW50ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi50dXRvcmlhbC1zcXVhcmUge1xuICB3aWR0aDogMTUwcHg7XG4gIGhlaWdodDogMTUwcHg7XG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4IHdoaXRlKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/battlefield/battlefield.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/battlefield/battlefield.page.ts ***!
    \*******************************************************/

  /*! exports provided: BattlefieldPage */

  /***/
  function srcAppPagesBattlefieldBattlefieldPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BattlefieldPage", function () {
      return BattlefieldPage;
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


    var _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/dice-guardians-module.service */
    "./src/app/services/dice-guardians-module.service.ts");

    var BattlefieldPage = /*#__PURE__*/function () {
      function BattlefieldPage(lib) {
        var _this = this;

        _classCallCheck(this, BattlefieldPage);

        this.leftToggleName = 'arrow-back-outline';
        this.leftDrawerClass = 'shown';
        this.bottomToggleName = 'arrow-down-outline';
        this.bottomDrawerClass = 'shown';
        this.tutorialPointerStyle = '';
        this.tutorialParentStyle = '';
        this.lib = lib;
        var self = this;
        this.lib.board.events.on('tutorial', function (payload) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (payload['pointerStyle']) {
                      self.tutorialPointerStyle = payload.pointerStyle;
                    }

                    if (payload['parentStyle']) {
                      self.tutorialParentStyle = payload.parentStyle;
                    }

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        });
      }

      _createClass(BattlefieldPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggle",
        value: function toggle(panel) {
          switch (panel) {
            case 'left':
              if (this.leftToggleName === 'arrow-forward-outline') {
                // was collapsed
                this.leftToggleName = 'arrow-back-outline';
                this.leftDrawerClass = 'shown';
              } else {
                this.leftToggleName = 'arrow-forward-outline';
                this.leftDrawerClass = 'hidden';
              }

              break;

            case 'bottom':
              if (this.bottomToggleName === 'arrow-up-outline') {
                // was collapsed
                this.bottomToggleName = 'arrow-down-outline';
                this.bottomDrawerClass = 'shown';
              } else {
                this.bottomToggleName = 'arrow-up-outline';
                this.bottomDrawerClass = 'hidden';
              }

              break;

            default:
              throw new Error('Unrecognized toggle target `' + panel + '`');
          }
        }
      }]);

      return BattlefieldPage;
    }();

    BattlefieldPage.ctorParameters = function () {
      return [{
        type: _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_2__["DiceGuardiansModuleService"]
      }];
    };

    BattlefieldPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-battlefield',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./battlefield.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/battlefield/battlefield.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./battlefield.page.scss */
      "./src/app/pages/battlefield/battlefield.page.scss"))["default"]]
    })], BattlefieldPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-battlefield-battlefield-module-es5.js.map