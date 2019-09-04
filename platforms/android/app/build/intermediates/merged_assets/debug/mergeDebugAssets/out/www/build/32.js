webpackJsonp([32],{

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStorePageModule", function() { return EditStorePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_store__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditStorePageModule = /** @class */ (function () {
    function EditStorePageModule() {
    }
    EditStorePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_store__["a" /* EditStorePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_store__["a" /* EditStorePage */]),
            ],
        })
    ], EditStorePageModule);
    return EditStorePageModule;
}());

//# sourceMappingURL=edit-store.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditStorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_store__ = __webpack_require__(50);
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
 * Generated class for the EditStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditStorePage = /** @class */ (function () {
    function EditStorePage(navCtrl, toastCtrl, storage, navParams, storeProvider, formBuilder) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.storeProvider = storeProvider;
        this.formBuilder = formBuilder;
        this.segment = '0';
        this.countries = __WEBPACK_IMPORTED_MODULE_4__services_constants_service__["c" /* COUNTRY_LIST */];
        this.editStore = navParams.get('store');
        this.store = this.formBuilder.group({
            store_name: [this.editStore.store_name],
            store_tag_line: [this.editStore.store_tag_line],
            store_category_id: [this.editStore.store_category_id],
            store_image: [this.editStore.store_image],
            store_services_ids: [this.editStore.store_services_ids],
            store_description: [this.editStore.store_description],
            payment_receive_ids: [this.editStore.payment_receive_ids],
            google_map_link: [this.editStore.google_map_link],
            store_address: [this.editStore.store_address],
            state_name: [this.editStore.state_name],
            city_name: [this.editStore.city_name],
            pincode: [this.editStore.pincode],
            country_id: [this.editStore.country_id],
            landline_number: [this.editStore.landline_number],
            contact_number_one: [this.editStore.contact_number_one],
            contact_number_two: [this.editStore.contact_number_two],
            contact_email_id: [this.editStore.contact_email_id],
            website_link: [this.editStore.website_link],
            facebook: [this.editStore.facebook],
            twitter: [this.editStore.twitter],
            linkedin: [this.editStore.linkedin],
            telegram: [this.editStore.telegram],
            instagram: [this.editStore.instagram],
            other: [this.editStore.other],
        });
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    EditStorePage.prototype.getdata = function (token) {
        var _this = this;
        this.token = token;
        this.storeProvider.getCategoryList().subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.category = data.message;
            }
        });
    };
    EditStorePage.prototype.selectCat = function (id) {
        var _this = this;
        console.log(id);
        this.services = [];
        this.storeProvider.getServicesList(id).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.services = data.message;
            }
        });
    };
    EditStorePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditStorePage');
        this.slides.lockSwipes(true);
    };
    EditStorePage.prototype.segmentChanged = function (eve) {
        this.slides.lockSwipes(false);
        this.slides.slideTo(parseInt(eve._value), 500);
        this.slides.lockSwipes(true);
    };
    EditStorePage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex();
        this.segment = currentIndex + '';
    };
    EditStorePage.prototype.changeListener = function ($event) {
        this.file = this.store.value.store_image = $event.target.files[0];
        console.log(this.store.value);
    };
    EditStorePage.prototype.imageUpload = function () {
        document.getElementById('imageUpload').click();
    };
    EditStorePage.prototype.onSubmit = function (nextSlide) {
        var _this = this;
        console.log(nextSlide);
        this.store.value.payment_receive_ids = this.store.value.payment_receive_ids.toString();
        this.store.value.store_services_ids = this.store.value.store_services_ids.toString();
        console.log(this.store.value);
        if (nextSlide == 's') {
            this.storeProvider.editStore(this.token, this.store.value).subscribe(function (res) {
                console.log(res);
                if (res.satus) {
                    _this.store.reset();
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
    ], EditStorePage.prototype, "slides", void 0);
    EditStorePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-store',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\edit-store\edit-store.html"*/'<!--\n  Generated template for the EditStorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Edit Your Store</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n<ion-segment (ionChange)="segmentChanged($event)" mode="md" [(ngModel)]="segment">\n  <ion-segment-button value="0">\n    <ion-label>Store</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="1">\n    <ion-label>Location</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="2">\n    <ion-label>Contact</ion-label>\n  </ion-segment-button>\n  <ion-segment-button value="3">\n    <ion-label>Social</ion-label>\n  </ion-segment-button>\n</ion-segment>\n\n\n<ion-slides (ionSlideDidChange)="slideChanged()">\n\n  <ion-slide class="store">\n  	<form [formGroup]="store" (ngSubmit)="onSubmit(\'1\')" style="margin-top: 65px;">\n	      <ion-item no-lines>\n	        <ion-label stacked>Store Name <span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="store_name"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Tagline</ion-label>\n	        <ion-input type="text" formControlName="store_tag_line"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Business Category</ion-label>\n	        <ion-select formControlName="store_category_id" placeholder="Select Category" (ionChange)="selectCat($event)">\n		      <ion-option *ngFor="let cat of category" value="{{cat.id}}">{{cat.category_name}}</ion-option>\n		    </ion-select>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Services</ion-label>\n	        <ion-select  formControlName="store_services_ids" multiple="true" placeholder="Select Service">\n		      <ion-option *ngFor="let service of services" value="{{service.id}}">{{service.service_name}}</ion-option>\n		    </ion-select>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Description</ion-label>\n	        <ion-textarea rows="4" formControlName="store_description"></ion-textarea>\n	      </ion-item>\n	      <ion-item no-lines>\n			<ion-label stacked>Add Store Image <span style="font-size: 12px;">(Max 1mb, png or jpeg only)</span> <span style="color: red;">*</span></ion-label>\n			<!-- <button ion-button block (click)="imageUpload()">Upload Image</button> -->\n      		<ion-input type="file" accept="image/*"  id="imageUpload" (change)="changeListener($event)"></ion-input>\n		  </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Payment Accepted in Your Store</ion-label>\n	        <ion-select placeholder="Select Payment Method" formControlName="payment_receive_ids"  multiple="true">\n		      <ion-option value="1">Cash</ion-option>\n		      <ion-option value="2">Credit Card</ion-option>\n		      <ion-option value="3">Debit Card</ion-option>\n		    </ion-select>\n	      </ion-item> \n\n	      <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top  ion-button block type="submit">Next</button></ion-item>\n	    </form>\n  </ion-slide>\n\n  <ion-slide class="location">\n      	<form [formGroup]="store" (ngSubmit)="onSubmit(\'2\')">\n	      <ion-item no-lines>\n	        <ion-label stacked>Store Address Google Map Link </ion-label>\n	        <ion-input type="text" formControlName="google_map_link"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Store Address</ion-label>\n	        <ion-input type="text" formControlName="store_address"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>State</ion-label>\n	        <ion-input type="text" formControlName="state_name"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>City<span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="city_name"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Pincode</ion-label>\n	        <ion-input type="text" formControlName="pincode"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Country</ion-label>\n	        <ion-select placeholder="Select country" formControlName="country_id">\n		      <ion-option value="{{country.country_id}}" *ngFor="let country of countries;">{{country.country_name}}</ion-option>\n		    </ion-select>\n	      </ion-item> \n\n	      <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top  ion-button block type="submit">Next</button></ion-item>\n	    </form>\n  </ion-slide>\n\n  <ion-slide class="contact">\n    <form [formGroup]="store" (ngSubmit)="onSubmit(\'3\')">\n	      <ion-item no-lines>\n	        <ion-label stacked>Landline No</ion-label>\n	        <ion-input type="text" formControlName="landline_number"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Store Contact numbers <span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="contact_number_one"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Store Contact numbers 2</ion-label>\n	        <ion-input type="text" formControlName="contact_number_two"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Contact email Id <span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="contact_email_id"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Website</ion-label>\n	        <ion-input type="text" formControlName="website_link"></ion-input>\n	        <p>Stil dont have store website <a href="#">Create</a> Now</p>\n	      </ion-item>\n	      <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top  ion-button block type="submit">Next</button></ion-item>\n	    </form>\n  </ion-slide>\n\n  <ion-slide class="social">\n    \n    <form [formGroup]="store" (ngSubmit)="onSubmit(\'s\')">\n	      <ion-item no-lines>\n	        <ion-label stacked>Facebook</ion-label>\n	        <ion-input type="text" formControlName="facebook"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Twitter</ion-label>\n	        <ion-input type="text" formControlName="twitter"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>LinkedIn</ion-label>\n	        <ion-input type="text" formControlName="linkedin"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Telegram<span style="color: red;">*</span></ion-label>\n	        <ion-input type="text" formControlName="telegram"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>Instagram</ion-label>\n	        <ion-input type="text" formControlName="instagram"></ion-input>\n	      </ion-item>\n	      <ion-item no-lines>\n	        <ion-label stacked>other</ion-label>\n	        <ion-input type="text" formControlName="other"></ion-input>\n	      </ion-item>\n		  <p style="font-size: 11px;margin-top: 5px;"><a href="#"> Terms and Conditions / Privacy</a></p>\n	      <ion-item no-lines> <button style="padding: 15px;font-size: 13px;" margin-top  ion-button block type="submit">Submit</button></ion-item>\n	    </form>\n  </ion-slide>\n\n</ion-slides>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\edit-store\edit-store.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_store__["a" /* StoreProvider */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormBuilder */]])
    ], EditStorePage);
    return EditStorePage;
}());

//# sourceMappingURL=edit-store.js.map

/***/ })

});
//# sourceMappingURL=32.js.map