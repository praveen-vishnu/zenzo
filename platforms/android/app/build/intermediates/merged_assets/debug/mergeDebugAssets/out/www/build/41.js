webpackJsonp([41],{

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReferralsPageModule", function() { return ReferralsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__referrals__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



 // <-- import the module

var ReferralsPageModule = /** @class */ (function () {
    function ReferralsPageModule() {
    }
    ReferralsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__referrals__["a" /* ReferralsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__referrals__["a" /* ReferralsPage */]), __WEBPACK_IMPORTED_MODULE_3_ngx_pagination__["a" /* NgxPaginationModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* TitleCasePipe */]]
        })
    ], ReferralsPageModule);
    return ReferralsPageModule;
}());

//# sourceMappingURL=referrals.module.js.map

/***/ }),

/***/ 424:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReferralsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invitees_invitees__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__(38);
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
 * Generated class for the ReferralsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ReferralsPage = /** @class */ (function () {
    function ReferralsPage(navCtrl, navParams, storage, alertCtrl, referral, titlecasePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.referral = referral;
        this.titlecasePipe = titlecasePipe;
        this.referrallist = [];
        this.referrallistall = [];
        this.overviewreferral = [];
        this.p1 = 1;
        this.copytextlabel1 = 'Copy';
        this.copytextlabel2 = 'Copy';
        this.storage.get('me').then(function (val) {
            _this.dashboardme = val;
            _this.getReferraldata(_this.dashboardme.token);
        });
    }
    ReferralsPage.prototype.getReferraldata = function (token) {
        var _this = this;
        this.referral.getReferralList(token).subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            if (res.status) {
                _this.referrallist = res.message;
                console.log(_this.referrallist);
                _this.referrallistall = res.message;
            }
        });
        this.referral.getReferralOveriew(token).subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            if (res.status) {
                _this.overview = res.message;
                _this.overviewreferral = res.message.recent_five_referrals;
                console.log(_this.overview);
                console.log(_this.overviewreferral);
            }
        });
    };
    ReferralsPage.prototype.referralfilter = function (val) {
        this.referrallist = this.referrallistall;
        if (val == "Left") {
            this.referrallist = this.referrallist.filter(function (ele) { return ele.user_position == "L"; });
        }
        else if (val == "Right") {
            this.referrallist = this.referrallist.filter(function (ele) { return ele.user_position == "R"; });
        }
        else {
            this.referrallist = this.referrallistall;
        }
    };
    ReferralsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ReferralsPage');
    };
    /* To copy any Text */
    ReferralsPage.prototype.copyText = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.copytextlabel2 = 'Copied';
    };
    /* To copy any Text */
    ReferralsPage.prototype.copyText1 = function (val) {
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
        this.copytextlabel1 = 'Copied';
    };
    ReferralsPage.prototype.userDetail = function (i) {
        var data;
        if (this.overviewreferral[i].key_activated_status == '0') {
            data = "\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Name:</span>" + this.titlecasePipe.transform(this.overviewreferral[i].full_name) + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Username:</span>" + this.overviewreferral[i].user_name + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Position:</span>" + this.overviewreferral[i].user_position + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Key Status:</span> <span>Not Active</span></p>\n      ";
        }
        else {
            data = "\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Name:</span>" + this.titlecasePipe.transform(this.overviewreferral[i].full_name) + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Username:</span>" + this.overviewreferral[i].user_name + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Position:</span>" + this.overviewreferral[i].user_position + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Key Status:</span> <span>Active</span></p>\n      ";
        }
        var alert = this.alertCtrl.create({
            title: "User Details",
            message: data,
            cssClass: "view-alert",
        });
        alert.present();
    };
    ReferralsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-referrals',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\invitees\referrals\referrals.html"*/'<!--\n  Generated template for the ReferralsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Referrals</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n<div class="dt-root">\n\n          <!-- Grid -->\n          <div class="row">\n\n            <!-- Grid Item -->\n            <div class="col-12">\n\n              <!-- Card -->\n              <div class="dt-card">\n\n                <!-- Card Body -->\n                <div class="dt-card__body">\n                  <div class="row">\n                    <div class="col-md-12">\n                      <h1 class="mb-2 text-center">Welcome {{dashboardme?.full_name}}!</h1>\n                    </div>\n                  </div>\n                  <!-- Grid -->\n                  <div class="row">\n\n                    <!-- Grid Item -->\n                    <div class="col-xl-6 col-sm-6 pt-xl-2 border-right">\n\n                      <h3>Left</h3>\n                      <div class="form-group mb-5">\n                        <input type="text" class="form-control mb-2" id="Referral" value="{{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Left" style="padding: 0px; height: 30px; padding-left: 10px;">\n                        <button ion-button block (click)="copyText1(dashboardme?.url+\'register?ref=\'+dashboardme?.user_name+\'&pos=Left\')">{{copytextlabel1}}</button>\n                      </div>\n                      <p>Easy share referral link on social.</p>\n                      <p class="cust_social_share">\n                        <a target="_blank" href="https://www.facebook.com/sharer.php?u={{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Left"><i class="fa fa-facebook-f"></i></a>\n                        <a target="_blank" href="https://twitter.com/intent/tweet?text=\'Hello People, Check out the amazing new Auto trading program. Invest and create your portfolio and make easy money.\'&url={{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Left"><i class="fa fa-twitter"></i></a>\n                        <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url={{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Left&title=\'Hello People , Check out the amazing new Auto trading program. Invest and create your portfolio and make easy money.\'"><i class="fa fa-linkedin"></i></a>\n\n                      </p>\n                    </div>\n                    <!-- /grid item -->\n\n                    <!-- Grid Item -->\n                    <div class="col-xl-6 col-sm-6 pt-xl-2 ">\n\n                      <h3>Right</h3>\n                      <div class="form-group mb-5">\n                        <input type="text" class="form-control mb-2" id="Referral" value="{{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Right" style="padding: 0px; height: 30px; padding-left: 10px;">\n                        <button ion-button block (click)="copyText(dashboardme?.url+\'register?ref=\'+dashboardme?.user_name+\'&pos=Right\')">{{copytextlabel2}}</button>\n                      </div>\n                      <p>Easy share referral link on social.</p>\n                      <p class="cust_social_share">\n                        <a target="_blank" href="https://www.facebook.com/sharer.php?u={{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Right"><i class="fa fa-facebook-f"></i></a>\n                        <a target="_blank" href="https://twitter.com/intent/tweet?text=\'Hello People, Check out the amazing new Auto trading program. Invest and create your portfolio and make easy money.\'&url={{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Right"><i class="fa fa-twitter"></i></a>\n                        <a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&url={{dashboardme?.url}}register?ref={{dashboardme?.user_name}}&pos=Right&title=\'Hello People, Check out the amazing new Auto trading program. Invest and create your portfolio and make easy money.\'"><i class="fa fa-linkedin"></i></a>\n\n                      </p>\n                    </div>\n                    <!-- /grid item -->\n\n                  </div>\n                  <!-- /grid -->\n\n                </div>\n                <!-- /card Body -->\n\n              </div>\n              <!-- /card -->\n\n            </div>\n            <!-- /grid item -->\n\n          </div>\n          <!-- /grid -->\n\n          <!-- Grid -->\n          <div class="row">\n\n            <!-- Grid Item -->\n            <div class="col-md-4">\n\n              <!-- Card -->\n              <div class="dt-card">\n\n                <!-- Card Body -->\n                <div class="dt-card__body">\n\n                  <h5 class="text-uppercase mb-3">My Referral Income</h5>\n\n                  <!-- Grid -->\n                  <div class="row no-gutters">\n\n                    <!-- Grid Item -->\n                    <div class="col-xl-5">\n                      <h2 class="mb-1 display-3 font-weight-medium">$0</h2>\n\n                    </div>\n                    <!-- /grid item -->\n\n                    <!-- Grid Item -->\n                    <!--<div class="col-xl-7">-->\n\n                    <!-- Chart Body -->\n                    <!--  <div class="dt-chart__body">-->\n                    <!--    <canvas id="chart-total-revenue" #chart_total_revenue width="160" height="53"></canvas>-->\n                    <!--  </div>-->\n                    <!-- /chart body -->\n\n                    <!--</div>-->\n                    <!-- /grid item -->\n\n                  </div>\n                  <!-- /grid -->\n\n                </div>\n                <!-- /card Body -->\n\n              </div>\n              <!-- /card -->\n\n            </div>\n            <!-- /grid item -->\n\n            <!-- Grid Item -->\n            <div class="col-md-4">\n\n              <!-- Card -->\n              <div class="dt-card">\n\n                <!-- Card Body -->\n                <div class="dt-card__body pb-3" style="min-height: 110px;">\n\n                  <h5 class="text-uppercase mb-3">Recent Referrals</h5>\n\n                  <ul class="dt-team-list">\n\n                    <li class="mb-1" *ngFor="let item of overviewreferral; let i =index;" (click)="userDetail(i)">\n                      <img class="dt-avatar size-40" src="https://ui-avatars.com/api/?name={{overviewreferral[i].full_name | titlecase}}&background=fd7e14&color=fff" title="{{overviewreferral[i].full_name}}" placement="right"><!--  [ngbTooltip]="main_user" tooltipClass="my-custom-class"> -->\n                      <!-- <ng-template #main_user>\n                        <p style="tex-align: left;">Name: {{overviewreferral[i].full_name}}</p>\n                        <p style="tex-align: left;">Username: {{overviewreferral[i].user_name}}</p>\n                        <p style="tex-align: left;">Position: {{overviewreferral[i].user_position}}</p>\n                        <p style="tex-align: left;">Key Status: <span *ngIf="overviewreferral[i].key_activated_status==\'0\'">Not Active</span>\n                          <span *ngIf="overviewreferral[i].key_activated_status==\'1\'">Active</span></p>\n\n                      </ng-template> -->\n                    </li>\n\n                  </ul>\n\n                </div>\n                <!-- /card Body -->\n\n              </div>\n              <!-- /card -->\n\n            </div>\n            <!-- /grid item -->\n\n            <!-- Grid Item -->\n            <div class="col-md-4">\n\n              <!-- Card -->\n              <div class="dt-card overflow-hidden">\n\n                <!-- Card Body -->\n                <div class="dt-card__body">\n\n                  <h5 class="text-uppercase mb-3">Total Direct Downline</h5>\n\n                  <!-- Grid -->\n                  <div class="row no-gutters">\n\n                    <!-- Grid Item -->\n                    <div class="col-xl-5">\n                      <h2 class="mb-0 display-3 font-weight-medium text-success">{{overview?.total_refferals}}</h2>\n                      <p class="mb-0 text-light-gray"></p>\n                    </div>\n                    <!-- /grid item -->\n\n                    <!-- Grid Item -->\n                    <div class="col-xl-7">\n\n                      <!-- Chart Body -->\n                      <div class="dt-chart__body mb-n6 mr-n6">\n\n                      </div>\n                      <!-- /chart body -->\n\n                    </div>\n                    <!-- /grid item -->\n\n                  </div>\n                  <!-- /grid -->\n\n                </div>\n                <!-- /card Body -->\n\n              </div>\n              <!-- /card -->\n\n            </div>\n            <!-- /grid item -->\n\n          </div>\n          <!-- /grid -->\n\n\n          <div class="dt-card">\n\n            <!-- Card Body -->\n            <div class="dt-card__body">\n              <h4>Your referral List</h4>\n              <!-- Tables -->\n              <select class="form-control table_search mt-0" (change)="referralfilter($event.target.value)">\n                    <option>All</option>\n                    <option>Left</option>\n                    <option>Right</option>\n                  </select>\n              <div class="table-responsive">\n                <table id="data-table" class="table table-striped table-bordered table-hover">\n                  <thead>\n                    <tr>\n                      <th>#</th>\n                      <th>User Email</th>\n                      <th>User ID</th>\n                      <th>Position</th>\n                      <th>Joining Date</th>\n                      <th>Activated Date</th>\n                      <th>Status</th>\n                    </tr>\n                  </thead>\n                  <tbody>\n\n                    <tr *ngIf="referrallist == \'No Record Found\' || referrallist.length == 0">\n                      <td class="text-center" colspan="9">No Record found</td>\n                    </tr>\n                    <tr class="gradeX" *ngFor="let item of referrallist | paginate: { id: \'foo\',\n                                     itemsPerPage: 2,\n                                     currentPage: p1,\n                                     totalItems: referrallist?.length };let i=index;">\n                      <td>{{i+1}}</td>\n                      <td>{{item[\'email_id\']}}</td>\n                      <td>{{item[\'user_name\']}}</td>\n                      <td *ngIf="item[\'user_position\'] == \'R\'">Right</td>\n                      <td *ngIf="item[\'user_position\'] == \'L\'">Left</td>\n                      <td>{{item[\'date_only\'] | date}}</td>\n                      <td *ngIf="item[\'key_activated_date\'] != \'0000-00-00\' ">{{item[\'key_activated_date\'] | date }}</td>\n                      <td *ngIf="item[\'key_activated_date\'] == \'0000-00-00\' ">{{item[\'key_activated_date\']}}</td>\n                      <td><span style="color: red" *ngIf="item[\'key_activated_status\']==\'0\'">Not Active</span>\n                        <span style="color: green" *ngIf="item[\'key_activated_status\']==\'1\'">Active</span></td>\n                    </tr>\n\n                  </tbody>\n\n                </table>\n      \n                        <pagination-controls id="foo" (pageChange)="p1 = $event" directionLinks="true" autoHide="true" responsive="true" previousLabel="Previous" nextLabel="Next">\n                        </pagination-controls>\n              </div>\n              <!-- /tables -->\n\n            </div>\n            <!-- /card body -->\n\n          </div>\n\n\n        </div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\invitees\referrals\referrals.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_invitees_invitees__["a" /* InviteesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* TitleCasePipe */]])
    ], ReferralsPage);
    return ReferralsPage;
}());

//# sourceMappingURL=referrals.js.map

/***/ })

});
//# sourceMappingURL=41.js.map