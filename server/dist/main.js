"use strict";
(self["webpackChunksnack"] = self["webpackChunksnack"] || []).push([["main"],{

/***/ 5225:
/*!**********************************************!*\
  !*** ./src/app/root-module/app.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/header/header.component */ 9710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/footer/footer.component */ 9116);




class AppComponent {
    constructor() {
        this.title = 'snack';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "app-footer");
    } }, directives: [_shared_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6267:
/*!*******************************************!*\
  !*** ./src/app/root-module/app.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 5225);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 5349);
/* harmony import */ var _routes_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/routes */ 3880);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/interceptors/auth.interceptor */ 3459);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3598);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 4933);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);













class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HTTP_INTERCEPTORS, useClass: _shared_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_3__.AuthInterceptor, multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forRoot(_routes_routes__WEBPACK_IMPORTED_MODULE_2__.ROUTES, { scrollPositionRestoration: 'top' }),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('ngsw-worker.js', {
                enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.production,
                // Register the ServiceWorker as soon as the app is stable
                // or after 30 seconds (whichever comes first).
                registrationStrategy: 'registerWhenStable:10000'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule] }); })();


/***/ }),

/***/ 3880:
/*!**********************************************!*\
  !*** ./src/app/root-module/routes/routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ROUTES": () => (/* binding */ ROUTES)
/* harmony export */ });
const ROUTES = [
    {
        path: '', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_alert_service_ts-src_app_shared_services_cart_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../home/home.module */ 2711)).then(m => m.HomeModule)
    },
    {
        path: 'confirm', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_alert_service_ts-src_app_shared_services_cart_service_ts"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../home/home.module */ 2711)).then(m => m.HomeModule)
    },
    {
        path: 'profil', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_shared_services_alert_service_ts-src_app_shared_services_cart_service_ts"), __webpack_require__.e("src_app_features_user_user_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../features/user/user.module */ 6114))
            .then(m => m.UserModule)
    },
    {
        path: 'page-menu', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_carte-panier_carte-panier_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../features/carte-panier/carte-panier.module */ 6302))
            .then(m => m.CartePanierModule)
    },
    {
        path: 'admin', loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_features_admin_admin_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../../features/admin/admin.module */ 5444))
            .then(m => m.AdminModule)
    },
    {
        path: '**', redirectTo: ''
    }
];


/***/ }),

/***/ 8662:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/loader/loader.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoaderComponent": () => (/* binding */ LoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);


class LoaderComponent {
    constructor() {
        this.diameter = 300;
    }
    ngOnInit() {
        if (window.innerWidth < 600) {
            this.diameter = 200;
        }
    }
}
LoaderComponent.ɵfac = function LoaderComponent_Factory(t) { return new (t || LoaderComponent)(); };
LoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoaderComponent, selectors: [["app-loader"]], decls: 2, vars: 1, consts: [[1, "flex-center", "flex-col", "vh-75"], ["color", "primary", "mode", "indeterminate", 3, "diameter"]], template: function LoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-spinner", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("diameter", ctx.diameter);
    } }, directives: [_angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_1__.MatSpinner], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9116:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 25, vars: 0, consts: [[1, "success"], [1, "d-flex"], ["routerLink", "/admin", 1, "logo-container"], ["src", "../../assets/tacos.png", "alt", "logo tacos", 1, "logo"], [1, "flex-center"], [1, "lien"], [1, "bi", "bi-facebook"], [1, "bi", "bi-instagram"], [1, "bi", "bi-twitter"], [1, "divider"], [1, "container", "flex-center"], [1, "list"], [1, "list-item"], [1, "bi", "bi-house"], [1, "bi", "bi-telephone"], [1, "bi", "bi-envelope"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "hr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " 25 avenue de Montmartre ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "75000 Paris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " 07.72.11.12.99");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "tacosparisien@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["@media screen and (max-width:550px) {\n\ni[_ngcontent-%COMP%]{\n    color: var(--warning);\n    font-size: 30px;\n    margin-right: 10px;\n}\n.lien[_ngcontent-%COMP%]{\n    margin-left: 10px;\n}\nfooter[_ngcontent-%COMP%]{\n    padding: 20px 0;\n}\n.list[_ngcontent-%COMP%]{\n    padding: 10px;\n    margin-top: 15px;\n}\n.list-item[_ngcontent-%COMP%]{\n    margin-bottom: 15px;\n    font-size: 25px;\n\n}\n.logo-container[_ngcontent-%COMP%]{\n    padding-left: 15px;\n}\nul[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\n    font-size: 25px;\n    margin-right: 10px;\n}\n.flex-center[_ngcontent-%COMP%]{\n    padding-left: 20px;\n    margin-left: 15px;\n}\n}\n@media screen and (min-width:550px) {\n    \n    .d-flex[_ngcontent-%COMP%]{\n        justify-content: space-between;\n    }\n    .logo-container[_ngcontent-%COMP%]{\n        padding: 20px;\n    }\n    .lien[_ngcontent-%COMP%]{\n        font-size: 50px;\n        margin: 0 15px;\n    }\n    .container.flex-center[_ngcontent-%COMP%]{\n        justify-content: start;\n        width:calc(100% - 40px);\n        padding: 20px;\n    }\n    .list[_ngcontent-%COMP%]{\n        font-size: 40px;\n    }\n    li[_ngcontent-%COMP%]{\n        margin-top: 25px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7QUFDQTtBQUNBOztJQUVJO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsY0FBYztJQUNsQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLHVCQUF1QjtRQUN2QixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7QUFDSiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6NTUwcHgpIHtcblxuaXtcbiAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5saWVue1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuZm9vdGVye1xuICAgIHBhZGRpbmc6IDIwcHggMDtcbn1cbi5saXN0e1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLXRvcDogMTVweDtcbn1cbi5saXN0LWl0ZW17XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG5cbn1cbi5sb2dvLWNvbnRhaW5lcntcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG51bCBpe1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4uZmxleC1jZW50ZXJ7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NTBweCkge1xuICAgIFxuICAgIC5kLWZsZXh7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG4gICAgLmxvZ28tY29udGFpbmVye1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgIH1cbiAgICAubGllbntcbiAgICAgICAgZm9udC1zaXplOiA1MHB4O1xuICAgICAgICBtYXJnaW46IDAgMTVweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lci5mbGV4LWNlbnRlcntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgd2lkdGg6Y2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgfVxuICAgIC5saXN0e1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICAgIGxpe1xuICAgICAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 9710:
/*!***************************************************!*\
  !*** ./src/app/shared/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 1631);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/user.service */ 8736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);





function HeaderComponent_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cr\u00E9er un compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_9_Template_li_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mon profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_19_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_19_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.toggleMenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_20_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_20_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.toggleMenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Cr\u00E9er un compte");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_21_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_21_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); ctx_r14.toggleMenu($event); return ctx_r14.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Se d\u00E9connecter");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HeaderComponent_li_22_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_li_22_Template_li_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r16.toggleMenu($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Mon profil");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class HeaderComponent {
    constructor(userService) {
        this.userService = userService;
        this.state = 'close';
        this.state2 = 'none';
        this.openMenu = false;
        this.isAuth = false;
    }
    ngOnInit() {
        window.addEventListener('click', (e) => {
            e.stopPropagation();
            this.closeMenu();
        });
        this.subcription = this.userService.jwtToken$.subscribe((jwtToken) => {
            this.isAuth = jwtToken.isAuth;
        });
    }
    closeMenu() {
        if (this.state === 'open') {
            this.state = 'close';
            this.state2 = 'none';
            this.openMenu = false;
        }
        else {
            return;
        }
    }
    toggleMenu($event) {
        $event.stopPropagation();
        this.openMenu = !this.openMenu;
        if (this.state === 'close' && this.state2 === 'none') {
            this.state = 'open';
            this.state2 = 'flex';
        }
        else if (this.state === 'open' && this.state2 === 'flex') {
            this.state = 'close';
            this.state2 = 'none';
        }
    }
    logout() {
        this.userService.logout();
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 29, vars: 10, consts: [[1, "success", "w-100", "d-flex"], [1, "brand"], ["src", "../../assets/tacos.png", "alt", "logo_tacos", "routerLink", "/", 1, "logo"], [1, "btn", "success", 3, "click"], [1, "bi", "bi-list"], [1, "laptop-nav-menu", "flex-center"], [1, "d-flex"], ["routerLink", "login", "class", "mobile-menu-item", 4, "ngIf"], ["routerLink", "signup", "class", "mobile-menu-item", 4, "ngIf"], ["routerLink", "/", "class", "mobile-menu-item", 3, "click", 4, "ngIf"], ["routerLink", "/profil", "class", "mobile-menu-item", 4, "ngIf"], ["routerLink", "/contact", 1, "mobile-menu-item"], ["routerLink", "/certification", 1, "mobile-menu-item"], ["routerLink", "/page-menu/panier", 1, "mobile-menu-item"], [1, "modile-nav-menu", "flex-center"], ["routerLink", "login", "class", "mobile-menu-item", 3, "click", 4, "ngIf"], ["routerLink", "signup", "class", "mobile-menu-item", 3, "click", 4, "ngIf"], ["routerLink", "/profil", "class", "mobile-menu-item", 3, "click", 4, "ngIf"], ["routerLink", "contact", 1, "mobile-menu-item", 3, "click"], ["routerLink", "certification", 1, "mobile-menu-item", 3, "click"], ["routerLink", "login", 1, "mobile-menu-item"], ["routerLink", "signup", 1, "mobile-menu-item"], ["routerLink", "/", 1, "mobile-menu-item", 3, "click"], ["routerLink", "/profil", 1, "mobile-menu-item"], ["routerLink", "login", 1, "mobile-menu-item", 3, "click"], ["routerLink", "signup", 1, "mobile-menu-item", 3, "click"], ["routerLink", "/profil", 1, "mobile-menu-item", 3, "click"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_3_listener($event) { return ctx.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, HeaderComponent_li_7_Template, 2, 0, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, HeaderComponent_li_8_Template, 2, 0, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, HeaderComponent_li_9_Template, 2, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, HeaderComponent_li_10_Template, 2, 0, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Nous contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Votre Panier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HeaderComponent_li_19_Template, 2, 0, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HeaderComponent_li_20_Template, 2, 0, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, HeaderComponent_li_21_Template, 2, 0, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, HeaderComponent_li_22_Template, 2, 0, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_23_listener($event) { return ctx.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Nous contacter");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "li", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HeaderComponent_Template_li_click_25_listener($event) { return ctx.toggleMenu($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Certifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Votre Panier");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@menu-mobile", ctx.state);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@list", ctx.state2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isAuth);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["@media screen and (max-width:804px) {\n \n    .brand[_ngcontent-%COMP%]{\n        padding: 10px;\n        cursor: pointer;\n    }\n    .logo[_ngcontent-%COMP%]{\n        width: 80px;\n        border-radius: 50%;\n    }\n    i[_ngcontent-%COMP%]{\n        font-size: 40px;\n    }\n    .btn[_ngcontent-%COMP%]{\n        margin-left: auto;\n    }\n    .modile-nav-menu[_ngcontent-%COMP%]{\n        background: var(--success);\n        width: 100%;\n        position: fixed;\n        padding: 20px;\n        flex-direction: column;\n        list-style: none;\n        z-index: 1;\n    }\n    .mobile-menu-item[_ngcontent-%COMP%]{\n        font-size:35px;\n        letter-spacing: 3px;\n        margin-bottom: 15px;\n        color: var(--warning);\n    }\n    .laptop-nav-menu[_ngcontent-%COMP%]{\n        display: none;\n    }\n}\n@media  screen and (min-width:805px) {\n    header[_ngcontent-%COMP%]{\n        justify-content: space-around;\n        padding: 20px;\n        width: calc(100% - 40px);\n    }\n    .laptop-nav-menu[_ngcontent-%COMP%]{\n       font-size: 35px;\n    }\n    li[_ngcontent-%COMP%]{\n        margin: 0 20px;\n        cursor: pointer;\n    }\n    .btn[_ngcontent-%COMP%]{\n        display: none;\n    }\n    .brand[_ngcontent-%COMP%]{\n        margin-right: 25px;\n        cursor: pointer;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTs7SUFFSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLDBCQUEwQjtRQUMxQixXQUFXO1FBQ1gsZUFBZTtRQUNmLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksY0FBYztRQUNkLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIscUJBQXFCO0lBQ3pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0FBQ0o7QUFDQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLGFBQWE7UUFDYix3QkFBd0I7SUFDNUI7SUFDQTtPQUNHLGVBQWU7SUFDbEI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjgwNHB4KSB7XG4gXG4gICAgLmJyYW5ke1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5sb2dve1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIH1cbiAgICBpe1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICAgIC5idG57XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cbiAgICAubW9kaWxlLW5hdi1tZW51e1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWNjZXNzKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICB9XG4gICAgLm1vYmlsZS1tZW51LWl0ZW17XG4gICAgICAgIGZvbnQtc2l6ZTozNXB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgfVxuICAgIC5sYXB0b3AtbmF2LW1lbnV7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuQG1lZGlhICBzY3JlZW4gYW5kIChtaW4td2lkdGg6ODA1cHgpIHtcbiAgICBoZWFkZXJ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgfVxuICAgIC5sYXB0b3AtbmF2LW1lbnV7XG4gICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgIH1cbiAgICBsaXtcbiAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmJ0bntcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLmJyYW5ke1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59Il19 */"], data: { animation: [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('menu-mobile', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    height: '0px',
                    padding: '0px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    height: '180px',
                    padding: '20px',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('close => open', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(800)),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('open => close', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(200)),
            ]),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('list', [
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('none', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    display: 'none',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('flex', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
                    display: 'block',
                })),
                (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('none=>flex', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)(1000)),
            ]),
        ] } });


/***/ }),

/***/ 3459:
/*!*********************************************************!*\
  !*** ./src/app/shared/interceptors/auth.interceptor.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthInterceptor": () => (/* binding */ AuthInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class AuthInterceptor {
    constructor() { }
    intercept(request, next) {
        const token = localStorage.getItem('token');
        if (token) {
            const req = request.clone({
                headers: request.headers.set('authorization', token)
            });
            return next.handle(req);
        }
        else {
            return next.handle(request);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });


/***/ }),

/***/ 8736:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserService": () => (/* binding */ UserService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4139);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 8759);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 8784);





class UserService {
    constructor(http) {
        this.http = http;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subscription();
        this.currentUser$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.jwtToken$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({ token: null, isAuth: null });
        this.subscription = this.http.get(this.api + `users/verif-token`).subscribe((response) => {
            if (response.status === 200) {
                this.jwtToken$.next({
                    token: response.token,
                    isAuth: true
                });
                const user = {
                    email: response.user.local.email,
                    name: response.user.name,
                    adress: response.user.adress,
                    firstname: response.user.firstname,
                    role: response.user.role,
                    confirm: response.user.confirm,
                    _id: response.user._id,
                    commandes: response.user.commandes
                };
                this.currentUser$.next(user);
                localStorage.setItem('token', response.token);
                this.subscription.unsubscribe();
            }
            else {
                this.jwtToken$.next({
                    token: null,
                    isAuth: false
                });
                localStorage.removeItem('token');
                this.subscription.unsubscribe();
            }
        });
    }
    signup(body) {
        return new Promise((resolve, reject) => {
            this.http.post(this.api + 'users/new', body).subscribe((response) => {
                if (response.status === 200) {
                    const bodyLogin = { email: body.email, password: body.password };
                    this.login(bodyLogin).then((res) => {
                        console.log('isLoggedIn');
                    });
                    resolve(response.message);
                }
                else {
                    reject(response.error);
                }
            }, (err) => {
                console.log(err);
            });
        });
    }
    login(body) {
        return new Promise((resolve, reject) => {
            this.http.post(this.api + 'users/connection', body).subscribe((response) => {
                if (response.status === 200) {
                    this.jwtToken$.next({
                        token: response.token,
                        isAuth: true
                    });
                    if (response.user) {
                        const user = {
                            email: response.user.local.email,
                            name: response.user.name,
                            adress: response.user.adress,
                            firstname: response.user.firstname,
                            role: response.user.role,
                            confirm: response.user.confirm,
                            _id: response.user._id,
                            commandes: response.user.commandes
                        };
                        this.currentUser$.next(user);
                        localStorage.setItem('user', JSON.stringify(user));
                    }
                    localStorage.setItem('token', response.token);
                    resolve(true);
                }
                else if (response.status === 404) {
                    console.log('resolve 404');
                    reject("L'email est incorrect");
                }
                else if (response.status === 401) {
                    console.log('resolve 401');
                    reject('Le mot de passe est incorrect');
                }
            }, (err) => {
                console.log(err);
            });
        });
    }
    confirmAccount(id) {
        return this.http.get(this.api + `users/confirm/${id}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            if (response.status === 200) {
                return true;
            }
            else {
                return false;
            }
        }));
    }
    verifEmail(email) {
        return new Promise((resolve, reject) => {
            this.http.post(this.api + 'users/verif-email', email).subscribe((response) => {
                if (response.status === 200) {
                    resolve(true);
                }
                else {
                    reject('Il y a déjà un compte avec cet e-mail');
                }
            }, (err) => {
                console.log(err);
            });
        });
    }
    saveUserInfos() {
        localStorage.removeItem('userInfos');
    }
    logout() {
        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('cart');
        this.subscription.unsubscribe();
        this.jwtToken$.next({
            isAuth: false,
            token: null
        });
        this.currentUser$.next(null);
    }
    updateOneField(id, fieldName, body) {
        return new Promise((resolve, reject) => {
            this.http
                .post(this.api + 'users/update/' + `${fieldName}` + '/' + id, body)
                .subscribe((response) => {
                if (response.status === 200) {
                    if (response.message) {
                        if (response.status === 200) {
                            this.saveUserInfos();
                            resolve(response);
                            return;
                        }
                        else if (response.status === 403) {
                            reject(response.message);
                            return;
                        }
                    }
                    this.saveUserInfos();
                    resolve(response);
                }
                else {
                    reject(response.message);
                    console.log(response);
                }
            });
        });
    }
    getCurrentUser() {
        if (this.currentUser$.value) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(this.currentUser$.value);
        }
        else {
            return this.http.get(this.api + "users/infos-user").pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.tap)((response) => {
                if (response.status === 200) {
                    const email = response.result.local.email;
                    delete response.result.local;
                    const user = {
                        email: email,
                        _id: response.result._id,
                        confirm: response.result.confirm,
                        adress: response.result.adress,
                        firstname: response.result.firstname,
                        name: response.result.name,
                        role: response.result.role,
                        commandes: response.result.commandes
                    };
                    this.currentUser$.next(user);
                }
                else {
                    this.currentUser$.next(null);
                }
            }));
        }
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClient)); };
UserService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5349:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer/footer.component */ 9116);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header/header.component */ 9710);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/loader/loader.component */ 8662);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);









class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule
        ], _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule], exports: [_footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent,
        _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_8__.MatProgressSpinnerModule,
        _components_loader_loader_component__WEBPACK_IMPORTED_MODULE_2__.LoaderComponent] }); })();


/***/ }),

/***/ 4766:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    API: 'https://localhost:3001/api/',
    SECRET_JWT: '5gyhrr8558F5LOP5fd52f',
    PAYPAL_ID_CLIENT: 'AZXYHwsk_fpW7ib-Wo7iVB9HwsSwCD0CvzwaMHZ5egZsaQf1G91jWtZ4oOUz3GRG_251hbH26l9G7fYB',
    CURRENCY: 'EUR'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 8835:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_root_module_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/root-module/app.module */ 6267);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4766);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_root_module_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(8835)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map