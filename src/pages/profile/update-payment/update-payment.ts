import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the UpdatePaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-payment',
  templateUrl: 'update-payment.html',
})
export class UpdatePaymentPage {
 dashboardme:any = [];
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private toastCtrl: ToastController,
    private storage: Storage,
    private auth:AuthProvider,) {
  	 this.storage.get('me').then((val:any)=>{
	   this.get_dashboard(val.token)
	 })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

 get_dashboard(token){
    console.clear()
    this.auth.getDash(token).subscribe((res:any)=>{
      if(res.status){
        this.storage.set('me', res.message);
        console.log(res.message)
        this.dashboardme = res.message;
      }
    })
  }

  updateBANKform(){
   console.log(this.dashboardme) 
      this.auth.updatePayments(this.dashboardme).subscribe((res:any)=>{
      	console.log(res);
      	this.presentToast(res.message);
      })
  }


  presentToast(msg){
    let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
  }

  updateBTCform(){
  	console.clear()
   console.log(this.dashboardme) 
      this.auth.updateCrypto(this.dashboardme).subscribe((res:any)=>{
      	console.log(res);
      	this.presentToast(res.message);
      })
  }


}