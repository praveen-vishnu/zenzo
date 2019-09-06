import { Component, OnInit, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  ModalController,
  Slides,
  ViewController,
  ToastController,
  AlertController
} from "ionic-angular";
import { ProductProvider } from "../../../providers/store/product";
import { Storage } from "@ionic/storage";
import { BASE_URL } from "../../../services/constants.service";
import { ImageModal } from "../../manage-store/view-store/view-store";
/**
 * Generated class for the ProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-products-list',
  templateUrl: 'products-list.html',
})
export class ProductsListPage {

  products: any = [];
  productsbackup:any = [];
  token: any;
  searchTerm: any;
  showSearch:any;

  constructor(
    public modalCtrl: ModalController,
    private storage: Storage,
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private productProvider: ProductProvider
  ) {
    this.storage.get("me").then((val: any) => {
      this.getdata(val.token);
    });
  }

  filterStore(searchTerm) {
    this.products = this.productsbackup;
  return this.products.filter(item => {
    return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
}

  
  setFilteredItems(){
    this.products = this.filterStore(this.searchTerm); 
 }
  getdata(token) {
    console.clear();
    this.token = token;

    this.productProvider.getProductList(token).subscribe((resp: any) => {

      if (resp.status) {
        this.products = resp.message;
        var temp = [];
        this.products.forEach(element => {
          let item = {
            id : element.id,
            name: element.pr_name,
            image: this.getImage(element.pr_image),
            rating: parseFloat(element.pr_rating),
            price: parseFloat(element.pr_sale_amount),
            status: parseInt(element.pr_status)
          };
          temp.push(item);
        });
        console.clear()
        console.log(temp);
        this.productsbackup = this.products = temp;
      }
      else {
        console.log(resp);
      }
    });

  }
  getImage(img) {
    return BASE_URL + "/uploads/stores/products/" + img;
  }
  toArray(arr) {
    return arr
      .replace(/,/gi, " ")
      .trim()
      .split(" ");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsListPage');
  }

  goToCart() {
    this.navCtrl.push('CartPage');
  }

  presentPopover(myEvent: Event) {
    // let popover = this.popoverCtrl.create(PopoverPage);
    // popover.present({
    //   ev: myEvent
    // });
  }

  search() {

  }

  goToProductDetail(data: any) {
    console.log(data.id);
    console.log(this.token);
    this.navCtrl.push(ProductModal, { id: data.id, token: this.token }); 
  }

  presentFilter() {
    let modal = this.modalCtrl.create("ProductsFilterPage");
    modal.present();

    modal.onDidDismiss((data: any[]) => {
      if (data) {
        // play with data here
      }
    });
  }

  sortBy() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Sort Options');

    alert.addInput({
      type: 'radio',
      label: 'Relevance',
      value: 'relevance',
      checked: true
    });
    alert.addInput({
      type: 'radio',
      label: 'Popularity',
      value: 'popular'
    });
    alert.addInput({
      type: 'radio',
      label: 'Low to High',
      value: 'lth'
    });
    alert.addInput({
      type: 'radio',
      label: 'High to Low',
      value: 'htl'
    });
    alert.addInput({
      type: 'radio',
      label: 'Newest First',
      value: 'newest'
    });

    alert.addButton('Cancel');

    alert.addButton({
      text: 'OK',
      handler: (data: any) => {
        console.log(data);

        let navTransition = alert.dismiss();

        // start some async method
        setTimeout(() => {
          navTransition.then(() => {
            this.navCtrl.push('CartPage');
          });
        }, 3000);

        // return false;
      }
    });

    alert.present().then(() => {
      console.log("=====alert---present");
    });
  }

}

// Product Detail Page
@Component({
  template: `
  <ion-header>
  <ion-navbar color="primary" *ngIf="product?.pr_status != '0'">
    <ion-title>Product Detail</ion-title>
    <ion-buttons end>
      <button end ion-button clear (click)="openImage()">
        Add Image
      </button>
    </ion-buttons>
  </ion-navbar>
  <ion-navbar color="danger" *ngIf="product?.pr_status == '0'">
    <ion-title>Product Detail</ion-title>
    <ion-buttons end>
      <button end ion-button clear (click)="enable(1)">
        Enable Product
      </button>
    </ion-buttons>
  </ion-navbar>
</ion-header>
<ion-content fullscreen class="product-detail" style="background-color: #f4f4f4;">
  <input type="file" (change)="changeListener($event)" name="pr-image" id="pr-image" style="visibility: hidden">
  <ion-slides pager style="height: 250px">
    <ion-slide *ngFor="let img of product?.images;let i = index;" (click)="goToGallery(i)">
      <img onError="this.src='./assets/images/not-available.jpg'" [src]="img.image_name" />
    </ion-slide>
  </ion-slides>
  <ion-card>
    <ion-card-content>
      <h2>{{ product?.pr_name | titlecase }}</h2>
      <small>Special Price</small>
      <p class="price">
        {{ product?.pr_sale_amount | currency: "INR" }}
        <span
          style="font-size: 10px;color:#faad14;text-decoration: line-through;">{{ product?.pr_original_amount | currency: "INR" }}</span>
      </p>
      <ion-badge width="25">{{ product?.pr_rating }} <ion-icon name="star"></ion-icon>
      </ion-badge>
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
        <span>Variants: </span><span
          *ngFor="let variant of toArray(product?.pr_colors)">{{ variant | titlecase }}&nbsp;&nbsp;</span>
      </li>
      <li>
        <button ion-button small outline *ngFor="let size of toArray(product?.pr_sizes)">
          {{ size | titlecase }}
        </button>
      </li>
    </ion-card-content>
  </ion-card>
</ion-content>

<ion-footer style="background-color: #fff;">
  <ion-grid>
    <ion-row style="border-top:0;">
      <ion-col>
        <ion-buttons>
          <button ion-button full (click)="edit()">
            <ion-icon name="md-create"></ion-icon>&nbsp;&nbsp;Edit
          </button>
        </ion-buttons>
      </ion-col>
    </ion-row>
  </ion-grid>
</ion-footer>
  `,
  styles: [
    `
      .content-md {
        background-color: #f4f4f4;
      }
      ion-header::after {
        background: transparent;
        background-image: none;
      }
      .toolbar {
        .toolbar-background {
          background: transparent;
        }
      }

      scroll-content {
        margin-top: 5px !important;
      }

      .card-ios {
        margin-right: 0px;
        margin-left: 0px;
        width: 100% !important;
      }

      .card-md {
        margin-right: 0px;
        margin-left: 0px;
        width: 100% !important;
      }

      ion-col[width-50] {
        padding-top: 10px;
        text-align: center;
        max-width: 50%;
        color: #616161;
        font-size: large;
        border-right: 2px solid #f1f3f6;
      }

      ion-row {
        border-top: 1px solid #f1f3f6;
      }

      .detail {
        font-size: large;
        border-top: 0;
        border-bottom: 1px solid #f1f3f6;
      }

      small {
        color: #41b283;
        font-size: 80%;
      }

      /* rating-start-css*/

      ul {
        padding: 0px;
        text-align: center;
        &.rating li {
          padding: 5px 10px;
          background: none;
          color: #ffb400;

          ion-icon {
            font-size: 35px;
          }
        }
      }
      /*Ends*/
    `
  ]
})
export class ProductModal implements OnInit {
  @ViewChild(Slides) slides: Slides;
  imgs: any;
  token: any;
  title: any;
  id: any;
  product: any;
  file: File;
  base_url = BASE_URL;
  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    public toastCtrl: ToastController,
    private modalController: ModalController,
    public viewCtrl: ViewController,
    private alertCtrl: AlertController,
    private productProvider: ProductProvider
  ) {
    console.clear();
  }

  ngOnInit() {
    this.token = this.navParams.get("token");
    this.id = this.navParams.get("id");
    console.log(this.id);
    this.productProvider
      .getProduct(this.token, this.id)
      .subscribe((res4: any) => {
        if (res4.status) {
          this.product = res4.message;
          this.product.images.forEach(element => {
            element.image_name = this.getImage(element.image_name);
          });
          console.log(this.product);
        } else {
          this.presentToast(res4.message);
        }
      });
  }

  enable(status) {
    this.productProvider
      .productEnableDisable(this.token, status, this.id)
      .subscribe((res4: any) => {
        this.presentToast(res4.message);
        if (res4.status) {
          this.ngOnInit()
        }
      });
  }
  openImage() {
    document.getElementById('pr-image').click();
  }
  changeListener($event): void {
    this.file = $event.target.files[0];
    this.productProvider
      .addImage(this.token, this.file, this.id)
      .subscribe((res4: any) => {
        console.log(res4)
        if (res4.status) {
          this.presentToast(res4.message);
          this.productProvider
            .getProduct(this.token, this.id)
            .subscribe((res4: any) => {
              if (res4.status) {
                this.product = res4.message;
                this.product.images.forEach(element => {
                  element.image_name = this.getImage(element.image_name);
                });
                console.log(this.product);
              } else {
                this.presentToast(res4.message);
              }
            });
        } else {
          this.presentToast(res4.message);
        }
      }, err => {
        console.log(err);

      });
  }


  toArray(arr) {
    return arr
      .replace(/,/gi, " ")
      .trim()
      .split(" ");
  }
  deleteImage(img_id) {
    this.productProvider
      .removeImage(this.token, img_id, this.id)
      .subscribe((res4: any) => {
        if (res4.status) {
          this.presentToast(res4.message);
        } else {
          this.presentToast(res4.message);
        }
      });
  }
  setMainImage(img_id) {
    this.productProvider
      .setMainImage(this.token, img_id, this.id)
      .subscribe((res4: any) => {
        if (res4.status) {
          this.presentToast(res4.message);
        } else {
          this.presentToast(res4.message);
        }
      });
  }


  goToGallery(i?) {
    let modal = this.modalController.create(
      ImageModal,
      { img: this.product.images, prodtct: true, id: this.navParams.get("id"), token: this.token, pos: i },
      { cssClass: "image-modal" }
    );
    modal.present();

    modal.onDidDismiss(data => {
      console.log(data)
      this.productProvider
        .getProduct(this.token, this.id)
        .subscribe((res4: any) => {
          if (res4.status) {
            this.product = res4.message;
            this.product.images.forEach(element => {
              element.image_name = this.getImage(element.image_name);
            });
            console.log(this.product);
          } else {
            this.presentToast(res4.message);
          }
        });
    })
  }
  close() {
    this.viewCtrl.dismiss();
  }
  getImage(img) {
    return this.base_url + "/uploads/stores/products/" + img;
  }

  goToCart() {
    this.navCtrl.push("");
  }

  addToCart() {
    this.navCtrl.push("");
  }

  edit() {
    this.navCtrl.push("EditProductPage", { id: this.navParams.get("id") });
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
