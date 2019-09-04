import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController,Platform,ViewController } from 'ionic-angular';
import { OfferProvider } from '../../../providers/store/offer';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ManageOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-manage-offer',
  templateUrl: 'manage-offer.html',
})
export class ManageOfferPage {
offerlist:any;
desc;
offertitle;
p1= 0;
token="";
 constructor(
 	public navCtrl: NavController, 
    private storage: Storage,
  	public navParams: NavParams,
    public modalCtrl: ModalController,
  	private offerProvider:OfferProvider) {
  	  this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  
  	this.token=token;
	this.offerProvider.getOfferList(token).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.offerlist = data.message
        }
      }
    )
  }

ionViewDidEnter(){
  this.storage.get('me').then((val:any)=>{
     this.getdata(val.token)
  })  
}
open_view_more(item){
  let modal = this.modalCtrl.create(OfferModal, { modalData:item,token:this.token },{ cssClass:'offer-modal'});
  modal.present();
}
openEdit(item){
  this.navCtrl.push('EditOfferPage',{offer:item,token:this.token})
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ManageOfferPage');
  }

  isArray(arr){
  	return Array.isArray(arr);
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
        <div class="cust-modal-form">
          <div class="form-row">
            <div class="form-group" col-6>
              <label for="inputEmail4"><strong>Offer Title:</strong> {{modalData.offer_title | titlecase}} </label>
            </div>
            <div class="form-group" col-6>
              <label for="inputPassword4"><strong>Created Date:</strong>  {{modalData.date_only | date }}</label>
            </div>
            </div>
          <div class="form-row">
            <div class="form-group" col-6>
              <label for="inputPassword4"><strong>Unique Id:</strong> {{modalData.offer_unique_id}}</label>
            </div>

            <div class="form-group" col-6>
              <label for="inputEmail4"><strong>Percenage:</strong> {{modalData.offer_percenage}} </label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" col-6>
              <label for="inputPassword4"><strong>Start Date:</strong>  {{modalData.start_date | date}} </label>
            </div>
            <div class="form-group" col-6>
              <label for="inputZip"><strong>End Date:</strong> {{modalData.end_date | date}} </label>
            </div>
          </div>
          <div class="form-row">
            <div class="form-group" col-6>
              <label for="inputCity" *ngIf="modalData.offer_status=='0'" ><strong>Offer Status:</strong>Pending</label>
              <label for="inputCity" *ngIf="modalData.offer_status=='1'" ><strong>Offer Status:</strong>Approved</label>
              <label for="inputCity" *ngIf="modalData.offer_status=='2'" ><strong>Offer Status:</strong>Rejected</label>
            </div>
            <div class="form-group" col-6>
              <label for="inputState" *ngIf="!visible_status" ><strong>Visibilty Status:</strong><span style="color: red">Not Visible</span></label>
              <label for="inputState" *ngIf="visible_status" ><strong>Visibilty Status:</strong><span style="color: green">Visible</span></label>
            </div>
          </div>
          <div class="form-row">
            <ion-item>
              <ion-label>Enable / Disable</ion-label>
              <ion-toggle (ionChange)="disable_enable()" [(ngModel)]="visible_status"></ion-toggle>
            </ion-item> 
          </div>
        </div>
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
export class OfferModal {
  modalData:any;
  token:any;
  visible_status:boolean;
  constructor(
    public platform: Platform,
    public params: NavParams,
    private offerProvider:OfferProvider,
    public viewCtrl: ViewController
  ) {
    this.modalData = params.get('modalData');
    this.visible_status = !!parseInt(this.modalData.visible_status)
    this.token = params.get('token');
    console.log(this.modalData)
   }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  getArray(array){
     return Array.isArray(array);
  }

disable_enable(){
  var status = this.visible_status ? '1' : '0';
  this.offerProvider.offerEnableDisable(this.token,this.modalData.id,status).subscribe((res:any)=>{
  console.log(res);
   if(res.status){
     this.visible_status = !!parseInt(status);
   }
  })
}
}