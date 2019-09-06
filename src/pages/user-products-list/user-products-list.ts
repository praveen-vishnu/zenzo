import { BASE_URL } from './../../services/constants.service';
import { ImageModal2 } from './../sub-options-with-icons/sub-option-one/sub-option-one';
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
import { Storage } from "@ionic/storage";
import { ProductProvider } from '../../providers/store/product';
import { CartsService } from '../../providers/carts-service/carts-service';
/**
 * Generated class for the UserProductsListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-products-list',
  templateUrl: 'user-products-list.html',
})
export class UserProductsListPage {

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
    
    this.productProvider.getUserProductList().subscribe((resp: any) => {

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

  filterStore(searchTerm) {
    this.products = this.productsbackup;
  return this.products.filter(item => {
    return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });
}

  
  setFilteredItems(){
    this.products = this.filterStore(this.searchTerm); 
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
    this.navCtrl.push(UserProductModal, { id: data.id }); 
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
