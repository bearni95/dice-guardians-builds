(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-lounge-lounge-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lounge/lounge.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lounge/lounge.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>lounge</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/lounge/lounge-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/lounge/lounge-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LoungePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoungePageRoutingModule", function() { return LoungePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lounge_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lounge.page */ "./src/app/pages/lounge/lounge.page.ts");




const routes = [
    {
        path: '',
        component: _lounge_page__WEBPACK_IMPORTED_MODULE_3__["LoungePage"]
    }
];
let LoungePageRoutingModule = class LoungePageRoutingModule {
};
LoungePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoungePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/lounge/lounge.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/lounge/lounge.module.ts ***!
  \***********************************************/
/*! exports provided: LoungePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoungePageModule", function() { return LoungePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _lounge_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lounge-routing.module */ "./src/app/pages/lounge/lounge-routing.module.ts");
/* harmony import */ var _lounge_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lounge.page */ "./src/app/pages/lounge/lounge.page.ts");







let LoungePageModule = class LoungePageModule {
};
LoungePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _lounge_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoungePageRoutingModule"]
        ],
        declarations: [_lounge_page__WEBPACK_IMPORTED_MODULE_6__["LoungePage"]]
    })
], LoungePageModule);



/***/ }),

/***/ "./src/app/pages/lounge/lounge.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/lounge/lounge.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvdW5nZS9sb3VuZ2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/lounge/lounge.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/lounge/lounge.page.ts ***!
  \*********************************************/
/*! exports provided: LoungePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoungePage", function() { return LoungePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/dice-guardians-module.service */ "./src/app/services/dice-guardians-module.service.ts");



let LoungePage = class LoungePage {
    constructor(lib) {
        this.lib = lib;
    }
    ngOnInit() {
    }
};
LoungePage.ctorParameters = () => [
    { type: _services_dice_guardians_module_service__WEBPACK_IMPORTED_MODULE_2__["DiceGuardiansModuleService"] }
];
LoungePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lounge',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lounge.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lounge/lounge.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lounge.page.scss */ "./src/app/pages/lounge/lounge.page.scss")).default]
    })
], LoungePage);



/***/ })

}]);
//# sourceMappingURL=pages-lounge-lounge-module-es2015.js.map