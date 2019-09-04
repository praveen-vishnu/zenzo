import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { OfferProvider } from '../../../providers/store/offer';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the CreateOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-offer',
  templateUrl: 'create-offer.html',
})
export class CreateOfferPage {

  offer:any;
  token:any;
  private edit : FormGroup;

  constructor(
    public toastCtrl: ToastController,
    private offerProvider:OfferProvider,
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    private storage: Storage, 
    public navParams: NavParams) {

    this.storage.get('me').then((val:any)=>{
        this.getdata(val.token)
    })

    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        dayplus = '' + (d.getDate()+1),
        year = d.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (dayplus.length < 2) dayplus = '0' + dayplus;
  	this.edit = this.formBuilder.group({ 
    description: ['',Validators.required], 
	  end_date: [[year, month, dayplus].join('-'),Validators.required], 
	  offer_percenage: [0,Validators.required], 
	  offer_title: ['',Validators.required], 
	  start_date: [[year, month, day].join('-'),Validators.required], 
    });
  }
  getdata(token){  
    this.token=token;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditOfferPage');
  }
  onSubmit(){
  	this.offerProvider.createOfferr(this.edit.value,this.token).subscribe((res:any)=>{
  		if(res.status){
  			this.edit.reset();
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
