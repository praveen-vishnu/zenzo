webpackJsonp([14],{

/***/ 398:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralEarningsPageModule", function() { return ReferralEarningsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referral_earnings__ = __webpack_require__(451);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ReferralEarningsPageModule = /** @class */ (function () {
    function ReferralEarningsPageModule() {
    }
    ReferralEarningsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__referral_earnings__["a" /* ReferralEarningsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referral_earnings__["a" /* ReferralEarningsPage */]),
            ],
        })
    ], ReferralEarningsPageModule);
    return ReferralEarningsPageModule;
}());

//# sourceMappingURL=referral-earnings.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralEarningsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invitees_invitees__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_wallet_wallet__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profit_report_profit_report__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(26);
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
 * Generated class for the ReferralEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferralEarningsPage = /** @class */ (function () {
    function ReferralEarningsPage(navCtrl, navParams, storage, inviteesProvider, walletProvider, profitReportProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.inviteesProvider = inviteesProvider;
        this.walletProvider = walletProvider;
        this.profitReportProvider = profitReportProvider;
        this.total_earnings = 0;
        this.wallet_income_overview = {
            "wallet_balance": 0,
            "total_direct_referral_income": 0,
            "total_pairs_earned_income": 0,
            "total_task_earned_income": 0,
            "today_direct_referral_income": 0
        };
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    ReferralEarningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferralEarningsPage');
    };
    ReferralEarningsPage.prototype.getdata = function (token) {
        var _this = this;
        /******* Overview *******/
        this.inviteesProvider.getReferralOveriew(token).subscribe(function (res) {
            console.log(res);
            _this.overview = res.message;
            console.log(_this.overview);
        });
        // referral earning API
        this.profitReportProvider.getDirectReferral(token).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.earning_reports = data.message;
                _this.earning_reports.forEach(function (ele) {
                    _this.total_earnings += parseFloat(ele.commission_amount);
                });
            }
        });
        this.walletProvider.getWalletOverview(token).subscribe(function (data) {
            console.clear();
            console.log(data);
            if (data.status) {
                _this.wallet_income_overview = data.message;
            }
        });
    };
    ReferralEarningsPage.prototype.getparseFloat = function (val) {
        return parseFloat(val).toFixed(2);
    };
    ReferralEarningsPage.prototype.getArray = function (array) {
        return Array.isArray(array);
    };
    ReferralEarningsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-referral-earnings',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profit-report\referral-earnings\referral-earnings.html"*/'<!--\n   Generated template for the ReferralEarningsPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Referral Earnings</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div class="dt-root">\n      <div>\n         <div class="row">\n            <div col-6>\n               <div class="card dt-card__full-height">\n                  <!-- Card Body -->\n                  <div class="card-body p-3 bg-gradient-blueberry">\n                     <div class="row" >\n                        <div class="col-md-12" padding-left>\n                           <i class="fa fa-money  faa-horizontal animated" style="font-size: 30px; margin-bottom: 10px;" aria-hidden="true"></i>\n                           <div class="row" padding-left>\n                              <!-- <div col-6>\n                                 <p>Total Earning</p>\n                                 <p class="display-3 mb-2">{{earning_reports.length}}</p>\n                                 </div> -->\n                              <div col-6>\n                                 <p>Earnings</p>\n                                 <p class="display-4 mb-2">{{overview?.direct_referral_income}}</p>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- /card body -->\n               </div>\n            </div>\n            <div col-6>\n               <div class="card dt-card__full-height">\n                  <!-- Card Body -->\n                  <div class="card-body p-3 bg-gradient-purple" padding-left>\n                     <h5 style="color: #fff;">Todays Earning</h5>\n                     <div class="row" padding-left>\n                        <div col-6>\n                           <p>Users</p>\n                           <p class="display-3 mb-2">{{overview?.todays_refferals}}</p>\n                        </div>\n                        <div col-6>\n                           <p>Earnings</p>\n                           <p class="display-4 mb-2">{{wallet_income_overview.today_direct_referral_income}}</p>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- /card body -->\n               </div>\n            </div>\n         </div>\n      </div>\n      <div class="dt-card">\n         <!-- Card Body -->\n         <div class="dt-card__body">\n            <h4>Referral Earning Report</h4>\n            <!-- Tables -->\n            <div class="table-responsive">\n               <table id="data-table" class="table table-striped table-bordered table-hover">\n                  <thead>\n                     <tr>\n                        <th>#</th>\n                        <th>Date</th>\n                        <th>User(User ID)</th>\n                        <th>Position</th>\n                        <th>Type of Income(%)</th>\n                        <th>Earning(USD)</th>\n                     </tr>\n                  </thead>\n                  <tbody *ngIf="getArray(earning_reports)">\n                     <tr class="gradeX" *ngFor="let report of earning_reports; let i = index">\n                        <td>{{i+1}}</td>\n                        <td>{{report.date_n_time | date:\'MMM d, y, h:mm a\'}}</td>\n                        <td>{{report.full_name}}({{report.user_name}})</td>\n                        <td *ngIf="report.user_position == \'L\'">Left</td>\n                        <td *ngIf="report.user_position == \'R\'">Right</td>\n                        <td>{{ getparseFloat( report.commission_percentage )}}</td>\n                        <td>{{ getparseFloat( report.commission_amount )}} $</td>\n                     </tr>\n                  </tbody>\n                  <tbody *ngIf="!getArray(earning_reports)">\n                     <tr class="gradeX text-center">\n                        <td colspan="6">No Records Found</td>\n                     </tr>\n                  </tbody>\n               </table>\n            </div>\n            <!-- /tables -->\n         </div>\n         <!-- /card body -->\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profit-report\referral-earnings\referral-earnings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_invitees_invitees__["a" /* InviteesProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_wallet_wallet__["a" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_profit_report_profit_report__["a" /* ProfitReportProvider */]])
    ], ReferralEarningsPage);
    return ReferralEarningsPage;
}());

//# sourceMappingURL=referral-earnings.js.map

/***/ })

});
//# sourceMappingURL=14.js.map