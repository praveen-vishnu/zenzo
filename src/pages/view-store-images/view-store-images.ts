import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { Storage } from '@ionic/storage';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { COUNTRY_LIST } from '../../services/constants.service';

/**
 * Generated class for the ViewStoreImagesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-store-images',
  templateUrl: 'view-store-images.html',
})
export class ViewStoreImagesPage {

  storeDetail: any;
  category:any;
  dashboardme:any;
  otherImages:any;
  countries = COUNTRY_LIST;
  tabswitch = 'About';
  token:any;
  constructor(
  	public navCtrl: NavController,
  	public toastCtrl: ToastController, 
    private storage: Storage,
  	public navParams: NavParams,
  	private storeProvider:StoreProvider) {
  	  this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  

  	this.token = token;
	this.storeProvider.getStoreDetail(token).subscribe(
	 (resp:any) => {
        console.log(resp);
        if(resp.status){
          this.storeDetail = resp.message
        }
      }
    )

    this.storeProvider.getCategoryList().subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.category = data.message
        }
      }
    )

  }

   
 
  phoneMask(phoneValue: number | string, country: string): any {
    var country_id = this.getCountry(country)

    try {
      const phoneNumber = parsePhoneNumberFromString(country_id+phoneValue);
      return phoneNumber.formatNational();
    } catch (error) {
      return phoneValue;
    }
}

 getphoneuri(phoneValue: number | string, country: string): any {
    var country_id = this.getCountry(country)
    console.log(country_id)
    try {
      const phoneNumber = parsePhoneNumberFromString(country_id+phoneValue);
      return phoneNumber.getURI();
    } catch (error) {
      return phoneValue;
    }
  }
  
  goToEdit(){
    this.navCtrl.push('EditStorePage',{store:this.storeDetail});
  }

 reviewRatings(val){
    var rating = [];
          for( var i = 0 ; i< parseInt(val); i++){
          rating.push('star')
        }
      return rating;
  }
  
  getCountry(id){
  	if(id){
  	  return this.countries.filter(country => country.country_id == id)[0].country_code;
    }
  }
  
  
  getCatName(val){
    if(val){
    	return  this.category.filter(cat => cat.id == val)[0].category_name;
    }
  }
  
  getPaymentMethod(str){
  	if(str){  		
      var res = str.split(",");
	   var payment = [];
      if(this.findInArray(res, '1') >= 0){
        payment.push('Cash');
      }
      if(this.findInArray(res, '2') >= 0){
        payment.push('Credit Card');
      }
      
      if(this.findInArray(res, '3') >= 0){
        payment.push('Debit Card');
      }
      var method = payment.toString()
      var regex = /,/gi;
      return method.replace(regex , '/')
  	}
    }
     
  findInArray(ar, val) {
      for (var i = 0,len = ar.length; i < len; i++) {
          if ( ar[i] === val ) { // strict equality test
              return i;
          }
      }
      return -1;
  }


  addMoreImages(){
    document.getElementById('add_other_images').click();  
  }

  getOtherImage(files: FileList) {
    var form_data = new FormData(); 
    this.storeProvider.UploadOtherImage(this.token,files.item(0),this.storeDetail.id).subscribe((res4:any) => {
      if (res4.status){
      this.presentToast(res4.message);
      this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
      }
      else{
      this.presentToast(res4.message);
      }
    })
  }
  enable_disable(val){
      var form_data = new FormData();    
      console.clear();
      form_data.append('visible_status',val);
      form_data.append("token", localStorage.getItem('token') );
      this.storeProvider.storeEnableDisable(this.token,val).subscribe((res4:any) => {
        if (res4.status){
        this.presentToast(res4.message);
        this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
        }
        else{
        this.presentToast(res4.message);
        }
    })
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewStorePage');
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

  deleteImage(other_image_id){
  	this.storeProvider.removeStoreImage(this.token,other_image_id).subscribe((res4:any) => {
      if (res4.status){
      this.presentToast(res4.message);
      this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
      }
      else{
      this.presentToast(res4.message);
      }
    })
  }

}
