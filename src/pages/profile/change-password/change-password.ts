import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-change-password',
  templateUrl: 'change-password.html',
})
export class ChangePasswordPage {
  dashboardme:any = [];
  passwordupdate = {
    old_password : '',
    new_password : '',
    confirm_password : '',
    token: ''
  };  
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private toastCtrl: ToastController,
    private storage: Storage,
    private auth:AuthProvider,) {
  	 this.storage.get('me').then((val:any)=>{
	   this.get_dashboard(val.token)
	   this.passwordupdate.token = val.token;
	 })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePasswordPage');
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

  updatepasswordform(){
        
   	  console.log(this.passwordupdate) 
      this.auth.updatePassword(this.passwordupdate).subscribe((res:any)=>{
      	console.log(res);
      	this.presentToast(res.message);
      	if(res.status){
		this.passwordupdate.old_password = '';
        this.passwordupdate.new_password = '';
        this.passwordupdate.confirm_password = '';
      	}
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
}
