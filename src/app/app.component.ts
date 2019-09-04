// Angular
import { Component, ViewChild } from "@angular/core";

// RxJS
import { ReplaySubject } from "rxjs/ReplaySubject";
import { ArrayObservable } from "rxjs/observable/ArrayObservable";

// Ionic
import { Nav, Platform, MenuController, AlertController, ToastController } from "ionic-angular";
import { Storage } from "@ionic/storage";

// Ionic Native
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

// Side Menu Component
import { SideMenuSettings } from "./../shared/side-menu-content/models/side-menu-settings";
import { SideMenuOption } from "./../shared/side-menu-content/models/side-menu-option";
import { SideMenuContentComponent } from "./../shared/side-menu-content/side-menu-content.component";

import { AuthProvider } from "../providers/auth/auth";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
  public authenticatedMenu: boolean = false;

  // Get the instance to call the public methods
  @ViewChild(SideMenuContentComponent) sideMenu: SideMenuContentComponent;

  public rootPage: any; //= 'UserStoreSearchPage';

  // Options to show in the SideMenuContentComponent
  public options: Array<SideMenuOption>;

  // Settings for the SideMenuContentComponent
  public sideMenuSettings: SideMenuSettings = {
    accordionMode: true,
    showSelectedOption: true,
    selectedOptionClass: "active-side-menu-option"
  };

  private unreadCountObservable: any = new ReplaySubject<number>(0);


  dashboardme: any;
  constructor(
    private platform: Platform,
    private statusBar: StatusBar,
    private storage: Storage,
    private splashScreen: SplashScreen,
    private auth: AuthProvider,
    private alertCtrl: AlertController,
    private menuCtrl: MenuController,
    private toastCtrl: ToastController
  ) {
    this.storage.get("me").then((val: any) => {
      console.log(val);
      if (val) {
        this.rootPage = "HomePage";
        this.auth.getDash(val.token).subscribe((res: any) => {
          this.authenticatedMenu = res.status;
          if (res.status) {
            this.storage.set("me", res.message);
            this.dashboardme = res.message;
          }
        });
      } else {
        this.rootPage = "UserStoreSearchPage";
      }
    });
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.splashScreen.hide();

      // Initialize some options
      this.initializeOptions();
    });

    // Change the value for the batch every 5 seconds
    setInterval(() => {
      this.unreadCountObservable.next(Math.floor(Math.random() * 10) + 1);
    }, 5000);
  }

  private initializeOptions(): void {
    this.options = new Array<SideMenuOption>();

    // Load simple menu options
    // ------------------------------------------
    this.options.push({
      iconName: "home",
      displayText: "Dashboard",
      component: "HomePage"
    });

    // Load options with nested items (with icons)
    // -----------------------------------------------
    this.options.push({
      displayText: "Invitees",
      suboptions: [
        {
          displayText: "Referral",
          // iconName: 'cube',
          component: "ReferralsPage"
        },
        // {
        //   displayText: "Pairs",
        //   // iconName: 'contacts',
        //   component: "PairsPage"
        // }
      ]
    });

    this.options.push({
      displayText: "Retail Brands",
      suboptions: [
        {
          iconName: "news",
          displayText: "Brands Search",
          component: "BrandsSearchPage",
          custom: {
            // param: { showDeleted: false }
          }
        }
      ]
    });

    this.options.push({
      displayText: "Task",
      suboptions: [
        {
          displayText: "Choose Task",
          iconName: "",
          component: "ChooseTaskPage"
        },
        {
          displayText: "Running Task",
          iconName: "",
          component: "RunningTaskPage"
        },
        {
          displayText: "Verified Task",
          iconName: "",
          component: "VerifiedTaskPage"
        },
        {
          displayText: "Rejected Task",
          iconName: "",
          component: "RejectedTaskPage"
        }
      ]
    });
    this.options.push({
      displayText: "Manage Store",
      suboptions: [
        {
          displayText: "List Store",
          // iconName: 'create',
          component: "ListStorePage"
        },
        {
          displayText: "View Store",
          // iconName: 'eye',
          component: "ViewStorePage"
        },
        {
          displayText: "Create Offer",
          // iconName: 'create',
          component: "CreateOfferPage"
        },
        {
          displayText: "Manage Offer",
          // iconName: 'hammer',
          component: "ManageOfferPage"
        },
        {
          displayText: "Contact Request",
          // iconName: 'people',
          component: "ContactRequestsPage"
        }
      ]
    });

    this.options.push({
      displayText: "Manage Product",
      suboptions: [
        {
          displayText: "Add Product",
          component: "AddProductPage"
        },
        {
          displayText: "Store Orders",
          iconName: "",
          component: "StoreOrdersPage"
        },
        {
          displayText: "My Orders",
          iconName: "",
          component: "MyOrdersPage"
        }
      ]
    });

    this.options.push({
      displayText: "Profit Report",
      suboptions: [
        {
          displayText: "Referral Earning",
          iconName: "",
          component: "ReferralEarningsPage"
        },
        {
          displayText: "Pairs Earning",
          iconName: "",
          component: "ParsEarningsPage"
        },
        {
          displayText: "Task Earning",
          iconName: "",
          component: "TaskEarningsPage"
        }
      ]
    });

    this.options.push({
      displayText: "Key",
      suboptions: [
        {
          displayText: "Activate Key",
          iconName: "",
          component: "ActivateKeyPage"
        },
        {
          displayText: "Request Key",
          iconName: "",
          component: "RequestKeyPage"
        },
        {
          displayText: "View Key",
          iconName: "",
          component: "ViewKeyPage"
        },
        {
          displayText: "Transfer Key",
          iconName: "",
          component: "TransferKeyPage"
        }
      ]
    });

    this.options.push({
      displayText: "Package",
      suboptions: [
        {
          displayText: "Running",
          iconName: "",
          component: "RunningPackagePage"
        },
        {
          displayText: "Completed",
          iconName: "",
          component: "CompletedPackagePage"
        }
      ]
    });

    // Load special options
    // -----------------------------------------------
    this.options.push({
      iconName: "log-out",
      displayText: "Logout",
      custom: {
        isLogout: true
      }
    });
  }

  public onOptionSelected(option: SideMenuOption): void {
    this.menuCtrl.close().then(() => {
      if (option.custom && option.custom.isLogin) {
        this.presentAlert("You've clicked the login option!");
      }
      else if (option.custom && option.custom.isLogout) {
        // this.presentAlert('You\'ve clicked the logout option!');
        this.storage.clear();
        this.navCtrl.setRoot("LoginPage");
      }
      else if (option.custom && option.custom.isExternalLink) {
        let url = option.custom.externalUrl;
        window.open(url, "_blank");
      }
      else {
        this.storage.get("me").then((val: any) => {
          console.log(val);
          this.auth.getDash(val.token).subscribe((res: any) => {
          this.authenticatedMenu = res.status;
          var user = res.message;
          console.clear()
          console.log(user);
          if (res.status) {
            this.storage.set("me", res.message);
            this.dashboardme = res.message;
            if (user.email_verify_status == "0") {
              let toast = this.toastCtrl.create({
                message: "Please complete the email verification of this account to continue.",
                showCloseButton: true,
                closeButtonText: "OK"
              });
              toast.onDidDismiss(() => {
                console.log("Dismissed toast");
              });
              toast.present();
              this.navCtrl.setRoot("EditProfilePage");
            }
            else {
              if (user.key_activated_status == "0") {
                this.navCtrl.setRoot("ActivateKeyPage");
                let toast = this.toastCtrl.create({
                  message: "Please provide a E-Pin Code to activate your account and start receiving the ROI and other referral benefits",
                  showCloseButton: true,
                  closeButtonText: "OK"
                });
                toast.onDidDismiss(() => {
                  console.log("Dismissed toast");
                });
                toast.present();
              }
              else {
                // Get the params if any
                const params = option.custom && option.custom.param;
                // Redirect to the selected page        
                this.navCtrl.setRoot(option.component, params);
              }
            }
          }
          else {
            this.storage.clear();
            this.navCtrl.setRoot("LoginPage");
          }
        });
      });
      }
    });
  }

  public collapseMenuOptions(): void {
    if (this.authenticatedMenu) {
      this.sideMenu.collapseAllOptions();
    }
  }
  goto(page) {
    this.navCtrl.setRoot(page);
  }

  public presentAlert(message: string): void {
    let alert = this.alertCtrl.create({
      title: "Information",
      message: message,
      buttons: ["Ok"]
    });
    alert.present();
  }
}
