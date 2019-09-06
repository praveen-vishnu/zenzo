webpackJsonp([38],{

/***/ 376:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewKeyPageModule", function() { return ViewKeyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_key__ = __webpack_require__(433);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ViewKeyPageModule = /** @class */ (function () {
    function ViewKeyPageModule() {
    }
    ViewKeyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__view_key__["a" /* ViewKeyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__view_key__["a" /* ViewKeyPage */]),
            ],
        })
    ], ViewKeyPageModule);
    return ViewKeyPageModule;
}());

//# sourceMappingURL=view-key.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewKeyPage; });
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
 * Generated class for the ViewKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewKeyPage = /** @class */ (function () {
    function ViewKeyPage(navCtrl, navParams, storage, key) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.key = key;
        this.used = true;
        this.unused = false;
        this.usedKeyList = [];
        this.unUsedKeyList = [];
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    ViewKeyPage.prototype.getdata = function (token) {
        var _this = this;
        this.key.getUsedUnusedKeys(token, 1).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.unUsedKeyList = data.message;
            }
        });
        this.key.getUsedUnusedKeys(token, 0).subscribe(function (data1) {
            console.log(data1);
            if (data1.status) {
                _this.usedKeyList = data1.message;
            }
        });
    };
    ViewKeyPage.prototype.upgradePackage = function (key) {
        this.navCtrl.setRoot('ActivateKeyPage', { key: key });
    };
    ViewKeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewKeyPage');
    };
    ViewKeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-view-key',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\view-key\view-key.html"*/'<!--\n  Generated template for the ViewKeyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>View Key</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="dt-root">\n  	      <div class="row">\n      \n         \n        <!-- Grid Item -->\n        <div class="col-xl-12 order-sm-1">\n          \n          \n          <!-- Grid -->\n              <div class="row">\n            \n            <!-- Grid Item -->\n            <div class="col-12">\n            \n              <!-- Card -->\n              <div class="dt-card">\n                \n                <!-- Card Header -->\n                <div class="dt-card__header">\n        \n                <!-- Card Heading -->\n                \n                <!-- /card heading -->\n                \n                <!-- Card Tools -->\n                <div class="dt-card__tools">\n                  <a href="javascript:void(0)" class="dt-card__more"></a>\n                </div>\n                <!-- /card tools -->\n        \n                </div>\n                <!-- /card header -->\n                \n                <!-- Card Body -->\n                <div class="dt-card__body">\n                 <ul class="nav nav-underline flex-row border-bottom nav-card-tabs" role="tablist">\n                    <li class="nav-item">\n                    <a class="nav-link" [ngClass]="{\'active\':used}" data-toggle="tab" (click)="used = true;unused = false" role="tab" aria-controls="tab-pane1"\n                       aria-selected="true">Used</a>\n                    </li>\n                    <li class="nav-item">\n                    <a class="nav-link" [ngClass]="{\'active\':unused}" data-toggle="tab" (click)="used = false;unused = true" role="tab" aria-controls="tab-pane2"\n                       aria-selected="true">Unused</a>\n                    </li>\n                    <!-- <li class="nav-item">\n                    <a class="nav-link" data-toggle="tab" href="#tab-pane3" role="tab" aria-controls="tab-pane3"\n                       aria-selected="true">Transfer Code</a>\n                    </li> -->\n                  </ul>\n                  \n                  <!-- Tab Content-->\n                  <div class="tab-content">\n                 <div id="tab-pane1" class="tab-pane" [ngClass]="{\'active\':used}">\n                      <!-- Card -->\n                      <div class="dt-card">\n  \n                        <!-- Card Body -->\n                        <div class="dt-card__body p-0">\n  \n                        <!-- Tables -->\n                        <div class="table-responsive">\n                          <table class="table table-hover mb-0">\n                          <thead>\n                          <tr>\n                            <th scope="col">#</th>\n                            <!-- <th class="text-uppercase" scope="col">Date</th> -->\n                            <th class="text-uppercase" scope="col">Package Name</th>\n                            <th class="text-uppercase" scope="col">Key</th>\n                            <th class="text-uppercase" scope="col">Package Amount</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr *ngIf="usedKeyList == \'Sorry, No related record found.\'">Sorry, No related record found.</tr>\n                          <tr *ngFor="let unkey of usedKeyList;let i = index;">\n                            <th scope="row">{{i+1}}</th>\n                            <!-- <td>22/03/2019</td> -->\n                            <td>{{unkey.package_name | titlecase}}</td>\n                            <td>{{unkey.key_code}}</td>\n                            <td> $ {{unkey.package_amount}}</td>\n                          </tr>\n                          </tbody>\n                          </table>\n                        </div>\n                        <!-- /tables -->\n  \n                        </div>\n                        <!-- /card body -->\n  \n                      </div>\n                      \n                      </div>\n                     \n                      <div id="tab-pane2" class="tab-pane" [ngClass]="{\'active\':unused}">\n                      <!-- Card -->\n                      <div class="dt-card">\n  \n                        <!-- Card Body -->\n                        <div class="dt-card__body p-0">\n  \n                        <!-- Tables -->\n                        <div class="table-responsive">\n                          <table class="table table-hover mb-0">\n                          <thead>\n                          <tr>\n                            <th scope="col">#</th>\n                            <!-- <th class="text-uppercase" scope="col">Date</th> -->\n                            <th class="text-uppercase" scope="col">Used ID</th>\n                            <th class="text-uppercase" scope="col">Full Name</th>\n                            <th class="text-uppercase" scope="col">Package Name</th>\n                            <th class="text-uppercase" scope="col">Key</th>\n                            <th class="text-uppercase" scope="col">Action</th>\n                          </tr>\n                          </thead>\n                          <tbody>\n                          <tr *ngIf="unUsedKeyList == \'Sorry, No related record found.\'">Sorry, No related record found.</tr>  \n                          <tr *ngFor="let ukey of unUsedKeyList;let i = index;">\n                            <th>{{i+1}}</th>\n                            <!-- <td>22/03/2019</td> -->\n                            <td>{{ukey.used_user_user_id}}</td>\n                            <td>{{ukey.used_user_full_name | titlecase}}</td>\n                            <td>{{ukey.package_name | titlecase}}</td>\n                            <td>{{ukey.key_code}}</td>\n                            <td><a class="btn btn-success" (click)="upgradePackage(ukey.key_code)">Upgrade</a></td>\n                          </tr>\n                          </tbody>\n                          </table>\n                        </div>\n                        <!-- /tables -->\n  \n                        </div>\n                        <!-- /card body -->\n  \n                      </div>\n                      </div>\n                    \n                  \n                    \n                  </div>\n                  <!-- /tab Content-->\n                  \n                </div>\n                <!-- /card Body -->\n                \n              </div>\n              \n            </div>\n                \n          </div>\n          <!-- /grid -->\n        \n        </div>\n              <!-- /grid item -->\n      \n      </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\view-key\view-key.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_key_key__["a" /* KeyProvider */]])
    ], ViewKeyPage);
    return ViewKeyPage;
}());

//# sourceMappingURL=view-key.js.map

/***/ })

});
//# sourceMappingURL=38.js.map