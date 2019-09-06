webpackJsonp([0],{

/***/ 404:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailsPageModule", function() { return EmailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emails__ = __webpack_require__(459);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Angular

// Ionic

// Pages

var EmailsPageModule = /** @class */ (function () {
    function EmailsPageModule() {
    }
    EmailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__emails__["a" /* EmailsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emails__["a" /* EmailsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__emails__["a" /* EmailsPage */]]
        })
    ], EmailsPageModule);
    return EmailsPageModule;
}());

//# sourceMappingURL=emails.module.js.map

/***/ }),

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Matcher; });
// ---------------------------------------------------
// This enum is used when the same component
// (page) is used in more than one option from the
// side menu. So instead of using our custom decorator
// passing the displayText of an option, we would need
// to give the decorator some information about how it
// should check which option from the side menu should
// be marked as selected based on a property from 
// the component
// ---------------------------------------------------
var Matcher;
(function (Matcher) {
    Matcher[Matcher["ToBe"] = 0] = "ToBe";
    Matcher[Matcher["NotToBe"] = 1] = "NotToBe";
    Matcher[Matcher["ToEqual"] = 2] = "ToEqual";
    Matcher[Matcher["NotToEqual"] = 3] = "NotToEqual";
    Matcher[Matcher["ToBeDefined"] = 4] = "ToBeDefined";
    Matcher[Matcher["ToBeFalsy"] = 5] = "ToBeFalsy";
    Matcher[Matcher["ToBeGreaterThan"] = 6] = "ToBeGreaterThan";
    Matcher[Matcher["ToBeGreaterThanOrEqual"] = 7] = "ToBeGreaterThanOrEqual";
    Matcher[Matcher["ToBeLessThan"] = 8] = "ToBeLessThan";
    Matcher[Matcher["ToBeLessThanOrEqual"] = 9] = "ToBeLessThanOrEqual";
    Matcher[Matcher["ToBeNull"] = 10] = "ToBeNull";
    Matcher[Matcher["ToBeTruthy"] = 11] = "ToBeTruthy";
    Matcher[Matcher["ToBeUndefined"] = 12] = "ToBeUndefined";
    Matcher[Matcher["ToContain"] = 13] = "ToContain";
    Matcher[Matcher["ToMatch"] = 14] = "ToMatch"; // Expects the current value to match a regular expression
})(Matcher || (Matcher = {}));
//# sourceMappingURL=side-menu-option-select-condition.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_side_menu_content_models_side_menu_option_select_condition__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_custom_decorators_side_menu_display_text_conditions_decorator__ = __webpack_require__(460);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Angular

// Ionic

// Side Menu Component


var EmailsPage = /** @class */ (function () {
    function EmailsPage(navParams) {
        this.navParams = navParams;
    }
    EmailsPage.prototype.ionViewWillEnter = function () {
        // We initialize the showDeleted property so it can be ready
        // to be used in the SideMenuDisplayTextConditions decorator
        this.showDeleted = this.toBoolean(this.navParams.get('showDeleted'));
    };
    // Method that converts the parameter to boolean if needed
    EmailsPage.prototype.toBoolean = function (value) {
        if (typeof value === 'boolean')
            return value;
        return value === 'false' ? false : true;
    };
    EmailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-emails',template:/*ion-inline-start:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\same-component\emails\emails.html"*/'<ion-header>\n  <ion-navbar [color]="showDeleted ? \'danger\' : \'primary\'">\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ showDeleted ? \'Bin\' : \'Inbox\' }}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list [class.bin]="showDeleted">\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Finn</h2>\n      <h3>I\'m a big deal</h3>\n      <p>Listen, I\'ve had a pretty messed up day...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Han</h2>\n      <h3>Look, kid...</h3>\n      <p>I\'ve got enough on my plate as it is, and I...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Rey</h2>\n      <h3>I can handle myself</h3>\n      <p>You will remove these restraints and leave...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Luke</h2>\n      <h3>Your thoughts betray you</h3>\n      <p>I feel the good in you, the conflict...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Poe</h2>\n      <h3>New Ride</h3>\n      <p>I just upgraded my X-Wing. Next time...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Ben</h2>\n      <h3>Move Along</h3>\n      <p>These aren\'t the droids you\'re looking for...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Leia</h2>\n      <h3>You\'re My Only Hope</h3>\n      <p>I\'ve placed information vital to the survival...</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-avatar item-start>\n        <span class="circle"></span>\n      </ion-avatar>\n      <h2>Yoda</h2>\n      <h3>Size matters not</h3>\n      <p>Do or do not. There is no try...</p>\n    </ion-item>\n  </ion-list>\n</ion-content>'/*ion-inline-end:"D:\Praveen's\Ultimez\Ionic\Zomato App\working\src\pages\same-component\emails\emails.html"*/
        }),
        Object(__WEBPACK_IMPORTED_MODULE_3__shared_side_menu_content_custom_decorators_side_menu_display_text_conditions_decorator__["a" /* SideMenuDisplayTextConditions */])([
            { propertyName: 'showDeleted', matcher: __WEBPACK_IMPORTED_MODULE_2__shared_side_menu_content_models_side_menu_option_select_condition__["a" /* Matcher */].ToBeFalsy, displayText: 'Inbox' },
            { propertyName: 'showDeleted', matcher: __WEBPACK_IMPORTED_MODULE_2__shared_side_menu_content_models_side_menu_option_select_condition__["a" /* Matcher */].ToBeTruthy, displayText: 'Bin' }
        ]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], EmailsPage);
    return EmailsPage;
}());

//# sourceMappingURL=emails.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = SideMenuDisplayTextConditions;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_module__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_side_menu_option_select_event__ = __webpack_require__(134);
// Angular

// Ionic

// SideMenuContentComponent


function SideMenuDisplayTextConditions(conditions) {
    // Method that uses our events to tell the SideMenuContentComponent that
    // an option with the name sent should be marked as selected
    function selectOption(name) {
        // Get an instance of the Events service
        var eventsCtrl = __WEBPACK_IMPORTED_MODULE_0__app_app_module__["a" /* AppModule */].injector.get(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]);
        // Prepare the data that the SideMenuContentComponent expects
        var redirectData = { displayText: name };
        // Send the event with the data
        eventsCtrl.publish(__WEBPACK_IMPORTED_MODULE_3__models_side_menu_option_select_event__["a" /* SideMenuOptionSelect */], redirectData);
    }
    // Method that returns true if the condition is satisfied
    function conditionIsMet(self, condition) {
        switch (condition.matcher) {
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBe:
                return self[condition.propertyName] == condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].NotToBe:
                return self[condition.propertyName] != condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToEqual:
                return self[condition.propertyName] === condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].NotToEqual:
                return self[condition.propertyName] !== condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeDefined:
                return self[condition.propertyName] !== undefined;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeUndefined:
                return self[condition.propertyName] === undefined;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeFalsy:
                return !!!self[condition.propertyName];
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeTruthy:
                return !!self[condition.propertyName];
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeGreaterThan:
                return self[condition.propertyName] > condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeGreaterThanOrEqual:
                return self[condition.propertyName] >= condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeLessThan:
                return self[condition.propertyName] < condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeLessThanOrEqual:
                return self[condition.propertyName] <= condition.value;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToBeNull:
                return self[condition.propertyName] === null;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToContain:
                return self[condition.propertyName].indexOf(condition.value) > -1;
            case __WEBPACK_IMPORTED_MODULE_2__models_side_menu_option_select_condition__["a" /* Matcher */].ToMatch:
                var regexp = new RegExp(condition.value);
                return regexp.test(self[condition.propertyName]);
        }
    }
    // Method that returns the name of the option whose condition is satisfied
    function checkConditions(self, conditions) {
        var result = null;
        for (var i = 0; i < conditions.length; i++) {
            if (conditionIsMet(self, conditions[i])) {
                result = conditions[i].displayText;
                break;
            }
        }
        return result;
    }
    return function (constructor) {
        var originalDidEnter = constructor.prototype.ionViewDidEnter;
        constructor.prototype.ionViewDidEnter = function () {
            // Call the ionViewDidEnter event defined in the page
            originalDidEnter && typeof originalDidEnter === 'function' && originalDidEnter.apply(this, arguments);
            if (__WEBPACK_IMPORTED_MODULE_0__app_app_module__["a" /* AppModule */] && __WEBPACK_IMPORTED_MODULE_0__app_app_module__["a" /* AppModule */].injector) {
                if (conditions && conditions.length) {
                    // Check if there's at least one option that satisfies its conditions
                    var optionNameToBeSelected = checkConditions(this, conditions);
                    // If we could find one condition that is satisfied, tell
                    // the SideMenuContentComponent to select that option
                    if (optionNameToBeSelected) {
                        selectOption(optionNameToBeSelected);
                    }
                    else {
                        console.warn("[SideMenuDisplayTextConditions]: No condition could be met.");
                    }
                }
                else {
                    console.error('[SideMenuDisplayTextConditions]: You must provide an array of SideMenuOptionSelectCondition entities in order to use this decorator.');
                }
            }
            else {
                console.error('[SideMenuDisplayTextConditions]: You must make the injector to be available in the AppModule to use this decorator. Please take a look at [DOCS URL] for more information.');
            }
        };
    };
}
//# sourceMappingURL=side-menu-display-text-conditions.decorator.js.map

/***/ })

});
//# sourceMappingURL=0.js.map