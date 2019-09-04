import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KeyProvider } from '../../../providers/key/key';
import { Storage } from '@ionic/storage';



/**
 * Generated class for the ViewKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-key',
  templateUrl: 'view-key.html',
})
export class ViewKeyPage {
used:boolean=true;
unused:boolean=false;
usedKeyList:any = [];	
unUsedKeyList:any = [];

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
    private key:KeyProvider) {
   this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  

	this.key.getUsedUnusedKeys(token,1).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.unUsedKeyList = data.message
        }
      }
    )

    this.key.getUsedUnusedKeys(token,0).subscribe(
	 (data1:any) => {
        console.log(data1);
        if(data1.status){
          this.usedKeyList = data1.message
        }
      }
    )

  }


  upgradePackage(key){
  this.navCtrl.setRoot('ActivateKeyPage', {key:key}); 
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewKeyPage');
  }

}
