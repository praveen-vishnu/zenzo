import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CartsService } from '../../../providers/carts-service/carts-service';
import { ProductProvider } from '../../../providers/store/product';

@IonicPage()
@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  newOrder: any;
  paymentMethods: any[];
  paymentMethod: any;
  billing_shipping_same: boolean;
  userInfo: any;
  selectedItems = [];

  constructor(public navCtrl: NavController,
    private productProvider: ProductProvider, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public storage: Storage, 
    private cartService: CartsService,
    public toastCtrl:ToastController) {
    this.newOrder = {};
    this.newOrder.billing_detail = {};
    this.newOrder.shipping = {};
    this.billing_shipping_same = false;
    this.newOrder.billing_detail.country_id = '101';
    this.newOrder.billing_detail.state_name = 'Uttar Pradesh';
    this.paymentMethods = [
      { method_id: "1", method_title: "Online Transfer" },
      { method_id: "0", method_title: "Cash on Delivery" }
    ];
    this.newOrder.payment_type = this.paymentMethods[0];
    this.storage.get('me').then((val: any) => {
      this.newOrder.billing_detail.email_id = val.email_id;
      this.newOrder.token =val.token;
      this.userInfo = val;
    })
    let items = this.cartService.getCart();
    for (let obj of items) {
      this.selectedItems.push({
        'pr_id': obj.id,
        "pr_color":obj.pr_color,
        "pr_size":obj.pr_size,
        "pr_quantity":obj.count
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }
  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;

    if (this.billing_shipping_same) {
      this.newOrder.shipping = this.newOrder.billing_detail;
    }

  }


  placeOrder() {
    console.clear()
    this.newOrder.cart_data = this.selectedItems;
    console.log(this.newOrder)
    this.productProvider.save_offline_cart(this.newOrder).subscribe((res:any) =>{
      console.clear()
      console.log(res)
      if(res.status){
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
              text: "Okay",
              handler: () => {
                this.navCtrl.setRoot("MyOrdersPage");
              }
            }
          ]
        });
        alert.present();
      }
      else{
        this.presentToast(res.message)
      }
    })
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
