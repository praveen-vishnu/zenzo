webpackJsonp([23],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductPageModule", function() { return EditProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProductPageModule = /** @class */ (function () {
    function EditProductPageModule() {
    }
    EditProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_product__["a" /* EditProductPage */]),
            ],
        })
    ], EditProductPageModule);
    return EditProductPageModule;
}());

//# sourceMappingURL=edit-product.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants_service__ = __webpack_require__(13);
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
 * Generated class for the EditProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProductPage = /** @class */ (function () {
    function EditProductPage(navCtrl, toastCtrl, storage, navParams, productProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.segment = "0";
        this.countries = __WEBPACK_IMPORTED_MODULE_4__services_constants_service__["c" /* COUNTRY_LIST */];
        this.product = [];
        this.store = {
            pr_name: "",
            brand_name: "",
            pr_main_category_id: "",
            pr_category_id: "",
            pr_sub_category_id: "",
            shipping_type: "",
            shipping_charge_amount: "",
            delivery_min_num_of_day: "",
            delivery_max_num_of_day: "",
            pr_description: "",
            search_keywords: "",
            country_publication_id: "",
            pr_description_warranty: "",
            pr_colors: "",
            pr_sizes: "",
            pr_original_amount: "",
            pr_discount_percentage: "",
            pr_inventory_stock: ""
        };
        console.clear();
        this.id = this.navParams.get("id");
        console.log(this.id);
        this.storage.get("me").then(function (val) {
            _this.getdata(val.token);
        });
    }
    EditProductPage.prototype.getdata = function (token) {
        var _this = this;
        this.token = token;
        this.productProvider
            .getProduct(this.token, this.id)
            .subscribe(function (res4) {
            if (res4.status) {
                _this.product = res4.message;
                _this.product.pr_row_id = _this.product.id;
                console.log(_this.product);
            }
            else {
                _this.presentToast(res4.message);
            }
        });
        this.productProvider.getMainCategory().subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.maincategory = data.message;
                _this.selectCat(_this.product.pr_main_category_id);
                _this.selectSubCat(_this.product.pr_category_id);
            }
        });
    };
    EditProductPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    EditProductPage.prototype.selectSubCat = function (category_id) {
        var _this = this;
        this.category_id = category_id;
        this.subcategory = [];
        this.productProvider
            .getSubCategory(this.main_category_id, this.category_id)
            .subscribe(function (data) {
            console.log(data);
            _this.subcategory = data;
        });
    };
    EditProductPage.prototype.selectCat = function (id) {
        var _this = this;
        this.main_category_id = id;
        this.category = [];
        console.log(this.main_category_id);
        this.productProvider
            .getCategory(this.main_category_id)
            .subscribe(function (data) {
            console.log(data);
            _this.category = data;
        });
    };
    EditProductPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ListStorePage");
        this.slides.lockSwipes(true);
    };
    EditProductPage.prototype.segmentChanged = function (eve) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(parseInt(eve._value), 500);
        this.slides.lockSwipes(true);
    };
    EditProductPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.segment = currentIndex + "";
    };
    EditProductPage.prototype.changeListener = function ($event) {
        // this.file = this.store.value.store_image = $event.target.files[0];
        // console.log(this.store.value);
    };
    EditProductPage.prototype.imageUpload = function () {
        document.getElementById("imageUpload").click();
    };
    EditProductPage.prototype.onSubmit = function (nextSlide) {
        var _this = this;
        console.log(nextSlide);
        console.log(this.product);
        if (nextSlide == "s") {
            this.productProvider
                .edit(this.product, this.token)
                .subscribe(function (res) {
                console.log(res);
                if (res.satus) {
                    console.log(res.satus);
                    _this.navCtrl.pop();
                }
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000
                });
                toast.onDidDismiss(function () {
                    console.log("Dismissed toast");
                });
                toast.present();
            });
        }
        else {
            this.slides.lockSwipes(false);
            this.slides.slideTo(parseInt(nextSlide), 500);
            this.segment = nextSlide;
            this.slides.lockSwipes(true);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Slides */])
    ], EditProductPage.prototype, "slides", void 0);
    EditProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-edit-product",template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\edit-product\edit-product.html"*/'<!--\n  Generated template for the ListProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Edit Product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-segment (ionChange)="segmentChanged($event)" mode="md" [(ngModel)]="segment">\n    <ion-segment-button value="0">\n      <ion-label>Product Category</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="1">\n      <ion-label>Product Info</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="2">\n      <ion-label>ProductPricing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="3">\n      <ion-label>Shipping & Inventory</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div>\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide class="store">\n        <ion-list>\n          <ion-item no-lines *ngIf="maincategory">\n            <ion-label stacked>Main Category</ion-label>\n            <ion-select [(ngModel)]="product.pr_main_category_id" placeholder="Select Main Category" (ionChange)="selectCat($event)">\n              <ion-option *ngFor="let cat of maincategory" value="{{cat.id}}">{{cat.main_category_name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item no-lines *ngIf="category">\n            <ion-label stacked>Category</ion-label>\n            <ion-select [(ngModel)]="product.pr_category_id" placeholder="Select Category" (ionChange)="selectSubCat($event)">\n              <ion-option *ngFor="let cat of category" value="{{cat.id}}">{{cat.category_name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item no-lines *ngIf="subcategory">\n            <ion-label stacked>Sub Category</ion-label>\n            <ion-select [(ngModel)]="product.pr_sub_category_id" placeholder="Select Sub Category">\n              <ion-option *ngFor="let service of subcategory" value="{{service.id}}">{{service.sub_category_name}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item no-lines>\n             <button (click)="onSubmit(\'1\')" style="padding: 15px;font-size: 13px;" margin-top\n              ion-button block type="submit">Next</button>\n            </ion-item>\n        </ion-list>\n      </ion-slide>\n\n      <ion-slide class="location">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label stacked>Product Name </ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_name"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Brand Name </ion-label>\n            <ion-input type="text" [(ngModel)]="product.brand_name"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Description</ion-label>\n            <ion-textarea rows="4" [(ngModel)]="product.pr_description"></ion-textarea>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Product Warranty</ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_description_warranty"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Variation (Colors)</ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_colors"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Sizes</ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_sizes"></ion-input>\n          </ion-item>\n          <ion-item no-lines> \n            <button (click)="onSubmit(\'2\')" style="padding: 15px;font-size: 13px;" margin-top\n              ion-button block type="submit">Next</button>\n            </ion-item>\n        </ion-list>\n      </ion-slide>\n\n      <ion-slide class="contact">\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label stacked>Price</ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_original_amount"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Discount on Product</ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_discount_percentage"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Search Keyword</ion-label>\n            <ion-input type="text" [(ngModel)]="product.search_keywords"></ion-input>\n          </ion-item>\n          <ion-item no-lines> \n            <button style="padding: 15px;font-size: 13px;" (click)="onSubmit(\'3\')" margin-top\n              ion-button block type="submit">Next</button>\n            </ion-item>\n        </ion-list>\n      </ion-slide>\n\n      <ion-slide class="social">\n\n        <ion-list>\n          <ion-item no-lines>\n            <ion-label stacked>Stock in Inventory</ion-label>\n            <ion-input type="text" [(ngModel)]="product.pr_inventory_stock"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Shipping Type</ion-label>\n            <ion-input type="text" [(ngModel)]="product.shipping_type"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Shipping Charge</ion-label>\n            <ion-input type="text" [(ngModel)]="product.shipping_charge_amount"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Min Days of Delivery</ion-label>\n            <ion-input placeholder="0" type="tel" [(ngModel)]="product.delivery_min_num_of_day"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Max Days of Delivery</ion-label>\n            <ion-input placeholder="0" type="tel" [(ngModel)]="product.delivery_max_num_of_day"></ion-input>\n          </ion-item>\n          <ion-item no-lines> \n            <button (click)="onSubmit(\'s\')" style="padding: 15px;font-size: 13px;" margin-top\n              ion-button block type="submit">Submit</button>\n            </ion-item>\n        </ion-list>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\edit-product\edit-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_product__["a" /* ProductProvider */]])
    ], EditProductPage);
    return EditProductPage;
}());

//# sourceMappingURL=edit-product.js.map

/***/ })

});
//# sourceMappingURL=23.js.map