webpackJsonp([28],{

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompletedPackagePageModule", function() { return CompletedPackagePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__completed_package__ = __webpack_require__(443);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CompletedPackagePageModule = /** @class */ (function () {
    function CompletedPackagePageModule() {
    }
    CompletedPackagePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__completed_package__["a" /* CompletedPackagePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__completed_package__["a" /* CompletedPackagePage */]),
            ],
        })
    ], CompletedPackagePageModule);
    return CompletedPackagePageModule;
}());

//# sourceMappingURL=completed-package.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CompletedPackagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_package_package__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__running_package_running_package__ = __webpack_require__(256);
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
 * Generated class for the CompletedPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CompletedPackagePage = /** @class */ (function () {
    function CompletedPackagePage(navCtrl, navParams, modalCtrl, storage, packageProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.storage = storage;
        this.packageProvider = packageProvider;
        this.running_packages = 0;
        this.completed_packages = 0;
        this.modalData = [{
                "id": "",
                "package_validity": "",
                "upgrade_package_code": "",
                "package_amount": "0",
                "activated_date": "",
                "expiry_date": "",
                "package_name": "",
                "completed_task": 0,
                "earned_amount": 0,
                "earning_detail": [
                    {
                        "date_n_time": "",
                        "task_reward": "",
                        "task_name": "",
                        "task_code": ""
                    }
                ]
            }];
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    CompletedPackagePage.prototype.getdata = function (token) {
        var _this = this;
        this.token = token;
        this.packageProvider.getRunningList(token).subscribe(function (data) {
            if (data.status) {
                // this.pkgs = data.message
                if (_this.getArray(data.message)) {
                    _this.running_packages = data.message.length;
                }
                else {
                    _this.running_packages = 0;
                }
            }
        });
        this.packageProvider.getCompletedList(token).subscribe(function (data) {
            if (data.status) {
                _this.pkgs = data.message;
                if (_this.getArray(data.message)) {
                    _this.completed_packages = data.message.length;
                }
                else {
                    _this.completed_packages = 0;
                }
            }
        });
    };
    CompletedPackagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RunningPackagePage');
    };
    CompletedPackagePage.prototype.getparseFloat = function (val) {
        return parseFloat(val).toFixed(2);
    };
    CompletedPackagePage.prototype.getArray = function (array) {
        return Array.isArray(array);
    };
    CompletedPackagePage.prototype.packageDetail = function (code) {
        var _this = this;
        this.packageProvider.getPackageDetail(this.token, code).subscribe(function (data1) {
            // console.log(data)
            if (data1.status) {
                // if(this.getArray(data1.message)){
                _this.modalData = data1.message;
                var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__running_package_running_package__["a" /* ModalContentPage */], { modalData: _this.modalData });
                modal.present();
                // }
            }
        });
    };
    CompletedPackagePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-completed-package',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\packages\completed-package\completed-package.html"*/'<!--\n  Generated template for the CompletedPackagePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Completed Packages</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="dt-root">\n  	<ion-grid no-padding>\n  		<ion-row>\n  			<ion-col>\n  				<ion-card text-center>\n					  <ion-card-content>\n					    Total Packages\n					  </ion-card-content>\n  					  <ion-card-header>\n					    {{completed_packages+running_packages}}\n					  </ion-card-header>\n  				</ion-card>\n  			</ion-col>\n  			<ion-col>\n  				<ion-card text-center>\n					  <ion-card-content>\n					    Completed Packages\n					  </ion-card-content>\n  					  <ion-card-header>\n					    {{completed_packages}}\n					  </ion-card-header>\n  				</ion-card>\n  			</ion-col>\n  			<ion-col>\n  				<ion-card text-center>\n					  <ion-card-content>\n					    Running Packages\n					  </ion-card-content>\n  					  <ion-card-header>\n					    {{running_packages}}\n					  </ion-card-header>\n  				</ion-card>\n  			</ion-col>\n  		</ion-row>\n  	</ion-grid>\n\n  	<div class="">\n                  \n                  <div class="tab-content">\n                      <!-- Card -->\n\n                        <!-- Card Body -->\n                          \n                        <!-- Tables -->\n                        <div class="table-responsive">\n                            <table class="table table-hover mb-0">\n                              <thead>\n                              <tr>\n                                <th scope="col">#</th>\n                                <th class="text-uppercase" scope="col">Activated Date</th>\n                                <th class="text-uppercase" scope="col">Package Name(value)</th>\n                                <th class="text-uppercase" scope="col">Package Code</th>\n                                <th class="text-uppercase" scope="col">Completed Task(No)</th>\n                                <th class="text-uppercase" scope="col">Earned(USD)</th>\n                                <th class="text-uppercase" scope="col">Action</th>\n                              </tr>\n                              </thead>\n                              <tbody *ngIf="!getArray(pkgs)">\n                                <tr class="text-center"><td colspan="7">No Record Found</td></tr>\n\n                              </tbody>\n                                <!-- <tr><td><a data-toggle="modal" data-target=".bd-example-modal-lg"> View More </a></td> \n                                </tr>-->\n                                <tbody *ngIf="getArray(pkgs)">\n                                <tr *ngFor="let package of pkgs;let i=index">\n                                  <td scope="col">{{i+1}}</td>\n                                  <td scope="col">{{package.activated_date | date}}</td>\n                                  <td scope="col">{{package.package_name | titlecase}} ({{package.package_amount}})</td>\n                                  <td scope="col">{{package.upgrade_package_code}}</td>\n                                  <td scope="col">{{package.completed_task}}</td>\n                                  <td scope="col">{{ getparseFloat( package.earned_amount )}} $ </td>\n                                  <td><a data-toggle="modal" data-target=".bd-example-modal-lg" (click)="packageDetail(package.upgrade_package_code)"> View More </a></td>\n                                </tr>\n                              </tbody>\n                            </table>\n                        </div>\n                        <!-- /tables -->\n  \n                  </div>\n                  <!-- /tab Content-->\n                  \n                </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\packages\completed-package\completed-package.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_package_package__["a" /* PackageProvider */]])
    ], CompletedPackagePage);
    return CompletedPackagePage;
}());

//# sourceMappingURL=completed-package.js.map

/***/ })

});
//# sourceMappingURL=28.js.map