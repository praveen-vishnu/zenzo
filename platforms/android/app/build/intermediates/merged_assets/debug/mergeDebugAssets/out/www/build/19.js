webpackJsonp([19],{

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile__ = __webpack_require__(445);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProfilePageModule = /** @class */ (function () {
    function ProfilePageModule() {
    }
    ProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__profile__["a" /* ProfilePage */]),
            ],
        })
    ], ProfilePageModule);
    return ProfilePageModule;
}());

//# sourceMappingURL=profile.module.js.map

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(128);
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
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, storage, auth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.auth = auth;
        this.colors_sizes = [];
        this.storage.get('me').then(function (val) {
            _this.get_dashboard(val.token);
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
        // this.auth.test().subscribe((res:any)=>{
        //   console.clear()
        //   var colors_sizes = res.message.colors_sizes;
        //   var arr =[]
        //   colors_sizes.forEach(ele=>{
        //     this.colors_sizes.push({
        //       name: ele.id+'Original',
        //       type:'Original',
        //       placeholder: 'Enter Value of ' + ele.pr_color_name +' for size '+ele.pr_size_name
        //       },
        //       {
        //       name: ele.id+'Quantity',
        //       type:'Quantity',
        //       placeholder: 'Enter Value of ' + ele.pr_color_name +' for size '+ele.pr_size_name
        //       },
        //       {
        //       name: ele.id+'Discount',
        //       type:'Discount',
        //       placeholder: 'Enter Value of ' + ele.pr_color_name +' for size '+ele.pr_size_name
        //       })
        //   })
        //   console.log(this.colors_sizes)
        // })
    };
    ProfilePage.prototype.get_dashboard = function (token) {
        var _this = this;
        this.auth.getDash(token).subscribe(function (res) {
            if (res.status) {
                _this.storage.set('me', res.message);
                _this.user = res.message;
            }
        });
    };
    ProfilePage.prototype.goTo = function (page) {
        this.navCtrl.push(page);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n     <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title >Profile</ion-title>\n    <ion-buttons end>\n      <button ion-button >\n        <!-- <ion-icon name="log-out"></ion-icon> -->\n      </button>\n     </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n	<ion-card style="margin: 0;width: 100%" (click)="goTo(\'EditProfilePage\')">\n		 <ion-item no-lines no-padding>\n		  <div class="rating_module" style="padding: 5px;" item-start>\n	          <img src="https://ui-avatars.com/api/?background=a172e7&color=fff&name={{user?.full_name}}">\n	        </div>\n		    <h4><strong>{{user?.full_name |titlecase}}</strong></h4>\n            <p>{{user?.email_id}}</p>\n            <p>{{user?.mobile_number}}</p>\n             <div class="rating_module" item-end>\n	          <img src="assets/images/edit-profile.png">\n	        </div>\n		  </ion-item>\n	</ion-card>\n\n	<ion-card style="margin: 15px 0 0 0;width: 100%" margin-top (click)="goTo(\'ChangePasswordPage\')">\n		<ion-item no-lines no-padding>\n		  <div class="rating_module" item-start>\n	         <ion-icon color="light" name="md-lock"></ion-icon>\n	        </div>\n		    <h4><strong>Change Password</strong></h4>\n		  </ion-item>\n	</ion-card>\n  \n \n\n	<ion-card style="margin: 15px 0 0 0;width: 100%" margin-top (click)="goTo(\'UpdateKycPage\')">\n		<ion-item no-lines no-padding>\n		  <div class="rating_module" item-start>\n	          <ion-icon color="light" name="key"></ion-icon>\n	        </div>\n		    <h4><strong>Update KYC</strong></h4>\n		  </ion-item>\n	</ion-card>\n\n\n	<ion-card style="margin: 15px 0 0 0;width: 100%" margin-top (click)="goTo(\'UpdateSocialPage\')">\n		<ion-item no-lines no-padding>\n		  <div class="rating_module" item-start>\n	          <ion-icon color="light" name="md-share"></ion-icon>\n	        </div>\n		    <h4><strong>Update Social</strong></h4>\n		  </ion-item>\n	</ion-card>\n\n	<ion-card style="margin: 15px 0 0 0;width: 100%" margin-top (click)="goTo(\'UpdatePaymentPage\')">\n		<ion-item no-lines no-padding>\n		  <div class="rating_module" item-start>\n	          <ion-icon color="light" name="md-share"></ion-icon>\n	        </div>\n		    <h4><strong>Update Payment Details</strong></h4>\n		  </ion-item>\n	</ion-card>\n\n\n<!-- 	<div  *ngFor="let item of colors_sizes">\n		<label>{{item.type}}</label>\n		<input col-12  name="{{item.name}}" placeholder="{{item.placeholder}}" />\n	</div>\n -->\n	\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\profile\profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

});
//# sourceMappingURL=19.js.map