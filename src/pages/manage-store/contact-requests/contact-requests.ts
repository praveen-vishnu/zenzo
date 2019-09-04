import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StoreProvider } from '../../../providers/store/store';
import { Storage } from '@ionic/storage';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { COUNTRY_LIST } from '../../../services/constants.service';

/**
 * Generated class for the ContactRequestsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contact-requests',
  templateUrl: 'contact-requests.html',
})
export class ContactRequestsPage {

  storeDetail: any;
  countries = COUNTRY_LIST;

  constructor(
  	public navCtrl: NavController, 
    private storage: Storage,
  	public navParams: NavParams,
  	private storeProvider:StoreProvider) {
  	  this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  

	this.storeProvider.getStoreDetail(token).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.storeDetail = data.message
        }
      }
    )

  }

   phoneMask(phoneValue: number | string): any {
    var country_id = this.getCountry(this.storeDetail.country_id)
    try {
      const phoneNumber = parsePhoneNumberFromString(country_id+phoneValue);
      return phoneNumber.formatInternational();
    } catch (error) {
      return phoneValue;
    }
}

  getCountry(id){
   return this.countries.filter(country => country.country_id == id)[0].country_code;
  }
  
  getArray(array){
    return Array.isArray(array);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactRequestsPage');
  }


}
