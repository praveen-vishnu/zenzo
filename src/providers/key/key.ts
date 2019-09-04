import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the KeyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class KeyProvider {

   constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello KeyProvider Provider');
  }

  getActivatedKeyList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/activated_key_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getTransferedKeyList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/transferred_reports_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getRequestedKeyList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/requested_key_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getAvailablePackagesList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/available_packages_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getPackageList(): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/keys/packages_list/')
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  getBankList(): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/keys/bank_detail_list/')
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  	updateKey(token,key): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
     	 f.append('activation_key', key)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/activation_key/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}
	transferKey(f): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/transfer_keys/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  	requestKey(f): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/request_key/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  	getUsedUnusedKeys(token,status): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
		 f.append('used_status' , status)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/keys/used_n_unused_keys_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}
}
