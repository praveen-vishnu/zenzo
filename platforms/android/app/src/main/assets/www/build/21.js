webpackJsonp([21],{

/***/ 393:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_password__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangePasswordPageModule = /** @class */ (function () {
    function ChangePasswordPageModule() {
    }
    ChangePasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_password__["a" /* ChangePasswordPage */]),
            ],
        })
    ], ChangePasswordPageModule);
    return ChangePasswordPageModule;
}());

//# sourceMappingURL=change-password.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordPage; });
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
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChangePasswordPage = /** @class */ (function () {
    function ChangePasswordPage(navCtrl, navParams, toastCtrl, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.auth = auth;
        this.dashboardme = [];
        this.passwordupdate = {
            old_password: '',
            new_password: '',
            confirm_password: '',
            token: ''
        };
        this.storage.get('me').then(function (val) {
            _this.get_dashboard(val.token);
            _this.passwordupdate.token = val.token;
        });
    }
    ChangePasswordPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChangePasswordPage');
    };
    ChangePasswordPage.prototype.get_dashboard = function (token) {
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
    ChangePasswordPage.prototype.updatepasswordform = function () {
        var _this = this;
        console.log(this.passwordupdate);
        this.auth.updatePassword(this.passwordupdate).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res.message);
            if (res.status) {
                _this.passwordupdate.old_password = '';
                _this.passwordupdate.new_password = '';
                _this.passwordupdate.confirm_password = '';
            }
        });
    };
    ChangePasswordPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ChangePasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-change-password',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\change-password\change-password.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title >Change Password</ion-title>\n    <ion-buttons end>\n      <button ion-button >\n        <!-- <ion-icon name="log-out"></ion-icon> -->\n      </button>\n     </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="dt-root">\n    <div class="dt-card">\n\n                              <div id="tab-pane-3" #emailPane class="tab-pane active">\n                                 <div class="card-body">\n                                    <div class="row">\n                                       <div class="col-md-12">\n                                          <form #form="ngForm">\n                                             <div class="row">\n                                                <div class="col-md-3 ">\n                                                   <label for="email">Old Password <span style="color: red;">*</span>:</label>\n                                                </div>\n                                                <div class="col-md-6">\n                                                   <div class="form-group package_buy_input">\n                                                      <input type="password" class="form-control" id="email" name="old_password" [(ngModel)]="passwordupdate.old_password">\n                                                   </div>\n                                                </div>\n                                             </div>\n                                             <div class="row">\n                                                <div class="col-md-3 ">\n                                                   <label for="email">New Password <span style="color: red;">*</span>:</label>\n                                                </div>\n                                                <div class="col-md-6">\n                                                   <div class="form-group package_buy_input">\n                                                      <input type="password" class="form-control" id="email" name="new_password" [(ngModel)]="passwordupdate.new_password">\n                                                   </div>\n                                                </div>\n                                             </div>\n                                             <div class="row">\n                                                <div class="col-md-3 ">\n                                                   <label for="email">Confirm New Password <span style="color: red;">*</span>:</label>\n                                                </div>\n                                                <div class="col-md-6">\n                                                   <div class="form-group package_buy_input">\n                                                      <input type="password" class="form-control" id="email" name="confirm_password" [(ngModel)]="passwordupdate.confirm_password">\n                                                   </div>\n                                                </div>\n                                             </div>\n                                             <div class="row">\n                                                <div class="col-md-3 ">\n                                                </div>\n                                                <div class="col-md-6 text-right">\n                                                   <button type="submit" (click)="updatepasswordform()" ion-button block>Update</button>\n                                                </div>\n                                             </div>\n                                          </form>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\change-password\change-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], ChangePasswordPage);
    return ChangePasswordPage;
}());

//# sourceMappingURL=change-password.js.map

/***/ })

});
//# sourceMappingURL=21.js.map