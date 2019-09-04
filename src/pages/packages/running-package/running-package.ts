import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,Platform,ViewController } from 'ionic-angular';
import { PackageProvider } from '../../../providers/package/package';
import { Storage } from '@ionic/storage';


/**
 * Generated class for the RunningPackagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-running-package',
  templateUrl: 'running-package.html',
})
export class RunningPackagePage {

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
    private storage: Storage,
    public modalCtrl: ModalController,
    private packageProvider:PackageProvider,) {
  
    this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	})
  }

  getdata(token){  
  	this.token = token;
  	this.packageProvider.getRunningList(token).subscribe((data:any) => {
      if(data.status){
          this.pkgs = data.message
          if(this.getArray(data.message)){
            this.running_packages = data.message.length;
          }
          else{
          this.running_packages = 0 ; 
          }
        }   
    });
  	this.packageProvider.getCompletedList(token).subscribe((data:any) => {
      if(data.status){
          // this.pkgs = data.message
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


@Component({
  template: `
<div>
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">View Package</h5>
        <button type="button" (click)="dismiss()" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>  
      <div class="modal-body">
        <form class="cust-modal-form">
          <div class="form-row">
            <div class="form-group" col-4>
              <label for="inputEmail4"><strong>Package:</strong> {{modalData.package_name | titlecase}} </label>
            </div>
            <div class="form-group" col-4>
              <label for="inputPassword4"><strong>Amount:</strong> $ {{modalData.package_amount}}</label>
            </div>

            <div class="form-group" col-4>
              <label for="inputPassword4"><strong>Code:</strong> {{modalData.upgrade_package_code}}</label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" col-4>
              <label for="inputEmail4"><strong>Completed Tasks:</strong> {{modalData.completed_task}} </label>
            </div>
            <div class="form-group" col-4>
              <label for="inputPassword4"><strong>Earned Amt:</strong> $ {{modalData.earned_amount}} </label>
            </div>
            <div class="form-group" col-4>
              <label for="inputZip"><strong>Validity:</strong> {{modalData.package_validity}} Days </label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" col-6>
              <label for="inputCity"><strong>Activated Date:</strong>  {{modalData.activated_date | date}}</label>
            </div>
            <div class="form-group" col-6>
              <label for="inputState"><strong>Expiry Date:</strong>  {{modalData.expiry_date | date}}</label>
            </div>
          </div>
        </form>
        <h5 class="modal-title" id="exampleModalLabel">Earning Details</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Task</th>
              <th scope="col">Code</th>
              <th scope="col">Reward</th>
            </tr>
          </thead>
          <tbody *ngIf="!getArray(modalData.earning_detail)">
            <tr class="text-center"><td colspan="7">No Record Found</td></tr>
            </tbody>
            <tbody *ngIf="getArray(modalData.earning_detail)">
            <tr *ngFor="let item of modalData.earning_detail;let i=index;">
              <th scope="row">{{i+1}}</th>
              <td>{{item.date_n_time | date:'medium'}}</td>
              <td>{{item.date_n_time | date:'medium'}}</td>
              <td>{{item.task_code}}</td>
              <td>$ {{item.task_reward}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
`,
styles:[`
	strong{
		font-size: 10px;
	}
`]
})
export class ModalContentPage {
  modalData:any;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {
  	this.modalData = params.get('modalData');
  	console.log(this.modalData)
   }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getArray(array){
     return Array.isArray(array);
  }
}