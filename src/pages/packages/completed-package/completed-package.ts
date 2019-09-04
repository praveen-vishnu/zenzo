import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { PackageProvider } from '../../../providers/package/package';
import { Storage } from '@ionic/storage';
import { ModalContentPage } from '../running-package/running-package';


/**
 * Generated class for the CompletedPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-completed-package',
  templateUrl: 'completed-package.html',
})
export class CompletedPackagePage {

  
  pkgs: any;
  token:any;
  running_packages = 0
  completed_packages = 0
  modalData:any = [{
	"id": "",
	"package_validity": "",
	"upgrade_package_code": "",
	"package_amount": "0",
	"activated_date": "",
	"expiry_date": "",
	"package_name": "",
	"completed_task": 0,
	"earned_amount": 0,
	"earning_detail":[
		{
		"date_n_time": "",
		"task_reward": "",
		"task_name": "",
		"task_code": ""
		}]
	}];	
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public modalCtrl: ModalController,
    private storage: Storage,
    private packageProvider:PackageProvider,) {
  
    this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	})
  }

  getdata(token){  
  	this.token = token;
  	this.packageProvider.getRunningList(token).subscribe((data:any) => {
      if(data.status){
          // this.pkgs = data.message
          if(this.getArray(data.message)){
            this.running_packages = data.message.length;
          }
          else{
          this.running_packages = 0;
          }
        }   
    });
  	this.packageProvider.getCompletedList(token).subscribe((data:any) => {
      if(data.status){
          this.pkgs = data.message
          if(this.getArray(data.message)){
            this.completed_packages = data.message.length;
          }
          else{
          this.completed_packages = 0;
          }
        }   
    });
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RunningPackagePage');
  }

  getparseFloat(val){
    return parseFloat(val).toFixed(2)
  }
  getArray(array){
     return Array.isArray(array);
  }

  packageDetail(code){
     this.packageProvider.getPackageDetail(this.token,code).subscribe(
      (data1:any) => {
        // console.log(data)
        if(data1.status){
          // if(this.getArray(data1.message)){
            this.modalData = data1.message;
            let modal = this.modalCtrl.create(ModalContentPage, {modalData:this.modalData});
   			modal.present();
          // }
        }
      }
    )
  }
}
