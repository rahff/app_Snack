"use strict";
(self["webpackChunksnack"] = self["webpackChunksnack"] || []).push([["src_app_features_carte-panier_carte-panier_module_ts"],{

/***/ 8644:
/*!**************************************************************************!*\
  !*** ./src/app/features/carte-panier/carte-menu/carte-menu.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteMenuComponent": () => (/* binding */ CarteMenuComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/cart.service */ 6138);
/* harmony import */ var src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/product.service */ 9334);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _carte_carte_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./carte/carte.component */ 28);







function CarteMenuComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.nbrOfItem, " ");
} }
const _c0 = function () { return ["/page-menu/carte", 1]; };
const _c1 = function () { return ["/page-menu/carte", 2]; };
const _c2 = function () { return ["/page-menu/carte", 3]; };
const _c3 = function () { return ["/page-menu/carte", 4]; };
const _c4 = function () { return ["/page-menu/carte", 5]; };
const _c5 = function () { return ["/page-menu/carte", 6]; };
class CarteMenuComponent {
    constructor(cartService, productService, activatedRoute) {
        this.cartService = cartService;
        this.productService = productService;
        this.activatedRoute = activatedRoute;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        console.log('init carte-menu');
        this.activatedRoute.paramMap.subscribe((param) => {
            this.param = param.get('product');
        });
        this.subscription.add(this.cartService.cart$.subscribe((cart) => {
            if (cart) {
                this.nbrOfItem = cart.nbrOfItem;
            }
            else {
                this.cartService.emitCart();
            }
        }));
        this.subscription.add(this.productService.product$.subscribe((products) => {
            if (!products) {
                this.productService.getProductList();
            }
            else {
                this.productList = products;
                this.itemList = this.productList.filter(p => p.category === +this.param);
            }
        }));
    }
    changeProductList(index) {
        console.log(this.param);
        this.itemList = this.productList.filter(p => p.category === index);
        console.log(this.itemList);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CarteMenuComponent.ɵfac = function CarteMenuComponent_Factory(t) { return new (t || CarteMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_product_service__WEBPACK_IMPORTED_MODULE_1__.ProductService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
CarteMenuComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: CarteMenuComponent, selectors: [["app-carte-menu"]], decls: 22, vars: 14, consts: [[1, "container-fluid"], ["routerLink", "/page-menu/panier", 1, "panier"], ["routerLink", "/page-menu/panier", 1, "bi", "bi-bag"], ["class", "icon-panier", 4, "ngIf"], [1, "menu"], [1, "d-flex"], ["routerLinkActive", "active", 1, "nav-carte-item", 3, "routerLink", "click"], [3, "productList"], [1, "icon-panier"]], template: function CarteMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " Panier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, CarteMenuComponent_div_5_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarteMenuComponent_Template_li_click_8_listener() { return ctx.changeProductList(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Tacos");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarteMenuComponent_Template_li_click_10_listener() { return ctx.changeProductList(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Kebabs");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarteMenuComponent_Template_li_click_12_listener() { return ctx.changeProductList(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Burgers");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarteMenuComponent_Template_li_click_15_listener() { return ctx.changeProductList(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Boissons");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarteMenuComponent_Template_li_click_17_listener() { return ctx.changeProductList(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Dessert");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function CarteMenuComponent_Template_li_click_19_listener() { return ctx.changeProductList(6); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Plats");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "app-carte", 7);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.nbrOfItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("productList", ctx.itemList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _carte_carte_component__WEBPACK_IMPORTED_MODULE_2__.CarteComponent], styles: ["@media screen and (max-width:550px) {\n    header[_ngcontent-%COMP%]{\n        padding: 0px 15px;\n        color: var(--danger);\n        background: var(--warning);\n    }\n    .container-fluid[_ngcontent-%COMP%]{\n        justify-content: flex-end;\n    }\n    .menu[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n    }\n    .panier[_ngcontent-%COMP%]{\n        cursor: pointer;\n    }\n    ul[_ngcontent-%COMP%]{\n        padding: 0px 10px 20px;\n        justify-content: center;\n    }\n    li[_ngcontent-%COMP%]{\n        font-size: 25px;\n        margin-right: 25px;\n        padding: 10px;\n        border-radius: 30%;\n        letter-spacing: 2px;\n       \n    }\n    i[_ngcontent-%COMP%]{\n        font-size: 40px;\n        position: relative;\n    }\n    .active[_ngcontent-%COMP%]{\n        background-color: var(--danger);\n        color: var(--warning);\n    }\n}\n@media screen and (min-width:551px) {\n    header[_ngcontent-%COMP%]{\n        padding: 0px 15px;\n        color: var(--danger);\n        background: var(--warning);\n    }\n    .container-fluid[_ngcontent-%COMP%]{\n        justify-content: flex-end;\n        font-size: 40px;\n    }\n    .panier[_ngcontent-%COMP%]{\n        cursor: pointer;\n    }\n    .menu[_ngcontent-%COMP%]{\n        display: flex;\n        justify-content: space-around;\n        align-items: center;\n        flex-direction: column;\n        width: 100%;\n        height: 100%;\n    }\n    ul[_ngcontent-%COMP%]{\n        padding: 0px 10px 20px;\n        justify-content: space-between;\n        max-width: 550px;\n        margin: 0 auto;\n    }\n    li[_ngcontent-%COMP%]{\n        font-size: 35px;\n        margin-right: 25px;\n        padding: 10px;\n        border-radius: 30%;\n        letter-spacing: 2px;\n        cursor: pointer;\n        \n    }\n    i[_ngcontent-%COMP%]{\n        font-size: 60px;\n        position: relative;\n        cursor: pointer;\n    }\n    .active[_ngcontent-%COMP%]{\n        background-color: var(--danger);\n        color: var(--warning);\n    }\n    .icon-panier[_ngcontent-%COMP%]{\n        font-size: 32px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRlLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLG9CQUFvQjtRQUNwQiwwQkFBMEI7SUFDOUI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUJBQW1COztJQUV2QjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksK0JBQStCO1FBQy9CLHFCQUFxQjtJQUN6QjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixvQkFBb0I7UUFDcEIsMEJBQTBCO0lBQzlCO0lBQ0E7UUFDSSx5QkFBeUI7UUFDekIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDZCQUE2QjtRQUM3QixtQkFBbUI7UUFDbkIsc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCxZQUFZO0lBQ2hCO0lBQ0E7UUFDSSxzQkFBc0I7UUFDdEIsOEJBQThCO1FBQzlCLGdCQUFnQjtRQUNoQixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGVBQWU7O0lBRW5CO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLCtCQUErQjtRQUMvQixxQkFBcUI7SUFDekI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSiIsImZpbGUiOiJjYXJ0ZS1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KSB7XG4gICAgaGVhZGVye1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cbiAgICAubWVudXtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuICAgIC5wYW5pZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgdWx7XG4gICAgICAgIHBhZGRpbmc6IDBweCAxMHB4IDIwcHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgICBsaXtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDMwJTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgICAgICBcbiAgICB9XG4gICAgaXtcbiAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgfVxuICAgIC5hY3RpdmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjU1MXB4KSB7XG4gICAgaGVhZGVye1xuICAgICAgICBwYWRkaW5nOiAwcHggMTVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXdhcm5pbmcpO1xuICAgIH1cbiAgICAuY29udGFpbmVyLWZsdWlke1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgfVxuICAgIC5wYW5pZXJ7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLm1lbnV7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICB1bHtcbiAgICAgICAgcGFkZGluZzogMHB4IDEwcHggMjBweDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgbGl7XG4gICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzMCU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgXG4gICAgfVxuICAgIGl7XG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICAgIC5hY3RpdmV7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgICB9XG4gICAgLmljb24tcGFuaWVye1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 28:
/*!***************************************************************************!*\
  !*** ./src/app/features/carte-panier/carte-menu/carte/carte.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarteComponent": () => (/* binding */ CarteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/cart.service */ 6138);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function CarteComponent_div_1_div_7_li_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ingredient_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ingredient_r5, " ");
} }
function CarteComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_div_7_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r6.openerModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, CarteComponent_div_1_div_7_li_4_Template, 2, 1, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", product_r1.ingredients);
} }
function CarteComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_div_8_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r9.openerAddToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Quantit\u00E9");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_div_8_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r11.increment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_div_8_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return ctx_r12.decrement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_div_8_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const product_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.addToCart(product_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " Ajouter au Panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.nbr, " ");
} }
function CarteComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CarteComponent_div_1_div_7_Template, 5, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CarteComponent_div_1_div_8_Template, 17, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_Template_button_click_9_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const product_r1 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.openerModal(product_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Liste des Ingr\u00E9dients ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarteComponent_div_1_Template_button_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const product_r1 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.openerAddToCart(product_r1.name); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Ajouter au Panier ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", product_r1.price / 100, " \u20AC");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.openModal && ctx_r0.name === product_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.openAddToCart && ctx_r0.truc === product_r1.name);
} }
class CarteComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.openModal = false;
        this.openAddToCart = false;
        this.nbr = 1;
    }
    ngOnChanges() {
        this.itemList = this.productList;
    }
    ngOnInit() {
        console.log('init');
        console.log(this.itemList);
    }
    openerModal(name) {
        this.openModal = !this.openModal;
        this.name = name;
    }
    openerAddToCart(name) {
        this.openAddToCart = !this.openAddToCart;
        this.truc = name;
        this.nbr = 1;
    }
    addToCart(product) {
        const quantity = this.nbr;
        this.openerAddToCart();
        this.cartService.addToCart(product, quantity);
    }
    increment() {
        this.nbr++;
    }
    decrement() {
        if (this.nbr >= 1) {
            this.nbr--;
        }
        else if (this.nbr === 0) {
            this.openerAddToCart();
        }
    }
}
CarteComponent.ɵfac = function CarteComponent_Factory(t) { return new (t || CarteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
CarteComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarteComponent, selectors: [["app-carte"]], inputs: { productList: "productList" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[1, "container-fluid", "flex-col"], ["class", "card-product-item", 4, "ngFor", "ngForOf"], [1, "card-product-item"], ["alt", "tacos", 1, "product", 3, "src"], [1, "title-product"], ["class", "modal", 4, "ngIf"], [1, "btn", "btn-warning", 3, "click"], [1, "bi", "bi-star"], [1, "modal"], [1, "close-modal", 3, "click"], [1, "bi", "bi-x-square-fill"], [1, "ingredients-list"], ["class", "ingredient-item", 4, "ngFor", "ngForOf"], [1, "ingredient-item"], [1, "flex-col", "flex-center"], [1, "container"], [1, "quantity"], [1, "flex-center", "flex-col"], [1, "success", "qty", 3, "click"], [1, "btn", "success", 3, "click"]], template: function CarteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, CarteComponent_div_1_Template, 15, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.itemList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["@media screen and (max-width:550px) {\n    .container-fluid[_ngcontent-%COMP%]{\n        background: url('mur1.jpg');\n        background-size: 100% 100%;\n        min-height: 100vh;\n    }\n    .card-product-item[_ngcontent-%COMP%]{\n        padding: 20px;\n        margin: 25px 15px 0px;\n        color: var(--warning);\n        text-align: center;\n        border: 1px solid var(--warning);\n        height: -moz-fit-content;\n        height: fit-content;\n        border-radius: 20px;\n    }\n    h1[_ngcontent-%COMP%]{\n        margin:8px 0;\n        -webkit-text-stroke: 1px var(--danger);\n    }\n    img[_ngcontent-%COMP%]{\n        width:250px;\n        border-radius: 15px;\n        height: 172px;\n    }\n    .container[_ngcontent-%COMP%]{\n        justify-content: center;\n        font-size: 20px;\n        margin-top: 15px;\n        border: 1px solid var(--warning);\n        border-radius: 50%;\n        padding: 15px 0;\n    }\n    button.btn.btn-warning[_ngcontent-%COMP%]{\n        margin-bottom: 15px;\n        width: 130px;\n    }\n}\n@media screen and (min-width:551px) {\n    .container-fluid[_ngcontent-%COMP%]{\n        background-image: url('mur1.jpg');\n        background-size: 100% 100%;\n        min-height:50vh;\n        flex-direction: row!important;\n        justify-content: center;\n        flex-wrap: wrap;\n    }\n    .card-product-item[_ngcontent-%COMP%]{\n        padding: 20px;\n        margin: 25px 15px 0px;\n        color: var(--warning);\n        text-align: center;\n        border: 1px solid var(--warning);\n        height: -moz-fit-content;\n        height: fit-content;\n        border-radius: 20px;\n        max-width: 400px;\n    }\n    h1[_ngcontent-%COMP%]{\n        margin:8px 0;\n        -webkit-text-stroke: 1px var(--danger);\n    }\n    img[_ngcontent-%COMP%]{\n        width:310px;\n        border-radius: 15px;\n        height: 222px;\n    }\n    .container[_ngcontent-%COMP%]{\n        justify-content: center;\n        font-size: 20px;\n        margin-top: 15px;\n        border: 1px solid var(--warning);\n        border-radius: 50%;\n        padding: 15px 0;\n    }\n    button.btn.btn-warning[_ngcontent-%COMP%]{\n        margin-bottom: 15px;\n        width: 130px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcnRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSTtRQUNJLDJCQUFpRDtRQUNqRCwwQkFBMEI7UUFDMUIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxhQUFhO1FBQ2IscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsZ0NBQWdDO1FBQ2hDLHdCQUFtQjtRQUFuQixtQkFBbUI7UUFDbkIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7QUFDSjtBQUNBO0lBQ0k7UUFDSSxpQ0FBdUQ7UUFDdkQsMEJBQTBCO1FBQzFCLGVBQWU7UUFDZiw2QkFBNkI7UUFDN0IsdUJBQXVCO1FBQ3ZCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGFBQWE7UUFDYixxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixnQ0FBZ0M7UUFDaEMsd0JBQW1CO1FBQW5CLG1CQUFtQjtRQUNuQixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxZQUFZO1FBQ1osc0NBQXNDO0lBQzFDO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7SUFDQTtRQUNJLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLGdDQUFnQztRQUNoQyxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtJQUNBO1FBQ0ksbUJBQW1CO1FBQ25CLFlBQVk7SUFDaEI7QUFDSiIsImZpbGUiOiJjYXJ0ZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDo1NTBweCkge1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tdXIxLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIH1cbiAgICAuY2FyZC1wcm9kdWN0LWl0ZW17XG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIG1hcmdpbjogMjVweCAxNXB4IDBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXdhcm5pbmcpO1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIH1cbiAgICBoMXtcbiAgICAgICAgbWFyZ2luOjhweCAwO1xuICAgICAgICAtd2Via2l0LXRleHQtc3Ryb2tlOiAxcHggdmFyKC0tZGFuZ2VyKTtcbiAgICB9XG4gICAgaW1ne1xuICAgICAgICB3aWR0aDoyNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgaGVpZ2h0OiAxNzJweDtcbiAgICB9XG4gICAgLmNvbnRhaW5lcntcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2FybmluZyk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgIH1cbiAgICBidXR0b24uYnRuLmJ0bi13YXJuaW5ne1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB3aWR0aDogMTMwcHg7XG4gICAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NTFweCkge1xuICAgIC5jb250YWluZXItZmx1aWR7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9tdXIxLmpwZ1wiKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6NTB2aDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdyFpbXBvcnRhbnQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuICAgIC5jYXJkLXByb2R1Y3QtaXRlbXtcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgbWFyZ2luOiAyNXB4IDE1cHggMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0td2FybmluZyk7XG4gICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gICAgICAgIG1heC13aWR0aDogNDAwcHg7XG4gICAgfVxuICAgIGgxe1xuICAgICAgICBtYXJnaW46OHB4IDA7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zdHJva2U6IDFweCB2YXIoLS1kYW5nZXIpO1xuICAgIH1cbiAgICBpbWd7XG4gICAgICAgIHdpZHRoOjMxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICAgICAgICBoZWlnaHQ6IDIyMnB4O1xuICAgIH1cbiAgICAuY29udGFpbmVye1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS13YXJuaW5nKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgfVxuICAgIGJ1dHRvbi5idG4uYnRuLXdhcm5pbmd7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAgIHdpZHRoOiAxMzBweDtcbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 6302:
/*!**************************************************************!*\
  !*** ./src/app/features/carte-panier/carte-panier.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartePanierModule": () => (/* binding */ CartePanierModule)
/* harmony export */ });
/* harmony import */ var src_app_features_carte_panier_carte_menu_carte_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/features/carte-panier/carte-menu/carte-menu.component */ 8644);
/* harmony import */ var src_app_features_carte_panier_panier_panier_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/features/carte-panier/panier/panier.component */ 4171);
/* harmony import */ var src_app_features_carte_panier_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/carte-panier/paypal/paypal.component */ 6679);
/* harmony import */ var src_app_features_carte_panier_success_success_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/features/carte-panier/success/success.component */ 6496);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-paypal */ 9970);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _carte_panier_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carte-panier.routes */ 539);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ 5349);
/* harmony import */ var _carte_menu_carte_carte_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./carte-menu/carte/carte.component */ 28);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);











class CartePanierModule {
}
CartePanierModule.ɵfac = function CartePanierModule_Factory(t) { return new (t || CartePanierModule)(); };
CartePanierModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: CartePanierModule });
CartePanierModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            ngx_paypal__WEBPACK_IMPORTED_MODULE_8__.NgxPayPalModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule.forChild(_carte_panier_routes__WEBPACK_IMPORTED_MODULE_4__.CARTE_PANIER_ROUTES),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](CartePanierModule, { declarations: [src_app_features_carte_panier_carte_menu_carte_menu_component__WEBPACK_IMPORTED_MODULE_0__.CarteMenuComponent,
        src_app_features_carte_panier_panier_panier_component__WEBPACK_IMPORTED_MODULE_1__.PanierComponent,
        src_app_features_carte_panier_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_2__.PaypalComponent,
        src_app_features_carte_panier_success_success_component__WEBPACK_IMPORTED_MODULE_3__.SuccessComponent,
        _carte_menu_carte_carte_component__WEBPACK_IMPORTED_MODULE_6__.CarteComponent], imports: [ngx_paypal__WEBPACK_IMPORTED_MODULE_8__.NgxPayPalModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule] }); })();


/***/ }),

/***/ 539:
/*!**************************************************************!*\
  !*** ./src/app/features/carte-panier/carte-panier.routes.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CARTE_PANIER_ROUTES": () => (/* binding */ CARTE_PANIER_ROUTES)
/* harmony export */ });
/* harmony import */ var _carte_menu_carte_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./carte-menu/carte-menu.component */ 8644);
/* harmony import */ var _panier_panier_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./panier/panier.component */ 4171);
/* harmony import */ var _success_success_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./success/success.component */ 6496);



const CARTE_PANIER_ROUTES = [
    {
        path: '',
        redirectTo: 'carte/1'
    },
    {
        path: 'carte/:product',
        component: _carte_menu_carte_menu_component__WEBPACK_IMPORTED_MODULE_0__.CarteMenuComponent,
    },
    {
        path: 'panier',
        component: _panier_panier_component__WEBPACK_IMPORTED_MODULE_1__.PanierComponent,
    },
    {
        path: 'commande-success',
        component: _success_success_component__WEBPACK_IMPORTED_MODULE_2__.SuccessComponent,
    },
];


/***/ }),

/***/ 4171:
/*!******************************************************************!*\
  !*** ./src/app/features/carte-panier/panier/panier.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PanierComponent": () => (/* binding */ PanierComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2425);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/cart.service */ 6138);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ 8736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/progress-spinner */ 4742);
/* harmony import */ var src_app_features_carte_panier_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/features/carte-panier/paypal/paypal.component */ 6679);








function PanierComponent_h1_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Votre Panier");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PanierComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Votre Panier est vide !");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Commander");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PanierComponent_div_2_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function PanierComponent_div_2_div_1_div_2_Template_button_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10); const item_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r9.deleteItem(item_r8.product); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", item_r8.quantity, " ", item_r8.product.name, " ");
} }
function PanierComponent_div_2_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r11.cost / 100, " \u20AC ");
} }
function PanierComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PanierComponent_div_2_div_1_div_2_Template, 6, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "TOTAL DE LA COMMANDE :");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, PanierComponent_div_2_div_1_div_6_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.cart.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.cart.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r5.cart.total / 100, " \u20AC ");
} }
function PanierComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PanierComponent_div_2_div_1_Template, 9, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.cart.items.length);
} }
function PanierComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "mat-spinner", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function PanierComponent_app_paypal_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-paypal", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("loading", function PanierComponent_app_paypal_5_Template_app_paypal_loading_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r12.onLoad($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("totalCommande", ctx_r4.cart.total / 100);
} }
class PanierComponent {
    constructor(cartService, userService, router) {
        this.cartService = cartService;
        this.userService = userService;
        this.router = router;
        this.color = 'green';
        this.subcription = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
    }
    ngOnInit() {
        this.subcription.add(this.userService.jwtToken$.subscribe((jwtToken) => {
            if (jwtToken.isAuth) {
                return;
            }
            else {
                this.router.navigate(['/login']);
            }
        }));
        this.subcription.add(this.cartService.cart$.subscribe((cart) => {
            this.cart = cart;
        }));
    }
    deleteItem(product) {
        this.cartService.removeItem(product);
        console.log(this.cart);
        console.log(this.cartService.cart);
    }
    onLoad(event) {
        this.isLoading = event;
    }
    ngOnDestroy() {
        this.subcription.unsubscribe();
    }
}
PanierComponent.ɵfac = function PanierComponent_Factory(t) { return new (t || PanierComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
PanierComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PanierComponent, selectors: [["app-panier"]], decls: 6, vars: 5, consts: [[4, "ngIf"], ["class", "vh-50 flex-center flex-col", 4, "ngIf"], ["class", "spinner", 4, "ngIf"], [1, "button-paypal"], [3, "totalCommande", "loading", 4, "ngIf"], [1, "vh-50", "flex-center", "flex-col"], ["routerLink", "/page-menu", 1, "btn", "btn-warning"], ["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], [1, "flex-col", "w-80"], ["class", "cart-item", 4, "ngFor", "ngForOf"], [1, "cart-item"], [1, "flex-col", "w-20"], ["class", "price-item", 4, "ngFor", "ngForOf"], [1, "price-item"], [1, "actions"], [1, "suppr", 3, "click"], [1, "bi", "bi-trash"], [1, "spinner"], ["diameter", "250", "color", "primary", 1, "load"], [3, "totalCommande", "loading"]], template: function PanierComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, PanierComponent_h1_0_Template, 2, 0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, PanierComponent_div_1_Template, 5, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, PanierComponent_div_2_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, PanierComponent_div_3_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, PanierComponent_app_paypal_5_Template, 1, 1, "app-paypal", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cart.items.length && ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.cart.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.cart.items.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_7__.MatSpinner, src_app_features_carte_panier_paypal_paypal_component__WEBPACK_IMPORTED_MODULE_2__.PaypalComponent], styles: ["@media screen and (max-width: 550px) {\n  h1[_ngcontent-%COMP%] {\n    color: var(--success);\n    text-align: center;\n    margin: 15px 0;\n    font-size: 45px;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    min-height:30vh;\n    color: var(--success);\n    font-size: 25px;\n  }\n  .w-100[_ngcontent-%COMP%]{\n    display: flex;\n    justify-content: center;\n  }\n  .w-80[_ngcontent-%COMP%] {\n    width: 79%;\n    border: 1px solid var(--success);\n  }\n  .w-20[_ngcontent-%COMP%] {\n    width: 19%;\n    border: 1px solid var(--success);\n    display: flex;\n  }\n  .price-item[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--success);\n    padding: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    font-size: 15px;\n    height: 27px;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--success);\n    padding: 10px;\n    height: 27px;\n  }\n  .validation[_ngcontent-%COMP%]{\n      height: -moz-fit-content;\n      height: fit-content;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n      padding: 5px;\n      background-color: var(--danger);\n      border: none;\n      border-radius: 20px;\n  }\n  button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 20px;\n      color: var(--warning);\n  }\n  .button-paypal[_ngcontent-%COMP%]{\n    margin: 0 auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    min-width: 300px;\n  }\n  .spinner[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 30vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n}\n@media screen and (min-width: 551px) {\n  h1[_ngcontent-%COMP%] {\n    color: var(--success);\n    text-align: center;\n    margin: 25px 0;\n    font-size: 55px;\n  }\n  .container-fluid[_ngcontent-%COMP%] {\n    min-height:30vh;\n    color: var(--success);\n    font-size: 25px;\n    max-width: 550px;\n    margin: 20px auto;\n  }\n  .w-100[_ngcontent-%COMP%]{\n    display: inline-block;\n    justify-content: center;\n  }\n  .w-80[_ngcontent-%COMP%] {\n    width: 79%;\n    border: 1px solid var(--success);\n  }\n  .w-20[_ngcontent-%COMP%] {\n    width: 19%;\n    border: 1px solid var(--success);\n    display: flex;\n  }\n  .price-item[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--success);\n    padding: 10px;\n    font-family: Arial, Helvetica, sans-serif;\n    font-weight: bold;\n    font-size: 15px;\n    height: 27px;\n  }\n  .cart-item[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--success);\n    padding: 10px;\n    height: 27px;\n  }\n  .validation[_ngcontent-%COMP%]{\n      height: -moz-fit-content;\n      height: fit-content;\n  }\n  .actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{\n      padding: 5px;\n      background-color: var(--danger);\n      border: none;\n      border-radius: 20px;\n  }\n  button[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      font-size: 20px;\n      color: var(--warning);\n  }\n  .button-paypal[_ngcontent-%COMP%]{\n    margin: 0 auto;\n    width: -moz-fit-content;\n    width: fit-content;\n    min-width: 500px;\n  }\n  .spinner[_ngcontent-%COMP%]{\n    max-width: 550px;\n    height: 40vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 0 auto;\n  }\n  .btn-warning[_ngcontent-%COMP%]{\n    font-size: 35px;\n  }\n \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhbmllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7RUFDekI7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7RUFDbEM7RUFDQTtJQUNFLFVBQVU7SUFDVixnQ0FBZ0M7SUFDaEMsYUFBYTtFQUNmO0VBQ0E7SUFDRSx1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLHlDQUF5QztJQUN6QyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7RUFDZDtFQUNBO0lBQ0UsYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLFlBQVk7RUFDZDtFQUNBO01BQ0ksd0JBQW1CO01BQW5CLG1CQUFtQjtFQUN2QjtFQUNBO01BQ0ksWUFBWTtNQUNaLCtCQUErQjtNQUMvQixZQUFZO01BQ1osbUJBQW1CO0VBQ3ZCO0VBQ0E7TUFDSSxlQUFlO01BQ2YscUJBQXFCO0VBQ3pCO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsdUJBQWtCO0lBQWxCLGtCQUFrQjtJQUNsQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0U7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0VBQ2xDO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsZ0NBQWdDO0lBQ2hDLGFBQWE7RUFDZjtFQUNBO0lBQ0UsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0VBQ2Q7RUFDQTtJQUNFLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixZQUFZO0VBQ2Q7RUFDQTtNQUNJLHdCQUFtQjtNQUFuQixtQkFBbUI7RUFDdkI7RUFDQTtNQUNJLFlBQVk7TUFDWiwrQkFBK0I7TUFDL0IsWUFBWTtNQUNaLG1CQUFtQjtFQUN2QjtFQUNBO01BQ0ksZUFBZTtNQUNmLHFCQUFxQjtFQUN6QjtFQUNBO0lBQ0UsY0FBYztJQUNkLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGNBQWM7RUFDaEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7O0FBRUYiLCJmaWxlIjoicGFuaWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICBoMSB7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDE1cHggMDtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWluLWhlaWdodDozMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gIH1cbiAgLnctMTAwe1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLnctODAge1xuICAgIHdpZHRoOiA3OSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XG4gIH1cbiAgLnctMjAge1xuICAgIHdpZHRoOiAxOSU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgfVxuICAucHJpY2UtaXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGhlaWdodDogMjdweDtcbiAgfVxuICAuY2FydC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tc3VjY2Vzcyk7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cbiAgLnZhbGlkYXRpb257XG4gICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICB9XG4gIC5hY3Rpb25zIGJ1dHRvbntcbiAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhbmdlcik7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICB9XG4gIGJ1dHRvbiBpIHtcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIGNvbG9yOiB2YXIoLS13YXJuaW5nKTtcbiAgfVxuICAuYnV0dG9uLXBheXBhbHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbiAgfVxuICAuc3Bpbm5lcntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDMwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA1NTFweCkge1xuICBoMSB7XG4gICAgY29sb3I6IHZhcigtLXN1Y2Nlc3MpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHggMDtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgLmNvbnRhaW5lci1mbHVpZCB7XG4gICAgbWluLWhlaWdodDozMHZoO1xuICAgIGNvbG9yOiB2YXIoLS1zdWNjZXNzKTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuICAudy0xMDB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIC53LTgwIHtcbiAgICB3aWR0aDogNzklO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuICB9XG4gIC53LTIwIHtcbiAgICB3aWR0aDogMTklO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbiAgLnByaWNlLWl0ZW0ge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1zdWNjZXNzKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBoZWlnaHQ6IDI3cHg7XG4gIH1cbiAgLmNhcnQtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXN1Y2Nlc3MpO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgaGVpZ2h0OiAyN3B4O1xuICB9XG4gIC52YWxpZGF0aW9ue1xuICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgfVxuICAuYWN0aW9ucyBidXR0b257XG4gICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYW5nZXIpO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxuICBidXR0b24gaSB7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gIH1cbiAgLmJ1dHRvbi1wYXlwYWx7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG4gIH1cbiAgLnNwaW5uZXJ7XG4gICAgbWF4LXdpZHRoOiA1NTBweDtcbiAgICBoZWlnaHQ6IDQwdmg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICB9XG4gIC5idG4td2FybmluZ3tcbiAgICBmb250LXNpemU6IDM1cHg7XG4gIH1cbiBcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 6679:
/*!******************************************************************!*\
  !*** ./src/app/features/carte-panier/paypal/paypal.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaypalComponent": () => (/* binding */ PaypalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/cart.service */ 6138);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/user.service */ 8736);
/* harmony import */ var src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/order.service */ 8915);
/* harmony import */ var ngx_paypal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-paypal */ 9970);








class PaypalComponent {
    constructor(cartService, router, userService, orderService) {
        this.cartService = cartService;
        this.router = router;
        this.userService = userService;
        this.orderService = orderService;
        this.idPaypal = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.PAYPAL_ID_CLIENT;
        this.currency = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.CURRENCY;
        this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.detail = [];
    }
    ngOnInit() {
        this.userService.currentUser$.subscribe((user) => {
            this.userInfos = user;
        });
        this.initConfig();
    }
    initConfig() {
        const currency = this.currency;
        const clientId = this.idPaypal;
        const price = this.totalCommande;
        this.paypalConfig = {
            currency,
            clientId,
            createOrderOnClient: (data) => 
            // tslint:disable-next-line: no-angle-bracket-type-assertion
            ({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        amount: {
                            currency_code: currency,
                            value: price,
                            breakdown: {
                                item_total: {
                                    currency_code: currency,
                                    value: price,
                                },
                            },
                        },
                        items: [
                            {
                                name: 'Snack Tacos',
                                quantity: '1',
                                category: 'PHYSICAL_GOODS',
                                unit_amount: {
                                    currency_code: currency,
                                    value: price,
                                },
                            },
                        ],
                    },
                ],
            }),
            advanced: {
                commit: 'true',
            },
            style: {
                label: 'buynow',
                layout: 'vertical',
                size: 'responsive'
            },
            onApprove: (data, actions) => {
                this.loading.emit(true);
                for (let item of this.cartService.cart.items) {
                    const obj = { product: item.product.name, quantity: item.quantity, cost: (item.cost / 100) };
                    this.detail.push(obj);
                }
                console.log('onApprove - transaction was approved, but not authorized', data, actions);
                actions.order.get().then((details) => {
                    console.log('onApprove - you can get full order details inside onApprove: ', details);
                });
            },
            onClientAuthorization: (data) => {
                console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
                // create order//
                if (data.status === 'COMPLETED') {
                    const numeroCommande = data.id;
                    const order = { detail: this.detail, user: this.userInfos, montant: +price, numero: numeroCommande, date: new Date() };
                    this.orderService.createOrder(order).then((ok) => {
                        console.log(("inthen createOrder"));
                        this.cartService.reinitCart();
                        this.router.navigate(['/page-menu/commande-success']);
                    }).catch((err) => {
                        console.log("inCatchCreateOrder");
                        console.log(err);
                        this.loading.emit(false);
                    });
                }
            },
            onCancel: (data, actions) => {
                console.log('OnCancel', data, actions);
                this.loading.emit(false);
            },
            onError: (err) => {
                console.log('OnError', err);
                this.loading.emit(false);
            },
            onClick: (data, actions) => {
                console.log('onClick', data, actions);
            },
        };
    }
}
PaypalComponent.ɵfac = function PaypalComponent_Factory(t) { return new (t || PaypalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_cart_service__WEBPACK_IMPORTED_MODULE_1__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_order_service__WEBPACK_IMPORTED_MODULE_3__.OrderService)); };
PaypalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PaypalComponent, selectors: [["app-paypal"]], inputs: { totalCommande: "totalCommande" }, outputs: { loading: "loading" }, decls: 1, vars: 1, consts: [[3, "config"]], template: function PaypalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-paypal", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("config", ctx.paypalConfig);
    } }, directives: [ngx_paypal__WEBPACK_IMPORTED_MODULE_6__.NgxPaypalComponent], styles: [".ng-star-inserted[_ngcontent-%COMP%]{\n    width: 100%!important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheXBhbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InBheXBhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXN0YXItaW5zZXJ0ZWR7XG4gICAgd2lkdGg6IDEwMCUhaW1wb3J0YW50O1xufSJdfQ== */"] });


/***/ }),

/***/ 6496:
/*!********************************************************************!*\
  !*** ./src/app/features/carte-panier/success/success.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessComponent": () => (/* binding */ SuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class SuccessComponent {
    constructor() { }
    ngOnInit() {
    }
}
SuccessComponent.ɵfac = function SuccessComponent_Factory(t) { return new (t || SuccessComponent)(); };
SuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SuccessComponent, selectors: [["app-success"]], decls: 6, vars: 0, consts: [[1, "flex-center"], [1, "bi", "bi-emoji-smile"], ["routerLink", "/", 1, "btn", "btn-warning"]], template: function SuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Votre commande est Valider !");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Retour au menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink], styles: ["@media screen and (max-width:550px) {\n    .flex-center[_ngcontent-%COMP%]{\n        height: 60vh;\n        flex-direction: column;\n    }\n    h1[_ngcontent-%COMP%] {\n        color: var(--warning);\n        text-align: center;\n        margin: 15px 0;\n        font-size: 45px;\n      }\n    button[_ngcontent-%COMP%]{\n        font-size: 30px;\n    }\n    i[_ngcontent-%COMP%]{\n        font-size: 50px;\n        color: var(--warning);\n        margin-bottom: 15px;\n    }\n}\n\n@media screen and (min-width:551px) {\n    .flex-center[_ngcontent-%COMP%]{\n        height: 60vh;\n        flex-direction: column;\n        max-width: 550px;\n        margin: 0 auto;\n    }\n    h1[_ngcontent-%COMP%] {\n        color: var(--warning);\n        text-align: center;\n        margin: 15px 0;\n        font-size: 45px;\n      }\n    button[_ngcontent-%COMP%]{\n        font-size: 40px;\n    }\n    i[_ngcontent-%COMP%]{\n        font-size: 60px;\n        color: var(--warning);\n        margin-bottom: 25px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7TUFDakI7SUFDRjtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsZ0JBQWdCO1FBQ2hCLGNBQWM7SUFDbEI7SUFDQTtRQUNJLHFCQUFxQjtRQUNyQixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGVBQWU7TUFDakI7SUFDRjtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixxQkFBcUI7UUFDckIsbUJBQW1CO0lBQ3ZCO0FBQ0oiLCJmaWxlIjoic3VjY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjU1MHB4KSB7XG4gICAgLmZsZXgtY2VudGVye1xuICAgICAgICBoZWlnaHQ6IDYwdmg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIGgxIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuICAgICAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgfVxuICAgIGl7XG4gICAgICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICAgICAgY29sb3I6IHZhcigtLXdhcm5pbmcpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo1NTFweCkge1xuICAgIC5mbGV4LWNlbnRlcntcbiAgICAgICAgaGVpZ2h0OiA2MHZoO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MHB4O1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxNXB4IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICAgIH1cbiAgICBidXR0b257XG4gICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICB9XG4gICAgaXtcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0td2FybmluZyk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgfVxufSJdfQ== */"] });


/***/ }),

/***/ 9807:
/*!***************************************!*\
  !*** ./src/app/shared/models/cart.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": () => (/* binding */ Cart)
/* harmony export */ });
class Cart {
    constructor() {
        this.nbrOfItem = 0;
        this.total = 0;
    }
}


/***/ }),

/***/ 433:
/*!***************************************!*\
  !*** ./src/app/shared/models/item.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Item": () => (/* binding */ Item)
/* harmony export */ });
class Item {
    constructor() {
        this.quantity = 0;
        this.cost = 0;
    }
}


/***/ }),

/***/ 6138:
/*!*************************************************!*\
  !*** ./src/app/shared/services/cart.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _models_cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/cart */ 9807);
/* harmony import */ var _models_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/item */ 433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class CartService {
    constructor() {
        this.cart$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(null);
        this.cart = new _models_cart__WEBPACK_IMPORTED_MODULE_0__.Cart();
        this.cart.items = [];
        this.checkLocalStorage();
        this.emitCart();
    }
    addToCart(newProduct, quantity) {
        const isOnCart = this.cart.items.find(item => item.product.name === newProduct.name);
        if (!isOnCart) {
            const newItem = new _models_item__WEBPACK_IMPORTED_MODULE_1__.Item();
            newItem.product = newProduct;
            newItem.quantity = quantity;
            newItem.cost = newProduct.price * quantity;
            this.cart.items.push(newItem);
            this.cart.nbrOfItem += quantity;
            this.cart.total += newProduct.price * quantity;
            this.emitCart();
        }
        else {
            isOnCart.quantity += quantity;
            isOnCart.cost += newProduct.price * quantity;
            this.cart.nbrOfItem += quantity;
            this.cart.total += newProduct.price * quantity;
            this.emitCart();
        }
    }
    removeItem(product) {
        const removed = this.cart.items.find((i) => i.product === product);
        if (removed) {
            const index = this.cart.items.indexOf(removed);
            this.cart.items.splice(index, 1);
            const nbrOfDeleted = removed.quantity;
            const newNbrOfItem = this.cart.nbrOfItem - nbrOfDeleted;
            this.cart.nbrOfItem = newNbrOfItem;
            const costDeleted = removed.cost;
            const newCostTotalCart = this.cart.total - costDeleted;
            this.cart.total = newCostTotalCart;
            this.emitCart();
        }
        else {
            return;
        }
    }
    removeOne(product) {
        const item = this.cart.items.find((i) => i.product === product);
        if (item) {
            if (item.quantity > 1) {
                item.quantity--;
                item.cost -= item.cost;
                this.cart.nbrOfItem--;
                const newTotalOfCart = this.cart.total - product.price;
                this.cart.total = newTotalOfCart;
            }
            else {
                const index = this.cart.items.indexOf(item);
                this.cart.items.splice(index, 1);
                const itemCost = item.cost;
                this.cart.nbrOfItem--;
                const newTotalOfCart = this.cart.total - itemCost;
            }
            this.emitCart();
        }
        else {
            return;
        }
    }
    reinitCart() {
        this.cart.items = [];
        this.cart.nbrOfItem = 0;
        this.cart.total = 0;
        this.emitCart();
    }
    emitCart() {
        this.cart$.next(this.cart);
        this.saveCartOnStorage();
    }
    saveCartOnStorage() {
        const asCart = localStorage.getItem('cart');
        if (asCart) {
            localStorage.removeItem('cart');
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
        else {
            localStorage.setItem('cart', JSON.stringify(this.cart));
        }
    }
    checkLocalStorage() {
        const cartLocal = localStorage.getItem('cart');
        if (cartLocal) {
            this.cart = JSON.parse(cartLocal);
        }
    }
    refreshCommande(detail) {
        this.reinitCart();
        for (let i = 0; i < detail.length; i++) {
            const item = new _models_item__WEBPACK_IMPORTED_MODULE_1__.Item();
            item.product = { name: detail[i].product, price: detail[i].cost * 100 };
            item.quantity = detail[i].quantity;
            this.cart.nbrOfItem += detail[i].quantity;
            if (item.cost) {
                item.cost += detail[i].cost * 100;
                this.cart.total += detail[i].cost * 100;
            }
            else {
                item.cost = detail[i].cost * 100;
                this.cart.total += detail[i].cost * 100;
            }
            this.cart.items.push(item);
        }
        this.saveCartOnStorage();
    }
}
CartService.ɵfac = function CartService_Factory(t) { return new (t || CartService)(); };
CartService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CartService, factory: CartService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9970:
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-paypal/__ivy_ngcc__/fesm2015/ngx-paypal.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgxPayPalModule": () => (/* binding */ NgxPayPalModule),
/* harmony export */   "NgxPaypalComponent": () => (/* binding */ NgxPaypalComponent),
/* harmony export */   "PayPalScriptService": () => (/* binding */ PayPalScriptService),
/* harmony export */   "ɵa": () => (/* binding */ ScriptService)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);




/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


const _c0 = ["payPalButtonContainer"];
class ScriptService {
    /**
     * @param {?} zone
     */
    constructor(zone) {
        this.zone = zone;
    }
    /**
     * @param {?} url
     * @param {?} globalVar
     * @param {?} onReady
     * @return {?}
     */
    registerScript(url, globalVar, onReady) {
        /** @type {?} */
        const existingGlobalVar = ((/** @type {?} */ (window)))[globalVar];
        if (existingGlobalVar) {
            // global variable is present = script was already loaded
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onReady(existingGlobalVar);
            }));
            return;
        }
        // prepare script elem
        /** @type {?} */
        const scriptElem = document.createElement('script');
        scriptElem.id = this.getElemId(globalVar);
        scriptElem.innerHTML = '';
        scriptElem.onload = (/**
         * @return {?}
         */
        () => {
            this.zone.run((/**
             * @return {?}
             */
            () => {
                onReady(((/** @type {?} */ (window)))[globalVar]);
            }));
        });
        scriptElem.src = url;
        scriptElem.async = true;
        scriptElem.defer = true;
        // add script to header
        document.getElementsByTagName('head')[0].appendChild(scriptElem);
    }
    /**
     * @param {?} globalVar
     * @return {?}
     */
    cleanup(globalVar) {
        // remove script from DOM
        /** @type {?} */
        const scriptElem = document.getElementById(this.getElemId(globalVar));
        if (scriptElem) {
            scriptElem.remove();
        }
    }
    /**
     * @private
     * @param {?} globalVar
     * @return {?}
     */
    getElemId(globalVar) {
        return `ngx-paypal-script-elem-${globalVar}`;
    }
}
ScriptService.ɵfac = function ScriptService_Factory(t) { return new (t || ScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
ScriptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ScriptService, factory: ScriptService.ɵfac });
/** @nocollapse */
ScriptService.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/services/paypal-script.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PayPalScriptService {
    /**
     * @param {?} scriptService
     */
    constructor(scriptService) {
        this.scriptService = scriptService;
        this.paypalWindowName = 'paypal';
    }
    /**
     * @param {?} config
     * @param {?} onReady
     * @return {?}
     */
    registerPayPalScript(config, onReady) {
        this.scriptService.registerScript(this.getUrlForConfig(config), this.paypalWindowName, onReady);
    }
    /**
     * @return {?}
     */
    destroyPayPalScript() {
        this.scriptService.cleanup(this.paypalWindowName);
    }
    /**
     * @private
     * @param {?} config
     * @return {?}
     */
    getUrlForConfig(config) {
        /** @type {?} */
        const params = [
            {
                name: 'client-id',
                value: config.clientId
            }
        ];
        if (config.currency) {
            params.push({
                name: 'currency',
                value: config.currency
            });
        }
        if (config.commit) {
            params.push({
                name: 'commit',
                value: config.commit
            });
        }
        if (config.vault) {
            params.push({
                name: 'vault',
                value: config.vault
            });
        }
        if (config.extraParams) {
            params.push(...config.extraParams);
        }
        return `https://www.paypal.com/sdk/js${this.getQueryString(params)}`;
    }
    /**
     * @private
     * @param {?} queryParams
     * @return {?}
     */
    getQueryString(queryParams) {
        /** @type {?} */
        let queryString = '';
        for (let i = 0; i < queryParams.length; i++) {
            /** @type {?} */
            const queryParam = queryParams[i];
            if (i === 0) {
                queryString += '?';
            }
            else {
                queryString += '&';
            }
            queryString += `${queryParam.name}=${queryParam.value}`;
        }
        return queryString;
    }
}
PayPalScriptService.ɵfac = function PayPalScriptService_Factory(t) { return new (t || PayPalScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ScriptService)); };
PayPalScriptService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PayPalScriptService, factory: PayPalScriptService.ɵfac });
/** @nocollapse */
PayPalScriptService.ctorParameters = () => [
    { type: ScriptService }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PayPalScriptService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], function () { return [{ type: ScriptService }]; }, null); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/components/paypal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPaypalComponent {
    /**
     * @param {?} paypalScriptService
     * @param {?} cdr
     * @param {?} ngZone
     */
    constructor(paypalScriptService, cdr, ngZone) {
        this.paypalScriptService = paypalScriptService;
        this.cdr = cdr;
        this.ngZone = ngZone;
        /**
         * If enabled, paypal SDK script will be loaded. Useful if you want to have multiple PayPal components on the same page
         * sharing base configuration. In such a case only a single component may register script.
         */
        this.registerScript = true;
        /**
         * Emitted when paypal script is loaded
         */
        this.scriptLoaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.ngUnsubscribe = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        /**
         * Flag that indicates if paypal should be initialized (required for handling script load events and availability of DOM element)
         */
        this.initializePayPal = true;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    set payPalButtonContainer(content) {
        this.payPalButtonContainerElem = content;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!this.payPalButtonContainerId) {
            this.payPalButtonContainerId = this.generateElementId();
        }
        // first time config setup
        /** @type {?} */
        const config = this.config;
        if (changes.config.isFirstChange()) {
            if (config && this.registerScript) {
                this.initPayPalScript(config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                (payPal) => {
                    // store reference to paypal global script
                    this.payPal = payPal;
                    this.doPayPalCheck();
                }));
            }
        }
        // changes to config
        if (!changes.config.isFirstChange()) {
            this.reinitialize(config);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.paypalScriptService.destroyPayPalScript();
        this.ngUnsubscribe.next();
        this.ngUnsubscribe.complete();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.doPayPalCheck();
    }
    /**
     * @param {?} payPal
     * @return {?}
     */
    customInit(payPal) {
        this.payPal = payPal;
        this.doPayPalCheck();
    }
    /**
     * @param {?} config
     * @return {?}
     */
    reinitialize(config) {
        this.config = config;
        this.payPal = undefined;
        this.paypalScriptService.destroyPayPalScript();
        this.payPalButtonContainerId = this.generateElementId();
        this.initializePayPal = true;
        if (this.payPalButtonContainerElem) {
            while (this.payPalButtonContainerElem.nativeElement.firstChild) {
                this.payPalButtonContainerElem.nativeElement.removeChild(this.payPalButtonContainerElem.nativeElement.firstChild);
            }
        }
        this.cdr.detectChanges();
        if (this.config) {
            if (!this.payPal) {
                this.initPayPalScript(this.config, (/**
                 * @param {?} payPal
                 * @return {?}
                 */
                (payPal) => {
                    // store reference to paypal global script
                    this.payPal = payPal;
                    this.doPayPalCheck();
                }));
            }
            else {
                this.doPayPalCheck();
            }
        }
    }
    /**
     * @private
     * @return {?}
     */
    doPayPalCheck() {
        if (this.initializePayPal && this.config && this.payPal && this.payPalButtonContainerElem) {
            // make sure that id is also set
            if (this.payPalButtonContainerElem.nativeElement.id) {
                this.initializePayPal = false;
                this.initPayPal(this.config, this.payPal);
            }
        }
    }
    /**
     * @private
     * @param {?} config
     * @param {?} initPayPal
     * @return {?}
     */
    initPayPalScript(config, initPayPal) {
        this.paypalScriptService.registerPayPalScript({
            clientId: config.clientId,
            commit: config.advanced && config.advanced.commit ? config.advanced.commit : undefined,
            currency: config.currency,
            vault: config.vault,
            extraParams: config.advanced && config.advanced.extraQueryParams ? config.advanced.extraQueryParams : []
        }, (/**
         * @param {?} paypal
         * @return {?}
         */
        (paypal) => {
            this.scriptLoaded.next(paypal);
            initPayPal(paypal);
        }));
    }
    /**
     * @private
     * @return {?}
     */
    generateElementId() {
        return `ngx-captcha-id-${new Date().valueOf()}`;
    }
    /**
     * @private
     * @param {?} config
     * @param {?} paypal
     * @return {?}
     */
    initPayPal(config, paypal) {
        // Running outside angular zone prevents infinite ngDoCheck lifecycle calls
        this.ngZone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            // https://developer.paypal.com/docs/checkout/integrate/#2-add-the-paypal-script-to-your-web-page
            /** @type {?} */
            const createOrder = (/**
             * @param {?} data
             * @param {?} actions
             * @return {?}
             */
            (data, actions) => {
                return this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (config.createOrderOnClient && config.createOrderOnServer) {
                        throw Error(`Both 'createOrderOnClient' and 'createOrderOnServer' are defined.
                    Please choose one or the other.`);
                    }
                    if (!config.createOrderOnClient && !config.createOrderOnServer) {
                        throw Error(`Neither 'createOrderOnClient' or 'createOrderOnServer' are defined.
                    Please define one of these to create order.`);
                    }
                    if (config.createOrderOnClient) {
                        return actions.order.create(config.createOrderOnClient(data));
                    }
                    if (config.createOrderOnServer) {
                        return config.createOrderOnServer(data);
                    }
                    throw Error(`Invalid state for 'createOrder'.`);
                }));
            });
            /** @type {?} */
            const createSubscription = (/**
             * @param {?} data
             * @param {?} actions
             * @return {?}
             */
            (data, actions) => {
                return this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (config.createSubscription) {
                        return config.createSubscription(data, actions);
                    }
                }));
            });
            /** @type {?} */
            const onShippingChange = (/**
             * @param {?} data
             * @param {?} actions
             * @return {?}
             */
            (data, actions) => {
                return this.ngZone.run((/**
                 * @return {?}
                 */
                () => {
                    if (config.onShippingChange) {
                        return config.onShippingChange(data, actions);
                    }
                }));
            });
            /** @type {?} */
            const buttonsConfig = Object.assign(Object.assign(Object.assign({ style: config.style, onApprove: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    return this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onApprove) {
                            config.onApprove(data, actions);
                        }
                        // capture on server
                        if (config.authorizeOnServer) {
                            return config.authorizeOnServer(data, actions);
                        }
                        // capture on client
                        /** @type {?} */
                        const onClientAuthorization = config.onClientAuthorization;
                        if (onClientAuthorization) {
                            actions.order.capture().then((/**
                             * @param {?} details
                             * @return {?}
                             */
                            (details) => {
                                this.ngZone.run((/**
                                 * @return {?}
                                 */
                                () => {
                                    onClientAuthorization(details);
                                }));
                            }));
                            return;
                        }
                    }));
                }), onError: (/**
                 * @param {?} error
                 * @return {?}
                 */
                (error) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onError) {
                            config.onError(error);
                        }
                    }));
                }), onCancel: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onCancel) {
                            config.onCancel(data, actions);
                        }
                    }));
                }), onClick: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onClick) {
                            config.onClick(data, actions);
                        }
                    }));
                }), onInit: (/**
                 * @param {?} data
                 * @param {?} actions
                 * @return {?}
                 */
                (data, actions) => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        if (config.onInit) {
                            config.onInit(data, actions);
                        }
                    }));
                }) }, ((config.createOrderOnClient || config.createOrderOnServer) && { createOrder })), (config.createSubscription && { createSubscription })), (config.onShippingChange && { onShippingChange }));
            paypal.Buttons(buttonsConfig).render(`#${this.payPalButtonContainerId}`);
        }));
    }
}
NgxPaypalComponent.ɵfac = function NgxPaypalComponent_Factory(t) { return new (t || NgxPaypalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](PayPalScriptService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
NgxPaypalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxPaypalComponent, selectors: [["ngx-paypal"]], viewQuery: function NgxPaypalComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.payPalButtonContainer = _t.first);
    } }, inputs: { registerScript: "registerScript", config: "config" }, outputs: { scriptLoaded: "scriptLoaded" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 1, consts: [[3, "id"], ["payPalButtonContainer", ""]], template: function NgxPaypalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0, 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.payPalButtonContainerId);
    } }, encapsulation: 2, changeDetection: 0 });
/** @nocollapse */
NgxPaypalComponent.ctorParameters = () => [
    { type: PayPalScriptService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
NgxPaypalComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    registerScript: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    scriptLoaded: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    payPalButtonContainer: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild, args: ['payPalButtonContainer', { static: false },] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPaypalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
                selector: 'ngx-paypal',
                template: `
    <div #payPalButtonContainer [id]="payPalButtonContainerId"></div>
    `
            }]
    }], function () { return [{ type: PayPalScriptService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { registerScript: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], scriptLoaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], payPalButtonContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['payPalButtonContainer', { static: false }]
        }], config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-paypal.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxPayPalModule {
}
NgxPayPalModule.ɵfac = function NgxPayPalModule_Factory(t) { return new (t || NgxPayPalModule)(); };
NgxPayPalModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxPayPalModule });
NgxPayPalModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        ScriptService,
        PayPalScriptService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxPayPalModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule
                ],
                declarations: [
                    NgxPaypalComponent,
                ],
                exports: [
                    NgxPaypalComponent,
                ],
                providers: [
                    ScriptService,
                    PayPalScriptService
                ]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxPayPalModule, { declarations: function () { return [NgxPaypalComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]; }, exports: function () { return [NgxPaypalComponent]; } }); })();

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/paypal-models.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function IPayPalConfig() { }
if (false) {}
/**
 * @record
 */
function IPayPalUrlConfig() { }
if (false) {}
/**
 * @record
 */
function IOrderDetails() { }
if (false) {}
/**
 * @record
 */
function IClientAuthorizeCallbackData() { }
if (false) {}
/**
 * @record
 */
function ILinkDescription() { }
if (false) {}
/**
 * @record
 */
function IQueryParam() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeData() { }
if (false) {}
/**
 * @record
 */
function IOnShippingChangeActions() { }
if (false) {}
/**
 * @record
 */
function IAdvancedConfiguration() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackData() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICancelCallbackData() { }
if (false) {}
/**
 * @record
 */
function IOnApproveCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IOnInitCallbackActions() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IInitCallbackData() { }
/**
 * @record
 */
function ICreateSubscriptionCallbackData() { }
/**
 * @record
 */
function IOnClickCallbackActions() { }
if (false) {}
/**
 * @record
 */
function IPayPalButtonStyle() { }
if (false) {}
/**
 * @record
 */
function ICreateOrderRequest() { }
if (false) {}
/**
 * @record
 */
function ICreateSubscriptionRequest() { }
if (false) {}
/**
 * @record
 */
function IPayer() { }
if (false) {}
/**
 * @record
 */
function IApplicationContext() { }
if (false) {}
/**
 * @record
 */
function IPaymentMethod() { }
if (false) {}
/**
 * @record
 */
function IPhone() { }
if (false) {}
/**
 * @record
 */
function ITaxInfo() { }
if (false) {}
/**
 * @record
 */
function IPhoneNumber() { }
if (false) {}
/**
 * @record
 */
function IPurchaseUnit() { }
if (false) {}
/**
 * @record
 */
function IPayee() { }
if (false) {}
/**
 * @record
 */
function IPaymentInstructions() { }
if (false) {}
/**
 * @record
 */
function IPlatformFee() { }
if (false) {}
/**
 * @record
 */
function ITransactionItem() { }
if (false) {}
/**
 * @record
 */
function ITax() { }
if (false) {}
/**
 * @record
 */
function IUnitAmount() { }
if (false) {}
/**
 * @record
 */
function IMoney() { }
if (false) {}
/**
 * @record
 */
function IUnitBreakdown() { }
if (false) {}
/**
 * @record
 */
function IPartyName() { }
if (false) {}
/**
 * @record
 */
function IAddressPortable() { }
if (false) {}
/**
 * @record
 */
function IShipping() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public_api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-paypal.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ })

}]);
//# sourceMappingURL=src_app_features_carte-panier_carte-panier_module_ts.js.map