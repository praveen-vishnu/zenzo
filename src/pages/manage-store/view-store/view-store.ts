import { Component, OnInit, ViewChild, ElementRef, Input } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Slides,
  Platform,
  ViewController,
  ToastController,
  AlertController
} from "ionic-angular";
import { StoreProvider } from "../../../providers/store/store";
import { Storage } from "@ionic/storage";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import { COUNTRY_LIST, BASE_URL } from "../../../services/constants.service";
import { ProductProvider } from "../../../providers/store/product";
import { ProductModal } from "../../product/products-list/products-list";

/**
 * Generated class for the ViewStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-view-store",
  templateUrl: "view-store.html"
})
export class ViewStorePage {
  @Input() text: string;
  @Input() limit: number = 250;
  truncating = true;
  storeDetail: any;
  category: any;
  dashboardme: any;
  otherImages: any;
  countries = COUNTRY_LIST;
  tabswitch = "About";
  token: any;
  products: any;
  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    public modalCtrl: ModalController,
    private storage: Storage,
    public navParams: NavParams,
    private storeProvider: StoreProvider,
    private productProvider: ProductProvider
  ) {
    this.storage.get("me").then((val: any) => {
      this.getdata(val.token);
    });
  }

  getdata(token) {
    console.clear();
    this.token = token;
    this.storeProvider.getStoreDetail(token).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status) {
        this.storeDetail = resp.message;
      }
    });
    this.productProvider.getProductList(token).subscribe((resp: any) => {
      console.log(resp);
      if (resp.status) {
        this.products = resp.message;
      }
    });

    this.storeProvider.getCategoryList().subscribe((data: any) => {
      console.log(data);
      if (data.status) {
        this.category = data.message;
      }
    });
  }

  toArray(arr) {
    return arr
      .replace(/,/gi, " ")
      .trim()
      .split(" ");
  }
  goToGallery(i?) {
    let modal = this.modalCtrl.create(
      ImageModal,
      { img: this.storeDetail.other_images, token: this.token, pos: i },
      { cssClass: "image-modal" }
    );
    modal.present();
    modal.onDidDismiss( data=>{
      console.log(data)
      this.storage.get("me").then((val: any) => {
        this.getdata(val.token);
      });
    })
  }

  phoneMask(phoneValue: number | string, country: string): any {
    var country_id = this.getCountry(country);

    try {
      const phoneNumber = parsePhoneNumberFromString(country_id + phoneValue);
      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
  }

  getphoneuri(phoneValue: number | string, country: string): any {
    var country_id = this.getCountry(country);
    // console.log(country_id)
    try {
      const phoneNumber = parsePhoneNumberFromString(country_id + phoneValue);
      return phoneNumber.getURI();
    } catch (error) {
      return phoneValue;
    }
  }

  goToEdit() {
    this.navCtrl.push("EditStorePage", { store: this.storeDetail });
  }

  goToProductList(id) {
    this.navCtrl.push(ProductModal, { id: id, token: this.token });
  }
  reviewRatings(val) {
    var rating = [];
    for (var i = 0; i < parseInt(val); i++) {
      rating.push("star");
    }
    return rating;
  }

  getCountry(id) {
    if (id) {
      return this.countries.filter(country => country.country_id == id)[0]
        .country_code;
    }
  }

  getCatName(val) {
    if (val) {
      return this.category.find(cat => cat.id == val).category_name;
    }
  }

  getPaymentMethod(str) {
    if (str) {
      var res = str.split(",");
      var payment = [];
      if (this.findInArray(res, "1") >= 0) {
        payment.push("Cash");
      }
      if (this.findInArray(res, "2") >= 0) {
        payment.push("Credit Card");
      }

      if (this.findInArray(res, "3") >= 0) {
        payment.push("Debit Card");
      }
      var method = payment.toString();
      var regex = /,/gi;
      return method.replace(regex, "/");
    }
  }

  findInArray(ar, val) {
    for (var i = 0, len = ar.length; i < len; i++) {
      if (ar[i] === val) {
        // strict equality test
        return i;
      }
    }
    return -1;
  }

  addMoreImages() {
    document.getElementById("add_other_images").click();
  }

  getOtherImage(files: FileList) {
    var form_data = new FormData();
    this.storeProvider
      .UploadOtherImage(this.token, files.item(0), this.storeDetail.id)
      .subscribe((res4: any) => {
        if (res4.status) {
          this.presentToast(res4.message);
          this.storage.get("me").then((val: any) => {
            this.getdata(val.token);
          });
        } else {
          this.presentToast(res4.message);
        }
      });
  }
  enable_disable(val) {
    var form_data = new FormData();
    console.clear();
    form_data.append("visible_status", val);
    form_data.append("token", localStorage.getItem("token"));
    this.storeProvider
      .storeEnableDisable(this.token, val)
      .subscribe((res4: any) => {
        if (res4.status) {
          this.presentToast(res4.message);
          this.storage.get("me").then((val: any) => {
            this.getdata(val.token);
          });
        } else {
          this.presentToast(res4.message);
        }
      });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ViewStorePage");
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }

  get colors() {
    var colors = ["8249b3", "8249b3", "b73f8f", "de7300"];
    return colors[Math.floor(Math.random() * 3)];
  }
}

// Image Preview
@Component({
  template: `
    <ion-content fullscreen>
      <ion-item class="close-fake" no-lines text-center>
        <button ion-button (click)="close()" clear color="light">
          <ion-icon name="close" item-start></ion-icon>
          Back
        </button>

        <button
          *ngIf="!fromProductPage"
          ion-button
          clear
          (click)="presentConfirm()"
          color="light">
          <ion-icon name="md-trash" item-end></ion-icon>
          Remove
        </button>

        <button
          *ngIf="fromProductPage"
          ion-button
          (click)="deleteProductImage()"
          clear
          color="light">
          <ion-icon name="md-trash" item-end></ion-icon>
          Delete
        </button>

        <button
          *ngIf="fromProductPage"
          ion-button
          (click)="setMainImage()"
          clear
          color="light">
          <ion-icon name="checkbox-outline" item-end></ion-icon>
          Set as Main Image
        </button>

      </ion-item>

      <ion-slides zoom #slider [initialSlide]="imgPos">
        <ion-slide *ngFor="let img of imgs;let i = index">
          <div class="swiper-zoom-container" padding>
            <img
              *ngIf="!fromProductPage"
              src="http://192.168.1.100:81/zomo/uploads/stores/{{ img.image_name }}"
              class="img-fluid w-100"
              alt="Image Title"
            />
            <img
              *ngIf="fromProductPage"
              src="{{ img.image_name }}"
              class="img-fluid w-100"
              alt="Image Title"
            />
          </div>
        </ion-slide>
      </ion-slides>
    </ion-content>
  `,
  styles: [
    `
      .close-fake {
        background: transparent;
        ion-icon {
          font-size: 2rem;
        }
        margin-top: 40px;
      }

      ion-content {
        background: rgba(44, 39, 45, 0.84);
      }

      ion-slides {
        height: 80%;
      }
    `
  ]
})
export class ImageModal implements OnInit {
  @ViewChild(Slides) slides: Slides;
  imgs: any;
  token: any;
  imgPos: number = 0;
  fromProductPage: any;
  productId: any;
i;
  constructor(
    private navParams: NavParams,
    public toastCtrl: ToastController,
    private modalController: ModalController,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private storeProvider: StoreProvider,
    private productProvider: ProductProvider
  ) {
    console.clear();
  }

  ngOnInit() {
    this.imgs = this.navParams.get("img");
    this.token = this.navParams.get("token");
    this.imgPos = this.navParams.get("pos") ? this.navParams.get("pos") : 0;
    this.fromProductPage = this.navParams.get("prodtct");
    this.productId = this.navParams.get("id");
    console.log(this.imgPos);
    // if(this.imgPos){
    //    this.slides.slideTo(this.imgPos,500)
    // }
  }

  deleteImage(other_image_id) {
    
    this.storeProvider
      .removeStoreImage(this.token, other_image_id)
      .subscribe((res4: any) => {
        if (res4.status) {
          this.presentToast(res4.message);
          this.close();
        } else {
          this.presentToast(res4.message);
        }
      });
  }
  setMainImage(){
    console.log(this.imgs[this.slides.getActiveIndex()].id);
    var image_id = this.imgs[this.slides.getActiveIndex()].id
    let alert = this.alertCtrl.create({
      title: "Set as Main Image",
      message: "Are You Sure ?",
      buttons: [
        {
          text: "Yes",
          role: "cancel",
          handler: () => {
            this.productProvider
              .setMainImage(this.token, image_id, this.productId)
              .subscribe((res4: any) => {
                console.log(res4);
                if (res4.status) {
                  this.presentToast(res4.message);
                  this.viewCtrl.dismiss(1);
                } else {
                  this.presentToast(res4.message);
                }
              });
          }
        },
        {
          text: "No",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }
  deleteProductImage() {
    var image_id = this.imgs[this.slides.getActiveIndex()].id;    
    let alert = this.alertCtrl.create({
      title: "Remove Image",
      message: "Are You Sure ?",
      buttons: [
        {
          text: "Yes",
          role: "cancel",
          handler: () => {
            this.productProvider
              .removeImage(this.token, image_id, this.productId)
              .subscribe((res4: any) => {
                if (res4.status) {
                  this.presentToast(res4.message);
                  this.viewCtrl.dismiss(1);
                } else {
                  this.presentToast(res4.message);
                }
              });
          }
        },
        {
          text: "No",
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }
  close() {
    this.viewCtrl.dismiss();
  }

  presentConfirm() {
    
    console.log(this.token,this.imgs);
    let alert = this.alertCtrl.create({
      title: "Remove Image",
      message: "Are You Sure ?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {}
        },
        {
          text: "Yes",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });

    toast.onDidDismiss(() => {
      console.log("Dismissed toast");
    });

    toast.present();
  }
}
