webpackJsonp([34],{

/***/ 380:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOfferPageModule", function() { return EditOfferPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_offer__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditOfferPageModule = /** @class */ (function () {
    function EditOfferPageModule() {
    }
    EditOfferPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_offer__["a" /* EditOfferPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_offer__["a" /* EditOfferPage */]),
            ],
        })
    ], EditOfferPageModule);
    return EditOfferPageModule;
}());

//# sourceMappingURL=edit-offer.module.js.map

/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store_offer__ = __webpack_require__(132);
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
 * Generated class for the EditOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditOfferPage = /** @class */ (function () {
    function EditOfferPage(toastCtrl, offerProvider, formBuilder, navCtrl, navParams) {
        this.toastCtrl = toastCtrl;
        this.offerProvider = offerProvider;
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.offer = navParams.get('offer');
        this.token = navParams.get('token');
        this.edit = this.formBuilder.group({
            date_n_time: [this.offer.date_n_time, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            date_only: [this.offer.date_only],
            description: [this.offer.description, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            end_date: [this.offer.end_date],
            offer_id: [this.offer.id],
            offer_percenage: [this.offer.offer_percenage],
            offer_status: [this.offer.offer_status],
            offer_title: [this.offer.offer_title],
            offer_unique_id: [this.offer.offer_unique_id],
            start_date: [this.offer.start_date],
            store_id: [this.offer.store_id],
            user_id: [this.offer.user_id],
            visible_status: [(this.offer.visible_status)],
            visiblity: [!!parseInt(this.offer.visible_status)],
        });
    }
    EditOfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditOfferPage');
    };
    EditOfferPage.prototype.onSubmit = function () {
        var _this = this;
        this.offerProvider.editOffer(this.edit.value, this.token).subscribe(function (res) {
            if (res.status) {
                _this.navCtrl.pop();
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
    EditOfferPage.prototype.disable_enable = function (event) {
        this.edit.value.visible_status = event._value ? '1' : '0';
        console.log(this.edit.value.visible_status);
    };
    EditOfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-offer',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\edit-offer\edit-offer.html"*/'<!--\n  Generated template for the EditOfferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary"><!-- \n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button> -->\n      <ion-title>Edit Offer</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n	<form [formGroup]="edit" (ngSubmit)="onSubmit()">\n	      <ion-item no-lines>\n	        <ion-label floating>Title <span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="offer_title"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label floating>Percentage <span style="color: red;">*</span></ion-label>\n	        <ion-input type="tel" formControlName="offer_percenage"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label floating>Description <span style="color: red;">*</span></ion-label>\n	        <ion-textarea rows="5" formControlName="description"></ion-textarea>\n	      </ion-item>\n	      <ion-item no-lines>\n			<ion-label floating>Offer From <span style="color: red;">*</span></ion-label>\n			<ion-datetime disabled displayFormat="MMMM DD YYYY" pickerFormat="YYYY-MM-DD" formControlName="start_date"></ion-datetime>\n		  </ion-item>\n	      <ion-item no-lines>\n			<ion-label floating>Offer Till <span style="color: red;">*</span></ion-label>\n			<ion-datetime disabled displayFormat="MMMM DD YYYY" pickerFormat="YYYY-MM-DD" formControlName="end_date"></ion-datetime>\n		  </ion-item>\n		  <ion-item no-lines>\n              <ion-label>Show / hide</ion-label>\n              <ion-toggle (ionChange)="disable_enable($event)" formControlName="visiblity"></ion-toggle>\n            </ion-item> \n\n	      <button margin-top  ion-button block type="submit" [disabled]="!edit.valid">Submit</button>\n	    </form>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\edit-offer\edit-offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_store_offer__["a" /* OfferProvider */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EditOfferPage);
    return EditOfferPage;
}());

//# sourceMappingURL=edit-offer.js.map

/***/ })

});
//# sourceMappingURL=34.js.map