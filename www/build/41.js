webpackJsonp([41],{

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivateKeyPageModule", function() { return ActivateKeyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__activate_key__ = __webpack_require__(430);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ActivateKeyPageModule = /** @class */ (function () {
    function ActivateKeyPageModule() {
    }
    ActivateKeyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__activate_key__["a" /* ActivateKeyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__activate_key__["a" /* ActivateKeyPage */]),
            ],
        })
    ], ActivateKeyPageModule);
    return ActivateKeyPageModule;
}());

//# sourceMappingURL=activate-key.module.js.map

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_key_key__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(129);
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
 * Generated class for the ActivateKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ActivateKeyPage = /** @class */ (function () {
    function ActivateKeyPage(navCtrl, navParams, auth, storage, keyProvider, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.storage = storage;
        this.keyProvider = keyProvider;
        this.toastCtrl = toastCtrl;
        this.key = "";
        this.activatedKeyList = [];
        this.ksyStat = false;
        this.dashMe = [];
        this.key = navParams.get("key");
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
            // console.log(val.token)
        });
    }
    ActivateKeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ActivateKeyPage');
    };
    ActivateKeyPage.prototype.getdata = function (token) {
        var _this = this;
        this.keyProvider.getActivatedKeyList(token).subscribe(function (data1) {
            // if(data1.status){
            _this.activatedKeyList = data1;
            console.log(_this.activatedKeyList);
            // }
        });
        this.get_dashboard(token);
    };
    ActivateKeyPage.prototype.getParseInt = function (val) {
        return parseFloat(val).toFixed(2);
    };
    ActivateKeyPage.prototype.get_dashboard = function (token) {
        var _this = this;
        this.auth.getDash(token).subscribe(function (res1) {
            if (res1.status) {
                _this.dashMe = res1.message;
                if (res1.message.key_activated_status == "0") {
                    _this.ksyStat = false;
                }
                else {
                    _this.ksyStat = true;
                }
                // console.log(res1.message)
            }
        });
    };
    ActivateKeyPage.prototype.updateKey = function () {
        var _this = this;
        this.keyProvider.updateKey(this.dashMe.token, this.key).subscribe(function (res1) {
            console.log(res1);
            if (res1.status) {
                _this.toast(res1.message);
                _this.storage.get('me').then(function (val) {
                    _this.getdata(val.token);
                });
                _this.key = '';
                console.log(res1);
            }
            else {
                _this.toast(res1.message);
            }
        });
    };
    ActivateKeyPage.prototype.toast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    ActivateKeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-activate-key',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\activate-key\activate-key.html"*/'<!--\n  Generated template for the ActivateKeyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Activate Key</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n   <!-- Grid -->\n          <div class="row">\n      \n         \n        <!-- Grid Item -->\n        <div class="col-xl-12 order-sm-1">\n           <div class="row">\n            <div class="col-xl-3 col-md-2"></div>\n            <div class="col-xl-6 col-md-8 col-sm-12">\n              <div class="dt-card">\n                <div class="card-body">\n                  <div class="col-md-12">\n                    <h3 *ngIf="!ksyStat" class="text-center mb-2">Enter Your Activation key</h3>\n                    <h3 *ngIf="ksyStat" class="text-center mb-2">Activate Your key</h3>\n                    <p *ngIf="!ksyStat" class="text-center">If you don’t have key then please contact the administrator to get your activation key</p>\n\n                    <p *ngIf="!ksyStat" class="text-center"><span style="color: red; font-size: 12px; ">Please provide a E-Pin Code to activate your account and start receiving the ROI and other referral benefits.</span></p>\n                    <form>\n                      <div class="row">\n                        <div class="col-md-12">\n                          <div class="input-group">\n                            <!--<span class="input-group-addon">Enter Activation Key</span>-->\n                            <input autocomplete="off" id="email" type="text" #box  class="form-control text-center" name="facebook" [(ngModel)]="key" placeholder="Enter Activation Key">\n                          </div>\n                        </div>\n                      </div>\n\n                      <div class="row">\n\n                        <div class="col-md-12 text-center" style="margin-top: 10px;">\n                          <button  (click)="updateKey()" ion-button>Update</button> \n                        </div>\n                      </div>\n<!-- \n                      <div class="row">\n                        <div class="col-md-12">\n                          <p class="text-center" style="margin-right: 15px; margin-top: 15px;">Dont have Activation? <a data-toggle="modal" data-target="#exampleModalLong" style="color: #038fde; cursor: pointer">Click Here</a></p>\n                        </div>\n                      </div> -->\n\n\n                    </form>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class="row">\n            <!-- Grid Item -->\n            <div class="col-12">\n              <div class="dt-card">\n                  <div class="dt-card__header">\n                      <h3 class="text-primary"> Activate Key</h3>\n                    </div>\n                <!-- Card Body -->\n                <div class="dt-card__body">\n                        <!-- Tables -->\n                        <div class="row">\n                          <div class="col-md-12">\n                            \n                              <!-- <div class="row">\n                                \n                                <div class="col-md-4">\n                                  <div class="form-group">\n                                    <input type="text" class="form-control" id="usr" placeholder="Add Keys">\n                                  </div>\n                                </div>\n                                <div class="col-md-4">\n                                  \n                                </div>\n                              </div> -->\n                              </div>\n                              <div class="col-md-12 table-responsive">\n                              <table class="table table-hover mb-0">\n                                  <thead>\n                                    <tr>\n                                      <th scope="col">#</th>\n                                      <th class="text-uppercase" style="width:17%" scope="col">Activated Date</th>\n                                      <th class="text-uppercase" scope="col">Package</th>\n                                      <th class="text-uppercase" scope="col">Amount</th>\n                                      <th class="text-uppercase" scope="col">Key</th>\n                                      </tr>\n                                  </thead>\n                                  <tbody>\n                                    <tr class="gradeX" *ngFor="let key of activatedKeyList;let i = index;">\n                                      <td>{{i+1}}</td>\n                                      <td style="width:17%">{{key.date_n_time | date:\'MMM d, y, h:mm a\'}}</td>\n                                      <td>\n                                        <h3 style="margin-bottom: 0;">{{key.package_name | titlecase }} </h3>\n                                        <p *ngIf="key.package_type == \'2\'">{{key.validity_days}} Days validity </p>\n                                        <p *ngIf="key.package_type == \'1\'">Life Time validity </p>\n                                      </td>\n                                      <td>$ {{getParseInt(key.key_amount)}}</td>\n                                      <td>{{key.key_code}}</td>\n                                      <!-- <td><button class="btn btn-success" (click)="updateKey(key)">Activate Key</button></td> -->\n                                    </tr>\n                                  </tbody>\n                                </table>\n                              </div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n      \n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\activate-key\activate-key.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_key_key__["a" /* KeyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], ActivateKeyPage);
    return ActivateKeyPage;
}());

//# sourceMappingURL=activate-key.js.map

/***/ })

});
//# sourceMappingURL=41.js.map