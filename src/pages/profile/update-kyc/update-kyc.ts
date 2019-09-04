import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the UpdateKycPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update-kyc',
  templateUrl: 'update-kyc.html',
})
export class UpdateKycPage {
  showHide: boolean = false;
 dashboardme:any = [];
  fileToUpload: File = null;
  kyc_data:any=[];
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

  uploadImage(files: FileList) {
    this.fileToUpload = files.item(0);
}
 get_dashboard(token){
    console.clear()
    this.auth.getDash(token).subscribe((res:any)=>{
      if(res.status){
        this.storage.set('me', res.message);
        console.log(res.message)
        this.dashboardme = res.message;
        if(res.message.kyc_data){
        	this.kyc_data = res.message.kyc_data;
        }
        console.log(this.kyc_data)
      }
    })
  }

  updateKYCform(form){
  	console.clear();
  	form.value.token = this.dashboardme.token; 
  	form.value.id_proof_image = this.fileToUpload; 
    console.log(form.value) 
    this.auth.updateKYC(form.value).subscribe((res:any)=>{
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
}