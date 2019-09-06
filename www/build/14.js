webpackJsonp([14],{

/***/ 402:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEarningsPageModule", function() { return TaskEarningsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__task_earnings__ = __webpack_require__(457);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TaskEarningsPageModule = /** @class */ (function () {
    function TaskEarningsPageModule() {
    }
    TaskEarningsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__task_earnings__["a" /* TaskEarningsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__task_earnings__["a" /* TaskEarningsPage */]),
            ],
        })
    ], TaskEarningsPageModule);
    return TaskEarningsPageModule;
}());

//# sourceMappingURL=task-earnings.module.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskEarningsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_wallet_wallet__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profit_report_profit_report__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(22);
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
 * Generated class for the TaskEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TaskEarningsPage = /** @class */ (function () {
    function TaskEarningsPage(navCtrl, navParams, storage, walletProvider, profitReportProvider) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.walletProvider = walletProvider;
        this.profitReportProvider = profitReportProvider;
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
    TaskEarningsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TaskEarningsPage');
    };
    TaskEarningsPage.prototype.getdata = function (token) {
        var _this = this;
        // referral earning API
        this.profitReportProvider.getTasksEarningReport(token).subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.task_reports = data.message;
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
    TaskEarningsPage.prototype.getparseFloat = function (val) {
        return parseFloat(val).toFixed(2);
    };
    TaskEarningsPage.prototype.getArray = function (array) {
        return Array.isArray(array);
    };
    TaskEarningsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-task-earnings',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profit-report\task-earnings\task-earnings.html"*/'<!--\n  Generated template for the TaskEarningsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Pairs Earnings</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<div class="dt-root">\n\n	<ion-row text-center>\n	<div col-3></div>	\n	 <div col-6>\n  \n              <!-- Card -->\n              <div class="card dt-chart">\n  \n                <!-- Chart Header -->\n                <div class="dt-chart__header pt-4">\n                  <div class="d-flex align-items-center">\n                    <h4 class="mb-0 text-success mr-1">$ {{wallet_income_overview.total_task_earned_income}}</h4>\n                    <p class="mb-0 f-12">Total Task Earning</p>\n                  </div>\n                </div>\n                <!-- /chart header -->  \n              </div>\n              <!-- /chart card -->  \n            </div>\n	</ion-row>\n	\n	  <div class="dt-card">\n        <div class="dt-card__body">\n        <h4>Task Earning Report</h4>\n        <!-- Tables -->\n        <div class="table-responsive">\n          <table id="data-table" class="table table-hover">\n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Date</th>\n            <th>Task Type</th>\n            <th>Code</th>\n            <th>Approved Date</th>\n            <th>Reward</th>                    \n          </tr>\n          </thead>\n          <tbody *ngIf="getArray(task_reports)">\n          <tr *ngFor="let item of task_reports;let i = index;">\n            \n            <th>{{i+1}}</th>\n            <th>{{item.completed_date_n_time | date}}</th>\n            <th>{{item.task_type_name}}</th>\n            <th>{{item.task_code}}</th>\n            <th>{{item.completed_date_n_time | date}}</th>\n            <th>{{item.task_reward }}</th>\n          </tr>\n          </tbody>\n          <tbody *ngIf="!getArray(task_reports)">\n            <tr class="text-center"><td colspan="6">No Records Found</td></tr>\n          </tbody>\n           \n          </table>\n  \n        </div>\n        <!-- /tables -->\n  \n        </div>\n        <!-- /card body -->\n  \n      </div>\n      \n</div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profit-report\task-earnings\task-earnings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_wallet_wallet__["a" /* WalletProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_profit_report_profit_report__["a" /* ProfitReportProvider */]])
    ], TaskEarningsPage);
    return TaskEarningsPage;
}());

//# sourceMappingURL=task-earnings.js.map

/***/ })

});
//# sourceMappingURL=14.js.map