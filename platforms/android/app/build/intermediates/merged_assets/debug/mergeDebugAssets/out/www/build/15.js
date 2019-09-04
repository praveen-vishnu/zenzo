webpackJsonp([15],{

/***/ 397:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParsEarningsPageModule", function() { return ParsEarningsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pars_earnings__ = __webpack_require__(450);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ParsEarningsPageModule = /** @class */ (function () {
    function ParsEarningsPageModule() {
    }
    ParsEarningsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pars_earnings__["a" /* ParsEarningsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pars_earnings__["a" /* ParsEarningsPage */]),
            ],
        })
    ], ParsEarningsPageModule);
    return ParsEarningsPageModule;
}());

//# sourceMappingURL=pars-earnings.module.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParsEarningsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profit_report_profit_report__ = __webpack_require__(251);
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
 * Generated class for the ParsEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ParsEarningsPage = /** @class */ (function () {
    function ParsEarningsPage(navCtrl, navParams, storage, profitReportProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.profitReportProvider = profitReportProvider;
        this.live_reports = {
            left_business: 0,
            pair_match_business: 0,
            right_business: 0,
            user_commission_amount: 0
        };
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    ParsEarningsPage.prototype.getdata = function (token) {
        var _this = this;
        // referral earning API
        this.profitReportProvider.getPairsEarningReport(token).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.pair_reports = data.message;
            }
        });
        this.profitReportProvider.getPairsEarningLiveReport(token).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.live_reports = data.message;
            }
        });
    };
    ParsEarningsPage.prototype.getparseFloat = function (val) {
        return parseFloat(val).toFixed(2);
    };
    ParsEarningsPage.prototype.getArray = function (array) {
        return Array.isArray(array);
    };
    ParsEarningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ParsEarningsPage');
    };
    ParsEarningsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pars-earnings',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profit-report\pars-earnings\pars-earnings.html"*/'<!--\n   Generated template for the ParsEarningsPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Pairs Earnings</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <ion-row>\n      <!-- Grid Item -->\n      <div col-6>\n         <!-- Card -->\n         <div class="dt-card overflow-hidden">\n            <!-- Card Body -->\n            <div class="dt-card__body">\n               <div class="d-flex mb-3">\n                  <h6 class="mb-0 text-uppercase">Total Paring Match</h6>\n                  <div class="d-flex align-items-center ml-auto">\n                     <!-- \n                        <h5 class="mb-0 text-success font-weight-medium mr-1">67%</h5>\n                        <i class="icon icon-menu-up f-12 text-success"></i> -->\n                  </div>\n               </div>\n               <!-- Grid -->\n               <div class="row no-gutters">\n                  <!-- Grid Item -->\n                     <div class="row">\n                        <div col-6>\n                           <h6 class="mb-0 text-uppercase">Paring Match</h6>\n                           <h4 class="mb-0 font-weight-medium mr-1">{{live_reports.pair_match_business}} </h4>\n                        </div>\n                        <div col-6>\n                           <h6 class="mb-0 text-uppercase">Total Value</h6>\n                           <h4 class="mb-0 font-weight-medium mr-1">{{live_reports.user_commission_amount}}</h4>\n                        </div>\n                     </div>\n                  <!-- /grid item -->\n               </div>\n               <!-- /grid -->\n            </div>\n            <!-- /card body -->\n         </div>\n         <!-- /card -->\n      </div>\n      <div col-6>\n         <!-- Card -->\n         <div class="dt-card overflow-hidden">\n            <!-- Card Body -->\n            <div class="dt-card__body">\n               <div class="d-flex mb-3">\n                  <h6 class="mb-0 text-uppercase">Business</h6>\n                  <div class="d-flex align-items-center ml-auto">\n                     <!-- \n                        <h5 class="mb-0 text-success font-weight-medium mr-1">67%</h5>\n                        <i class="icon icon-menu-up f-12 text-success"></i> -->\n                  </div>\n               </div>\n               <!-- Grid -->\n               <div class="row no-gutters">\n                  <!-- Grid Item -->\n                  <div class="col-xl-7 pr-2">\n                     <div class="row">\n                        <div col-6>\n                           <h6 class="mb-0 text-uppercase">Left</h6>\n                           <h4 class="mb-0 font-weight-medium mr-1">{{live_reports.left_business}}</h4>\n                        </div>\n                        <div col-6>\n                           <h6 class="mb-0 text-uppercase">Right</h6>\n                           <h4 class="mb-0 font-weight-medium mr-1">{{live_reports.right_business}}</h4>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- /grid item -->\n               </div>\n               <!-- /grid -->\n            </div>\n            <!-- /card body -->\n         </div>\n         <!-- /card -->\n      </div>\n   </ion-row>\n   <div class="dt-root">\n      <div class="dt-card">\n         <div class="dt-card__body">\n            <ul class="nav nav-underline flex-row border-bottom nav-card-tabs mt-0" role="tablist">\n               <li class="nav-item">\n                  <a class="nav-link active" data-toggle="tab" href="#tab-pane1" role="tab" aria-controls="tab-pane1"\n                     aria-selected="true">Pair Earning Report</a>\n               </li>\n               <!--  <li class="nav-item">\n                  <a class="nav-link" data-toggle="tab" href="#tab-pane2" role="tab" aria-controls="tab-pane2"\n                     aria-selected="true">Live Pair Report</a>\n                  </li> -->\n            </ul>\n            <div class="tab-content mt-5 services_page">\n               <div id="tab-pane1" class="tab-pane active show">\n                  <div class="table-responsive">\n                     <table id="data-table" class="table table-hover">\n                        <thead>\n                           <tr>\n                              <th>#</th>\n                              <th>Date</th>\n                              <th>Left Business</th>\n                              <th>Right  Business</th>\n                              <th>Pair Matching</th>\n                              <th>Left Carry Forward</th>\n                              <th>Right Carry Forward</th>\n                              <th>Earning(USD)</th>\n                           </tr>\n                        </thead>\n                        <tbody *ngIf="!getArray(pair_reports)">\n                           <tr class="text-center">\n                              <td colspan="8">No Records Found</td>\n                           </tr>\n                        </tbody>\n                        <tbody *ngIf="getArray(pair_reports)">\n                           <tr *ngFor="let report of pair_reports; let i = index">\n                              <td>{{i+1}}</td>\n                              <td>{{report?.date_n_time | date: \'MMM d, y, h:mm a\'}}</td>\n                              <td>{{ getparseFloat( report?.left_business )}} $</td>\n                              <td>{{ getparseFloat( report?.right_business )}} $</td>\n                              <td>{{ getparseFloat( report?.pair_match_business )}} $</td>\n                              <td>{{ getparseFloat( report?.left_cf_business )}} $</td>\n                              <td>{{ getparseFloat( report?.right_cf_business )}} $</td>\n                              <td>{{ getparseFloat( report?.user_commission_amount )}} $</td>\n                           </tr>\n                        </tbody>\n                     </table>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profit-report\pars-earnings\pars-earnings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_profit_report_profit_report__["a" /* ProfitReportProvider */]])
    ], ParsEarningsPage);
    return ParsEarningsPage;
}());

//# sourceMappingURL=pars-earnings.js.map

/***/ })

});
//# sourceMappingURL=15.js.map