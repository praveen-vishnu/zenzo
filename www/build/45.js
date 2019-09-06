webpackJsonp([45],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(426);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RegisterPageModule = /** @class */ (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_constants_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_app_component__ = __webpack_require__(254);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info onimage
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, myApp, storage, menuCtrl, auth, toastCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.myApp = myApp;
        this.storage = storage;
        this.menuCtrl = menuCtrl;
        this.auth = auth;
        this.toastCtrl = toastCtrl;
        this.navParams = navParams;
        this.userExist = false;
        this.userExist1 = false;
        this.country_code = '';
        this.countrySelected = false;
        this.countryList = __WEBPACK_IMPORTED_MODULE_4__services_constants_service__["c" /* COUNTRY_LIST */];
        this.cats = [{ "id": "1", "category_name": "Store", "category_image": "http:\/\/192.168.1.100:81\/zomo\/uploads\/Store.png", "category_status": "1", "date_only": "2019-06-06" }, { "id": "2", "category_name": "Reseller", "category_image": "http:\/\/192.168.1.100:81\/zomo\/uploads\/Promoter.png", "category_status": "1", "date_only": "2019-06-06" }, { "id": "3", "category_name": "Manufactures", "category_image": "http:\/\/192.168.1.100:81\/zomo\/uploads\/Manufactures.png", "category_status": "1", "date_only": "2019-06-06" }, { "id": "4", "category_name": "Franchise", "category_image": "http:\/\/192.168.1.100:81\/zomo\/uploads\/Franchise.png", "category_status": "1", "date_only": "2019-06-06" }];
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('RegisterPage');
        this.menuCtrl.enable(false, 'authenticated');
    };
    RegisterPage.prototype.ngOnInit = function () {
        var _this = this;
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.registerForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormGroup */]({
            full_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(30)]),
            mobile_number: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
            user_name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(30)]),
            email_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].pattern(EMAILPATTERN)]),
            password: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(30)]),
            country_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
            user_position: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required]),
            referral_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["i" /* Validators */].maxLength(30)]),
            user_category_id: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormArray */]([]),
        });
        // console.log(this.cats);
        this.cats.map(function (o, i) {
            var control = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */](i === 0); // if first item set to true, else false
            _this.registerForm.controls.user_category_id.push(control);
        });
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.push('LoginPage');
    };
    RegisterPage.prototype.selectTwo = function (cats, eve) {
        console.clear();
        console.log(cats);
        console.log(eve);
    };
    RegisterPage.prototype.onSubmit = function () {
        var _this = this;
        console.clear();
        // this.registerForm.value.user_position = this.user_position;
        // this.registerForm.value.country_id = this.country_code;
        var selectedOrderIds = this.registerForm.value.user_category_id
            .map(function (v, i) { return v ? _this.cats[i].id : null; })
            .filter(function (v) { return v !== null; });
        this.registerForm.value.user_category_id = selectedOrderIds.toString();
        this.auth.register(this.registerForm.value).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                _this.storage.set('token', res.message.token);
                _this.get_dashboard(res.message.token);
                _this.registerForm.reset();
            }
            else {
                var toast = _this.toastCtrl.create({
                    message: res.message,
                    duration: 3000
                });
                toast.onDidDismiss(function () {
                    console.log('Dismissed toast');
                });
                toast.present();
            }
        });
    };
    RegisterPage.prototype.get_dashboard = function (token) {
        var _this = this;
        console.clear();
        this.auth.getDash(token).subscribe(function (res) {
            _this.myApp.authenticatedMenu = res.status;
            if (res.status) {
                _this.storage.set('me', res.message);
                console.log(res.message);
                _this.navCtrl.setRoot('HomePage');
            }
        });
    };
    Object.defineProperty(RegisterPage.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RegisterPage.prototype, "r", {
        get: function () { return this.registerForm; },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.checkuser = function (event) {
        var _this = this;
        this.auth.checkUser(event.target.value)
            .subscribe(function (data) {
            console.clear();
            console.log(data.status);
            console.log(data.message);
            if (data.status) {
                _this.presentToast(data.message);
                _this.userExist = true;
            }
            else {
                _this.userExist = false;
            }
        }, function (error) {
            _this.presentToast(error);
        });
    };
    RegisterPage.prototype.checkReferral = function (event) {
        var _this = this;
        this.auth.checkUser(event.target.value)
            .subscribe(function (data) {
            console.clear();
            console.log(data.status);
            console.log(data.message);
            if (data.status) {
                _this.userExist1 = true;
            }
            else {
                _this.userExist1 = false;
                // this.presentToast(data.message);
            }
        }, function (error) {
            _this.presentToast(error);
        });
    };
    RegisterPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RegisterPage.prototype.selectCountry = function (event) {
        console.clear();
        console.log(event.value);
        // this.code = ''
        this.countrySelected = true;
        // this.renderer.removeClass(this.countryError.nativeElement, 'displayBlock');
        if (event.value.country_id) {
            console.log(event.value.country_id);
            this.country_code = event.value.country_id;
            // this.code = event.value.country_code;
            console.log(this.country_code);
        }
        else {
            // this.code = ''
        }
    };
    RegisterPage.prototype.selectPosition = function (event) {
        console.clear();
        console.log(event.value);
        this.user_position = event.value.value;
        console.log(this.user_position);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\auth\register\register.html"*/'<ion-content>\n   <div class="dt-root">\n      <!-- Login Container -->\n      <div class="dt-login--container dt-app-login--container">\n         <!-- Login Content -->\n         <div class="dt-login__content-wrapper">\n            <!-- Login Background Section -->\n            <div class="dt-login__bg-section dt-login__bg-section_register">\n               <div class="dt-login__bg-content">\n                  <!-- Login Title -->\n                  <h1 class="dt-login__title">Create a free account</h1>\n                  <p class="f-16">Promote & earn, list your business and do more.</p>\n               </div>\n               <!-- Brand logo -->\n               <div class="dt-login__logo">\n                  <a class="dt-brand__logo-link" href="/">\n                  <img class="dt-brand__logo-img" src="assets/images/main-logo.png" alt="Zomato">\n                  </a>\n               </div>\n               <!-- /brand logo -->\n            </div>\n            <!-- /login background section -->\n            <!-- Login Content Section -->\n            <div class="dt-login__content">\n               <!-- Login Content Inner -->\n               <div class="dt-login__content-inner">\n                  <!-- Form -->\n                  <form [formGroup]="registerForm" (ngSubmit)="onSubmit()" class="register">\n                  <ion-grid no-padding>\n                     <!-- Form Group -->\n                     <ion-row>\n                        <ion-col>\n                           <div class="form-group">\n                              <label class="sr-only" for="name">Name</label>\n                              <input autocomplete="off" id="name" placeholder="Name" type="text" formControlName="full_name" class="form-control" [ngClass]="{ \'is-invalid\': r.get(\'full_name\').touched && f.full_name.errors ,\'is-valid\': !f.full_name.errors }" />\n                              <div *ngIf="r.get(\'full_name\').touched && f.full_name.errors" class="invalid-feedback">\n                                 <div *ngIf="f.full_name.errors.required">Name is required</div>\n                                 <div *ngIf="r.get(\'full_name\').hasError(\'minlength\')">Minimum 5 characters</div>\n                              </div>\n                           </div>\n                           <!-- /form group -->\n                        </ion-col>\n                        <ion-col>\n                           <!-- Form Group -->\n                           <div class="form-group">\n                              <label class="sr-only" for="username">Username</label>\n                              <input autocomplete="off" type="text" id="username" (keyup)="checkuser($event)" placeholder="Username" formControlName="user_name" class="form-control" [ngClass]="{ \'is-invalid\': r.get(\'user_name\').touched && f.user_name.errors,\'is-invalid\': userExist,\'is-valid\': r.get(\'user_name\').touched && !userExist && f.user_name.dirty && !r.get(\'user_name\').hasError(\'minlength\')}" />\n                              <div *ngIf="r.get(\'user_name\').touched && f.user_name.errors " class="invalid-feedback">\n                                 <div *ngIf="f.user_name.errors.required">Username is required</div>\n                                 <div *ngIf="r.get(\'user_name\').hasError(\'minlength\')">Minimum 5 characters</div>\n                              </div>\n                              <div *ngIf="userExist" class="invalid-feedback">\n                                 <div>Username is Already Exist.</div>\n                              </div>\n                              <div *ngIf="!userExist" class="valid-feedback">\n                              </div>\n                           </div>\n                           <!-- /form group -->\n                        </ion-col>\n                     </ion-row>\n                  </ion-grid>\n                  <!-- Form Group -->\n                  <div class="form-group">\n                     <label class="sr-only" for="email_id">Email address</label>\n                     <input autocomplete="off" type="email" class="form-control" formControlName="email_id" id="email_id" aria-describedby="email_id" placeholder="Enter email" [ngClass]="{ \'is-invalid\': r.get(\'email_id\').touched && f.email_id.errors ,\'is-valid\': !f.email_id.errors }" />\n                     <div *ngIf="r.get(\'email_id\').touched && f.email_id.errors" class="invalid-feedback">\n                        <div *ngIf="f.email_id.errors.required">Email is required</div>\n                        <div class="error" *ngIf="r.get(\'email_id\').hasError(\'pattern\') && r.get(\'email_id\').touched">Email address invalid</div>\n                     </div>\n                  </div>\n                  <!-- /form group -->\n                  <div class="form-group">\n                     <ion-grid no-padding>\n                        <ion-row>\n                           <ion-col>\n                              <div>\n                                 <ion-item no-lines class="ion-select">\n                                    <ion-select formControlName="country_id" (ionSelect)="selectCountry($event)" placeholder="Select Country" no-padding>\n                                       <ion-option value="{{country.country_id}}" *ngFor="let country of countryList;">{{country.country_name}}</ion-option>\n                                    </ion-select>\n                                 </ion-item>\n                                 <div *ngIf="submitted && !country_code">\n                                    <div style="color: #f5222d;margin-top: .25rem;font-size: 80%;width: 100%;">Country is required</div>\n                                 </div>\n                              </div>\n                           </ion-col>\n                           <ion-col>\n                              <div class="">\n                                 <input autocomplete="off" id="mobile_number" type="number" formControlName="mobile_number" class="form-control" name="mobile_number" placeholder="Mobile" [ngClass]="{ \'is-invalid\': r.get(\'mobile_number\').touched && f.mobile_number.errors ,\'is-valid\': !f.mobile_number.errors }" />\n                                 <div *ngIf="r.get(\'mobile_number\').touched && f.mobile_number.errors" class="invalid-feedback">\n                                    <div *ngIf="f.mobile_number.errors.required">Mobile is required</div>\n                                 </div>\n                              </div>\n                           </ion-col>\n                        </ion-row>\n                     </ion-grid>\n                  </div>\n                  <!-- Form Group -->\n                  <div class="form-group">\n                     <label class="sr-only" for="password-1">Password</label>\n                     <input autocomplete="off" type="password" id="password-1" placeholder="Password" formControlName="password" class="form-control" [ngClass]="{ \'is-invalid\': r.get(\'password\').touched && f.password.errors ,\'is-valid\': !f.password.errors }" />\n                     <div *ngIf="r.get(\'password\').touched && f.password.errors" class="invalid-feedback">\n                        <div *ngIf="f.password.errors.required">Password is required</div>\n                        <div *ngIf="r.get(\'password\').hasError(\'minlength\')">Password must be at least 6 characters</div>\n                     </div>\n                  </div>\n                  <div class="form-group">\n                     <ion-grid no-padding>\n                        <ion-row>\n                           <ion-col>\n                              <input autocomplete="off" id="password" type="text" formControlName="referral_id" class="form-control" name="referral_id" placeholder="Referral Id" [ngClass]="{ \'is-invalid\': r.get(\'referral_id\').touched && f.referral_id.errors,\'is-valid\': userExist1 ,\'is-invalid\': !userExist1 && f.referral_id.dirty }" (keyup)="checkReferral($event)" >\n                              <div *ngIf="r.get(\'referral_id\').touched && f.referral_id.errors" class="invalid-feedback">\n                                 <div *ngIf="f.referral_id.errors.required">Referral Id is required</div>\n                                 <div *ngIf="r.get(\'referral_id\').hasError(\'minlength\')">Minimum 5 characters</div>\n                              </div>\n                              <div *ngIf="!userExist1" class="valid-feedback">\n                                 <div>Username is Doesn\'t Exist.</div>\n                              </div>\n                           </ion-col>\n                           <ion-col>\n                              <div>\n                                 <ion-item no-lines class="ion-select">\n                                    <ion-select (ionSelect)="selectPosition($event)" placeholder="Position" no-padding formControlName="user_position">\n                                       <ion-option> Right </ion-option>\n                                       <ion-option> Left </ion-option>\n                                    </ion-select>\n                                 </ion-item>\n                                 <div *ngIf="submitted && !country_code">\n                                    <div style="color: #f5222d;margin-top: .25rem;font-size: 80%;width: 100%;">Position is required</div>\n                                 </div>\n                              </div>\n                           </ion-col>\n                        </ion-row>\n                     </ion-grid>\n                  </div>\n                  <div col-12>\n                     <label>Choose your business category</label>\n                     <div class="row">\n                        <div col-3 class="nopad text-center" formArrayName="user_category_id" *ngFor="let category of cats; let i = index">\n                           <label class="image-checkbox" [ngClass]="{ \'image-checkbox-checked\': registerForm.value.user_category_id[i] }">\n                           <img class="img-responsive" src="{{cats[i].category_image}}" title="{{cats[i].category_name}}"  />\n                           <input autocomplete="off" type="checkbox" name="image[]" [formControlName]="i"/>\n                           </label>\n                           <p style="font-size: 11px;" no-margin>{{cats[i].category_name}}</p>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- Form Group -->\n                  <div class="form-group">\n                     <button type="submit" ion-button>Sign Up</button>\n                     <span class="d-inline-block ml-4">\n                     <a class="d-inline-block font-weight-medium ml-3" (click)="gotoLogin()">Sign In</a>\n                     </span>\n                  </div>\n                  <!-- /form group -->\n                  </form>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\auth\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_6__app_app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ })

});
//# sourceMappingURL=45.js.map