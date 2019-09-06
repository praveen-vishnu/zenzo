webpackJsonp([3],{

/***/ 414:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProductsListPageModule", function() { return UserProductsListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_products_list__ = __webpack_require__(470);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UserProductsListPageModule = /** @class */ (function () {
    function UserProductsListPageModule() {
    }
    UserProductsListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_products_list__["a" /* UserProductsListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__user_products_list__["a" /* UserProductsListPage */]),
            ],
        })
    ], UserProductsListPageModule);
    return UserProductsListPageModule;
}());

//# sourceMappingURL=user-products-list.module.js.map

/***/ }),

/***/ 470:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProductsListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_constants_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sub_options_with_icons_sub_option_one_sub_option_one__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_store_product__ = __webpack_require__(43);
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
 * Generated class for the UserProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserProductsListPage = /** @class */ (function () {
    function UserProductsListPage(modalCtrl, storage, navCtrl, navParams, toastCtrl, alertCtrl, productProvider) {
        var _this = this;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.productProvider = productProvider;
        this.products = [];
        this.productsbackup = [];
        this.productProvider.getUserProductList().subscribe(function (resp) {
            if (resp.status) {
                _this.products = resp.message;
                var temp = [];
                _this.products.forEach(function (element) {
                    var item = {
                        id: element.id,
                        name: element.pr_name,
                        image: _this.getImage(element.pr_image),
                        rating: parseFloat(element.pr_rating),
                        price: parseFloat(element.pr_sale_amount),
                        status: parseInt(element.pr_status)
                    };
                    temp.push(item);
                });
                console.clear();
                console.log(temp);
                _this.productsbackup = _this.products = temp;
            }
            else {
                console.log(resp);
            }
        });
    }
    UserProductsListPage.prototype.filterStore = function (searchTerm) {
        this.products = this.productsbackup;
        return this.products.filter(function (item) {
            return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    UserProductsListPage.prototype.setFilteredItems = function () {
        this.products = this.filterStore(this.searchTerm);
    };
    UserProductsListPage.prototype.getImage = function (img) {
        return __WEBPACK_IMPORTED_MODULE_0__services_constants_service__["b" /* BASE_URL */] + "/uploads/stores/products/" + img;
    };
    UserProductsListPage.prototype.toArray = function (arr) {
        return arr
            .replace(/,/gi, " ")
            .trim()
            .split(" ");
    };
    UserProductsListPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsListPage');
    };
    UserProductsListPage.prototype.goToCart = function () {
        this.navCtrl.push('CartPage');
    };
    UserProductsListPage.prototype.presentPopover = function (myEvent) {
        // let popover = this.popoverCtrl.create(PopoverPage);
        // popover.present({
        //   ev: myEvent
        // });
    };
    UserProductsListPage.prototype.search = function () {
    };
    UserProductsListPage.prototype.goToProductDetail = function (data) {
        console.log(data.id);
        console.log(this.token);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__sub_options_with_icons_sub_option_one_sub_option_one__["c" /* UserProductModal */], { id: data.id });
    };
    UserProductsListPage.prototype.presentFilter = function () {
        var modal = this.modalCtrl.create("ProductsFilterPage");
        modal.present();
        modal.onDidDismiss(function (data) {
            if (data) {
                // play with data here
            }
        });
    };
    UserProductsListPage.prototype.sortBy = function () {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setTitle('Sort Options');
        alert.addInput({
            type: 'radio',
            label: 'Relevance',
            value: 'relevance',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Popularity',
            value: 'popular'
        });
        alert.addInput({
            type: 'radio',
            label: 'Low to High',
            value: 'lth'
        });
        alert.addInput({
            type: 'radio',
            label: 'High to Low',
            value: 'htl'
        });
        alert.addInput({
            type: 'radio',
            label: 'Newest First',
            value: 'newest'
        });
        alert.addButton('Cancel');
        alert.addButton({
            text: 'OK',
            handler: function (data) {
                console.log(data);
                var navTransition = alert.dismiss();
                // start some async method
                setTimeout(function () {
                    navTransition.then(function () {
                        _this.navCtrl.push('CartPage');
                    });
                }, 3000);
                // return false;
            }
        });
        alert.present().then(function () {
            console.log("=====alert---present");
        });
    };
    UserProductsListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-user-products-list',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\user-products-list\user-products-list.html"*/'<ion-header>\n    <ion-navbar no-border-bottom color="primary">\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title *ngIf="!showSearch">Products</ion-title>\n      <ion-searchbar  *ngIf="showSearch" [(ngModel)]="searchTerm"(ionChange)="setFilteredItems()"></ion-searchbar>\n       <ion-buttons end>\n        <button ion-button end (click)="showSearch = !showSearch">\n         <ion-icon name="md-search"></ion-icon>\n      </button>\n    </ion-buttons>\n      <ion-buttons end>\n        <button ion-button (click)="goToCart()">\n          <ion-icon name="md-cart"></ion-icon>\n        </button>\n      </ion-buttons>\n      <!-- <ion-buttons end>\n        <button ion-button icon-only (click)="presentPopover($event)">\n          <ion-icon name="more"></ion-icon>\n        </button>\n      </ion-buttons> -->\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content class="products">\n  \n    <div class="row result">\n      <div col-6 class="storelistItems {{item[\'id\']}}" *ngFor="let item of products;">\n        <a (click)="goToProductDetail(item)">\n          <div class=" dt-card__full-height dt-card__product-vertical">\n            <img alt="Alarm Clock" class="card-img-top" [src]="item?.image"\n              onError="this.src=\'./assets/images/not-available.jpg\'">\n            <div class="card-contents">\n              <h2 class="card-title">{{item[\'name\'] | titlecase}}</h2>\n              <div class="d-flex">\n                <h4 class="mb-2 mr-3">{{item[\'price\'] | currency:\'INR\':\'symbol\' }}</h4>\n                <div class="d-flex align-items-center mb-1">\n                </div>\n              </div>\n              <!-- <p class="mb-1" style="color: rgb(82, 212, 121);" *ngIf="item?.status">Enabled</p>\n              <p class="mb-1" style="color: rgb(156, 21, 21);" *ngIf="!item?.status">Disabled</p> -->\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </ion-content>\n  \n  <!-- <ion-footer no-border>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-buttons>\n            <button ion-button full icon-end (click)="presentFilter()">\n              <ion-icon name="md-funnel"></ion-icon>&nbsp;Filter\n            </button>\n          </ion-buttons>\n        </ion-col>\n        <ion-col>\n          <ion-buttons>\n            <button ion-button icon-end full (click)="sortBy()">\n              <ion-icon name="menu"></ion-icon>&nbsp;Sort\n            </button>\n          </ion-buttons>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer> -->'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\user-products-list\user-products-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_5__providers_store_product__["a" /* ProductProvider */]])
    ], UserProductsListPage);
    return UserProductsListPage;
}());

//# sourceMappingURL=user-products-list.js.map

/***/ })

});
//# sourceMappingURL=3.js.map