webpackJsonp([26],{

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductPageModule", function() { return AddProductPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_product__ = __webpack_require__(439);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AddProductPageModule = /** @class */ (function () {
    function AddProductPageModule() {
    }
    AddProductPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__add_product__["a" /* AddProductPage */]),
            ],
        })
    ], AddProductPageModule);
    return AddProductPageModule;
}());

//# sourceMappingURL=add-product.module.js.map

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_product__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants_service__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(15);
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
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AddProductPage = /** @class */ (function () {
    function AddProductPage(navCtrl, toastCtrl, storage, navParams, productProvider, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.formBuilder = formBuilder;
        this.segment = "0";
        this.countries = __WEBPACK_IMPORTED_MODULE_4__services_constants_service__["c" /* COUNTRY_LIST */];
        this.store = this.formBuilder.group({
            pr_name: [""],
            brand_name: [""],
            pr_main_category_id: [""],
            pr_category_id: [""],
            pr_sub_category_id: ["", [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].required]],
            shipping_type: [""],
            shipping_charge_amount: [""],
            delivery_min_num_of_day: [""],
            delivery_max_num_of_day: [""],
            pr_description: [""],
            search_keywords: [""],
            country_publication_id: [""],
            pr_description_warranty: [""],
            pr_colors: [""],
            pr_sizes: [""],
            pr_original_amount: [""],
            pr_discount_percentage: [""],
            pr_inventory_stock: [""]
        });
        this.storage.get("me").then(function (val) {
            _this.getdata(val.token);
        });
    }
    AddProductPage.prototype.openImage = function () {
        document.getElementById('pr-image').click();
    };
    AddProductPage.prototype.getdata = function (token) {
        var _this = this;
        this.token = token;
        this.productProvider.getMainCategory().subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.maincategory = data.message;
            }
        });
    };
    AddProductPage.prototype.shippingCharge = function (eve) {
        eve = parseInt(eve);
        console.log(eve);
        if (eve == 0) {
            this.store.value.shipping_charge_amount = eve;
            console.log(this.store.value);
        }
    };
    AddProductPage.prototype.selectSubCat = function (category_id) {
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
    AddProductPage.prototype.selectCat = function (id) {
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
    AddProductPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad ListStorePage");
        this.slides.lockSwipes(true);
    };
    AddProductPage.prototype.segmentChanged = function (eve) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(parseInt(eve._value), 500);
        this.slides.lockSwipes(true);
    };
    AddProductPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.segment = currentIndex + "";
    };
    AddProductPage.prototype.changeListener = function ($event) {
        this.file = $event.target.files[0];
    };
    AddProductPage.prototype.imageUpload = function () {
        document.getElementById("imageUpload").click();
    };
    AddProductPage.prototype.onSubmit = function (nextSlide) {
        var _this = this;
        console.log(nextSlide);
        console.log(this.store.value);
        if (nextSlide == "s") {
            this.productProvider
                .create(this.token, this.store.value)
                .subscribe(function (res) {
                console.log(res);
                if (res.satus) {
                    _this.store.reset();
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
    ], AddProductPage.prototype, "slides", void 0);
    AddProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-add-product",template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\add-product\add-product.html"*/'<!--\n  Generated template for the ListProductPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Add Product</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  \n  <ion-segment (ionChange)="segmentChanged($event)" mode="md" [(ngModel)]="segment">\n    <ion-segment-button value="0">\n      <ion-label>Product Category</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="1">\n      <ion-label>Product Info</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="2">\n      <ion-label>ProductPricing</ion-label>\n    </ion-segment-button>\n    <ion-segment-button value="3">\n      <ion-label>Shipping & Inventory</ion-label>\n    </ion-segment-button>\n  </ion-segment>\n\n  <div>\n    <ion-slides (ionSlideDidChange)="slideChanged()">\n      <ion-slide class="store">\n        <form [formGroup]="store" (ngSubmit)="onSubmit(\'1\')">\n          <ion-item no-lines>\n            <ion-label stacked>Main Category</ion-label>\n            <ion-select formControlName="pr_main_category_id" placeholder="Select Main Category"\n              (ionChange)="selectCat($event)">\n              <ion-option *ngFor="let cat of maincategory" value="{{cat.id}}">{{cat.main_category_name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Category</ion-label>\n            <ion-select formControlName="pr_category_id" placeholder="Select Category"\n              (ionChange)="selectSubCat($event)">\n              <ion-option *ngFor="let cat of category" value="{{cat.id}}">{{cat.category_name}}</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Sub Category</ion-label>\n            <ion-select formControlName="pr_sub_category_id" placeholder="Select Sub Category">\n              <ion-option *ngFor="let service of subcategory" value="{{service.id}}">{{service.sub_category_name}}\n              </ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top ion-button block\n              type="submit">Next</button></ion-item>\n        </form>\n      </ion-slide>\n\n      <ion-slide class="location">\n        <form [formGroup]="store" (ngSubmit)="onSubmit(\'2\')">\n          <ion-item no-lines>\n            <ion-label stacked>Product Name </ion-label>\n            <ion-input type="text" formControlName="pr_name"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Brand Name </ion-label>\n            <ion-input type="text" formControlName="brand_name"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Description</ion-label>\n            <ion-textarea rows="4" formControlName="pr_description"></ion-textarea>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Product Warranty</ion-label>\n            <ion-input type="text" formControlName="pr_description_warranty"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Variation (Colors)</ion-label>\n            <ion-input type="text" formControlName="pr_colors"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Sizes</ion-label>\n            <ion-input type="text" formControlName="pr_sizes"></ion-input>\n          </ion-item>\n          <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top ion-button block\n              type="submit">Next</button></ion-item>\n        </form>\n      </ion-slide>\n\n      <ion-slide class="contact">\n        <form [formGroup]="store" (ngSubmit)="onSubmit(\'3\')">\n          <ion-item no-lines>\n            <ion-label stacked>Price</ion-label>\n            <ion-input type="number" formControlName="pr_original_amount"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Discount on Product</ion-label>\n            <ion-input type="number" formControlName="pr_discount_percentage"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Search Keyword</ion-label>\n            <ion-input type="text" formControlName="search_keywords"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <!-- <ion-label stacked>Upload Image </ion-label> -->\n            <button (click)="openImage()" type="button" ion-button block style="padding: 15px;font-size: 13px;" item-end icon-start>\n              <ion-icon name="image"></ion-icon>\n              Add Product Image\n            </button>\n          </ion-item>\n          <!-- <input type="file" (change)="changeListener($event)" name="pr-image" id="pr-image" style="visibility: hidden">\n          <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top ion-button block\n              type="submit">Next</button></ion-item> -->\n        </form>\n      </ion-slide>\n\n      <ion-slide class="social">\n\n        <form [formGroup]="store" (ngSubmit)="onSubmit(\'s\')">\n          <ion-item no-lines>\n            <ion-label stacked>Stock in Inventory</ion-label>\n            <ion-input type="number" formControlName="pr_inventory_stock"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Shipping Type</ion-label>\n            <!-- <ion-input type="text" formControlName="shipping_type"></ion-input> -->\n            <ion-select formControlName="shipping_type" placeholder="Select Shipping Type"\n            (ionChange)="shippingCharge($event)">\n            <ion-option value="0">Free Delivery</ion-option>\n            <ion-option value="1">Paid Delivery</ion-option>\n          </ion-select>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Shipping Charge </ion-label>\n            <ion-input type="number" [(ngModel)]="store.value.shipping_charge_amount" formControlName="shipping_charge_amount"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Min Days of Delivery</ion-label>\n            <ion-input placeholder="0" type="number" formControlName="delivery_min_num_of_day"></ion-input>\n          </ion-item>\n          <ion-item no-lines>\n            <ion-label stacked>Max Days of Delivery</ion-label>\n            <ion-input placeholder="0" type="number" formControlName="delivery_max_num_of_day"></ion-input>\n          </ion-item>\n          <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top ion-button block\n              type="submit">Submit</button></ion-item>\n        </form>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\add-product\add-product.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]])
    ], AddProductPage);
    return AddProductPage;
}());

//# sourceMappingURL=add-product.js.map

/***/ })

});
//# sourceMappingURL=26.js.map