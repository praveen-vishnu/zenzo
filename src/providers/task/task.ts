import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the TaskProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TaskProvider {

  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello TaskProvider Provider');
    console.log(localStorage.getItem('token'));
  }

    getAvailableList(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/tasks/task_details_available_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}
  	   getSubmittedList(token,status): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
    	 f.append('approval_status' , status)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/tasks/task_details_available_list/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}

	getTaskOveriew(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/tasks/overview_detail/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

	  }

}
