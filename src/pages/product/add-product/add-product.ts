import { Component, ViewChild } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  Slides,
  ToastController
} from "ionic-angular";
import { ProductProvider } from "../../../providers/store/product";
import { Storage } from "@ionic/storage";
import { COUNTRY_LIST } from "../../../services/constants.service";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";

/**
 * Generated class for the AddProductPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-add-product",
  templateUrl: "add-product.html"
})
export class AddProductPage {
  @ViewChild(Slides) slides: Slides;
  segment = "0";
  token: any;
  category: any;
  maincategory: any;
  subcategory: any;
  countries = COUNTRY_LIST;
  file: File;
  main_category_id;
  category_id;
  store: FormGroup;

  constructor(
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    private storage: Storage,
    public navParams: NavParams,
    private productProvider: ProductProvider,
    private formBuilder: FormBuilder
  ) {
    this.store = this.formBuilder.group({
      pr_name: [""],
      brand_name: [""],
      pr_main_category_id: [""],
      pr_category_id: [""],
      pr_sub_category_id: ["", [Validators.required]],
      shipping_type: [""],
      shipping_charge_amount: [""],
      delivery_min_num_of_day: [""],
      delivery_max_num_of_day: [""],
      pr_description: [""],
      search_keywords: [""],
      country_publication_id: [""],
      pr_description_warranty: [""],
      pr_colors: [""],
      pr_sizes: [""],
      pr_original_amount: [""],
      pr_discount_percentage: [""],
      pr_inventory_stock: [""]
    });

    this.storage.get("me").then((val: any) => {
      this.getdata(val.token);
    });
  }

  openImage(){
    document.getElementById('pr-image').click();
  }

  getdata(token) {
    this.token = token;
    this.productProvider.getMainCategory().subscribe((data: any) => {
      console.log(data);
      if (data.status) {
        this.maincategory = data.message;
      }
    });
  }

  shippingCharge(eve) {
    eve = parseInt(eve)
    console.log(eve);
    if (eve == 0) {
      this.store.value.shipping_charge_amount = eve;
      console.log(this.store.value);
    }
  }
  selectSubCat(category_id) {
    this.category_id = category_id;
    this.subcategory = [];
    this.productProvider
      .getSubCategory(this.main_category_id, this.category_id)
      .subscribe((data: any) => {
        console.log(data);
        this.subcategory = data;
      });
  }
  selectCat(id) {
    this.main_category_id = id;
    this.category = [];
    console.log(this.main_category_id);
    this.productProvider
      .getCategory(this.main_category_id)
      .subscribe((data: any) => {
        console.log(data);
        this.category = data;
      });
  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad ListStorePage");
    this.slides.lockSwipes(true);
  }
  segmentChanged(eve) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(parseInt(eve._value), 500);
    this.slides.lockSwipes(true);
  }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.segment = currentIndex + "";
  }

  changeListener($event): void {
    this.file = $event.target.files[0];
  }

  imageUpload() {
    document.getElementById("imageUpload").click();
  }
  onSubmit(nextSlide) {
    console.log(nextSlide);
    console.log(this.store.value);
    if (nextSlide == "s") {
      this.productProvider
        .create(this.token, this.store.value)
        .subscribe((res: any) => {
          console.log(res);
          if (res.satus) {
            this.store.reset();
          }
          let toast = this.toastCtrl.create({
            message: res.message,
            duration: 3000
          });

          toast.onDidDismiss(() => {
            console.log("Dismissed toast");
          });

          toast.present();
        });
    } else {
      this.slides.lockSwipes(false);
      this.slides.slideTo(parseInt(nextSlide), 500);
      this.segment = nextSlide;
      this.slides.lockSwipes(true);
    }
  }
}
