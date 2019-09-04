webpackJsonp([5],{

/***/ 408:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectedTaskPageModule", function() { return RejectedTaskPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rejected_task__ = __webpack_require__(462);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RejectedTaskPageModule = /** @class */ (function () {
    function RejectedTaskPageModule() {
    }
    RejectedTaskPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__rejected_task__["a" /* RejectedTaskPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__rejected_task__["a" /* RejectedTaskPage */]),
            ],
        })
    ], RejectedTaskPageModule);
    return RejectedTaskPageModule;
}());

//# sourceMappingURL=rejected-task.module.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RejectedTaskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_task_task__ = __webpack_require__(249);
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
 * Generated class for the RejectedTaskPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RejectedTaskPage = /** @class */ (function () {
    function RejectedTaskPage(navCtrl, navParams, storage, task) {
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
    RejectedTaskPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChooseTaskPage');
    };
    RejectedTaskPage.prototype.getdata = function (token) {
        var _this = this;
        this.task.getSubmittedList(token, 2).subscribe(function (res) {
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
    RejectedTaskPage.prototype.getArray = function (arr) {
        return Array.isArray(arr);
    };
    RejectedTaskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-rejected-task',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\task\rejected-task\rejected-task.html"*/'<!--\n  Generated template for the ReferralsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Rejected Task</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n\n<ion-content>\n	<div class="dt-root">\n		    <div class="dt-card" margin>\n        <div class="dt-card__body">\n        <h4>Task</h4>\n        <!-- Tables -->\n        <div class="table-responsive">\n            \n          <table id="data-table" class="table table-hover">\n            \n          <thead>\n          <tr>\n            <th>#</th>\n            <th>Task Date</th>\n            <th>Task Code</th>\n            <th>Task type (Platform)</th>\n            <th>Rewards</th>\n          </tr>\n          </thead>\n          <tbody *ngIf="!getArray(task_details_available_list)">\n            <tr class="text-center"><td colspan="6">No Records Found</td></tr>\n          </tbody>\n          <tbody *ngIf="getArray(task_details_available_list)">\n           <tr class="gradeX" *ngFor="let item of task_details_available_list;let i = index;">\n            <td>{{i+1}}</td>\n            <td>{{item.date_only | date}}</td>\n            <td>{{item.task_code}}</td>\n            <td>{{item.task_type_name}} ({{item.platform_name}})</td>\n            <td>{{item.task_reward}}</td>\n          </tr>\n          </tbody>\n           \n          </table>\n  \n        </div>\n        <!-- /tables -->\n  \n        </div>\n        <!-- /card body -->\n  \n      </div>\n	</div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\task\rejected-task\rejected-task.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_task_task__["a" /* TaskProvider */]])
    ], RejectedTaskPage);
    return RejectedTaskPage;
}());

//# sourceMappingURL=rejected-task.js.map

/***/ })

});
//# sourceMappingURL=5.js.map