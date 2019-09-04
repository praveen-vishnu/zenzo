import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OfferProvider } from '../../../providers/store/offer';

/**
 * Generated class for the EditOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-offer',
  templateUrl: 'edit-offer.html',
})
export class EditOfferPage {
  offer:any;
  token:any;
  private edit : FormGroup;

  constructor(public toastCtrl: ToastController,private offerProvider:OfferProvider,private formBuilder: FormBuilder,public navCtrl: NavController, public navParams: NavParams) {
  	this.offer = navParams.get('offer');
    this.token = navParams.get('token');
  	this.edit = this.formBuilder.group({
      date_n_time: [this.offer.date_n_time,Validators.required], 
	  date_only: [this.offer.date_only], 
	  description: [this.offer.description,Validators.required], 
	  end_date: [this.offer.end_date], 
	  offer_id: [this.offer.id], 
	  offer_percenage: [this.offer.offer_percenage], 
	  offer_status: [this.offer.offer_status], 
	  offer_title: [this.offer.offer_title], 
	  offer_unique_id: [this.offer.offer_unique_id], 
	  start_date: [this.offer.start_date], 
	  store_id: [this.offer.store_id], 
	  user_id: [this.offer.user_id], 
    visible_status: [(this.offer.visible_status)],
    visiblity: [!!parseInt(this.offer.visible_status)],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditOfferPage');
  }
  onSubmit(){
  	this.offerProvider.editOffer(this.edit.value,this.token).subscribe((res:any)=>{
  		if(res.status){
  			this.navCtrl.pop();
  		}
  		let toast = this.toastCtrl.create({
          message: res.message,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
  	})
  }

 disable_enable(event){
 	this.edit.value.visible_status = event._value ? '1' : '0'
 	console.log(this.edit.value.visible_status)
 }
}
