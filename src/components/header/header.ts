import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartsService } from '../../providers/carts-service/carts-service';

/**
 * Generated class for the HeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'header',
  templateUrl: 'header.html'
})
export class HeaderComponent {

  text: string;
  selectedItems = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private cartService: CartsService) {
  }
  
  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key])
    
  }
  goToCart() {
    this.navCtrl.push("CartPage");
  }

}
