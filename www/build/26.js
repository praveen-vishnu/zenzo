webpackJsonp([26],{

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartPageModule", function() { return CartPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart__ = __webpack_require__(445);
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

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_carts_service_carts_service__ = __webpack_require__(67);
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
        // this.selectedItems = [
        //   {
        //      brand_name: "puma",       ​​
        //      category_name: "Clothing",       ​​
        //      date_n_time: "2019-08-21 11:57:58",       ​​
        //      date_only: "2019-08-21",       ​​
        //      delivery_max_num_of_day: "3",       ​​
        //      delivery_min_num_of_day: "2",       ​​
        //      id: "1",       ​​
        //      count:1,
        //      main_category_name: "Men",       ​​
        //      pr_category_id: "5",       ​​
        //      pr_color: "red",       ​​
        //      pr_colors: "red,green",       ​​
        //      pr_description: "puma shoes",       ​​
        //      pr_description_warranty: "puma shoes",       ​​
        //      pr_discount_percentage: "12.00",       ​​
        //      pr_inventory_stock: "22",       ​​
        //      pr_main_category_id: "3",       ​​
        //      pr_main_image: "http://192.168.1.100:81/zomo//uploads/stores/products/2019-08-21552038face18jpg.jpg",       ​​
        //      pr_name: "puma shoes",       ​​
        //      pr_original_amount: "530.00",       ​​
        //      pr_rating: "0.00",       ​​
        //      pr_remaining_stock: "19",       ​​      
        //      pr_sale_amount: "466.40",       ​​
        //      pr_size: "small",       ​​
        //      pr_sizes: "small,medium,large, ",       ​​
        //      pr_sub_category_id: "1",       ​​
        //      pr_unique_id: "ZOPI120",       ​​
        //      search_keywords: "puma shoes",       ​​
        //      shipping_charge_amount: "0.00",       ​​
        //      shipping_type: "0",       ​​
        //      sub_category_name: "Jeans",
        //      user_row_id: "9",        
        //     }
        // ];
        if (this.selectedItems.length == 0) {
            this.showEmptyCartMessage = true;
        }
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
            selector: 'page-cart',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\cart\cart.html"*/'<ion-header>\n	<ion-navbar color="primary">\n		<ion-title>My Cart</ion-title>\n	</ion-navbar>\n</ion-header>\n\n<ion-content>\n	<!-- <ion-list>\n	  <ion-item *ngFor="let item of selectedItems" inset>\n		\n		<ion-label end text-left>{{ item.count }} x {{ item.pr_name }} - {{ item.pr_sale_amount | currency:\'INR\':\'symbol\' }}</ion-label>\n		<ion-label end text-right>{{ (item.pr_sale_amount * item.count) | currency:\'INR\':\'symbol\' }}</ion-label>\n	  </ion-item>\n	  <ion-item>\n		Total: <span end>{{ total | currency:\'INR\':\'symbol\' }}</span>\n	  </ion-item>\n	</ion-list> -->\n\n	<ion-card>\n		<ion-grid>\n			<ion-row>\n				<ion-col>Your Cart Description</ion-col>\n			</ion-row>\n			<ion-row [hidden]="!showEmptyCartMessage" text-center>\n				<ion-col>\n					<h2>There are no products in your cart!</h2>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-card>\n\n	<ion-card class="products" *ngFor="let item of selectedItems; let i = index">\n		<ion-grid>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-thumbnail item-left>\n							<img [src]="item.pr_main_image" style="width: 60px !important; height: 60px !important;" />\n						</ion-thumbnail>\n						<h2>{{ item.pr_name | titlecase }}</h2>\n						<p>{{ item.count }} *\n							<span>{{  (item.pr_sale_amount * item.count) | currency:\'INR\':\'symbol\' }}</span>\n					</ion-item>\n				</ion-col>\n				<ion-col>\n					<ion-row no-padding>\n						<ion-col>\n							<ion-row>\n								<ion-col style="text-align: center">\n									<button ion-button icon-only clear (click)="item.count = item.count - 1;gettotal();">\n										<ion-icon name="remove-circle"></ion-icon>\n									</button>\n									<button ion-button clear> {{ item.count }} </button>\n									<button ion-button icon-only clear (click)="item.count = item.count + 1;gettotal();">\n										<ion-icon name="add-circle"></ion-icon>\n									</button>\n								</ion-col>\n							</ion-row>\n							<ion-row style="text-align: right;">\n								<ion-col col-3 style="text-align: center">\n									<button ion-button small outline (click)="removeFromCart(item, i)" color="danger"\n										style="width: 64px;">Remove</button>\n								</ion-col>\n							</ion-row>\n						</ion-col>\n					</ion-row>\n				</ion-col>\n			</ion-row>\n			<ion-row>\n				<ion-col>\n					<ion-item>\n						<ion-label>Size:</ion-label>\n						<ion-select [(ngModel)]="item.pr_size">\n							<ion-option *ngFor="let size of toArray(item.pr_sizes)" placeholder="Select Size *"\n								value="{{size}}">{{size | titlecase}}</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-col>\n				<ion-col>\n					<ion-item>\n						<ion-label>Color:</ion-label>\n						<ion-select [(ngModel)]="item.pr_color">\n							<ion-option *ngFor="let color of toArray(item.pr_colors)" placeholder="Select Color *"\n								value="{{color}}">{{color | titlecase}}</ion-option>\n						</ion-select>\n					</ion-item>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-card>\n	<ion-grid [hidden]="showEmptyCartMessage">\n		<ion-card>\n			<ion-grid>\n				<ion-row>\n\n					<ion-col col-4>\n						<b>TOTAL</b>\n					</ion-col>\n					<ion-col col-3>\n\n					</ion-col>\n					<ion-col col-3 style="text-align: right">\n						<b> {{ total | currency:\'INR\':\'symbol\' }} </b>\n					</ion-col>\n\n\n				</ion-row>\n			</ion-grid>\n		</ion-card>\n	</ion-grid>\n\n</ion-content>\n\n<ion-footer [hidden]="showEmptyCartMessage">\n	<ion-toolbar>\n		<ion-grid>\n			<ion-row>\n				<ion-col>\n					<button ion-button block (click)="goToCheckout()">Checkout</button>\n				</ion-col>\n			</ion-row>\n		</ion-grid>\n	</ion-toolbar>\n</ion-footer>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\product\cart\cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_carts_service_carts_service__["a" /* CartsService */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ })

});
//# sourceMappingURL=26.js.map