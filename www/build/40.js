webpackJsonp([40],{

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestKeyPageModule", function() { return RequestKeyPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__request_key__ = __webpack_require__(431);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RequestKeyPageModule = /** @class */ (function () {
    function RequestKeyPageModule() {
    }
    RequestKeyPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__request_key__["a" /* RequestKeyPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__request_key__["a" /* RequestKeyPage */]),
            ],
        })
    ], RequestKeyPageModule);
    return RequestKeyPageModule;
}());

//# sourceMappingURL=request-key.module.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestKeyPage; });
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
 * Generated class for the RequestKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RequestKeyPage = /** @class */ (function () {
    function RequestKeyPage(navCtrl, navParams, storage, key, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
        this.key = key;
        this.toastCtrl = toastCtrl;
        this.bankOptions = [];
        this.bankOptionsBackup = [];
        this.countryOptions = [];
        this.packageOptions = [];
        this.package_id = [];
        this.number_of_keys = [];
        this.noOfKeys = 1;
        this.selectedPackagesList = [];
        this.requestKeyList = [];
        this.step1 = true;
        this.step2 = false;
        this.step3 = false;
        this.storage.get('me').then(function (val) {
            _this.getdata(val.token);
        });
    }
    RequestKeyPage.prototype.getdata = function (token) {
        var _this = this;
        this.key.getPackageList().subscribe(function (res) {
            _this.packageOptions = res.message;
            for (var i = 0; i < _this.packageOptions.length; i++) {
                _this.packageOptions[i].package_amount = parseFloat(_this.packageOptions[i].package_amount);
                _this.packageOptions[i].package_name = _this.packageOptions[i].package_name.split(' ').map(function (w) { return w[0].toUpperCase() + w.substr(1).toLowerCase(); }).join(' ');
            }
        });
        this.key.getBankList().subscribe(function (res1) {
            _this.bankOptions = res1.message;
            _this.bankOptionsBackup = res1.message;
            _this.bankOptions.forEach(function (item) {
                var exists = _this.countryOptions.filter(function (element) { return element.country_name == item.country_name; });
                if (exists.length == 0) {
                    var addCountry = {
                        country_name: item.country_name,
                        id: item.country_id,
                    };
                    _this.countryOptions.push(addCountry);
                }
                else {
                }
            });
        });
        this.key.getRequestedKeyList(token).subscribe(function (res) {
            console.log(res);
            _this.requestKeyList = res.message;
        });
    };
    RequestKeyPage.prototype.addToCart = function (item, number_of_keys) {
        console.clear();
        var totalvalue = number_of_keys * item.package_amount;
        var exists = this.selectedPackagesList.filter(function (element) { return element.id == item.id; });
        if (exists.length == 0) {
            var addPackage = {
                id: item.id,
                package_name: item.package_name,
                validity_days: item.validity_days,
                number_of_keys: parseInt(number_of_keys),
                totalvalue: totalvalue
            };
            this.selectedPackagesList.push(addPackage);
        }
        else {
            var indexOf = this.selectedPackagesList.indexOf(exists[0]);
            this.selectedPackagesList[indexOf].number_of_keys += parseInt(number_of_keys);
            this.selectedPackagesList[indexOf].totalvalue += totalvalue;
        }
    };
    RequestKeyPage.prototype.removeItem = function (item) {
        var indexOf = this.selectedPackagesList.indexOf(item);
        this.selectedPackagesList.splice(indexOf, 1);
    };
    RequestKeyPage.prototype.selectBank = function (value) {
        var _this = this;
        console.clear();
        console.log(value);
        this.bankOptions = this.bankOptionsBackup.filter(function (element) { return element.country_name == value; });
        this.bankOptions.forEach(function (ele) {
            _this.admin_bank_id = ele.id;
        });
    };
    Object.defineProperty(RequestKeyPage.prototype, "subTotal", {
        get: function () {
            var subtotal = 0;
            this.selectedPackagesList.forEach(function (ele) {
                subtotal += ele.totalvalue;
            });
            return subtotal;
        },
        enumerable: true,
        configurable: true
    });
    RequestKeyPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RequestKeyPage');
    };
    RequestKeyPage.prototype.getParseFloat = function (val) {
        return parseFloat(val).toFixed(2);
    };
    RequestKeyPage.prototype.selectImage = function (files) {
        this.transfer_ref_attachment = files.item(0);
    };
    RequestKeyPage.prototype.submit = function () {
        var _this = this;
        this.selectedPackagesList.forEach(function (e) {
            _this.package_id.push(e.id);
            _this.number_of_keys.push(e.number_of_keys);
        });
        var f = new FormData();
        f.append('token', localStorage.getItem('token'));
        f.append('package_id', this.package_id.toString());
        f.append('number_of_keys', this.number_of_keys.toString());
        f.append('admin_bank_id', this.admin_bank_id);
        f.append('transfer_ref_number', this.transfer_ref_number);
        f.append('transfer_ref_attachment', this.transfer_ref_attachment);
        this.key.requestKey(f).subscribe(function (res) {
            console.clear();
            console.log(res);
            if (res.status) {
                _this.toast(res.message);
                _this.step1 = true;
                _this.step2 = false;
                _this.step3 = false;
                _this.noOfKeys = 1;
                _this.storage.get('me').then(function (val) {
                    _this.getdata(val.token);
                });
            }
            else {
                _this.toast(res.message);
            }
        });
    };
    RequestKeyPage.prototype.toast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RequestKeyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-request-key',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\request-key\request-key.html"*/'<!--\n  Generated template for the RequestKeyPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Request Key</ion-title>\n   </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding>\n <div class="dt-root">\n   <div class="row">\n                  <!-- Grid Item -->\n                  <div class="col-xl-12 order-sm-1">\n                     <div class="row" *ngIf="step1">\n                        <div class="col-md-8">\n                           <div class="dt-card">\n                              <div class="dt-card__header">\n                                 <h3 class="text-primary"><i class="icon icon-mail-open mr-1"></i> Request Key</h3>\n                                 <div class="col-md-12">\n                                    <div class="row">\n                                       <div class="col-md-4">\n                                          <div class="form-group">\n                                             <ion-item class="ion-select" no-lines>\n                                              	<ion-select [(ngModel)]="selectedPackage" placeholder="Select Package">\n                                             		<ion-option [value]="pack" *ngFor="let pack of packageOptions;">{{pack.package_name}}</ion-option>\n    	                                         </ion-select>\n	                                         </ion-item>\n                                          </div>\n                                       </div>\n                                       <div class="col-md-4">\n                                          <div class="form-group">\n                                             <input type="text" class="form-control" id="usr" [(ngModel)]="noOfKeys" placeholder="Number of Keys">\n                                          </div>\n                                       </div>\n                                       <div class="col-md-4">\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <!-- {{selectedPackage|json}} -->\n                                 <table class="table table-hover mb-0" *ngIf="selectedPackage">\n                                    <thead>\n                                       <tr>\n                                          <th scope="col">#</th>\n                                          <th class="text-uppercase" scope="col">Package</th>\n                                          <th class="text-uppercase" scope="col">Qty</th>\n                                          <th *ngIf="noOfKeys" class="text-uppercase" scope="col">Total Value</th>\n                                          <th class="text-uppercase" scope="col"></th>\n                                       </tr>\n                                    </thead>\n                                    <tbody>\n                                       <tr class="gradeX">\n                                          <td>1</td>\n                                          <td>\n                                             <h3>{{selectedPackage.package_name}}</h3>\n                                             <p>( ${{selectedPackage.package_amount}} ) \n                                                <span *ngIf="selectedPackage.validity_days != \'0\'">&nbsp; ({{selectedPackage.validity_days}}) Days validity</span>\n                                                <span *ngIf="selectedPackage.validity_days == \'0\'">Life Time validity</span> \n                                             </p>\n                                          </td>\n                                          <td>{{noOfKeys}}</td>\n                                          <td *ngIf="noOfKeys">${{noOfKeys*selectedPackage.package_amount}}</td>\n                                          <td><button class="btn btn-success" (click)="addToCart(selectedPackage,noOfKeys)">Add to Cart</button></td>\n                                       </tr>\n                                    </tbody>\n                                 </table>\n                              </div>\n                           </div>\n                           <div class="dt-card" *ngIf="selectedPackagesList.length > 0">\n                              <div class="dt-card__header">\n                                 <table class="table table-hover mb-0">\n                                    <thead>\n                                       <tr>\n                                          <th scope="col">#</th>\n                                          <th class="text-uppercase" scope="col">Package</th>\n                                          <th class="text-uppercase" scope="col">Qty</th>\n                                          <th class="text-uppercase" scope="col">Total Value</th>\n                                          <th class="text-uppercase" scope="col"></th>\n                                       </tr>\n                                    </thead>\n                                    <tbody>\n                                       <tr class="gradeX" *ngFor="let item of selectedPackagesList;let i=index;">\n                                          <td>{{i+1}}</td>\n                                          <td>\n                                             <h3>{{item.package_name}}</h3>\n                                             <p>( ${{selectedPackage.package_amount}} ) \n                                                <span *ngIf="selectedPackage.validity_days != \'0\'">&nbsp;  {{selectedPackage.validity_days}} Days validity</span>\n                                                <span *ngIf="selectedPackage.validity_days == \'0\'">Life Time validity</span>\n                                             </p>\n                                          </td>\n                                          <td>{{item.number_of_keys}}</td>\n                                          <td>${{item.totalvalue}}</td>\n                                          <td><button class="btn btn-danger" (click)="removeItem(item)">X</button></td>\n                                       </tr>\n                                    </tbody>\n                                 </table>\n                              </div>\n                           </div>\n                        </div>\n                        <div class="col-md-4">\n                           <div class="dt-card">\n                              <div class="dt-card__header">\n                                 <h3 class="text-primary"> Your Sub Total</h3>\n                              </div>\n                              <div class="dt-card__body">\n                                 <h4 style="margin-top: 25px; font-weight: 500">Subtotal: ${{subTotal}}</h4>\n                                 <button *ngIf="selectedPackagesList.length > 0" class="btn btn-primary btn-block" (click)="step1=false;step2=true;step3=false;">Confirm Order</button>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div class="row" *ngIf="step2">\n                        <div class="col-md-8">\n                           <div class="dt-card">\n                              <div class="dt-card__header">\n                                 <h3 class="text-primary"> Select Payment Type</h3>\n                              </div>\n                              <div class="dt-card__body">\n                                 <div class="radio">\n                                    <label><input type="radio" name="optradio" checked> Bank Transfer <img src="assets/images/hdfc.png" style="width: 100px; margin-left: 10px;"> <img src="assets/images/icici.jpg"style="width: 100px; margin-left: 10px;"></label>\n                                 </div>\n                                 <!-- <div class="radio">\n                                    <label><input type="radio" name="optradio"> Paypal <img src="assets/images/visa.png" style="width: 30px; margin-left: 10px;"> <img src="assets/images/mastercard.png"style="width: 30px; margin-left: 10px;"></label>\n                                 </div>\n                                 <div class="radio">\n                                    <label><input type="radio" name="optradio"> Virtual Currency <img src="assets/images/btc.webp" style="width: 30px; margin-left: 10px;"> <img src="assets/images/lite.png"style="width: 30px; margin-left: 10px;"> <img src="assets/images/eth.png"style="width: 30px; margin-left: 10px;"></label>\n                                 </div> -->\n                              </div>\n                           </div>\n                        </div>\n                        <div class="col-md-4">\n                           <div class="dt-card">\n                              <div class="dt-card__header">\n                                 <h3 class="text-primary"> Your Cart</h3>\n                              </div>\n                              <div class="dt-card__body">\n                                 <div class="row" *ngFor="let item of selectedPackagesList;let i=index;">\n                                    <div class="col-md-8">\n                                       <h4 style="margin-top: 0px; margin-bottom: 0; font-weight: 500">{{item.package_name}}</h4>\n                                       <p>( ${{selectedPackage.package_amount}} ) \n                                          <span *ngIf="selectedPackage.validity_days != \'0\'">&nbsp; ({{selectedPackage.validity_days}}) Days validity</span>\n                                          <span *ngIf="selectedPackage.validity_days == \'0\'">Life Time validity</span>\n                                       </p>\n                                    </div>\n                                    <div class="col-md-4">\n                                       <h4 class="text-right">${{item.totalvalue}}</h4>\n                                    </div>\n                                 </div>\n                                 <button class="btn btn-primary btn-block" (click)="step1=false;step2=false;step3=true;">Next Step</button>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div class="row" *ngIf="step3">\n                        <div class="col-md-8">\n                           <div class="dt-card">\n                              <div class="dt-card__header">\n                                 <h3 class="text-primary"> Select Payment Type</h3>\n                              </div>\n                              <div class="dt-card__body">\n                                 <div class="row">\n                                    <div class="col-md-4">\n                                       <div class="form-group">\n                                          <ion-item class="ion-select" no-lines>\n                                          	<ion-select placeholder="Select Country" id="sel1" (ionChange)="selectBank($event)">\n                                             <ion-option *ngFor="let country of countryOptions" value="{{country.country_name}}" >{{country.country_name}}</ion-option>\n                                          </ion-select>\n                                          </ion-item>\n                                       </div>\n                                    </div>\n                                    <div class="col-md-4">\n                                       <div class="form-group">\n                                          <input type="text" name="transfer_ref_number" placeholder="Transfer Ref Number" class="form-control" [(ngModel)] = "transfer_ref_number" />\n                                       </div>\n                                    </div>\n                                    <div class="col-md-4">\n                                       <div class="form-group">\n                                          <input (change)="selectImage($event.target.files)" placeholder="Attachment" name="transfer_ref_attachment" accept="image/*" type="file" class="form-control" id="transfer_ref_attachment"   />\n                                       </div>\n                                    </div>\n                                 </div>\n                                 <div class="radio" *ngFor="let bank of bankOptions;let i = index;" (click)="admin_bank_id = bank.id">\n                                 <label><input type="radio" name="optradio" checked> <span style="font-weight: 500;"> Bank Name</span>: {{bank.bank_name}}<br/>\n                                 <span style="font-weight: 500;">Bank Branch</span>: {{bank.bank_branch}}<br/>\n                                 <span style="font-weight: 500;">Account: NO</span>: {{bank.bank_account_number}}<br/>\n                                 <span style="font-weight: 500;">IFSC Code</span>: {{bank.bank_ifsc_code}} \n                                 </label>\n                              </div>\n                              <div class="text-center">\n                                 <button class="btn btn-primary" (click)="submit()">I have made payment</button>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                     <div class="col-md-4">\n                        <div class="dt-card">\n                           <div class="dt-card__header">\n                              <h3 class="text-primary"> Your Cart</h3>\n                           </div>\n                           <div class="dt-card__body">\n                              <div class="row" *ngFor="let item of selectedPackagesList;let i=index;">\n                                 <div class="col-md-8">\n                                    <h4 style="margin-top: 0px; margin-bottom: 0; font-weight: 500">{{item.package_name}}</h4>\n                                    <p>( ${{selectedPackage.package_amount}} )   \n                                       <span *ngIf="selectedPackage.validity_days != \'0\'">&nbsp; ({{selectedPackage.validity_days}}) Days validity</span>\n                                       <span *ngIf="selectedPackage.validity_days == \'0\'">Life Time validity</span>\n                                    </p>\n                                 </div>\n                                 <div class="col-md-4">\n                                    <h4 class="text-right">${{item.totalvalue}}</h4>\n                                 </div>\n                              </div>\n                           </div>\n                        </div>\n                     </div>\n                  </div>\n                  <!-- Grid -->\n                  <div class="dt-card">\n                     <!-- Card Body -->\n                     <div class="dt-card__body p-0">\n                        <!-- Tables -->\n                        <div class="table-responsive">\n                           <table class="table table-hover mb-0">\n                              <thead>\n                                 <tr>\n                                    <th scope="col">#</th>\n                                    <th class="text-uppercase" scope="col">Date</th>\n                                    <th class="text-uppercase" scope="col">Cart Details </th>\n                                    <th class="text-uppercase" scope="col">Request Code</th>\n                                    <th class="text-uppercase" scope="col">Total Value</th>\n                                    <th class="text-uppercase" scope="col">Payment Type</th>\n                                    <th class="text-uppercase" scope="col">Status</th>\n                                 </tr>\n                              </thead>\n                              <tbody style="text-align: center;" *ngIf="requestKeyList == \'Sorry, No related record found.\'">\n                                 <tr _ngcontent-clk-c7="">\n                                    <td colspan="7">Sorry, No related record found.</td>\n                                 </tr>\n                              </tbody>\n                              <tbody *ngIf="requestKeyList != \'Sorry, No related record found.\'">\n                                 <tr *ngFor="let item of requestKeyList;let i = index;">\n                                    <td>{{i+1}}</td>\n                                    <td>{{item.date_n_time | date:\'medium\'}}</td>\n                                    <td>\n                                       <div *ngFor="let pack of item.package_detail" class="inner-package-details">\n                                          <p><span style="margin-top: 0px; margin-bottom: 0; font-weight: 500">{{pack.package_name | titlecase}}</span> \n                                             <span *ngIf="pack.validity_days != \'0\'"> ({{pack.validity_days}}) Days validity</span>\n                                             <span *ngIf="pack.validity_days == \'0\'"> Life Time validity</span>\n                                          </p>\n                                          <p>Keys:{{pack.number_of_keys}},Value: ${{getParseFloat(pack.package_amount) * getParseFloat(pack.number_of_keys)}}</p>\n                                       </div>\n                                    </td>\n                                    <td>{{item.request_unqiue_id}}</td>\n                                    <td>{{item.total_request_amount}}</td>\n                                    <td>Bank</td>\n                                    <td *ngIf="item.request_status == \'0\'">Pending</td>\n                                    <td *ngIf="item.request_status == \'1\'">Approved</td>\n                                    <td *ngIf="item.request_status == \'2\'">Rejected</td>\n                                 </tr>\n                              </tbody>\n                           </table>\n                        </div>\n                        <!-- /tables -->\n                     </div>\n                     <!-- /card body -->\n                  </div>\n               </div>\n               <!-- /grid item -->\n            </div>\n </div>\n</ion-content>\n'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\key\request-key\request-key.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2__providers_key_key__["a" /* KeyProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], RequestKeyPage);
    return RequestKeyPage;
}());

//# sourceMappingURL=request-key.js.map

/***/ })

});
//# sourceMappingURL=40.js.map