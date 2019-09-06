webpackJsonp([36],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateOfferPageModule", function() { return CreateOfferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_offer__ = __webpack_require__(435);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateOfferPageModule = /** @class */ (function () {
    function CreateOfferPageModule() {
    }
    CreateOfferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__create_offer__["a" /* CreateOfferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_offer__["a" /* CreateOfferPage */]),
            ],
        })
    ], CreateOfferPageModule);
    return CreateOfferPageModule;
}());

//# sourceMappingURL=create-offer.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store_offer__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
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
 * Generated class for the CreateOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CreateOfferPage = /** @class */ (function () {
    function CreateOfferPage(toastCtrl, offerProvider, formBuilder, navCtrl, storage, navParams) {
        var _this = this;
        this.toastCtrl = toastCtrl;
        this.offerProvider = offerProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
        var d = new Date(), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), dayplus = '' + (d.getDate() + 1), year = d.getFullYear();
        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;
        if (dayplus.length < 2)
            dayplus = '0' + dayplus;
        this.edit = this.formBuilder.group({
            description: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            end_date: [[year, month, dayplus].join('-'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            offer_percenage: [0, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            offer_title: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            start_date: [[year, month, day].join('-'), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
        });
    }
    CreateOfferPage.prototype.getdata = function (token) {
        this.token = token;
    };
    CreateOfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditOfferPage');
    };
    CreateOfferPage.prototype.onSubmit = function () {
        var _this = this;
        this.offerProvider.createOfferr(this.edit.value, this.token).subscribe(function (res) {
            if (res.status) {
                _this.edit.reset();
            }
            var toast = _this.toastCtrl.create({
                message: res.message,
                duration: 3000
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        });
    };
    CreateOfferPage.prototype.disable_enable = function (event) {
        this.edit.value.visible_status = event._value ? '1' : '0';
        console.log(this.edit.value.visible_status);
    };
    CreateOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-offer',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\create-offer\create-offer.html"*/'<!--\n  Generated template for the CreateOfferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Create Offer</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="edit" (ngSubmit)="onSubmit()">\n	      <ion-item no-lines>\n	        <ion-label floating>Title <span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="offer_title"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label floating>Percentage <span style="color: red;">*</span></ion-label>\n	        <ion-input type="tel" formControlName="offer_percenage"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label floating>Description <span style="color: red;">*</span></ion-label>\n	        <ion-textarea rows="5" formControlName="description"></ion-textarea>\n	      </ion-item>\n	      <ion-item no-lines>\n			<ion-label floating>Offer From <span style="color: red;">*</span></ion-label>\n			<ion-datetime displayFormat="MMMM DD YYYY" pickerFormat="YYYY-MM-DD" formControlName="start_date"></ion-datetime>\n		  </ion-item>\n	      <ion-item no-lines>\n			<ion-label floating>Offer Till <span style="color: red;">*</span></ion-label>\n			<ion-datetime displayFormat="MMMM DD YYYY" pickerFormat="YYYY-MM-DD" formControlName="end_date"></ion-datetime>\n		  </ion-item>\n	      <button margin-top ion-button block type="submit" [disabled]="!edit.valid">Submit</button>\n	    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\create-offer\create-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_store_offer__["a" /* OfferProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], CreateOfferPage);
    return CreateOfferPage;
}());

//# sourceMappingURL=create-offer.js.map

/***/ })

});
//# sourceMappingURL=36.js.map