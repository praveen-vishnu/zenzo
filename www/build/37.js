webpackJsonp([37],{

/***/ 377:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactRequestsPageModule", function() { return ContactRequestsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_requests__ = __webpack_require__(434);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ContactRequestsPageModule = /** @class */ (function () {
    function ContactRequestsPageModule() {
    }
    ContactRequestsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__contact_requests__["a" /* ContactRequestsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__contact_requests__["a" /* ContactRequestsPage */]),
            ],
        })
    ], ContactRequestsPageModule);
    return ContactRequestsPageModule;
}());

//# sourceMappingURL=contact-requests.module.js.map

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactRequestsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_store__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_libphonenumber_js__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_constants_service__ = __webpack_require__(12);
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
 * Generated class for the ContactRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactRequestsPage = /** @class */ (function () {
    function ContactRequestsPage(navCtrl, storage, navParams, storeProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.storeProvider = storeProvider;
        this.countries = __WEBPACK_IMPORTED_MODULE_5__services_constants_service__["c" /* COUNTRY_LIST */];
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    ContactRequestsPage.prototype.getdata = function (token) {
        var _this = this;
        this.storeProvider.getStoreDetail(token).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.storeDetail = data.message;
            }
        });
    };
    ContactRequestsPage.prototype.phoneMask = function (phoneValue) {
        var country_id = this.getCountry(this.storeDetail.country_id);
        try {
            var phoneNumber = Object(__WEBPACK_IMPORTED_MODULE_4_libphonenumber_js__["a" /* parsePhoneNumberFromString */])(country_id + phoneValue);
            return phoneNumber.formatInternational();
        }
        catch (error) {
            return phoneValue;
        }
    };
    ContactRequestsPage.prototype.getCountry = function (id) {
        return this.countries.filter(function (country) { return country.country_id == id; })[0].country_code;
    };
    ContactRequestsPage.prototype.getArray = function (array) {
        return Array.isArray(array);
    };
    ContactRequestsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactRequestsPage');
    };
    ContactRequestsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact-requests',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\contact-requests\contact-requests.html"*/'<!--\n   Generated template for the ContactRequestsPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Contact Requests</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div class="dt-root">\n      <div class="dt-card" margin-top>\n         <!-- Card Body -->\n         <div class="dt-card__body">\n            <h4>Your Contact Request</h4>\n            <!-- Tables -->\n            <div class="table-responsive">\n               <table id="data-table" class="table table-striped table-bordered table-hover">\n                  <thead>\n                     <tr>\n                        <th>#</th>\n                        <th>User Name</th>\n                        <th>User Email</th>\n                        <th>User Mobile</th>\n                        <th>Date</th>\n                        <th>Message</th>\n                        <th></th>\n                     </tr>\n                  </thead>\n                  <tbody *ngIf="!storeDetail?.contact_request_list">\n                     <td colspan="7">No Record Found</td>\n                  </tbody>\n                  <tbody *ngIf="storeDetail?.contact_request_list">\n                     <tr class="gradeX" *ngFor="let item of storeDetail?.contact_request_list;let i=index;">\n                        <td>{{i+1}}</td>\n                        <td>{{item[\'contact_user_name\']}}</td>\n                        <td>{{item[\'contact_email_id\']}}</td>\n                        <td>{{phoneMask(item[\'contact_mobile_number\'])}}</td>\n                        <td>{{item[\'date_n_time\']}}</td>\n                        <td>{{item[\'contact_message\']}}</td>\n                     </tr>\n                  </tbody>\n               </table>\n            </div>\n            <!-- /tables -->\n         </div>\n         <!-- /card body -->\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\manage-store\contact-requests\contact-requests.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_store__["a" /* StoreProvider */]])
    ], ContactRequestsPage);
    return ContactRequestsPage;
}());

//# sourceMappingURL=contact-requests.js.map

/***/ })

});
//# sourceMappingURL=37.js.map