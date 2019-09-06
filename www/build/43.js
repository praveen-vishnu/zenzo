webpackJsonp([43],{

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PairsPageModule", function() { return PairsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pairs__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(38);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PairsPageModule = /** @class */ (function () {
    function PairsPageModule() {
    }
    PairsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pairs__["a" /* PairsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pairs__["a" /* PairsPage */]),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__angular_common__["i" /* TitleCasePipe */]]
        })
    ], PairsPageModule);
    return PairsPageModule;
}());

//# sourceMappingURL=pairs.module.js.map

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PairsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_invitees_invitees__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(22);
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
 * Generated class for the PairsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PairsPage = /** @class */ (function () {
    function PairsPage(navCtrl, navParams, storage, alertCtrl, referral, titlecasePipe) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this.referral = referral;
        this.titlecasePipe = titlecasePipe;
        //    "main_user":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    },
        //    "level_1_right":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    },
        //    "level_1_1_right":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    },
        //    "level_1_2_left":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    },
        //    "level_2_left":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    },
        //    "level_2_1_right":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    },
        //    "level_2_2_left":{
        //       "user_name":"",
        //       "full_name":"",
        //       "id":"",
        //       "key_activated_status":"",
        //       "total_left_position_invitee":"",
        //       "total_right_position_invitee":"",
        //       "user_account_status":"",
        //       "total_pair_matching":"",
        //       "left_business":0,
        //       "right_business":0
        //    }
        // }];
        this.overview = {
            direct_referral_income: 0,
            recent_five_referrals: [],
            today_count_left_direct_refferals: 0,
            today_count_right_direct_refferals: 0,
            today_left_business: 0,
            today_right_business: 0,
            todays_refferals: 0,
            total_count_left_direct_refferals: 0,
            total_count_right_direct_refferals: 0,
            total_left_position_users: 0,
            total_pair_match_business: 0,
            total_pair_matching: 0,
            total_refferals: 0,
            total_right_position_users: 0
        };
        this.pairsSearch = '';
        this.showTree = true;
        this.storage.get('me').then(function (val) {
            _this.dashboardme = val;
            _this.getReferraldata(_this.dashboardme.token);
        });
    }
    PairsPage.prototype.getReferraldata = function (token) {
        var _this = this;
        this.token = token;
        this.referral.getGenealogyList(token).subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            if (res.status) {
                _this.genealogy = res.message;
                console.log(JSON.stringify(_this.genealogy));
            }
        });
        this.referral.getReferralOveriew(token).subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            if (res.status) {
                _this.overview = res.message;
                console.log(_this.overview);
            }
        });
    };
    PairsPage.prototype.getGenealogy = function (username) {
        var _this = this;
        /******* Genealogy *******/
        var gene_name = username;
        // console.clear();
        console.log(gene_name);
        this.referral.getUserGenealogy(username, this.token).subscribe(function (res) {
            console.log(localStorage.getItem('token'));
            if (res.status) {
                _this.showTree = res.status;
                _this.genealogy = res.message;
                console.log(_this.genealogy);
            }
        });
    };
    PairsPage.prototype.ionViewDidLoagetReferraldatad = function () {
        console.log('ionViewDidLoad PairsPage');
    };
    PairsPage.prototype.userDetail = function (i) {
        var data;
        if (this.genealogy[i].key_activated_status == '0') {
            data = "\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Name:</span>" + this.titlecasePipe.transform(this.genealogy[i].full_name) + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Username:</span>" + this.genealogy[i].user_name + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Position:</span>" + this.genealogy[i].user_position + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Key Status:</span> <span>Not Active</span></p>\n      ";
        }
        else {
            data = "\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Name:</span>" + this.titlecasePipe.transform(this.genealogy[i].full_name) + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Username:</span>" + this.genealogy[i].user_name + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Position:</span>" + this.genealogy[i].user_position + "</p>\n      <p style=\"tex-align: left;\"><span style=\"font-weight: bold;\">Key Status:</span> <span>Active</span></p>\n      ";
        }
        var alert = this.alertCtrl.create({
            title: "User Details",
            message: data,
            cssClass: "view-alert",
        });
        alert.present();
    };
    PairsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pairs',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\invitees\pairs\pairs.html"*/'<!--\n   Generated template for the ReferralsPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Pairs</ion-title>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n   <div class="dt-root">\n      <ion-grid no-padding>\n         <ion-row>\n            <ion-col>\n               <!-- Grid Item -->\n               <div class="col-md-4">\n                  <!-- Card -->\n                  <div class="dt-card overflow-hidden">\n                     <!-- Card Body -->\n                     <div class="dt-card__body">\n                        <div class="d-flex mb-3">\n                           <p class="mb-1 text-light-gray">Total Downline</p>\n                           <div class="d-flex align-items-center ml-auto">\n                              <!--  <h5 class="mb-0 text-success font-weight-medium mr-1">0%</h5>\n                                 <i class="icon icon-menu-up f-12 text-success"></i> -->\n                           </div>\n                        </div>\n                        <!-- Grid -->\n                        <div class="row no-gutters">\n                           <!-- Grid Item -->\n                           <div class="col-xl-6 pr-2">\n                              <div class="row">\n                                 <div class="col-6" style="padding: 0 10px;">\n                                    <h6 class="mb-0 text-uppercase">Left</h6>\n                                    <h4 class="mb-0 font-weight-medium mr-1">{{overview.total_left_position_users}}</h4>\n                                 </div>\n                                 <div class="col-6" style="padding: 0 10px;">\n                                    <h6 class="mb-0 text-uppercase">Right</h6>\n                                    <h4 class="mb-0 font-weight-medium mr-1">{{overview.total_right_position_users}}</h4>\n                                 </div>\n                              </div>\n                           </div>\n                      \n                           <!-- /grid item -->\n                        </div>\n                        <!-- /grid -->\n                     </div>\n                     <!-- /card body -->\n                  </div>\n                  <!-- /card -->\n               </div>\n               <!-- /grid item -->\n            </ion-col>\n            <ion-col>\n               <!-- Grid Item -->\n               <div class="col-md-4">\n                  <!-- Card -->\n                  <div class="dt-card overflow-hidden">\n                     <!-- Card Body -->\n                     <div class="dt-card__body">\n                        <div class="d-flex mb-3">\n                           <p class="mb-1 text-light-gray">Today\'s Business</p>\n                           <div class="d-flex align-items-center ml-auto">\n                              <!--  <h5 class="mb-0 text-success font-weight-medium mr-1">0%</h5>\n                                 <i class="icon icon-menu-up f-12 text-success"></i> -->\n                           </div>\n                        </div>\n                        <!-- Grid -->\n                        <div class="row no-gutters">\n                           <!-- Grid Item -->\n                           <div class="col-xl-6 pr-2">\n                              <div class="row">\n                                 <div class="col-6" style="padding: 0 10px;">\n                                    <h6 class="mb-0 text-uppercase">Left</h6>\n                                    <h4 class="mb-0 font-weight-medium mr-1">{{overview.today_left_business}}</h4>\n                                 </div>\n                                 <div class="col-6" style="padding: 0 10px;">\n                                    <h6 class="mb-0 text-uppercase">Right</h6>\n                                    <h4 class="mb-0 font-weight-medium mr-1">{{overview.today_right_business}}</h4>\n                                 </div>\n                              </div>\n                           </div>\n                      \n                           <!-- /grid item -->\n                        </div>\n                        <!-- /grid -->\n                     </div>\n                     <!-- /card body -->\n                  </div>\n                  <!-- /card -->\n               </div>\n               <!-- /grid item -->\n            </ion-col>\n         </ion-row>\n         <ion-row>\n\n            <ion-col>\n               <!-- Grid Item -->\n               <div class="col-md-4">\n                  <!-- Card -->\n                  <div class="dt-card overflow-hidden">\n                     <!-- Card Body -->\n                     <div class="dt-card__body">\n                        <div class="d-flex mb-3">\n                           <h6 class="mb-0 text-uppercase">Total Paring Match</h6>\n                           <div class="d-flex align-items-center ml-auto">\n                              <h5 class="mb-0 text-success font-weight-medium mr-1">{{overview.total_pair_matching}} Paring Match</h5>\n                              <i class="icon icon-menu-up f-12 text-success"></i>\n                           </div>\n                        </div>\n                        <!-- Grid -->\n                        <div class="row no-gutters">\n                           <!-- Grid Item -->\n                           <div class="col-xl-5 pr-2">\n                              <h2 *ngIf="overview.total_pair_match_business" class="mb-0 display-3 font-weight-medium mr-1">${{overview.total_pair_match_business}}</h2>\n                              <p class="mb-0 text-light-gray">Total Value</p>\n                           </div>\n                           \n                           <!-- /grid item -->\n                        </div>\n                        <!-- /grid -->\n                     </div>\n                     <!-- /card body -->\n                  </div>\n                  <!-- /card -->\n               </div>\n               <!-- /grid item -->\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      <!-- Site Content -->\n      <div class="">\n         <!-- Grid -->\n         <div class="row">\n         </div>\n         <div class="dt-card">\n            <div class="dt-card__body">\n               <h4>Genealogy</h4>\n               <!-- \n                  <input class="form-control table_search mt-0" (keyup.enter)="getGenealogy($event.target.value)" id="sel1" placeholder="Search" /> -->\n               <!--<input class="cust_btn" (click)="getGenealogy(\'\')" id="sel1" type="submit" style="cursor: pointer" />-->\n                <ion-searchbar mode="md" [(ngModel)]="searchTerm"></ion-searchbar>\n\n               <div class="row">\n                  <div class="col-12">\n                     <div class="input-group" style="width: 25%;float: right;margin-left: 5px;">\n                        <input class="form-control table_search mt-0" [(ngModel)]="pairsSearch" (keyup.enter)="getGenealogy($event.target.value)" id="sel1" placeholder="Search">\n                        <span style="background: #eee;border-radius: 0 5px 5px 0;" class="input-group-addon" (click)="getGenealogy(pairsSearch)"><i style="margin: 10px;"\n                           class="icon icon-search-new"></i></span>\n                     </div>\n                     <input class="cust_btn" (click)="getGenealogy(\'\')" id="sel1" type="reset" value="Go Back" style="cursor: pointer" />\n                  </div>\n               </div>\n               <div class="tree custom-tree text-center management-hierarchy" *ngIf="!showTree">\n                  <div class="hv-container">\n                     <div class="hv-wrapper">\n                        <div class="hv-item">\n                           <h3 class="mt-5">Sorry, This account is not in your downline</h3>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n               <div class="tree custom-tree text-center management-hierarchy" *ngIf="showTree">\n                  <div class="hv-container">\n                     <div class="hv-wrapper">\n                        <div class="hv-item">\n                           <div class="hv-item-parent">\n                              <p>Left</p>\n                              <div class="person" placement="right" (click)="userDetail(\'main_user\')">\n                                 <div class="tree_structure tree_voilet">\n                                    <h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>\n                                    <p>{{genealogy?.main_user.user_name}}</p>\n                                 </div>\n                              </div>\n                              <p>Right</p>\n                           </div>\n                           <div *ngIf="genealogy?.main_user.total_right_position_invitee != \'0\' || genealogy?.main_user.total_left_position_invitee != \'0\'" class="hv-item-children">\n                              <div class="hv-item-child">\n                                 <div class="hv-item">\n                                    <div class="hv-item-parent">\n                                       <div (click)="getGenealogy(genealogy?.level_2_left.user_name)" class="person" placement="right" (click)="userDetail(\'level_2_left\')">\n                                       <div class="tree_structure tree_pink">\n                                          <!--<h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>-->\n                                          <h4 *ngIf="genealogy?.level_2_left.user_name"><i class="fa fa-user-circle-o" aria-hidden="true"></i></h4>\n                                          <h4 style="font-size:55px;margin-top:-5px;" *ngIf="!genealogy?.level_2_left.user_name"><i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>\n                                          <p>{{genealogy?.level_2_left.user_name}}</p>\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <div class="hv-item-children">\n                                    <div class="hv-item-child">\n                                       <div (click)="getGenealogy(genealogy?.level_2_2_left.user_name)" class="person" placement="right" (click)="userDetail(\'level_2_2_left\')">\n                                       <div class="tree_structure tree_orange">\n                                          <!--<h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>-->\n                                          <h4 *ngIf="genealogy?.level_2_2_left.user_name"><i class="fa fa-user-circle-o" aria-hidden="true"></i></h4>\n                                          <h4 style="font-size:55px;margin-top:-5px;" *ngIf="!genealogy?.level_2_2_left.user_name"><i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>\n                                          <p>{{genealogy?.level_2_2_left.user_name}}</p>\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <div class="hv-item-child">\n                                    <div (click)="getGenealogy(genealogy?.level_2_1_right.user_name)" class="person" placement="right" (click)="userDetail(\'level_2_1_right\')">\n                                    <div class="tree_structure tree_voilet">\n                                       <!--<h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>-->\n                                       <h4 style="font-size:55px;margin-top:-5px;" *ngIf="!genealogy?.level_2_1_right.user_name"><i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>\n                                       <h4 *ngIf="genealogy?.level_2_1_right.user_name"><i class="fa fa-user-circle-o" aria-hidden="true"></i></h4>\n                                       <p>{{genealogy?.level_2_1_right.user_name}}</p>\n                                    </div>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div class="hv-item-child">\n                        <div class="hv-item">\n                           <div class="hv-item-parent">\n                              <div (click)="getGenealogy(genealogy?.level_1_right.user_name)" class="person" placement="right" (click)="userDetail(\'level_1_right\')">\n                              <div class="tree_structure tree_green">\n                                 <!--<h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>-->\n                                 <h4 style="font-size:55px;margin-top:-5px;" *ngIf="!genealogy?.level_1_right.user_name"><i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>\n                                 <h4 *ngIf="genealogy?.level_1_right.user_name"><i class="fa fa-user-circle-o" aria-hidden="true"></i></h4>\n                                 <p>{{genealogy?.level_1_right.user_name}}</p>\n                              </div>\n                           </div>\n                        </div>\n                        <div class="hv-item-children">\n                           <div class="hv-item-child">\n                              <div (click)="getGenealogy(genealogy?.level_1_2_left.user_name)" class="person" placement="right" (click)="userDetail(\'level_1_2_left\')">\n                              <div class="tree_structure tree_voilet">\n                                 <!--<h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>-->\n                                 <h4 style="font-size:55px;margin-top:-5px;" *ngIf="!genealogy?.level_1_2_left.user_name"><i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>\n                                 <h4 *ngIf="genealogy?.level_1_2_left.user_name"><i class="fa fa-user-circle-o" aria-hidden="true"></i></h4>\n                                 <p>{{genealogy?.level_1_2_left.user_name}}</p>\n                              </div>\n                           </div>\n                        </div>\n                        <div class="hv-item-child">\n                           <div (click)="getGenealogy(genealogy?.level_1_1_right.user_name)" class="person" placement="right" (click)="userDetail(\'level_1_1_right\')">\n                           <div class="tree_structure tree_green">\n                              <!--<h4>{{genealogy?.main_user.user_account_status[0] | titlecase }}</h4>-->\n                              <h4 style="font-size:55px;margin-top:-5px;" *ngIf="!genealogy?.level_1_1_right.user_name"><i class="fa fa-question-circle-o" aria-hidden="true"></i></h4>\n                              <h4 *ngIf="genealogy?.level_1_1_right.user_name"><i class="fa fa-user-circle-o" aria-hidden="true"></i></h4>\n                              <p>{{genealogy?.level_1_1_right.user_name}}</p>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n   </div>\n   </div>\n   </div>\n   </div>\n   </div>\n   </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\invitees\pairs\pairs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_invitees_invitees__["a" /* InviteesProvider */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["i" /* TitleCasePipe */]])
    ], PairsPage);
    return PairsPage;
}());

//# sourceMappingURL=pairs.js.map

/***/ })

});
//# sourceMappingURL=43.js.map