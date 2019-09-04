webpackJsonp([20],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(444);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProfilePageModule = /** @class */ (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, toastCtrl, storage, auth) {
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
    EditProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EditProfilePage');
    };
    EditProfilePage.prototype.get_dashboard = function (token) {
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
    EditProfilePage.prototype.updateProfile = function () {
        var _this = this;
        console.log(this.dashboardme);
        this.auth.updateUser(this.dashboardme).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res.message);
        });
    };
    EditProfilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    EditProfilePage.prototype.resendEmailVerification = function () {
        var _this = this;
        this.auth.resendEmail(this.dashboardme.token).subscribe(function (res) {
            console.log(res);
            _this.presentToast(res.message);
        });
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\edit-profile\edit-profile.html"*/'<!--\n  Generated template for the EditProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary">\n      <ion-title>Edit Profile</ion-title>\n      <ion-buttons end>\n         <button ion-button>\n            <!-- <ion-icon name="log-out"></ion-icon> -->\n         </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n   <div class="dt-root">\n      <div class="dt-card">\n\n         <div id="tab-pane-3" #emailPane class="tab-pane active">\n            <div class="card-body">\n               <div class="row">\n                  <div class="col-md-12">\n                     <h4 class="profile_tab_title">General Details</h4>\n                     <p class="text-center" *ngIf="dashboardme?.email_verify_status==\'0\'"><span\n                           style="color: red; font-size: 12px; ">Attention Please ! Please complete the email\n                           verification of this account to continue.</span></p>\n                     <div class="edit_form">\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">Full Name <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input [(ngModel)]="dashboardme.full_name" type="text" class="form-control" id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">Email <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="email" readonly [(ngModel)]="dashboardme.email_id" class="form-control"\n                                    id="email">\n                                 <a style="color: #127cc0; font-size: 12px; float: right;cursor: pointer;"\n                                    (click)=resendEmailVerification() *ngIf="dashboardme?.email_verify_status==\'0\'">\n                                    Resend Email Verify</a>\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">Mobile <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="tel" [(ngModel)]="dashboardme.mobile_number" class="form-control"\n                                    id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <h4>Communication Address</h4>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">Address Line <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="text" [(ngModel)]="dashboardme.address_line_one" class="form-control"\n                                    id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">Address Line 2:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="text" [(ngModel)]="dashboardme.address_line_two" class="form-control"\n                                    id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">City <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="text" [(ngModel)]="dashboardme.city_name" class="form-control" id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">State <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="text" [(ngModel)]="dashboardme.state_name" class="form-control"\n                                    id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                              <label for="email">Pincode <span style="color: red;">*</span>:</label>\n                           </div>\n                           <div class="col-md-6">\n                              <div class="form-group package_buy_input">\n                                 <input type="text" [(ngModel)]="dashboardme.pincode" class="form-control" id="email">\n                              </div>\n                           </div>\n                        </div>\n                        <div class="row">\n                           <div class="col-md-3">\n                           </div>\n                           <div class="col-md-6 text-right">\n                              <button ion-button type="submit" block (click)="updateProfile()">Update</button>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\edit-profile\edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ })

});
//# sourceMappingURL=20.js.map