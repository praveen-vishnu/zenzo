import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the OfferProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OfferProvider {

   constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello OfferProvider Provider');
  }

  	createOfferr(user,token): Observable<any[]> {
	       var form_data = new FormData();
	       for (var key in user) {
	         form_data.append(key, user[key]);
	       }
	       form_data.append('token' ,token);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/offer/add_new_offer/', form_data)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  	editOffer(user,token): Observable<any[]> {
	       var form_data = new FormData();
	       for (var key in user) {
	         form_data.append(key, user[key]);
	       }
	       form_data.append('token' ,token);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/offer/edit_offer/', form_data)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getOfferList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/offer/offer_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  	offerEnableDisable(token,id,status): Observable<any[]> {
		  var me = new FormData()
		  me.append('token' , token)
		  me.append('offer_id',id);
		  me.append('visible_status',status);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/offer/enable_disable_offer/', me)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}
}
