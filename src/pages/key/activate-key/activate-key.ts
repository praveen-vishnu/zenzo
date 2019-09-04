import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { KeyProvider } from '../../../providers/key/key';
import { Storage } from '@ionic/storage';
import { AuthProvider } from '../../../providers/auth/auth';

/**
 * Generated class for the ActivateKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-activate-key',
  templateUrl: 'activate-key.html',
})
export class ActivateKeyPage {
	key=""
	activatedKeyList:any = [];
    ksyStat = false;
    dashMe:any=[];
	constructor(
	  	public navCtrl: NavController, 
	  	public navParams: NavParams,
	  	private auth:AuthProvider,
	    private storage: Storage,
	    private keyProvider:KeyProvider,
   		private toastCtrl: ToastController) 
	{
		this.key = navParams.get("key");
		this.storage.get('me').then((val:any)=>{
			this.getdata(val.token)
			// console.log(val.token)
		})
	}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ActivateKeyPage');
  }

   getdata(token){  
    this.keyProvider.getActivatedKeyList(token).subscribe(
	 (data1:any) => {
        // if(data1.status){
          this.activatedKeyList = data1
          console.log(this.activatedKeyList);
        // }
      }
    )
    this.get_dashboard(token);
  }

  getParseInt(val){
    return parseFloat(val).toFixed(2);
  }

  get_dashboard(token){
    this.auth.getDash(token).subscribe((res1:any)=>{
      if(res1.status){
      	this.dashMe = res1.message
      	if(res1.message.key_activated_status == "0"){
      	this.ksyStat = false;
      }
      else {
      	this.ksyStat = true;
      }
        // console.log(res1.message)
      }
    })
  }

  updateKey(){    
     this.keyProvider.updateKey(this.dashMe.token,this.key).subscribe(
	 (res1:any) => {
	 	console.log(res1)
         if (res1.status){
	      this.toast(res1.message);
	      this.storage.get('me').then((val:any)=>{
	        this.getdata(val.token)
	      })
	      this.key  = '';
	      console.log(res1);  
	     }
	    else{
	      this.toast(res1.message);
	     }
      }
    )

  }
  toast(msg){
  	 let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
  }


}
