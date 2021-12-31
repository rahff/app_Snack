"use strict";
(self["webpackChunksnack"] = self["webpackChunksnack"] || []).push([["common"],{

/***/ 8915:
/*!**************************************************!*\
  !*** ./src/app/shared/services/order.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OrderService": () => (/* binding */ OrderService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ 8736);






class OrderService {
    constructor(http, userService) {
        this.http = http;
        this.userService = userService;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        this.orderList$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    }
    createOrder(order) {
        return new Promise((resolve, reject) => {
            console.log("inCreateOderServive");
            this.http.post(this.api + 'orders/new', order).subscribe((response) => {
                if (response.status === 200) {
                    const user = {
                        confirm: response.result.confirm,
                        email: response.result.local.email,
                        _id: response.result._id,
                        adress: response.result.adress,
                        commandes: response.result.commandes,
                        firstname: response.result.firstname,
                        name: response.result.name,
                        role: response.result.role
                    };
                    this.userService.currentUser$.next(user);
                    resolve(true);
                }
                else {
                    reject('erreur lors de l\'enregistrement de la commande');
                }
            });
        });
    }
    getOrderList() {
        return this.http.get(this.api + 'orders/list').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)((response) => {
            return response.result;
        }));
    }
    deleteOrder(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.api + 'orders/delete/' + id).subscribe((response) => {
                if (response.status === 200) {
                    this.getOrderList();
                    resolve(response.message);
                }
                else {
                    reject(response.message);
                }
            });
        });
    }
    emitOrder() {
        this.orderList$.next(this.orderList);
    }
}
OrderService.ɵfac = function OrderService_Factory(t) { return new (t || OrderService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
OrderService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: OrderService, factory: OrderService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9334:
/*!****************************************************!*\
  !*** ./src/app/shared/services/product.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductService": () => (/* binding */ ProductService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 4766);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);




class ProductService {
    constructor(http) {
        this.http = http;
        this.product$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject([]);
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.API;
        this.getProductList();
    }
    getProductList() {
        this.http.get(this.api + 'products').subscribe((response) => {
            this.productList = response.result;
            this.emitProduct();
        });
    }
    emitProduct() {
        this.product$.next(this.productList);
    }
    addProduct(body, file) {
        return new Promise((resolve, reject) => {
            let productData = new FormData();
            productData.append('product', JSON.stringify(body));
            productData.append('image', file);
            this.http.post(this.api + 'products/add', productData).subscribe((response) => {
                if (response.status === 200) {
                    resolve(response.message);
                }
                else {
                    reject(response.message);
                }
            });
        });
    }
    getProductById(id) {
        return this.http.get(this.api + "products/" + id);
    }
    updateProduct(body, id, file) {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("product", JSON.stringify(body));
            if (file) {
                formData.append("image", file);
            }
            this.http.patch(this.api + 'products/update/' + id, formData).subscribe((response) => {
                if (response.status === 200) {
                    resolve(response.message);
                }
                else {
                    reject(response.message);
                }
            });
        });
    }
    deleteProduct(id) {
        return new Promise((resolve, reject) => {
            this.http.delete(this.api + "products/" + id).subscribe((response) => {
                if (response.status === 200) {
                    resolve(response.message);
                }
                else {
                    reject(response.message);
                }
            });
        });
    }
}
ProductService.ɵfac = function ProductService_Factory(t) { return new (t || ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
ProductService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ProductService, factory: ProductService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map