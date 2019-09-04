import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides,  ToastController } from 'ionic-angular';
import { StoreProvider } from '../../../providers/store/store';
import { Storage } from '@ionic/storage';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { COUNTRY_LIST } from '../../../services/constants.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the EditStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-store',
  templateUrl: 'edit-store.html',
})
export class EditStorePage {

  @ViewChild(Slides) slides: Slides;  	
  segment = '0';
  token:any;
  category:any
  services:any;
  editStore:any;
  countries = COUNTRY_LIST;
  file: File;
  private store : FormGroup;s

  constructor(
  	public navCtrl: NavController, 
  	public toastCtrl: ToastController, 
    private storage: Storage,
  	public navParams: NavParams,
  	private storeProvider:StoreProvider,
  	private formBuilder: FormBuilder) {
  	this.editStore = navParams.get('store');
  	this.store= this.formBuilder.group({
    	store_name: [this.editStore.store_name],
    	store_tag_line: [this.editStore.store_tag_line],
    	store_category_id: [this.editStore.store_category_id],
    	store_image:[this.editStore.store_image],
    	store_services_ids: [this.editStore.store_services_ids],
    	store_description: [this.editStore.store_description],
    	payment_receive_ids: [this.editStore.payment_receive_ids],
    	google_map_link: [this.editStore.google_map_link],
    	store_address: [this.editStore.store_address],
    	state_name: [this.editStore.state_name],
    	city_name: [this.editStore.city_name],
    	pincode: [this.editStore.pincode],
    	country_id: [this.editStore.country_id],
    	landline_number: [this.editStore.landline_number],
    	contact_number_one: [this.editStore.contact_number_one],
    	contact_number_two: [this.editStore.contact_number_two],
    	contact_email_id: [this.editStore.contact_email_id],
    	website_link: [this.editStore.website_link],
    	facebook: [this.editStore.facebook],
    	twitter: [this.editStore.twitter],
    	linkedin: [this.editStore.linkedin],
    	telegram: [this.editStore.telegram],
    	instagram: [this.editStore.instagram],
    	other: [this.editStore.other],
  	});
  
  this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  
  	this.token = token;
    this.storeProvider.getCategoryList().subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.category = data.message

        }
      }
    )

   

  }

  selectCat(id){
  	console.log(id)
  	this.services = [];
  	 this.storeProvider.getServicesList(id).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.services = data.message
        }
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad EditStorePage');
    this.slides.lockSwipes(true);
  }
 segmentChanged(eve){
    this.slides.lockSwipes(false);
	this.slides.slideTo(parseInt(eve._value), 500);
    this.slides.lockSwipes(true);
 }
  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.segment = currentIndex+'';
  }

  changeListener($event) : void {
  	this.file = this.store.value.store_image = $event.target.files[0];
  	console.log(this.store.value);
  }

  imageUpload(){
  	document.getElementById('imageUpload').click();
  }
  onSubmit(nextSlide){
  	console.log(nextSlide);  
  	this.store.value.payment_receive_ids = this.store.value.payment_receive_ids.toString()
  	this.store.value.store_services_ids = this.store.value.store_services_ids.toString() 
  	console.log(this.store.value);	
  	if(nextSlide == 's'){
  		this.storeProvider.editStore(this.token,this.store.value).subscribe((res:any)=>{
  			console.log(res)
  			if(res.satus){
  				this.store.reset()
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
  	else{
    this.slides.lockSwipes(false);
	this.slides.slideTo(parseInt(nextSlide), 500);
	this.segment = nextSlide;
    this.slides.lockSwipes(true);
  	}
  }
}
