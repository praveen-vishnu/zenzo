import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the PackageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PackageProvider {

 constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
      console.log('Hello PackageProvider Provider');
  }

  getCompletedList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/packages/completed_packages/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getRunningList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/packages/running_packages/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

  getPackageDetail(token,code): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
    	 var f = new FormData()
	     f.append('token' ,token)
	     f.append('upgrade_package_code' , code)
	     let loader = this.loadingCtrl.create()
	     loader.present()
	     let result = this.http.post<any[]>(API_URL+'/packages/view_individual_package_detail/', f)
	     if (result) {
	         loader.dismiss()
	         return result
	     }

  	}

}
