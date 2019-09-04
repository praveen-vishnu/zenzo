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
  selectedItems = [];
 
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
