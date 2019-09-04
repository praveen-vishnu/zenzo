import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, AlertController  } from 'ionic-angular';

import { ProductProvider } from "../../../providers/store/product";
import { Storage } from "@ionic/storage";
import { BASE_URL } from '../../../services/constants.service';
/**
 * Generated class for the StoreOrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-orders',
  templateUrl: 'store-orders.html',
})
export class StoreOrdersPage {
  token: any;
  products: any;
  base_url = BASE_URL;
  ORDER_DETAIL = OrderDetail;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private storage: Storage,
    public toastCtrl: ToastController,
    public alertCtrl: AlertController,
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
        .getOrderList(this.token, '0')
        .subscribe((res4: any) => {
          console.log(res4);
          
          if (res4.status) {
            this.products = res4.message;
            this.products.forEach(element => {
              this.productProvider.getOrder(this.token,element.id).subscribe((data: any) => {
                if (data.status) {
                  element.image_name = this.getImage(element.image_name); 
                  element.myorder = false;
                  element.token = this.token;
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

 showFilter() {
  let alert = this.alertCtrl.create();
  alert.setTitle('Filter');
  var arr = 
  [
    {value:0,name:"Pending"}, 
    {value:1,name:"Accepted"},
    {value:0,name:"Pending"},
    {value:2,name:"Inprocess"},
    {value:3,name:"Shipped"},
    {value:4,name:"Completed"},
    {value:5,name:"Rejected"}
  ]
  arr.forEach(ele =>{
    alert.addInput({
      type: 'radio',
      label: ele.name,
      value: ele.value+"",
    });
  })
  
  alert.addButton('Cancel');
    alert.addButton({
      text: 'OK',
      handler: data => {
        this.productProvider
        .getOrderList(this.token, data)
        .subscribe((res4: any) => {
          console.log(res4);          
          if (res4.status) {
            this.products = res4.message;
            this.products.forEach(element => {
              this.productProvider.getOrder(this.token,element.id).subscribe((data: any) => {
                if (data.status) {
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
    });
}
}



@Component({
  template: `    
  <ion-header>
  <ion-navbar color="primary">
    <ion-title>Order Info</ion-title>
  </ion-navbar>
  </ion-header>
  <ion-content>
  <ion-list class="no-border Order">
  <ion-list-header>Order Details</ion-list-header>  
  <ion-item>
  <ion-grid>
  <ion-row><ion-col>Order Date</ion-col><ion-col>{{Order?.date_n_time | date:'MMM d, y, h:mm a'}}</ion-col></ion-row>
  <ion-row><ion-col>Order #</ion-col><ion-col>{{Order?.pr_unique_id}}</ion-col></ion-row>
  <ion-row *ngIf="Order?.product_quantity != '1'"><ion-col>Order Qty</ion-col><ion-col>{{Order?.product_quantity}} items</ion-col></ion-row>
  <ion-row *ngIf="Order?.product_quantity == '1'"><ion-col>Order Qty</ion-col><ion-col>{{Order?.product_quantity}} item</ion-col></ion-row>
  </ion-grid>
  </ion-item>
  </ion-list>
  
  <ion-list class="no-border">
  
  <ion-item no-lines style="padding: 0;">
  <ion-grid>
  <ion-row>
  <ion-col>
  <h2 *ngIf="Order?.order_status == '0'">Pending</h2>
  <h2 *ngIf="Order?.order_status == '1'">Accepted</h2>
  <h2 *ngIf="Order?.order_status == '2'">Inprocess</h2>
  <h2 *ngIf="Order?.order_status == '3'">Shipped</h2>
  <h2 *ngIf="Order?.order_status == '4'">Delivered</h2>
  <h2 *ngIf="Order?.order_status == '5'">Rejected</h2>
  </ion-col>
  <ion-col text-right>
  <button *ngIf="from_myOrder" (click)="cancel()" ion-button small round><ion-icon item-end name="close"></ion-icon>Cancel</button>
  </ion-col>
  </ion-row>
  </ion-grid>
  </ion-item>
  <ion-item no-lines>
    <ion-thumbnail item-start>
      <img [src]="getImage(Order?.image_name)">
    </ion-thumbnail>
    <h2>{{Order?.pr_name | titlecase}}</h2>
    <p>{{Order?.order_detail}}</p>
  </ion-item>
  </ion-list>
  <ion-list no-lines class="no-border">
  <ion-list-header>Payment Information</ion-list-header>
  <ion-item no-lines style="padding: 0;">
    <h2><b>Payment Method</b></h2>
    <p *ngIf="Order?.paid_using == '0'">Cash On Delivery</p>
    <p *ngIf="Order?.paid_using == '1'">Online Payment</p> 
    </ion-item>
    <ion-item no-lines>
    <h2><b>Billing Address</b></h2>
    <p>{{Order?.billing_detail.customer_name | titlecase}} ({{Order?.billing_detail.phone_number}})</p>
    <p>{{Order?.billing_detail.email_id}}</p>
    <p>{{Order?.billing_detail.address | titlecase}} {{Order?.billing_detail.city_name | titlecase}}</p>
    <p>{{Order?.billing_detail.state_name | titlecase}} </p>
    <p>{{Order?.billing_detail.pin_code | titlecase}}</p>
    </ion-item>    
  </ion-list>
  <ion-list margin-top class="no-border Order">
  <ion-list-header>Order Summary</ion-list-header>  
  <ion-item>
  <ion-grid>
  <ion-row><ion-col>Items</ion-col><ion-col> {{Order?.product_amount | currency: "INR" }} </ion-col></ion-row>
  <ion-row><ion-col>shipping Fee</ion-col><ion-col>{{Order?.shipping_charges | currency: "INR" }} </ion-col></ion-row>
  <ion-row><ion-col>Sub Total</ion-col><ion-col>{{Order?.subtotal_amount | currency: "INR" }} </ion-col></ion-row>
  <ion-row><ion-col><h2><b>Total</b></h2></ion-col><ion-col><h2><b>{{Order?.total_amount | currency: "INR" }}</b></h2></ion-col></ion-row>
  </ion-grid>
  </ion-item>
  </ion-list>
  </ion-content>
  `,
  styles: [
    `
   .Order{
     padding: 0;
     .input-wrapper{
      .label {
        margin: 0;
      }
     }
   }
    .list-ios:not([inset]) + .list-ios:not([inset]) ion-list-header {
      margin-top: 0;
      padding-left: 0;
      }
    .list-header-ios{
      border: 0;
    }
    .list-ios {
      margin: 0;
      padding: 0px 16px;  
      }

      .list-ios > .item-block:last-child, .list-ios > .item-wrapper:last-child .item-block {
        border: 0.55px solid #c8c7cc;
        padding: 0;
    }
    .no-border ion-item{

      border: 0 !important

    }
    .no-border{
      border: 1px solid #c8c7cc;
      margin: 12px 16px;
      
    }
    ion-item ion-label {
      margin: 0px !important;
    }

    ion-col{
      padding: 0 20px;
    }
    `
  ]
})
export class OrderDetail {
  Order:any;
  from_myOrder:boolean = false;
  base_url = BASE_URL;
  token:any;
  constructor(
    private navParams: NavParams,
    public toastCtrl: ToastController,
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    private productProvider: ProductProvider
  ) {
    console.clear();
    this.Order = navParams.get('full_detial');
    this.from_myOrder = navParams.get('myorder');
    this.token = navParams.get('token');
    console.log(navParams.get('full_detial'))
  }

  ngOnInit() {
   
  }
  getImage(img) {
    console.log(this.base_url + "/uploads/stores/products/" + img);
    return this.base_url + "/uploads/stores/products/" + img;
  }
  cancel(){
    this.productProvider.cancelUserOrder

    let alert = this.alertCtrl.create({
      title: "Cancel Order",
      message: "Are You Sure ?",
      buttons: [
        {
          text: "No",
          role: "cancel",
          handler: () => {

          }
        },
        {
          text: "Yes",
          handler: () => {
            this.productProvider
            .cancelUserOrder(this.token, this.navParams.get('invoice_unqiue_id'))
            .subscribe((res4: any) => {
              if (res4.status) {
                this.presentToast(res4.message);
                this.navCtrl.pop();
              } else {
                this.presentToast(res4.message);
              }
            });
          }
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
