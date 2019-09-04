import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
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

// Side Menu Component
import { SideMenuDisplayText } from "../../../shared/side-menu-content/custom-decorators/side-menu-display-text.decorator";
import { CartsService } from "../../../providers/carts-service/carts-service";

@IonicPage()
@Component({
  selector: "page-sub-option-one",
  templateUrl: "sub-option-one.html"
})
@SideMenuDisplayText("Sub Option 1")
export class SubOptionOnePage {
  storeDetail: any;
  category: any = [];
  dashboardme: any;
  otherImages: any;
  countries = COUNTRY_LIST;
  tabswitch = "About";
  products: any;
  token: any;
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
      this.getdata();
    });
    console.clear();
    console.log(this.navParams.get("name"));
  }

  getdata() {
    this.storeProvider
      .getStoreByName(this.navParams.get("name"))
      .subscribe((resp: any) => {
        console.log(resp)
        if (resp.status) {
          this.storeDetail = resp.message[0];
        }
      });
    console.log(this.storeDetail);

    this.productProvider.getUserProductList().subscribe((resp: any) => {
      console.log(resp);
      if (resp.status) {
        this.products = resp.message;
      }
    });
    this.storeProvider.getCategoryList().subscribe((data: any) => {
      if (data.status) {
        this.category = data.message;
      }
    });
  }

  goToGallery(i?) {
    let modal = this.modalCtrl.create(
      ImageModal2,
      { img: this.storeDetail.store_other_images, pos: i },
      { cssClass: "image-modal2" }
    );
    modal.present();
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

  reviewRatings(val) {
    var rating = [];
    for (var i = 0; i < parseInt(val); i++) {
      rating.push("star");
    }
    return rating;
  }

  getCountry(id) {
    if (id) {
      return this.countries.find(country => country.country_id == id)
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

  goToProductList(id) {
    this.navCtrl.push(UserProductModal, { id: id });
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

  // getOtherImage(files: FileList) {
  //   var form_data = new FormData();
  //   this.storeProvider.UploadOtherImage(this.token,files.item(0),this.storeDetail.id).subscribe((res4:any) => {
  //     if (res4.status){
  //     this.presentToast(res4.message);
  //     this.storage.get('me').then((val:any)=>{
  //  		this.getdata(val.token)
  //  	})
  //     }
  //     else{
  //     this.presentToast(res4.message);
  //     }
  //   })
  // }
  // enable_disable(val){
  //     var form_data = new FormData();
  //     console.clear();
  //     form_data.append('visible_status',val);
  //     form_data.append("token", localStorage.getItem('token') );
  //     this.storeProvider.storeEnableDisable(this.token,val).subscribe((res4:any) => {
  //       if (res4.status){
  //       this.presentToast(res4.message);
  //       this.storage.get('me').then((val:any)=>{
  //  		this.getdata(val.token)
  //  	})
  //       }
  //       else{
  //       this.presentToast(res4.message);
  //       }
  //   })
  // }
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

@Component({
  template: `
    <ion-content fullscreen>
      <ion-item class="close-fake" no-lines text-center>
        <button ion-button (click)="close()" clear color="light">
          <ion-icon name="close" item-start></ion-icon>
          Back
        </button>
      </ion-item>

      <ion-slides zoom #slider [initialSlide]="imgPos">
        <ion-slide *ngFor="let img of imgs">
          <div class="swiper-zoom-container" padding>
            <img
              *ngIf="!fromProductPage"
              src="http://alpademo.com/zomo/uploads/stores/{{ img.image_name }}"
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
export class ImageModal2 implements OnInit {
  @ViewChild(Slides) slides: Slides;
  imgs: any;
  token: any;
  imgPos: number = 0;
  fromProductPage: any;
  productId: any;

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
    this.fromProductPage = this.navParams.get("prodtct");
    this.imgPos = this.navParams.get("pos");
    this.productId = this.navParams.get("id");
    console.log(this.imgPos);
    // if(this.imgPos){
    //    this.slides.slideTo(this.imgPos,500)
    // }
  }

  deleteProductImage(image_id) {
    let alert = this.alertCtrl.create({
      title: "Remove Image",
      message: "Are You Sure ?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {
            this.productProvider
              .removeImage(this.token, image_id, this.productId)
              .subscribe((res4: any) => {
                if (res4.status) {
                  this.presentToast(res4.message);
                  this.close();
                } else {
                  this.presentToast(res4.message);
                }
              });
          }
        },
        {
          text: "Yes",
          handler: () => {}
        }
      ]
    });
    alert.present();
  }

  close() {
    this.viewCtrl.dismiss();
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

// Product Detail Page
@Component({
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>Product Detail</ion-title>
        <!--ion-buttons end>
          <button ion-button (click)="goToCart()">
            <ion-icon ios="ios-cart" md="md-cart"></ion-icon>
          </button>
        </ion-buttons-->
      </ion-navbar>
    </ion-header>
    <ion-content
      fullscreen
      class="product-detail"
      style="background-color: #f4f4f4;"
    >
      <ion-slides pager style="height: 250px">
        <ion-slide *ngFor="let img of product?.pr_image">
          <img [src]="img.image_name" />
        </ion-slide>
      </ion-slides>
      <ion-card>
        <ion-card-content>
          <h2>{{ product?.pr_name | titlecase }}</h2>
          <small>Special Price</small>
          <p class="price">
            {{ product?.pr_sale_amount | currency: "INR" }}
            <span
              style="font-size: 10px;color:#faad14;text-decoration: line-through;"
              >{{ product?.pr_original_amount | currency: "INR" }}</span
            >
          </p>
          <ion-badge width="25"
            >{{ product?.pr_rating }} <ion-icon name="star"></ion-icon
          ></ion-badge>
        </ion-card-content>
      </ion-card>

      <ion-card *ngIf="product">
        <ion-card-content>
          <ion-row class="detail">
            Details
          </ion-row>
          <h2><b>Note</b></h2>
          <ul>
            {{
              product?.pr_description | titlecase
            }}
          </ul>
          <h2><b>More</b></h2>
          <li>
            <span>Variants: </span>
            <span *ngFor="let variant of toArray(product?.pr_colors)"
              >{{ variant | titlecase }}&nbsp;&nbsp;</span
            >
          </li>
          <li>
            <span>Sizes : </span>
            <button
              ion-button
              small
              outline
              *ngFor="let size of toArray(product?.pr_sizes)"
            >
              {{ size | titlecase }}
            </button>
          </li>
        </ion-card-content>
      </ion-card>
    </ion-content>

    <ion-footer style="background-color: #fff;">
      <ion-grid>
        <ion-row>
          <ion-col>
            <ion-buttons>
              <button ion-button full clear (click)="addToCart()">
                <ion-icon ios="ios-funnel" md="md-funnel"></ion-icon> Add To
                Cart
              </button>
            </ion-buttons>
          </ion-col>
          <ion-col>
            <ion-buttons>
              <button ion-button full (click)="buyNow()">
                Buy Now
              </button>
            </ion-buttons>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-footer>
  `,
  styles: [``]
})
export class UserProductModal implements OnInit {
  @ViewChild(Slides) slides: Slides;
  imgs: any;
  title: any;
  id: any;
  product: any = [];
  base_url = BASE_URL;
  cart = [];
  items = [];
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public toastCtrl: ToastController,
    private modalController: ModalController,
    public viewCtrl: ViewController,
    private storage: Storage,
    private alertCtrl: AlertController,
    private cartService: CartsService,
    private productProvider: ProductProvider
  ) {

  }
  goToGallery(i?) {
    let modal = this.modalController.create(
      ImageModal2,
      { img: this.product.images, prodtct: true },
      { cssClass: "image-modal2" }
    );
    modal.present();
  }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
    this.id = this.navParams.get("id");
    console.log(this.id);
    this.productProvider.getUserProduct(this.id).subscribe((res4: any) => {
      if (res4.status) {
        this.product = res4.message;        
        this.product.pr_main_image =  this.getImage(this.product.pr_main_image);
        this.product.pr_image.forEach(element => {
          element.image_name = this.getImage(element.image_name);
        });
        console.log(this.product);
      } else {
        this.presentToast(res4.message);
      }
    });
  }

  getImage(img) {
    console.log(this.base_url + "/uploads/stores/products/" + img);
    return this.base_url + "/uploads/stores/products/" + img;
  }
  toArray(arr) {
    if (arr) {
      return arr
        .replace(/,/gi, " ")
        .trim()
        .split(" ");
    } else {
      return arr;
    }
  }

  close() {
    this.viewCtrl.dismiss();
  }

  goToCart() {
    this.navCtrl.push("CartPage");
  }

  addToCart() {
    this.storage.get("me").then((val: any) => {
      if(!val){
        let alert = this.alertCtrl.create({
          message: "Please login to Continue further",
          buttons: [
            // {
            //   text: "",
            //   role: "cancel",
            //   handler: () => {
                 
            //   }
            // },
            {
              text: "Login",
              handler: () => {
                this.navCtrl.setRoot("LoginPage" , {fromProduct: 'UserProductModal',id: this.navParams.get("id") });
              }
            }
          ]
        });
        alert.present();
      }
      else{
    this.cartService.addProduct(this.product);
    this.navCtrl.push("CartPage");     
      }
    });
        
  }

  buyNow() {
    this.navCtrl.push("CheckoutPage");
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