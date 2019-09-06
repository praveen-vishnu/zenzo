import { ComponentsModule } from './../components/components.module';
// Angular
import { NgModule, ErrorHandler, Injector } from "@angular/core"; // tslint:disable-line
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { NgxPaginationModule } from "ngx-pagination";
import { Ng2SearchPipeModule } from "ng2-search-filter";
import { TruncateModule } from "@yellowspot/ng-truncate";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Ionic
import { IonicApp, IonicModule, IonicErrorHandler } from "ionic-angular";

// Ionic Native
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { IonicStorageModule } from "@ionic/storage";
import { IonicSwipeAllModule } from "ionic-swipe-all";

// App
import { MyApp } from "./app.component";
import { ModalContentPage } from "../pages/packages/running-package/running-package";
import { OfferModal } from "../pages/manage-store/manage-offer/manage-offer";
import { PopoverPage } from "../pages/user-store-search/user-store-search";
import { ImageModal } from "../pages/manage-store/view-store/view-store";
import { ImageModal2 } from "../pages/sub-options-with-icons/sub-option-one/sub-option-one";
// Custom components
import { SideMenuContentComponent } from "../shared/side-menu-content/side-menu-content.component";
import { ClickOutsideDirective } from "../directives/click-outside/click-outside";
import { AuthProvider } from "../providers/auth/auth";
import { InviteesProvider } from "../providers/invitees/invitees";
import { TaskProvider } from "../providers/task/task";
import { ProfitReportProvider } from "../providers/profit-report/profit-report";
import { WalletProvider } from "../providers/wallet/wallet";
import { StoreProvider } from "../providers/store/store";
import { OfferProvider } from "../providers/store/offer";
import { ProductProvider } from "../providers/store/product";
import { KeyProvider } from "../providers/key/key";
import { PackageProvider } from "../providers/package/package";
import { CartsService } from '../providers/carts-service/carts-service';
import { OrderDetail } from "../pages/product/store-orders/store-orders";
import { ProductModal } from '../pages/product/products-list/products-list';
import { UserProductModal } from '../pages/user-products-list/user-products-list';
@NgModule({
  declarations: [
    MyApp,
    SideMenuContentComponent,
    ModalContentPage,
    OfferModal,
    ImageModal,
    ImageModal2,
    PopoverPage,
    ClickOutsideDirective,
    ProductModal,
    UserProductModal,
    OrderDetail
  ],
  imports: [
    BrowserModule,
    // BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    TruncateModule,
    IonicModule.forRoot(MyApp, { mode: "ios" }),
    HttpClientModule,
    IonicSwipeAllModule,
    NgxPaginationModule,
    IonicStorageModule.forRoot(),
    Ng2SearchPipeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ModalContentPage,
    OfferModal,
    ImageModal,
    ImageModal2,
    PopoverPage,
    ProductModal,
    UserProductModal,
    OrderDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    InviteesProvider,
    TaskProvider,
    ProfitReportProvider,
    WalletProvider,
    StoreProvider,
    OfferProvider,
    KeyProvider,
    ProductProvider,
    PackageProvider,
    CartsService
  ],
  exports: [ClickOutsideDirective]
})
export class AppModule {
  // Make the injector to be available in the entire module
  // so we can use it in the custom decorator
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}
