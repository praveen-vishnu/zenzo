webpackJsonp([2],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewStoreImagesPageModule", function() { return ViewStoreImagesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_store_images__ = __webpack_require__(464);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewStoreImagesPageModule = /** @class */ (function () {
    function ViewStoreImagesPageModule() {
    }
    ViewStoreImagesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_store_images__["a" /* ViewStoreImagesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_store_images__["a" /* ViewStoreImagesPage */]),
            ],
        })
    ], ViewStoreImagesPageModule);
    return ViewStoreImagesPageModule;
}());

//# sourceMappingURL=view-store-images.module.js.map

/***/ }),

/***/ 464:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewStoreImagesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_store__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libphonenumber_js__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants_service__ = __webpack_require__(13);
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
 * Generated class for the ViewStoreImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewStoreImagesPage = /** @class */ (function () {
    function ViewStoreImagesPage(navCtrl, toastCtrl, storage, navParams, storeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.storeProvider = storeProvider;
        this.countries = __WEBPACK_IMPORTED_MODULE_5__services_constants_service__["c" /* COUNTRY_LIST */];
        this.tabswitch = 'About';
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    ViewStoreImagesPage.prototype.getdata = function (token) {
        var _this = this;
        this.token = token;
        this.storeProvider.getStoreDetail(token).subscribe(function (resp) {
            console.log(resp);
            if (resp.status) {
                _this.storeDetail = resp.message;
            }
        });
        this.storeProvider.getCategoryList().subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.category = data.message;
            }
        });
    };
    ViewStoreImagesPage.prototype.phoneMask = function (phoneValue, country) {
        var country_id = this.getCountry(country);
        try {
            var phoneNumber = Object(__WEBPACK_IMPORTED_MODULE_4_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(country_id + phoneValue);
            return phoneNumber.formatNational();
        }
        catch (error) {
            return phoneValue;
        }
    };
    ViewStoreImagesPage.prototype.getphoneuri = function (phoneValue, country) {
        var country_id = this.getCountry(country);
        console.log(country_id);
        try {
            var phoneNumber = Object(__WEBPACK_IMPORTED_MODULE_4_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(country_id + phoneValue);
            return phoneNumber.getURI();
        }
        catch (error) {
            return phoneValue;
        }
    };
    ViewStoreImagesPage.prototype.goToEdit = function () {
        this.navCtrl.push('EditStorePage', { store: this.storeDetail });
    };
    ViewStoreImagesPage.prototype.reviewRatings = function (val) {
        var rating = [];
        for (var i = 0; i < parseInt(val); i++) {
            rating.push('star');
        }
        return rating;
    };
    ViewStoreImagesPage.prototype.getCountry = function (id) {
        if (id) {
            return this.countries.filter(function (country) { return country.country_id == id; })[0].country_code;
        }
    };
    ViewStoreImagesPage.prototype.getCatName = function (val) {
        if (val) {
            return this.category.filter(function (cat) { return cat.id == val; })[0].category_name;
        }
    };
    ViewStoreImagesPage.prototype.getPaymentMethod = function (str) {
        if (str) {
            var res = str.split(",");
            var payment = [];
            if (this.findInArray(res, '1') >= 0) {
                payment.push('Cash');
            }
            if (this.findInArray(res, '2') >= 0) {
                payment.push('Credit Card');
            }
            if (this.findInArray(res, '3') >= 0) {
                payment.push('Debit Card');
            }
            var method = payment.toString();
            var regex = /,/gi;
            return method.replace(regex, '/');
        }
    };
    ViewStoreImagesPage.prototype.findInArray = function (ar, val) {
        for (var i = 0, len = ar.length; i < len; i++) {
            if (ar[i] === val) {
                return i;
            }
        }
        return -1;
    };
    ViewStoreImagesPage.prototype.addMoreImages = function () {
        document.getElementById('add_other_images').click();
    };
    ViewStoreImagesPage.prototype.getOtherImage = function (files) {
        var _this = this;
        var form_data = new FormData();
        this.storeProvider.UploadOtherImage(this.token, files.item(0), this.storeDetail.id).subscribe(function (res4) {
            if (res4.status) {
                _this.presentToast(res4.message);
                _this.storage.get('me').then(function (val) {
                    _this.getdata(val.token);
                });
            }
            else {
                _this.presentToast(res4.message);
            }
        });
    };
    ViewStoreImagesPage.prototype.enable_disable = function (val) {
        var _this = this;
        var form_data = new FormData();
        console.clear();
        form_data.append('visible_status', val);
        form_data.append("token", localStorage.getItem('token'));
        this.storeProvider.storeEnableDisable(this.token, val).subscribe(function (res4) {
            if (res4.status) {
                _this.presentToast(res4.message);
                _this.storage.get('me').then(function (val) {
                    _this.getdata(val.token);
                });
            }
            else {
                _this.presentToast(res4.message);
            }
        });
    };
    ViewStoreImagesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewStorePage');
    };
    ViewStoreImagesPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ViewStoreImagesPage.prototype.deleteImage = function (other_image_id) {
        var _this = this;
        this.storeProvider.removeStoreImage(this.token, other_image_id).subscribe(function (res4) {
            if (res4.status) {
                _this.presentToast(res4.message);
                _this.storage.get('me').then(function (val) {
                    _this.getdata(val.token);
                });
            }
            else {
                _this.presentToast(res4.message);
            }
        });
    };
    ViewStoreImagesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-store-images',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\view-store-images\view-store-images.html"*/'<!--\n  Generated template for the ViewStoreImagesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view-store-images</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\view-store-images\view-store-images.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_store__["a" /* StoreProvider */]])
    ], ViewStoreImagesPage);
    return ViewStoreImagesPage;
}());

//# sourceMappingURL=view-store-images.js.map

/***/ })

});
//# sourceMappingURL=2.js.map