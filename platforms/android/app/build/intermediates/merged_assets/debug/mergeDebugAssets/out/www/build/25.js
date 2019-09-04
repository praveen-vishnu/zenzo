webpackJsonp([25],{

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(440);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CartPageModule = /** @class */ (function () {
    function CartPageModule() {
    }
    CartPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__cart__["a" /* CartPage */]),
            ],
        })
    ], CartPageModule);
    return CartPageModule;
}());

//# sourceMappingURL=cart.module.js.map

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carts_service_carts_service__ = __webpack_require__(131);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams, cartService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.cartService = cartService;
        this.selectedItems = [];
        this.total = 0;
        this.showEmptyCartMessage = false;
    }
    CartPage.prototype.ngOnInit = function () {
        var items = this.cartService.getCart();
        var selected = {};
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var obj = items_1[_i];
            obj.pr_size = this.toArray(obj.pr_sizes)[0];
            obj.pr_color = this.toArray(obj.pr_colors)[0];
            if (selected[obj.id]) {
                selected[obj.id].count++;
            }
            else {
                selected[obj.id] = __assign({}, obj, { count: 1 });
            }
        }
        this.selectedItems = Object.keys(selected).map(function (key) { return selected[key]; });
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.pr_sale_amount); }, 0);
    };
    CartPage.prototype.gettotal = function () {
        this.total = this.selectedItems.reduce(function (a, b) { return a + (b.count * b.pr_sale_amount); }, 0);
    };
    CartPage.prototype.ionViewDidLoad = function () {
        console.clear();
        console.log(this.cartService.getCart());
    };
    CartPage.prototype.goToCheckout = function () {
        console.log(this.selectedItems);
        this.cartService.setCart(this.selectedItems);
        this.navCtrl.push("CheckoutPage");
    };
    CartPage.prototype.removeFromCart = function (item, i) {
    };
    CartPage.prototype.toArray = function (arr) {
        if (arr) {
            return arr
                .replace(/,/gi, " ")
                .trim()
                .split(" ");
        }
        else {
            return arr;
        }
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\cart\cart.html"*/'<ion-header>\n	<ion-navbar>\n		<ion-title>My Cart</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!-- <ion-list>\n	  <ion-item *ngFor="let item of selectedItems" inset>\n		\n		<ion-label end text-left>{{ item.count }} x {{ item.pr_name }} - {{ item.pr_sale_amount | currency:\'INR\':\'symbol\' }}</ion-label>\n		<ion-label end text-right>{{ (item.pr_sale_amount * item.count) | currency:\'INR\':\'symbol\' }}</ion-label>\n	  </ion-item>\n	  <ion-item>\n		Total: <span end>{{ total | currency:\'INR\':\'symbol\' }}</span>\n	  </ion-item>\n	</ion-list> -->\n\n	<ion-card>\n			<ion-grid>\n			  <ion-row>\n				<ion-col>Your Cart Description</ion-col>\n			  </ion-row>\n			  <ion-row [hidden]="!showEmptyCartMessage">\n				<ion-col>There are no products in your cart!</ion-col>\n			  </ion-row>\n			</ion-grid>\n		  </ion-card>\n\n	<ion-card *ngFor="let item of selectedItems; let i = index">\n		<ion-grid>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-thumbnail item-left>\n							<img [src]="item.pr_main_image" style="width: 60px !important; height: 60px !important;" />\n						</ion-thumbnail>\n						<h2>{{ item.pr_name | titlecase }}</h2>\n						<p>{{ item.count }} * <span>{{  (item.pr_sale_amount * item.count) | currency:\'INR\':\'symbol\' }}</span>\n					</ion-item>\n				</ion-col>\n				<ion-col>\n						<ion-row no-padding>\n								<ion-col >\n									<button ion-button icon-only clear \n										(click)="item.count = item.count - 1;gettotal();">\n										<ion-icon name="remove-circle"></ion-icon>\n									</button>\n									<button ion-button clear > {{ item.count }} </button>\n									<button ion-button icon-only clear \n										(click)="item.count = item.count + 1;gettotal();">\n										<ion-icon name="add-circle"></ion-icon>\n									</button>\n								</ion-col>\n								<ion-col style="text-align: right;">\n									<button ion-button small outline (click)="removeFromCart(item, i)" color="danger"\n										style="width: 64px;">Remove</button>\n								</ion-col>\n							</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n					<ion-col>\n						<ion-item>\n							<ion-label>Size:</ion-label>\n							<ion-select [(ngModel)]="item.pr_size">\n							<ion-option *ngFor="let size of toArray(item.pr_sizes)" placeholder="Select Size *"\n								value="{{size}}">{{size | titlecase}}</ion-option>\n						</ion-select>\n						</ion-item>\n					</ion-col>\n					<ion-col>\n						<ion-item>\n							<ion-label>Color:</ion-label>\n							<ion-select [(ngModel)]="item.pr_color">\n								<ion-option *ngFor="let color of toArray(item.pr_colors)" placeholder="Select Color *"\n									value="{{color}}">{{color | titlecase}}</ion-option>\n							</ion-select>\n						</ion-item>\n					</ion-col>\n				</ion-row>\n		</ion-grid>\n	</ion-card>\n	<ion-grid>\n		<ion-card>\n			<ion-grid>\n				<ion-row>\n					<ion-col col-2>\n\n					</ion-col>\n					<ion-col col-4>\n						<b>TOTAL</b>\n					</ion-col>\n					<ion-col col-3>\n\n					</ion-col>\n					<ion-col col-3 style="text-align: right">\n						<b> {{ total | currency:\'INR\':\'symbol\' }} </b>\n					</ion-col>\n\n\n				</ion-row>\n			</ion-grid>\n		</ion-card>\n	</ion-grid>\n\n</ion-content>\n\n<ion-footer>\n	<ion-toolbar>\n		<ion-grid>\n			<ion-row>\n				<ion-col>\n					<button ion-button block (click)="goToCheckout()">Checkout</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_carts_service_carts_service__["a" /* CartsService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=25.js.map