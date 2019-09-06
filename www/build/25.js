webpackJsonp([25],{

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutPageModule", function() { return CheckoutPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkout__ = __webpack_require__(446);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckoutPageModule = /** @class */ (function () {
    function CheckoutPageModule() {
    }
    CheckoutPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__checkout__["a" /* CheckoutPage */]),
            ],
        })
    ], CheckoutPageModule);
    return CheckoutPageModule;
}());

//# sourceMappingURL=checkout.module.js.map

/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_carts_service_carts_service__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_store_product__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CheckoutPage = /** @class */ (function () {
    function CheckoutPage(navCtrl, productProvider, navParams, alertCtrl, storage, cartService, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.productProvider = productProvider;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.cartService = cartService;
        this.toastCtrl = toastCtrl;
        this.selectedItems = [];
        this.newOrder = {};
        this.newOrder.billing_detail = {};
        this.newOrder.shipping = {};
        this.billing_shipping_same = false;
        this.newOrder.billing_detail.country_id = '101';
        this.newOrder.billing_detail.state_name = 'Uttar Pradesh';
        this.paymentMethods = [
            { method_id: "1", method_title: "Online Transfer" },
            { method_id: "0", method_title: "Cash on Delivery" }
        ];
        this.newOrder.payment_type = this.paymentMethods[0];
        this.storage.get('me').then(function (val) {
            _this.newOrder.billing_detail.email_id = val.email_id;
            _this.newOrder.token = val.token;
            _this.userInfo = val;
        });
        var items = this.cartService.getCart();
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            this.selectedItems.push({
                'pr_id': obj.id,
                "pr_color": obj.pr_color,
                "pr_size": obj.pr_size,
                "pr_quantity": obj.count
            });
        }
    }
    CheckoutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CheckoutPage');
    };
    CheckoutPage.prototype.setBillingToShipping = function () {
        this.billing_shipping_same = !this.billing_shipping_same;
        if (this.billing_shipping_same) {
            this.newOrder.shipping = this.newOrder.billing_detail;
        }
    };
    CheckoutPage.prototype.placeOrder = function () {
        var _this = this;
        console.clear();
        this.newOrder.cart_data = this.selectedItems;
        console.log(this.newOrder);
        this.productProvider.save_offline_cart(this.newOrder).subscribe(function (res) {
            console.clear();
            console.log(res);
            if (res.status) {
                var alert_1 = _this.alertCtrl.create({
                    message: "Please login to Continue further",
                    buttons: [
                        // {
                        //   text: "",
                        //   role: "cancel",
                        //   handler: () => {
                        //   }
                        // },
                        {
                            text: "Okay",
                            handler: function () {
                                _this.navCtrl.setRoot("MyOrdersPage");
                            }
                        }
                    ]
                });
                alert_1.present();
            }
            else {
                _this.presentToast(res.message);
            }
        });
    };
    CheckoutPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.onDidDismiss(function () {
            console.log("Dismissed toast");
        });
        toast.present();
    };
    CheckoutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-checkout',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\checkout\checkout.html"*/'<ion-header>\n\n    <ion-navbar>\n      <ion-title>Checkout</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  \n  <ion-content>\n      <ion-list>\n        <ion-item-divider >Personal Details</ion-item-divider>\n        <ion-item>\n          <ion-label>Name</ion-label>\n          <ion-input type="text" [(ngModel)]="newOrder.billing_detail.customer_name"></ion-input>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Email</ion-label>\n          <ion-input readonly type="email" [(ngModel)]="newOrder.billing_detail.email_id"></ion-input>\n        </ion-item>\n  \n        <ion-item-divider >Billing Details</ion-item-divider>\n  \n        <ion-item>\n          <ion-label>Address</ion-label>\n          <ion-textarea   [(ngModel)]="newOrder.billing_detail.address"></ion-textarea>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Country</ion-label>\n          <ion-select [(ngModel)]="newOrder.billing_detail.country_id">\n            <ion-option value="101" >India</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>State</ion-label>\n          <ion-select [(ngModel)]="newOrder.billing_detail.state_name">\n            <ion-option value="New Delhi">New Delhi</ion-option>\n            <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n            <ion-option value="Maharashtra">Maharashtra</ion-option>\n            <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n            <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item>\n          <ion-label>City</ion-label>\n          <ion-input type="text"  [(ngModel)]="newOrder.billing_detail.city_name"></ion-input>        \n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Postal Code</ion-label>\n          <ion-input type="number" clearInput [(ngModel)]="newOrder.billing_detail.pin_code"></ion-input>        \n        </ion-item>\n  \n        <ion-item>\n          <ion-label>Phone</ion-label>\n          <ion-input type="tel" clearInput [(ngModel)]="newOrder.billing_detail.phone_number"></ion-input>        \n        </ion-item>\n<!--   \n        <ion-item>\n          <ion-label>Same Shipping Details</ion-label>\n          <ion-checkbox (ionChange)="setBillingToShipping()"></ion-checkbox>\n        </ion-item> \n        \n        \n        <ion-item-divider  *ngIf="!billing_shipping_same">Shipping Details</ion-item-divider>\n        \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>First Name</ion-label>\n          <ion-input type="text" [(ngModel)]="newOrder.shipping.first_name"></ion-input>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Last Name</ion-label>\n          <ion-input type="text" [(ngModel)]="newOrder.shipping.last_name"></ion-input>\n        </ion-item>\n        \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Address Line 1</ion-label>\n          <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping.address_1"></ion-textarea>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Address Line 2</ion-label>\n          <ion-textarea type="text" maxlength="80" [(ngModel)]="newOrder.shipping.address_2"></ion-textarea>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Country</ion-label>\n          <ion-select [(ngModel)]="newOrder.shipping.country">\n            <ion-option value="India" selected="true">India</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>State</ion-label>\n          <ion-select [(ngModel)]="newOrder.shipping.state">\n            <ion-option value="New Delhi">New Delhi</ion-option>\n            <ion-option value="Uttar Pradesh">Uttar Pradesh</ion-option>\n            <ion-option value="Maharashtra">Maharashtra</ion-option>\n            <ion-option value="Tamil Nadu">Tamil Nadu</ion-option>\n            <ion-option value="Madhya Pradesh">Madhya Pradesh</ion-option>\n          </ion-select>\n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>City</ion-label>\n          <ion-input type="text" [(ngModel)]="newOrder.shipping.city"></ion-input>        \n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Postal Code</ion-label>\n          <ion-input type="number" clearInput [(ngModel)]="newOrder.shipping.postcode"></ion-input>        \n        </ion-item>\n  \n        <ion-item *ngIf="!billing_shipping_same">\n          <ion-label>Phone</ion-label>\n          <ion-input type="tel" clearInput [(ngModel)]="newOrder.shipping.phone"></ion-input>        \n        </ion-item>\n   -->\n        <ion-item-divider >Payment Details</ion-item-divider>\n  \n        <ion-item>\n          <ion-label>Payment Method</ion-label>\n          <ion-select [(ngModel)]="newOrder.payment_type">\n            <ion-option *ngFor="let p of paymentMethods" value="{{p.method_id}}">{{ p.method_title }}</ion-option>\n          </ion-select>\n        </ion-item>\n  \n      </ion-list>\n  \n  </ion-content>\n  \n  <ion-footer>\n    <button ion-button block  (click)="placeOrder()">Place Order</button>\n  </ion-footer>\n  '/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\checkout\checkout.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_store_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3__providers_carts_service_carts_service__["a" /* CartsService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
    ], CheckoutPage);
    return CheckoutPage;
}());

//# sourceMappingURL=checkout.js.map

/***/ })

});
//# sourceMappingURL=25.js.map