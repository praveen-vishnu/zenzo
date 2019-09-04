import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the ProfitReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProfitReportProvider {

   constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
   console.log('Hello ProfitReportProvider Provider');
  }

  getDirectReferral(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/earning_report/direct_referral/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  	getPairsEarningReport(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/earning_report/pairs_earning_report/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  	getPairsEarningLiveReport(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/earning_report/pairs_earning_live_report/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}
	getTasksEarningReport(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/earning_report/pairs_earning_report/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

}
