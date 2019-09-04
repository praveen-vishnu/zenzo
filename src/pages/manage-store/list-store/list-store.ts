import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides,  ToastController } from 'ionic-angular';
import { StoreProvider } from '../../../providers/store/store';
import { Storage } from '@ionic/storage';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { COUNTRY_LIST } from '../../../services/constants.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';

/**
 * Generated class for the ListStorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-store',
  templateUrl: 'list-store.html',
})
export class ListStorePage {
  @ViewChild(Slides) slides: Slides;  	
  segment = '0';
  token:any;
  category:any;
  services:any;
  countries = COUNTRY_LIST;
  file: File;
  private store : FormGroup;

  constructor(
  	public navCtrl: NavController, 
  	public toastCtrl: ToastController, 
    private storage: Storage,
  	public navParams: NavParams,
  	private storeProvider:StoreProvider,
  	private formBuilder: FormBuilder) {
  	this.store= this.formBuilder.group({
	store_name: ['',[Validators.required]],
	store_tag_line: [''],
	store_category_id: [''],
	store_image:[''],
	store_services_ids: [''],
	store_description: [''],
	payment_receive_ids: [''],
	google_map_link: [''],
	store_address: [''],
	state_name: [''],
	city_name: ['',[Validators.required]],
	pincode: [''],
	country_id: [''],
	landline_number: [''],
	contact_number_one: [''],
	contact_number_two: [''],
	contact_email_id: [''],
	website_link: [''],
	facebook: [''],
	twitter: [''],
	linkedin: [''],
	telegram: [''],
	instagram: [''],
	other: [''],
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
    console.log('ionViewDidLoad ListStorePage');
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
  		this.storeProvider.createStore(this.token,this.store.value).subscribe((res:any)=>{
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
