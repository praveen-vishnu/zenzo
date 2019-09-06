webpackJsonp([39],{

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransferKeyPageModule", function() { return TransferKeyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__transfer_key__ = __webpack_require__(432);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TransferKeyPageModule = /** @class */ (function () {
    function TransferKeyPageModule() {
    }
    TransferKeyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__transfer_key__["a" /* TransferKeyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__transfer_key__["a" /* TransferKeyPage */]),
            ],
        })
    ], TransferKeyPageModule);
    return TransferKeyPageModule;
}());

//# sourceMappingURL=transfer-key.module.js.map

/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransferKeyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_key_key__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
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
 * Generated class for the TransferKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TransferKeyPage = /** @class */ (function () {
    function TransferKeyPage(navCtrl, navParams, storage, key, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.key = key;
        this.toastCtrl = toastCtrl;
        this.packages = [];
        this.transferReport = [];
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    TransferKeyPage.prototype.getdata = function (token) {
        var _this = this;
        this.key.getAvailablePackagesList(token).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.packages = data.message;
            }
        });
        this.key.getTransferedKeyList(token).subscribe(function (data1) {
            console.log(data1);
            if (data1.status) {
                _this.transferReport = data1.message;
            }
        });
    };
    TransferKeyPage.prototype.getParseInt = function (val) {
        return parseInt(val);
    };
    TransferKeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TransferKeyPage');
    };
    TransferKeyPage.prototype.transferKey = function () {
        var _this = this;
        var f = new FormData();
        f.append('token', localStorage.getItem('token'));
        f.append('to_user_id', this.to_user_id);
        f.append('number_of_keys', this.number_of_keys);
        f.append('package_id', this.package_id);
        f.append('account_password', this.account_password);
        this.key.transferKey(f).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                _this.to_user_id = '';
                _this.number_of_keys = '';
                _this.package_id = '';
                _this.account_password = '';
                _this.toast(res.message);
                _this.storage.get('me').then(function (val) {
                    _this.getdata(val.token);
                });
            }
            else {
                _this.toast(res.message);
            }
        });
    };
    TransferKeyPage.prototype.toast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    TransferKeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-transfer-key',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\transfer-key\transfer-key.html"*/'<!--\n  Generated template for the TransferKeyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Tranfer Key</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="dt-root">\n      <div class="row">\n      \n         \n        <!-- Grid Item -->\n        <div class="col-xl-12 order-sm-1">\n          \n          <div class="row">\n            <div class="col-md-3">\n              \n            </div>\n            \n            \n            \n            <div class="col-md-6">\n              <div class="dt-card">\n              \n              <div class="dt-card__header">\n        \n                <h3 class="text-primary"><i class="icon icon-mail-open mr-1"></i> Transfer Key</h3>\n                \n                <div style="width: 100%">\n                    <div class="row">\n                     <div  class="col-md-6" col-6>\n                        <div>\n                         <ion-item no-lines class="ion-select">\n                          <ion-select placeholder="Select Package" id="sel1" [(ngModel)]="package_id">\n                            <ion-option value="">Select Packages</ion-option>\n                            <ion-option value="{{package.id}}" *ngFor="let package of packages;let i = index;">{{package.package_name | titlecase}} {{getParseInt(package.package_amount)}}$ ({{package.available_keys}} Keys)</ion-option>\n                          </ion-select>\n                      </ion-item>\n                        </div>\n                      </div>\n\n\n                      <div  class="col-md-6" col-6>\n                        <div class="form-group">\n                          <input [(ngModel)]="number_of_keys" type="number" class="form-control" id="number_of_keys" placeholder="No of Keys">\n                        </div>\n                      </div>\n                    </div>\n\n                    <div class="row">\n                      <div class="col-md-6">\n                        <div class="form-group">\n                          <input [(ngModel)]="to_user_id" type="text" class="form-control" id="to_user_id" placeholder="Send To User ID">\n                        </div>\n                      </div>\n                      <div class="col-md-6">\n                        <div class="form-group">\n                          <input [(ngModel)]="account_password" type="password" class="form-control" id="account_password" placeholder="Account Password">\n                        </div>\n                      </div>\n                    </div>\n                    \n                    <div class="form-group">\n                      <button type="button" (click)="transferKey()" ion-button block>Transfer Key</button>\n                    </div>\n                    \n                  </div>\n                \n                </div>\n                \n              </div>\n            </div>\n          </div>\n          <!-- Grid -->\n              <div class="row">\n            \n            <!-- Grid Item -->\n            <div class="col-12">\n            \n              <!-- Card -->\n              <div class="dt-card">\n                \n                <!-- Card Header -->\n                <div class="dt-card__header">\n        \n                <!-- Card Heading -->\n                \n                <!-- /card heading -->\n                \n                <!-- Card Tools -->\n                <div class="dt-card__tools">\n                  <a href="javascript:void(0)" class="dt-card__more"></a>\n                </div>\n                <!-- /card tools -->\n        \n                </div>\n                <!-- /card header -->\n                \n                <!-- Card Body -->\n                <div class="dt-card__body">\n                  \n                  <h4>Key Transfer Report</h4>\n                  \n                  <!-- Tab Content-->\n                  <div class="tab-content">\n                    <div id="tab-pane2" class="tab-pane active">\n                      <!-- Card -->\n                      <div class="dt-card">\n  \n                        <!-- Card Body -->\n                        <div class="dt-card__body p-0">\n  \n                        <!-- Tables -->\n                        <div class="table-responsive">\n                          <table class="table table-hover mb-0">\n                          <thead>\n                          <tr>\n                            <th scope="col">#</th>\n                            <th class="text-uppercase" scope="col">Date</th>\n                            <th class="text-uppercase" scope="col">Transfer Type</th>\n                            <th class="text-uppercase" scope="col">Package</th>\n                            <th class="text-uppercase" scope="col">Quantity</th>\n                            <th class="text-uppercase" scope="col">From User ID</th>\n                            <th class="text-uppercase" scope="col">To User ID</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr *ngFor="let key of transferReport;let i = index;">\n                            <th scope="row">{{i+1}}</th>\n                            <td>{{key.date_n_time | date:\'medium\' }}</td>\n                            <td>{{key.tranfer_type}}</td>\n                            <td>{{key.package_name | titlecase}}</td>\n                            <td>{{key.number_of_keys}}</td>\n                            <td>{{key.sent_from_user_name}}</td>\n                            <td>{{key.to_user_name}}</td>\n                          </tr>\n                          </tbody>\n                          </table>\n                        </div>\n                        <!-- /tables -->\n  \n                        </div>\n                        <!-- /card body -->\n  \n                      </div>\n                      \n                      </div>\n                     \n                    \n                  </div>\n                  <!-- /tab Content-->\n                  \n                </div>\n                <!-- /card Body -->\n                \n              </div>\n              \n            </div>\n                \n          </div>\n          <!-- /grid -->\n        \n        </div>\n              <!-- /grid item -->\n      \n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\transfer-key\transfer-key.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_key_key__["a" /* KeyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], TransferKeyPage);
    return TransferKeyPage;
}());

//# sourceMappingURL=transfer-key.js.map

/***/ })

});
//# sourceMappingURL=39.js.map