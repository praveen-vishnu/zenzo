webpackJsonp([7],{

/***/ 410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChooseTaskPageModule", function() { return ChooseTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__choose_task__ = __webpack_require__(466);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChooseTaskPageModule = /** @class */ (function () {
    function ChooseTaskPageModule() {
    }
    ChooseTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__choose_task__["a" /* ChooseTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__choose_task__["a" /* ChooseTaskPage */]),
            ],
        })
    ], ChooseTaskPageModule);
    return ChooseTaskPageModule;
}());

//# sourceMappingURL=choose-task.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChooseTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_task__ = __webpack_require__(250);
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
 * Generated class for the ChooseTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChooseTaskPage = /** @class */ (function () {
    function ChooseTaskPage(navCtrl, navParams, storage, task) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.task = task;
        this.task_overview = [];
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    ChooseTaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseTaskPage');
    };
    ChooseTaskPage.prototype.getdata = function (token) {
        var _this = this;
        this.task.getAvailableList(token).subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            if (res.status) {
                _this.task_details_available_list = res.message;
                console.log(_this.task_details_available_list);
            }
        });
        this.task.getTaskOveriew(token).subscribe(function (res) {
            console.log(res);
            if (res.status) {
                _this.task_overview = res.message;
            }
        });
    };
    ChooseTaskPage.prototype.getArray = function (arr) {
        return Array.isArray(arr);
    };
    ChooseTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-choose-task',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\task\choose-task\choose-task.html"*/'<!--\n   Generated template for the ReferralsPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Choose Task</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div class="dt-root">\n      <!-- Grid -->\n      <div class="row">\n         <!-- Grid Item -->\n         <div col-3>\n            <div class="card dt-chart">\n               <!-- Chart Header -->\n               <div class="dt-chart__header pt-4">\n                  <div class="d-flex align-items-center">\n                     <h4 class="mb-0 text-info mr-1">{{task_overview?.attended_tasks}}</h4>\n                     <p class="mb-0 f-12">Your Approved Tasks</p>\n                  </div>\n               </div>\n               <!-- /chart header -->\n            </div>\n         </div>\n         <!-- /grid item --> \n         <!-- Grid Item -->\n         <div col-3>\n            <!-- Card -->\n            <div class="card dt-chart">\n               <!-- Chart Header -->\n               <div class="dt-chart__header pt-4">\n                  <div class="d-flex align-items-center">\n                     <h4 class="mb-0 text-success mr-1">{{task_overview?.approved_tasks}}</h4>\n                     <p class="mb-0 f-12">Your Approved Tasks</p>\n                  </div>\n               </div>\n               <!-- /chart header -->\n            </div>\n            <!-- /chart card -->\n         </div>\n         <!-- /grid item -->\n         <div col-3>\n            <!-- Card -->\n            <div class="card dt-chart">\n               <!-- Chart Header -->\n               <div class="dt-chart__header pt-4">\n                  <div class="d-flex align-items-center">\n                     <h4 class="mb-0 text-cyan mr-1">{{task_overview?.pending_approval_tasks}}</h4>\n                     <p class="mb-0 f-12">Total Pending Task</p>\n                  </div>\n               </div>\n               <!-- /chart header -->\n            </div>\n            <!-- /chart card -->\n         </div>\n         <div col-3>\n            <!-- Card -->\n            <div class="card dt-chart">\n               <!-- Chart Header -->\n               <div class="dt-chart__header pt-4">\n                  <div class="d-flex align-items-center">\n                     <h4 class="mb-0 text-purple mr-1">{{task_overview?.rejected_tasks}}</h4>\n                     <p class="mb-0 f-12">Total Decline Task</p>\n                  </div>\n               </div>\n               <!-- /chart header -->\n            </div>\n            <!-- /chart card -->\n         </div>\n      </div>\n      <div class="dt-card">\n         <div class="dt-card__body">\n            <h4>Task</h4>\n            <!-- Tables -->\n            <div class="table-responsive">\n               <table id="data-table" class="table table-hover">\n                  <thead>\n                     <tr>\n                        <th>#</th>\n                        <th>Task Date</th>\n                        <th>Task Code</th>\n                        <th>Task type (Platform)</th>\n                        <th>Rewards</th>\n                     </tr>\n                  </thead>\n                  <tbody *ngIf="!getArray(task_details_available_list)">\n                     <tr class="text-center">\n                        <td colspan="6">No Records Found</td>\n                     </tr>\n                  </tbody>\n                  <tbody *ngIf="getArray(task_details_available_list)">\n                     <tr (click)="openTask(item.task_code)" class="gradeX" *ngFor="let item of task_details_available_list;let i = index;">\n                     <td>{{i+1}}</td>\n                     <td>{{item.date_only | date}}</td>\n                     <td>{{item.task_code}}</td>\n                     <td>{{item.task_type_name}} ({{item.platform_name}})</td>\n                     <td>{{item.task_reward}}</td>\n                     </tr>\n                  </tbody>\n               </table>\n            </div>\n            <!-- /tables -->\n         </div>\n         <!-- /card body -->\n      </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\task\choose-task\choose-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_task__["a" /* TaskProvider */]])
    ], ChooseTaskPage);
    return ChooseTaskPage;
}());

//# sourceMappingURL=choose-task.js.map

/***/ })

});
//# sourceMappingURL=7.js.map