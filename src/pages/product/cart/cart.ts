import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartsService } from '../../../providers/carts-service/carts-service';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private cartService: CartsService) {
  }
  selectedItems = [
    
  ];
 
  total = 0;
  showEmptyCartMessage: boolean = false;
 
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      obj.pr_size = this.toArray(obj.pr_sizes)[0];
      obj.pr_color = this.toArray(obj.pr_colors)[0];
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    // this.selectedItems = [
    //   {
    //      brand_name: "puma",       ​​
    //      category_name: "Clothing",       ​​
    //      date_n_time: "2019-08-21 11:57:58",       ​​
    //      date_only: "2019-08-21",       ​​
    //      delivery_max_num_of_day: "3",       ​​
    //      delivery_min_num_of_day: "2",       ​​
    //      id: "1",       ​​
    //      count:1,
    //      main_category_name: "Men",       ​​
    //      pr_category_id: "5",       ​​
    //      pr_color: "red",       ​​
    //      pr_colors: "red,green",       ​​
    //      pr_description: "puma shoes",       ​​
    //      pr_description_warranty: "puma shoes",       ​​
    //      pr_discount_percentage: "12.00",       ​​
    //      pr_inventory_stock: "22",       ​​
    //      pr_main_category_id: "3",       ​​
    //      pr_main_image: "http://192.168.1.100:81/zomo//uploads/stores/products/2019-08-21552038face18jpg.jpg",       ​​
    //      pr_name: "puma shoes",       ​​
    //      pr_original_amount: "530.00",       ​​
    //      pr_rating: "0.00",       ​​
    //      pr_remaining_stock: "19",       ​​      
    //      pr_sale_amount: "466.40",       ​​
    //      pr_size: "small",       ​​
    //      pr_sizes: "small,medium,large, ",       ​​
    //      pr_sub_category_id: "1",       ​​
    //      pr_unique_id: "ZOPI120",       ​​
    //      search_keywords: "puma shoes",       ​​
    //      shipping_charge_amount: "0.00",       ​​
    //      shipping_type: "0",       ​​
    //      sub_category_name: "Jeans",
    //      user_row_id: "9",        
    //     }
    // ];
    if(this.selectedItems.length == 0){
      this.showEmptyCartMessage = true;
    }
    
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.pr_sale_amount), 0);
  }
 gettotal(){
  this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.pr_sale_amount), 0);
 }
  ionViewDidLoad() {
    console.clear()
    console.log(this.cartService.getCart());
  }

  goToCheckout() {
    console.log(this.selectedItems);
    this.cartService.setCart(this.selectedItems)
    this.navCtrl.push("CheckoutPage");
  }
  removeFromCart(item, i){
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
}
