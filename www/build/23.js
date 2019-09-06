webpackJsonp([23],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyOrdersPageModule", function() { return MyOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_orders__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MyOrdersPageModule = /** @class */ (function () {
    function MyOrdersPageModule() {
    }
    MyOrdersPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__my_orders__["a" /* MyOrdersPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__my_orders__["a" /* MyOrdersPage */]),
            ],
        })
    ], MyOrdersPageModule);
    return MyOrdersPageModule;
}());

//# sourceMappingURL=my-orders.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_product__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_orders_store_orders__ = __webpack_require__(257);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MyOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MyOrdersPage = /** @class */ (function () {
    function MyOrdersPage(navCtrl, navParams, storage, toastCtrl, productProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.toastCtrl = toastCtrl;
        this.productProvider = productProvider;
        this.ORDER_DETAIL = __WEBPACK_IMPORTED_MODULE_5__store_orders_store_orders__["a" /* OrderDetail */];
        this.base_url = __WEBPACK_IMPORTED_MODULE_4__services_constants_service__["b" /* BASE_URL */];
        console.clear();
        this.storage.get("me").then(function (val) {
            _this.getdata(val.token);
        });
    }
    MyOrdersPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    MyOrdersPage.prototype.getdata = function (token) {
        var _this = this;
        this.token = token;
        this.productProvider
            .getUserOrderList(this.token)
            .subscribe(function (res4) {
            if (res4.status) {
                _this.products = res4.message;
                _this.products.forEach(function (element) {
                    _this.productProvider.getUserOrder(_this.token, element.id).subscribe(function (data) {
                        if (data.status) {
                            element.myorder = true;
                            element.token = _this.token;
                            element.image_name = _this.getImage(element.image_name);
                            element.full_detial = data.message;
                        }
                    });
                });
                console.log(_this.products);
            }
            else {
                _this.presentToast(res4.message);
            }
        });
    };
    MyOrdersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MyOrdersPage');
    };
    MyOrdersPage.prototype.getImage = function (img) {
        console.log(this.base_url + "/uploads/stores/products/" + img);
        return this.base_url + "/uploads/stores/products/" + img;
    };
    MyOrdersPage.prototype.getArray = function (array) {
        return Array.isArray(array);
    };
    MyOrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-orders',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\my-orders\my-orders.html"*/'<!--\n  Generated template for the MyOrdersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Orders</ion-title>\n    <ion-buttons end>\n      <button ion-button>\n        <!-- <ion-icon name="log-out"></ion-icon> -->\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list no-lines *ngIf="getArray(products)">\n    <ion-item detail *ngFor="let item of products;let i = index;" [navPush]="ORDER_DETAIL" [navParams] = "item">\n      <ion-thumbnail item-start>\n        <img class="" src="{{item.image_name}}">\n      </ion-thumbnail>\n      <h2>\n        {{item.pr_name | titlecase}}\n      </h2>\n      <!-- 0=Pending, 1=Accepted, 2=in process, 3=Shipped, 4=Completed, 5=Rejected	 -->\n      <p *ngIf="item.order_status == \'0\'">Pending</p>\n      <p *ngIf="item.order_status == \'1\'">Accepted</p>\n      <p *ngIf="item.order_status == \'2\'">Inprocess</p>\n      <p *ngIf="item.order_status == \'3\'">Shipped</p>\n      <p *ngIf="item.order_status == \'4\'">Delivered</p>\n      <p *ngIf="item.order_status == \'5\'">Rejected</p>\n    </ion-item>\n  </ion-list>\n  <ion-list no-lines *ngIf="!getArray(products)">\n    <ion-item>\n      <ion-label text-center>No records found.</ion-label>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\my-orders\my-orders.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_product__["a" /* ProductProvider */]])
    ], MyOrdersPage);
    return MyOrdersPage;
}());

//# sourceMappingURL=my-orders.js.map

/***/ })

});
//# sourceMappingURL=23.js.map