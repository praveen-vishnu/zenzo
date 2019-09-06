webpackJsonp([48],{

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPageModule", function() { return ForgotPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forgot__ = __webpack_require__(423);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgotPageModule = /** @class */ (function () {
    function ForgotPageModule() {
    }
    ForgotPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__forgot__["a" /* ForgotPage */]),
            ],
        })
    ], ForgotPageModule);
    return ForgotPageModule;
}());

//# sourceMappingURL=forgot.module.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(129);
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
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ForgotPage = /** @class */ (function () {
    function ForgotPage(navCtrl, navParams, formBuilder, auth, menuCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.setNewPass = false;
        this.registerForm = this.formBuilder.group({
            login_id: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            forgot_otp: [''],
            forgot_unique_id: [this.forgot_unique_id]
        });
        this.passForm = this.formBuilder.group({
            new_password: [''],
            confirm_new_password: [''],
            forgot_unique_id: [this.forgot_unique_id],
            forgot_password_code: [this.forgot_password_code]
        });
    }
    ForgotPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ForgotPage');
        this.menuCtrl.enable(false, 'authenticated');
    };
    ForgotPage.prototype.ngOnInit = function () {
    };
    ForgotPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.forgot_unique_id) {
            this.registerForm.value.forgot_unique_id = this.forgot_unique_id;
            console.log(this.registerForm.value);
            this.auth.verify(this.registerForm.value)
                .subscribe(function (data) {
                console.log(data);
                _this.setNewPass = data[0].status;
                if (data[0].status) {
                    _this.presentToast(data[0].message.success_message);
                    _this.forgot_password_code = data[0].message.forgot_password_code;
                }
                else {
                    _this.presentToast(data[0].message.success_message);
                }
            }, function (error) {
                _this.presentToast(error);
            });
        }
        else {
            this.auth.forgot(this.registerForm.value)
                .subscribe(function (data) {
                console.log(data);
                if (data.status) {
                    _this.presentToast(data.message.success_message);
                    _this.forgot_unique_id = data.message.forgot_unique_id;
                    _this.registerForm.value.forgot_unique_id = data.message.forgot_unique_id;
                    console.log(_this.registerForm.value);
                    // this.router.navigate(['/login']);
                }
                else {
                    _this.presentToast(data.message);
                }
            }, function (error) {
                _this.presentToast(error);
            });
        }
    };
    ForgotPage.prototype.onPassSubmit = function () {
        var _this = this;
        this.passForm.value.forgot_unique_id = this.forgot_unique_id;
        this.passForm.value.forgot_password_code = this.forgot_password_code;
        this.auth.set_new_password(this.passForm.value)
            .subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.presentToast(data.message);
                _this.gotoLogin();
            }
            else {
                _this.presentToast(data.message);
            }
        }, function (error) {
            _this.presentToast(error);
        });
    };
    ForgotPage.prototype.gotoLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    ForgotPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ForgotPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-forgot',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\auth\forgot\forgot.html"*/'<ion-content>\n<div class="dt-root">\n\n    <!-- Login Container -->\n    <div class="dt-login--container dt-app-login--container">\n\n        <!-- Login Content -->\n        <div class="dt-login__content-wrapper">\n\n            <!-- Login Background Section -->\n            <div class="dt-login__bg-section dt-login__bg-section_login">\n\n                <div class="dt-login__bg-content">\n                    <!-- Login Title -->\n                    <h1 class="dt-login__title">Forgot Password</h1>\n                    <!-- /login title -->\n\n                    <p class="f-16">Here you can recover your password</p>\n \n                </div>\n\n\n                <!-- Brand logo -->\n                <div class="dt-login__logo">\n                    <a class="dt-brand__logo-link" href="/">\n                    <img class="dt-brand__logo-img" src="assets/images/main-logo.png" alt="Zomato">\n                </a>\n                </div>\n                <!-- /brand logo -->\n\n            </div>\n            <!-- /login background section -->\n\n            <!-- Login Content Section -->\n            <div class="dt-login__content">\n\n                <!-- Login Content Inner -->\n                <div class="dt-login__content-inner">\n\n                    <!-- Form -->\n                    <form *ngIf="!setNewPass" [formGroup]="registerForm" (ngSubmit)="onSubmit()">\n\n                        <!-- Form Group -->\n                        <div class="form-group">\n                            <label class="sr-only" for="email-1">Email address or Username</label>\n                            <input type="email" formControlName="login_id" class="form-control" id="email-1" aria-describedby="email-1" placeholder="Enter Email/Username">\n                        </div>\n                        <!-- /form group -->\n\n                        <!-- Form Group -->\n                        <div class="form-group" *ngIf="forgot_unique_id">\n                            <label class="sr-only" for="email-1">Enter OTP</label>\n                            <input type="number" maxlength="6" formControlName="forgot_otp" class="form-control" id="email-1" aria-describedby="email-1" placeholder="Enter OTP">\n                        </div>\n                        <!-- /form group -->\n\n                        <!-- Form Group -->\n                        <div class="form-group">\n                            <button *ngIf="!forgot_unique_id" type="submit" ion-button>Send</button>\n                            <button *ngIf="forgot_unique_id" type="submit" ion-button>Submit</button>\n                            <span class="d-inline-block ml-4" (click)="gotoLogin()">\n                            <a class="d-inline-block font-weight-medium ml-3" >Sign In</a>\n                          </span>\n                        </div>\n                        <!-- /form group -->\n\n                    </form>\n                    <!-- Form -->\n                    <form *ngIf="setNewPass" [formGroup]="passForm" (ngSubmit)="onPassSubmit()">\n\n                        <!-- Form Group -->\n                        <div class="form-group">\n                            <label class="sr-only" for="email-1">New Password</label>\n                            <input type="password" formControlName="new_password" class="form-control" id="email-1" aria-describedby="email-1" placeholder="New Password">\n                        </div>\n                        <!-- /form group -->\n\n                        <!-- Form Group -->\n                        <div class="form-group">\n                            <label class="sr-only" for="email-1">Confirm New Password</label>\n                            <input type="password" formControlName="confirm_new_password" class="form-control" id="email-1" aria-describedby="email-1" placeholder="Confirm New Password">\n                        </div>\n                        <!-- /form group -->\n\n                        <!-- Form Group -->\n                        <div class="form-group">\n                            <button type="submit" ion-button>Submit</button>\n                            <span class="d-inline-block ml-4" (click)="gotoLogin()">\n                                <a class="d-inline-block font-weight-medium ml-3" >Sign In</a>\n                            </span>\n                        </div>\n                        <!-- /form group -->\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\auth\forgot\forgot.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ForgotPage);
    return ForgotPage;
}());

//# sourceMappingURL=forgot.js.map

/***/ })

});
//# sourceMappingURL=48.js.map