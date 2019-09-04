import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the WalletProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WalletProvider {

   constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello WalletProvider Provider');
  }
  getWalletOverview(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/wallet/overview_detail/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	} 
  	getWalletIncomeList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/wallet/overview_detail/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}
}
