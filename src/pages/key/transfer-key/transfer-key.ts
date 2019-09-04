import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { KeyProvider } from '../../../providers/key/key';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the TransferKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-transfer-key',
  templateUrl: 'transfer-key.html',
})
export class TransferKeyPage {

  to_user_id
  package_id
  packages:any =[];
  transferReport:any =[];
  number_of_keys
  account_password  
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
    private key:KeyProvider,
    private toastCtrl: ToastController) {
   this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  

	this.key.getAvailablePackagesList(token).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.packages = data.message
        }
      }
    )

    this.key.getTransferedKeyList(token).subscribe(
	 (data1:any) => {
        console.log(data1);
        if(data1.status){
          this.transferReport = data1.message
        }
      }
    )

  }

getParseInt(val){
    return parseInt(val);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransferKeyPage');
  }

transferKey(){
     var f = new FormData()
    f.append('token' , localStorage.getItem('token'))
    f.append('to_user_id' , this.to_user_id)
    f.append('number_of_keys' , this.number_of_keys)
    f.append('package_id' , this.package_id)
    f.append('account_password' , this.account_password)
    this.key.transferKey(f).subscribe((res:any) => {
       console.log(res);
       if(res.status){
        this.to_user_id = '';
        this.number_of_keys = '';
        this.package_id = '';
        this.account_password = '';
        this.toast(res.message);
        this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
       }
       else{
         this.toast(res.message);
       }      
      });
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
