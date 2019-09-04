webpackJsonp([12],{

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrandsSearchPageModule", function() { return BrandsSearchPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__brands_search__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var BrandsSearchPageModule = /** @class */ (function () {
    function BrandsSearchPageModule() {
    }
    BrandsSearchPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__brands_search__["a" /* BrandsSearchPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__brands_search__["a" /* BrandsSearchPage */]),
            ],
        })
    ], BrandsSearchPageModule);
    return BrandsSearchPageModule;
}());

//# sourceMappingURL=brands-search.module.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandsSearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_store_store__ = __webpack_require__(50);
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
 * Generated class for the BrandsSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrandsSearchPage = /** @class */ (function () {
    function BrandsSearchPage(renderer, el, navCtrl, toastCtrl, storage, navParams, storeProvider) {
        var _this = this;
        this.renderer = renderer;
        this.el = el;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.navParams = navParams;
        this.storeProvider = storeProvider;
        this.category = [];
        this.city = '';
        this.showFilter = true;
        this.searchTerm = "";
        this.storeProvider.getCategoryList().subscribe(function (data) {
            console.log(data);
            if (data.status) {
                _this.category = data.message;
            }
        });
        this.storeProvider.getStoreList().subscribe(function (data1) {
            console.log(data1);
            var tempCat = [];
            if (data1.status) {
                _this.storelist = data1.message;
                _this.storelist.forEach(function (ele) {
                    var value = _this.category.find(function (item) { return item.id == ele.store_category_id; });
                    if (tempCat.includes(value) === false)
                        tempCat.push(value);
                });
                console.log(tempCat);
                _this.category = tempCat;
                _this.storelistbackup = data1.message;
            }
        });
        //   this.storeProvider.getLocation().subscribe(
        // (resp1:any) => {
        //       console.log(resp1);
        //       this.storeProvider.searchStore(resp1.message.city).subscribe(
        //  (data1:any) => {
        //        console.log(data1);
        //        if(data1.status){
        //          this.storelist = data1.message;
        //          this.storelistbackup = data1.message;
        //        }
        //      }
        //    )
        //     }
        //   )
    }
    BrandsSearchPage.prototype.filterStore = function (searchTerm) {
        this.storelist = this.storelistbackup;
        return this.storelist.filter(function (item) {
            return item.store_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    };
    BrandsSearchPage.prototype.setFilteredItems = function () {
        this.storelist = this.filterStore(this.searchTerm);
    };
    BrandsSearchPage.prototype.goToStore = function (name) {
        this.navCtrl.push('SubOptionOnePage', { name: name });
    };
    BrandsSearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrandsSearchPage');
    };
    BrandsSearchPage.prototype.reviewRatings = function (val) {
        var rating = [];
        for (var i = 0; i < parseInt(val); i++) {
            rating.push('star');
        }
        return rating;
    };
    BrandsSearchPage.prototype.presentPopover = function () {
        if (this.showFilter) {
            this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter', false);
            this.showFilter = !this.showFilter;
        }
        else {
            this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter', true);
            this.showFilter = !this.showFilter;
        }
    };
    BrandsSearchPage.prototype.hideFilter = function (eve) {
        console.log(eve);
        console.log("adsdasda");
        this.showFilter = false;
        this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter', true);
    };
    BrandsSearchPage.prototype.filterCats = function (id, eve) {
        console.log(eve.target.checked);
        console.log(this.storelistbackup.filter(function (cat) { return cat.id == id; }));
        if (eve.target.checked) {
            this.storelist = this.storelistbackup.filter(function (cat) { return cat.id == id; });
        }
        else {
            this.storelist = this.storelistbackup;
        }
    };
    BrandsSearchPage.prototype.change = function () {
        console.clear();
        var modelCbs = document.querySelectorAll(".categories_search_block input[type='checkbox']");
        var filters = {
            models: getClassOfCheckedCheckboxes(modelCbs)
        };
        filterResults(filters);
        console.log(modelCbs);
        function getClassOfCheckedCheckboxes(checkboxes) {
            var classes = [];
            if (checkboxes && checkboxes.length > 0) {
                for (var i = 0; i < checkboxes.length; i++) {
                    var cb = checkboxes[i];
                    if (cb.checked) {
                        classes.push(cb.getAttribute("name"));
                    }
                }
            }
            return classes;
        }
        function filterResults(filters) {
            var rElems = document.querySelectorAll(".result .storelistItems");
            var hiddenElems = [];
            if (!rElems || rElems.length <= 0) {
                return;
            }
            for (var i = 0; i < rElems.length; i++) {
                var el = rElems[i];
                console.log(rElems[i]);
                if (filters.models.length > 0) {
                    var isHidden = true;
                    for (var j = 0; j < filters.models.length; j++) {
                        var filter = filters.models[j];
                        if (el.classList.contains(filter)) {
                            isHidden = false;
                            break;
                        }
                    }
                    if (isHidden) {
                        hiddenElems.push(el);
                    }
                }
            }
            for (var i = 0; i < rElems.length; i++) {
                rElems[i].style.display = "block";
            }
            if (hiddenElems.length <= 0) {
                return;
            }
            for (var i = 0; i < hiddenElems.length; i++) {
                hiddenElems[i].style.display = "none";
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('filterpart'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], BrandsSearchPage.prototype, "filter", void 0);
    BrandsSearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brands-search',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\retail-brands\brands-search\brands-search.html"*/'<!--\n   Generated template for the BrandsSearchPage page.\n   \n   See http://ionicframework.com/docs/components/#navigation for more info on\n   Ionic pages and navigation.\n   -->\n<ion-header>\n   <ion-navbar color="primary">\n      <button ion-button menuToggle>\n         <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title *ngIf="!showSearch">Brands Search</ion-title>\n      <ion-searchbar  *ngIf="showSearch"[(ngModel)]="searchTerm"(ionChange)="setFilteredItems()"></ion-searchbar>\n       <ion-buttons end>\n        <button ion-button end (click)="showSearch = !showSearch">\n         <ion-icon name="search"></ion-icon>\n      </button>\n      \n      <button ion-button end  mrgin-left (click)="presentPopover($event)">\n         <ion-icon name="options"></ion-icon>\n      </button>\n      </ion-buttons>\n   </ion-navbar>\n</ion-header>\n<ion-content padding>\n\n  <!--  <ion-grid no-padding>\n      <ion-row>\n         <ion-col col-10>\n         </ion-col>\n         <ion-col col-2 text-right>\n             <button ion-button clear icon-end >\n                Filter\n         <ion-icon name="options" ></ion-icon>\n      </button>\n         </ion-col>\n      </ion-row>\n   </ion-grid> -->\n\n   <div col-12>\n      <div class="row result" *ngIf="storelist != \'No related data found for store list.\'">\n         <div col-6 class="storelistItems {{item[\'store_category_id\']}} {{item[\'city_name\']}}" *ngFor="let item of storelist;">\n            <a  (click)="goToStore(item[\'store_url\'])">\n               <div class="card dt-card__full-height dt-card__product-vertical">\n                  <img alt="Alarm Clock" class="card-img-top" src="http://alpademo.com/zomo/uploads/stores/{{item[\'store_image\']}}">\n                  <div class="card-body">\n                     <h2 class="card-title">{{item[\'store_name\'] | titlecase}}</h2>\n                     <div class="d-flex">\n                        <h4 class="mb-2 mr-3">{{item[\'store_address\'] | titlecase}}</h4>\n                        <div class="d-flex align-items-center mb-1">\n                           <i *ngFor="let rating of reviewRatings(item.store_rating);let i = index;" class="icon icon-star f-10 mr-1 text-warning"></i>\n                        </div>\n                     </div>\n                     <p class="mb-1" style="color: #666;">{{item[\'store_services\'] | titlecase}}</p>\n                     <p class="mb-1" style="color: #666;">{{item[\'city_name\'] | titlecase}}</p>\n                  </div>\n               </div>\n            </a>\n         </div>\n      </div>\n      <div class="row result text-center" *ngIf="storelist == \'No related data found for store list.\'">\n         <div class="col-xl-4 col-md-4 col-sm-6 col-12 storelistItems text-center">\n            {{storelist}}\n         </div>\n      </div>\n   </div>\n</ion-content>\n\n\n\n<ion-content class="filter-content hide-filter" #filterpart (clickOutside)="hideFilter($event)">\n  <div class="">\n                    <!-- Sidebar Navigation -->\n                    <ul class="dt-module-side-nav">\n                      <!-- Card Header -->\n                      <div class="dt-card__header mb-2">\n                       <!--,,. Card Heading --> \n                        <div class="dt-card__heading">\n                          <h3 class="dt-card__title">Categories</h3>\n                        </div>\n                        <!-- /card heading -->\n                      </div>\n                      <!-- /card header -->\n                      <!-- Card Body -->\n                      <div class="dt-card__body pb-0">\n                        <div class="categories_search_block">\n                          <div class="checkbox" *ngFor="let cat of category; let i = index">\n                            <label>\n                            <input (change)="change();"  type="checkbox" name="{{cat.id}}">\n                             <span  class="cr"><i  class="cr-icon icon icon-check icon-xl ml-1"></i></span> \n                               {{cat.category_name}} \n                          </label>\n                          </div>\n                        </div>\n                      </div>\n                    </ul>\n                    <!-- /sidebar navigation -->\n                  </div>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\retail-brands\brands-search\brands-search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_store_store__["a" /* StoreProvider */]])
    ], BrandsSearchPage);
    return BrandsSearchPage;
}());

//# sourceMappingURL=brands-search.js.map

/***/ })

});
//# sourceMappingURL=12.js.map