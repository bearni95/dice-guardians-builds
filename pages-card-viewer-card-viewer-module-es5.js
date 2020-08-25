function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-card-viewer-card-viewer-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-viewer/card-viewer.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-viewer/card-viewer.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCardViewerCardViewerPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Dice Guardians - Card Viewer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"grid\">\n    <app-card\n      *ngIf=\"isSingleCard\"\n      [width]=\"getFullscreenWidth()\"\n      [card]=\"getCard()\"\n      [board]=\"lib.board\"\n      [player]=\"lib.board.players.red\"\n    ></app-card>\n    <ion-button *ngIf=\"isSingleCard\" color=\"primary\" (click)=\"viewAll()\" class=\"view-all\">View All</ion-button>\n\n    <app-card\n      *ngFor=\"let card of this.cards\"\n      [width]=\"300\"\n      [card]=\"card\"\n      (click)=\"viewCard(card)\"\n      [board]=\"lib.board\"\n      [player]=\"lib.board.players.red\"\n    ></app-card>\n  </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/card-viewer/card-viewer-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/card-viewer/card-viewer-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: CardViewerPageRoutingModule */

  /***/
  function srcAppPagesCardViewerCardViewerRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardViewerPageRoutingModule", function () {
      return CardViewerPageRoutingModule;
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


    var _card_viewer_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./card-viewer.page */
    "./src/app/pages/card-viewer/card-viewer.page.ts");

    var routes = [{
      path: '',
      component: _card_viewer_page__WEBPACK_IMPORTED_MODULE_3__["CardViewerPage"]
    }];

    var CardViewerPageRoutingModule = function CardViewerPageRoutingModule() {
      _classCallCheck(this, CardViewerPageRoutingModule);
    };

    CardViewerPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CardViewerPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/card-viewer/card-viewer.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/card-viewer/card-viewer.module.ts ***!
    \*********************************************************/

  /*! exports provided: CardViewerPageModule */

  /***/
  function srcAppPagesCardViewerCardViewerModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardViewerPageModule", function () {
      return CardViewerPageModule;
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


    var _card_viewer_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./card-viewer-routing.module */
    "./src/app/pages/card-viewer/card-viewer-routing.module.ts");
    /* harmony import */


    var _card_viewer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./card-viewer.page */
    "./src/app/pages/card-viewer/card-viewer.page.ts");
    /* harmony import */


    var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../components/components.module */
    "./src/app/components/components.module.ts");

    var CardViewerPageModule = function CardViewerPageModule() {
      _classCallCheck(this, CardViewerPageModule);
    };

    CardViewerPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _card_viewer_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardViewerPageRoutingModule"], _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_card_viewer_page__WEBPACK_IMPORTED_MODULE_6__["CardViewerPage"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], CardViewerPageModule);
    /***/
  },

  /***/
  "./src/app/pages/card-viewer/card-viewer.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/card-viewer/card-viewer.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCardViewerCardViewerPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  flex-wrap: wrap;\n}\n\n.view-all {\n  position: absolute;\n  top: 25px;\n  right: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tbnQvZC9Qcm9qZWN0cy9kaWNlLWd1YXJkaWFucy9hcHAvc3JjL2FwcC9wYWdlcy9jYXJkLXZpZXdlci9jYXJkLXZpZXdlci5wYWdlLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NhcmQtdmlld2VyL2NhcmQtdmlld2VyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJkLXZpZXdlci9jYXJkLXZpZXdlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZHtcclxuICBkaXNwbGF5OmZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgZmxleC13cmFwOndyYXA7XHJcbn1cclxuXHJcbi52aWV3LWFsbHtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB0b3A6MjVweDtcclxuICByaWdodDoyNXB4O1xyXG59XHJcbiIsIi5ncmlkIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnZpZXctYWxsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI1cHg7XG4gIHJpZ2h0OiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/card-viewer/card-viewer.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/card-viewer/card-viewer.page.ts ***!
    \*******************************************************/

  /*! exports provided: CardViewerPage */

  /***/
  function srcAppPagesCardViewerCardViewerPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardViewerPage", function () {
      return CardViewerPage;
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


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dice-guardians-module */
    "./dice-guardians-module/dist/index.js");
    /* harmony import */


    var dice_guardians_module__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/dice-guardians-module.service */
    "./src/app/services/dice-guardians-module.service.ts");

    var CardViewerPage = /*#__PURE__*/function () {
      function CardViewerPage(lib) {
        _classCallCheck(this, CardViewerPage);

        this.isSingleCard = true;
        this.cards = [];
        this.lib = lib;
      }

      _createClass(CardViewerPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var self = this;
          this.getCard();
          window.addEventListener('hashchange', function () {
            self.getCard();
          }, false);
        }
      }, {
        key: "getCard",
        value: function getCard() {
          var hash = window.location.hash.substr(1);
          var card = dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["cardCollection"][hash];
          this.cards = [];

          if (card) {
            this.isSingleCard = true;
            return card;
          } else {
            this.isSingleCard = false;
            var names = Object.keys(dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["cardCollection"]);

            for (var i = 0; i < names.length; i++) {
              this.cards.push(dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["cardCollection"][names[i]]);
            }

            return this.cards[0];
          }
        }
      }, {
        key: "viewCard",
        value: function viewCard(card) {
          var names = Object.keys(dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["cardCollection"]);

          for (var i = 0; i < names.length; i++) {
            var collectionCard = dice_guardians_module__WEBPACK_IMPORTED_MODULE_2__["cardCollection"][names[i]];
            console.log(card, collectionCard);

            if (collectionCard.title === card.title) {
              window.location.href = '/card-viewer#' + names[i]; //window.location.reload()
            }
          }
        }
      }, {
        key: "viewAll",
        value: function viewAll() {
          window.location.hash = ''; //window.location.reload()
        }
      }, {
        key: "getFullscreenWidth",
        value: function getFullscreenWidth() {
          var height = document.querySelector('.grid').clientHeight;
          return height / 1.5 - 50;
        }
      }]);

      return CardViewerPage;
    }();

    CardViewerPage.ctorParameters = function () {
      return [{
        type: _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_3__["DiceGuardiansModuleService"]
      }];
    };

    CardViewerPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-viewer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./card-viewer.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/card-viewer/card-viewer.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./card-viewer.page.scss */
      "./src/app/pages/card-viewer/card-viewer.page.scss"))["default"]]
    })], CardViewerPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-card-viewer-card-viewer-module-es5.js.map