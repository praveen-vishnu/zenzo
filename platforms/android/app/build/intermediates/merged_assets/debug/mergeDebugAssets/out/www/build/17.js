webpackJsonp([17],{

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdatePaymentPageModule", function() { return UpdatePaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_payment__ = __webpack_require__(448);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdatePaymentPageModule = /** @class */ (function () {
    function UpdatePaymentPageModule() {
    }
    UpdatePaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_payment__["a" /* UpdatePaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_payment__["a" /* UpdatePaymentPage */]),
            ],
        })
    ], UpdatePaymentPageModule);
    return UpdatePaymentPageModule;
}());

//# sourceMappingURL=update-payment.module.js.map

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdatePaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
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
 * Generated class for the UpdatePaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdatePaymentPage = /** @class */ (function () {
    function UpdatePaymentPage(navCtrl, navParams, toastCtrl, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.auth = auth;
        this.dashboardme = [];
        this.storage.get('me').then(function (val) {
            _this.get_dashboard(val.token);
        });
    }
    UpdatePaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    UpdatePaymentPage.prototype.get_dashboard = function (token) {
        var _this = this;
        console.clear();
        this.auth.getDash(token).subscribe(function (res) {
            if (res.status) {
                _this.storage.set('me', res.message);
                console.log(res.message);
                _this.dashboardme = res.message;
            }
        });
    };
    UpdatePaymentPage.prototype.updateBANKform = function () {
        var _this = this;
        console.log(this.dashboardme);
        this.auth.updatePayments(this.dashboardme).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res.message);
        });
    };
    UpdatePaymentPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UpdatePaymentPage.prototype.updateBTCform = function () {
        var _this = this;
        console.clear();
        console.log(this.dashboardme);
        this.auth.updateCrypto(this.dashboardme).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res.message);
        });
    };
    UpdatePaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-payment',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\update-payment\update-payment.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title >Update Social </ion-title>\n    <ion-buttons end>\n      <button ion-button >\n        <!-- <ion-icon name="log-out"></ion-icon> -->\n      </button>\n     </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="dt-root">\n    <div class="dt-card" padding>\n<h4 class="profile_tab_title">Payment Details</h4>\n                                    <div class="tab-content">\n                                       <div id="home" class="tab-pane fade in active show">\n                                          <div class="row">\n                                             <div class="col-md-12 mt-3" #bankhideref style="overflow: hidden;">\n                                                <h5><b>Bank</b></h5>\n                                                <form #form2="ngForm" (ngSubmit)="updateBANKform(form2)">\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                      <label for="email">Bank Name:</label>\n                                                   </div>\n                                                   <div class="col-md-6">\n                                                      <div class="form-group package_buy_input">\n                                                         <input type="email" class="form-control" id="email" [(ngModel)]="dashboardme.bank_name" name="bank_name">\n                                                      </div>\n                                                   </div>\n                                                </div>\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                      <label for="email">Branch:</label>\n                                                   </div>\n                                                   <div class="col-md-6">\n                                                      <div class="form-group package_buy_input">\n                                                         <input type="email" class="form-control" [(ngModel)]="dashboardme.bank_branch" name="bank_branch" id="email">\n                                                      </div>\n                                                   </div>\n                                                </div>\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                      <label for="email">Account Holder Name:</label>\n                                                   </div>\n                                                   <div class="col-md-6">\n                                                      <div class="form-group package_buy_input">\n                                                         <input type="email" class="form-control" [(ngModel)]="dashboardme.bank_holder_name" name="bank_holder_name" id="email">\n                                                      </div>\n                                                   </div>\n                                                </div>\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                      <label for="email">Account Number:</label>\n                                                   </div>\n                                                   <div class="col-md-6">\n                                                      <div class="form-group package_buy_input">\n                                                         <input type="tel" class="form-control" [(ngModel)]="dashboardme.bank_acc_number" name="bank_acc_number" id="email">\n                                                      </div>\n                                                   </div>\n                                                </div>\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                      <label for="email">IFSC Code:</label>\n                                                   </div>\n                                                   <div class="col-md-6">\n                                                      <div class="form-group package_buy_input">\n                                                         <input type="email" class="form-control" [(ngModel)]="dashboardme.bank_ifsc_code" name="bank_ifsc_code" id="email">\n                                                      </div>\n                                                   </div>\n                                                </div>\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                   </div>\n                                                   <div class="col-md-6 text-right">\n                                                      <button type="submit" ion-button block>Update</button>\n                                                   </div>\n                                                </div>\n                                                </form>\n                                               \n                                             </div>\n                                          </div>\n                                       </div>\n                                    </div>\n\n\n    </div>\n\n    <div class="dt-card" padding>\n<h4 class="profile_tab_title">Crypto Details</h4>\n                                    <div class="tab-content">\n                                       <div id="home" class="tab-pane fade in active show">\n                                          <div class="row">\n                                             <div class="col-md-12 mt-3" #bankhideref style="overflow: hidden;">\n                                               <h5 class="mt-5"><b>BTC</b></h5>\n                                                <form #form3="ngForm" (ngSubmit)="updateBTCform(form3)">\n                                                <div class="row">\n                                                   <div class="col-md-3">\n                                                      <label for="email">BTC Address:</label>\n                                                   </div>\n                                                   <div class="col-md-6">\n                                                      <div class="form-group package_buy_input">\n                                                         <input type="email" name="btc_address" [(ngModel)]="dashboardme.btc_address" class="form-control" id="email">\n                                                      </div>\n                                                   </div>\n                                                </div>\n                                                <div class="row">\n                                                   <div class="col-md-3 ">\n                                                   </div>\n                                                   <div class="col-md-6 text-right">\n                                                      <button type="submit" ion-button block>Update</button>\n                                                   </div>\n                                                </div>\n                                                </form>\n                                               \n                                             </div>\n                                          </div>\n                                       </div>\n                                    </div>\n                                  </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\update-payment\update-payment.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], UpdatePaymentPage);
    return UpdatePaymentPage;
}());

//# sourceMappingURL=update-payment.js.map

/***/ })

});
//# sourceMappingURL=17.js.map