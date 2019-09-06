webpackJsonp([46],{

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(425);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
            ],
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sub_options_with_icons_sub_option_one_sub_option_one__ = __webpack_require__(130);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, storage, myApp, menuCtrl, auth, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.myApp = myApp;
        this.menuCtrl = menuCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad LoginPage");
        this.menuCtrl.enable(false, "authenticated");
    };
    LoginPage.prototype.ngOnInit = function () {
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* FormGroup */]({
            login_id: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].minLength(5),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(30)
            ]),
            password: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormControl */]("", [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].minLength(6),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].maxLength(20)
            ])
        });
    };
    LoginPage.prototype.gotoRegister = function () {
        this.navCtrl.push("RegisterPage");
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.loginForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.onSubmit = function () {
        var _this = this;
        console.log(this.loginForm.value);
        this.auth.login(this.loginForm.value).subscribe(function (user) {
            if (user.status) {
                _this.storage.set("token", user.message.token);
                _this.get_dashboard(user.message.token);
                localStorage.setItem("token", user.message.token);
                _this.loginForm.reset();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: user.message,
                    duration: 3000
                });
                toast.onDidDismiss(function () {
                    console.log("Dismissed toast");
                });
                toast.present();
            }
        });
    };
    LoginPage.prototype.get_dashboard = function (token) {
        var _this = this;
        console.clear();
        this.auth.getDash(token).subscribe(function (res) {
            _this.myApp.authenticatedMenu = res.status;
            if (res.status) {
                var user = res.message;
                _this.storage.set("me", res.message);
                console.log(user);
                if (_this.navParams.get("fromProduct")) {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__sub_options_with_icons_sub_option_one_sub_option_one__["c" /* UserProductModal */], { id: _this.navParams.get("id") });
                }
                else {
                    if (user.email_verify_status == "0") {
                        var toast = _this.toastCtrl.create({
                            message: "Please complete the email verification of this account to continue.",
                            showCloseButton: true,
                            closeButtonText: "OK"
                        });
                        toast.onDidDismiss(function () {
                            console.log("Dismissed toast");
                        });
                        toast.present();
                        _this.navCtrl.setRoot("EditProfilePage");
                    }
                    else {
                        if (user.key_activated_status == "0") {
                            _this.navCtrl.setRoot("ActivateKeyPage");
                            var toast = _this.toastCtrl.create({
                                message: "Please provide a E-Pin Code to activate your account and start receiving the ROI and other referral benefits",
                                showCloseButton: true,
                                closeButtonText: "OK"
                            });
                            toast.onDidDismiss(function () {
                                console.log("Dismissed toast");
                            });
                            toast.present();
                        }
                        else {
                            _this.navCtrl.setRoot("HomePage");
                        }
                    }
                }
            }
        });
    };
    LoginPage.prototype.gotoForgot = function () {
        this.navCtrl.push("ForgotPage");
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-login",template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\auth\login\login.html"*/'<ion-content>\n   <div class="dt-root">\n      <!-- Login Container -->\n      <div class="dt-login--container dt-app-login--container">\n         <!-- Login Content -->\n         <div class="dt-login__content-wrapper">\n            <!-- Login Background Section -->\n            <div class="dt-login__bg-section dt-login__bg-section_login">\n               <div class="dt-login__bg-content">\n                  <!-- Login Title -->\n                  <h1 class="dt-login__title">Sign In</h1>\n                  <!-- /login title -->\n                  <p class="f-16">By Signing Up, you can avail full features of our services.</p>\n                  <p class="f-16">Get an account !!!</p>\n               </div>\n               <div class="dt-login__logo">\n                  <a class="dt-brand__logo-link" >\n                  <img class="dt-brand__logo-img" src="assets/images/main-logo.png" alt="Zomato">\n                  </a>\n               </div>\n            </div>\n            <div class="dt-login__content">\n               <div class="dt-login__content-inner ">\n                  <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">\n                  <div class="form-group">\n                     <label class="sr-only" for="email-1">Email address or Username</label>\n                     <input type="email" id="email-1" aria-describedby="email-1" autocomplete="off" placeholder="Enter email or Username" formControlName="login_id" class="form-control" [ngClass]="{ \'is-invalid\':  f.login_id.errors && loginForm.get(\'login_id\').touched ,\'is-valid\':  !f.login_id.errors }" />\n                     <div *ngIf=" f.login_id.errors && loginForm.get(\'login_id\').touched" class="invalid-feedback">\n                        <div *ngIf="f.login_id.errors.required">Email or Username is required</div>\n                        <div *ngIf="loginForm.get(\'login_id\').hasError(\'minlength\')">Minimum 5 characters</div>\n                     </div>\n                  </div>\n                  <div class="form-group">\n                     <label class="sr-only" for="password-1">Password</label>\n                     <input type="password" formControlName="password" id="password-1" placeholder="Password" class="form-control" [ngClass]="{ \'is-invalid\':  f.password.errors && loginForm.get(\'password\').touched , \'is-valid\':  !f.password.errors }" />\n                     <div *ngIf=" f.password.errors && loginForm.get(\'password\').touched" class="invalid-feedback">\n                        <div *ngIf="f.password.errors.required">Password is required</div>\n                        <div *ngIf="loginForm.get(\'password\').hasError(\'minlength\')">Minimum 6 characters</div>\n                     </div>\n                  </div>\n                  <div class="custom-control mb-6 mb-lg-8">\n                     <label><a (click)="gotoForgot()">Forgot Password?</a></label>\n                  </div>\n                  <!-- Form Group -->\n                  <div class="form-group">\n                     <button type="submit" [disabled]="loginForm.invalid"  ion-button>Sign In</button>\n                     <span class="d-inline-block ml-4">\n                     <a class="d-inline-block font-weight-medium ml-3" (click)="gotoRegister()">Sign UP</a>\n                     </span>\n                  </div>\n                  <!-- /form group -->\n                  </form>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\auth\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_5__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

});
//# sourceMappingURL=46.js.map