import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { ProductProvider } from "../../../providers/store/product";
import { Storage } from "@ionic/storage";
import { BASE_URL } from '../../../services/constants.service';
import { OrderDetail } from '../store-orders/store-orders';
/**
 * Generated class for the MyOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-orders',
  templateUrl: 'my-orders.html',
})
export class MyOrdersPage {
  token: any;
  products: any;
  ORDER_DETAIL = OrderDetail;
  base_url = BASE_URL;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public toastCtrl: ToastController,
    private productProvider: ProductProvider) {
      console.clear();
      this.storage.get("me").then((val: any) => {
        this.getdata(val.token);
      });
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
    getdata(token) {
      this.token = token;
      this.productProvider
        .getUserOrderList(this.token)
        .subscribe((res4: any) => {
          if (res4.status) {
            this.products = res4.message;
            this.products.forEach(element => {
              this.productProvider.getUserOrder(this.token,element.id).subscribe((data: any) => {
                if (data.status) {
                  element.myorder = true;
                  element.token = this.token;
                  element.image_name = this.getImage(element.image_name); 
                  element.full_detial = data.message;
                }
              });
            });
            console.log(this.products);
          } else {
            this.presentToast(res4.message);
          }
        });
    
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyOrdersPage');
  }
  getImage(img) {
    console.log(this.base_url + "/uploads/stores/products/" + img);
    return this.base_url + "/uploads/stores/products/" + img;
  }
  getArray(array){
    return Array.isArray(array);
 }
}
