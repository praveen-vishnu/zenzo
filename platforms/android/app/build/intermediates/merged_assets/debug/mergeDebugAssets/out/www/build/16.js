webpackJsonp([16],{

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateSocialPageModule", function() { return UpdateSocialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__update_social__ = __webpack_require__(449);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UpdateSocialPageModule = /** @class */ (function () {
    function UpdateSocialPageModule() {
    }
    UpdateSocialPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__update_social__["a" /* UpdateSocialPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__update_social__["a" /* UpdateSocialPage */]),
            ],
        })
    ], UpdateSocialPageModule);
    return UpdateSocialPageModule;
}());

//# sourceMappingURL=update-social.module.js.map

/***/ }),

/***/ 449:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateSocialPage; });
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
 * Generated class for the UpdateSocialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UpdateSocialPage = /** @class */ (function () {
    function UpdateSocialPage(navCtrl, navParams, toastCtrl, storage, auth) {
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
    UpdateSocialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    UpdateSocialPage.prototype.get_dashboard = function (token) {
        var _this = this;
        this.auth.getDash(token).subscribe(function (res) {
            if (res.status) {
                _this.storage.set('me', res.message);
                _this.dashboardme = res.message;
            }
        });
    };
    UpdateSocialPage.prototype.updatesocial = function () {
        var _this = this;
        console.log(this.dashboardme);
        this.auth.updateSocial(this.dashboardme).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res.message);
        });
    };
    UpdateSocialPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UpdateSocialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-update-social',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\update-social\update-social.html"*/'<!--\n  Generated template for the ChangePasswordPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title >Update Social </ion-title>\n    <ion-buttons end>\n      <button ion-button >\n        <!-- <ion-icon name="log-out"></ion-icon> -->\n      </button>\n     </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n<div class="dt-root">\n    <div class="dt-card">\n\n                              <div id="tab-pane-3" #emailPane class="tab-pane active">\n                                 <div class="card-body">\n                                    <div class="row">\n                                       <div class="col-md-12">\n                                          <form #socialform style="overflow: hidden;">\n                                       <div class="row">\n                                          <div class="col-md-3 ">\n                                             <label for="email">Facebook:</label>\n                                          </div>\n                                          <div class="col-md-6">\n                                             <div class="input-group">\n                                                <span class="input-group-addon">facebook.com/</span>\n                                                <input id="email" type="text" class="form-control" name="facebook" [(ngModel)]="dashboardme.facebook">\n                                             </div>\n                                          </div>\n                                       </div>\n                                       <div class="row">\n                                          <div class="col-md-3 ">\n                                             <label for="email">Twitter:</label>\n                                          </div>\n                                          <div class="col-md-6">\n                                             <div class="input-group">\n                                                <span class="input-group-addon">twitter.com/</span>\n                                                <input id="email" type="text" class="form-control" name="twitter" [(ngModel)]="dashboardme.twitter">\n                                             </div>\n                                          </div>\n                                       </div>\n                                       <div class="row">\n                                          <div class="col-md-3 ">\n                                             <label for="email">Instagram:</label>\n                                          </div>\n                                          <div class="col-md-6">\n                                             <div class="input-group">\n                                                <span class="input-group-addon">instagram.com/</span>\n                                                <input id="email" type="text" class="form-control"  name="instagram" [(ngModel)]="dashboardme.instagram">\n                                             </div>\n                                          </div>\n                                       </div>\n                                       <div class="row">\n                                          <div class="col-md-3 ">\n                                             <label for="email">Telegram:</label>\n                                          </div>\n                                          <div class="col-md-6">\n                                             <div class="input-group">\n                                                <span class="input-group-addon">telegram.com/</span>\n                                                <input id="email" type="text" class="form-control" name="telegram" [(ngModel)]="dashboardme.telegram">\n                                             </div>\n                                          </div>\n                                       </div>\n                                       <div class="row">\n                                          <div class="col-md-3 ">\n                                          </div>\n                                          <div class="col-md-6 text-right">\n                                             <button type="submit" (click)="updatesocial()" ion-button block>Update</button>\n                                          </div>\n                                       </div>\n                                    </form>\n                                       </div>\n                                    </div>\n                                 </div>\n                              </div>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\update-social\update-social.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], UpdateSocialPage);
    return UpdateSocialPage;
}());

//# sourceMappingURL=update-social.js.map

/***/ })

});
//# sourceMappingURL=16.js.map