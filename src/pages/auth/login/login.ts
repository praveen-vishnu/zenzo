import { Component, OnInit } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ToastController,
  MenuController
} from "ionic-angular";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthProvider } from "../../../providers/auth/auth";
import { Storage } from "@ionic/storage";
import { MyApp } from "../../../app/app.component";
import { UserProductModal } from "../../sub-options-with-icons/sub-option-one/sub-option-one";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage,
    public myApp: MyApp,
    public menuCtrl: MenuController,
    private auth: AuthProvider,
    private toastCtrl: ToastController
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
    this.menuCtrl.enable(false, "authenticated");
  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      login_id: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])
    });
  }
  gotoRegister() {
    this.navCtrl.push("RegisterPage");
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    console.log(this.loginForm.value);
    this.auth.login(this.loginForm.value).subscribe((user: any) => {
      if (user.status) {
        this.storage.set("token", user.message.token);
        this.get_dashboard(user.message.token);
        localStorage.setItem("token", user.message.token);
        this.loginForm.reset();
      } else {
        let toast = this.toastCtrl.create({
          message: user.message,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log("Dismissed toast");
        });

        toast.present();
      }
    });
  }
  get_dashboard(token) {
    console.clear();
    this.auth.getDash(token).subscribe((res: any) => {
      this.myApp.authenticatedMenu = res.status;
      if (res.status) {
       var  user = res.message;
        this.storage.set("me", res.message);
        console.log(user);
        if (this.navParams.get("fromProduct")) {
          this.navCtrl.setRoot(UserProductModal, {id: this.navParams.get("id")});
        } else {
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
          this.navCtrl.setRoot("HomePage");
        }
        }
         
        }
      }
    });
  }

  gotoForgot() {
    this.navCtrl.push("ForgotPage");
  }
}
