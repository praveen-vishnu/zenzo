import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  user:any;
  colors_sizes = []
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
    private auth:AuthProvider,) {
  	 this.storage.get('me').then((val:any)=>{
	  		this.get_dashboard(val.token)
	 })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    // this.auth.test().subscribe((res:any)=>{
    //   console.clear()
    //   var colors_sizes = res.message.colors_sizes;
    //   var arr =[]
    //   colors_sizes.forEach(ele=>{
    //     this.colors_sizes.push({
    //       name: ele.id+'Original',
    //       type:'Original',
    //       placeholder: 'Enter Value of ' + ele.pr_color_name +' for size '+ele.pr_size_name
    //       },
    //       {
    //       name: ele.id+'Quantity',
    //       type:'Quantity',
    //       placeholder: 'Enter Value of ' + ele.pr_color_name +' for size '+ele.pr_size_name
    //       },
    //       {
    //       name: ele.id+'Discount',
    //       type:'Discount',
    //       placeholder: 'Enter Value of ' + ele.pr_color_name +' for size '+ele.pr_size_name
    //       })
    //   })
    //   console.log(this.colors_sizes)
    // })
  }

    get_dashboard(token){
    this.auth.getDash(token).subscribe((res:any)=>{
      if(res.status){
        this.storage.set('me', res.message);
        this.user = res.message;
      }
    })
  }

  goTo(page){
  	this.navCtrl.push(page);
  }
}

