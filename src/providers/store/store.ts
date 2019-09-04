import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the StoreProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StoreProvider {
	selectedCaategories:any = [];
   constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello StoreProvider Provider');
  } 


  createStore(user,token): Observable<any[]> {
	       var form_data = new FormData();
	       for (var key in user) {
	         form_data.append(key, user[key]);
	       }
	       form_data.append('token' ,token);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/retail_store/add_new_store/', form_data)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  }

  editStore(user,token): Observable<any[]> {
	       var form_data = new FormData();
	       for (var key in user) {
	         form_data.append(key, user[key]);
	       }
	       form_data.append('token' ,token);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/retail_store/update_store/', form_data)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  }

  UploadOtherImage(token,files,srore_id): Observable<any[]> {
	       var form_data = new FormData();
	       form_data.append('token' ,token);
	       form_data.append('other_image' ,files);
	       form_data.append('store_id' ,srore_id);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/retail_store/add_other_image/', form_data)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}
  getCategoryList(): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      // loader.present()
	      let result = this.http.get<any[]>(API_URL+'/retail_store/store_business_category/')
	      if (result) {
	          // loader.dismiss()
	          return result
	      }
  	}

  	storeEnableDisable(token,status): Observable<any[]> {
		  var me = new FormData()
		  me.append('token' , token)
		  me.append('visible_status',status);
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/retail_store/enable_disable_store/', me)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  getServicesList(id): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/retail_store/store_business_services?category_id='+id)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  getStoreDetail(token): Observable<any[]> {
	  	console.log(localStorage.getItem('token'));
	     var f = new FormData()
	     f.append('token' ,token)
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/retail_store/store_detail/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}


  removeStoreImage(token,other_image_id): Observable<any[]> {
	     var f = new FormData()
	     f.append('token' ,token)
      	 f.append("other_image_id", other_image_id );
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.post<any[]>(API_URL+'/retail_store/other_image_remove/', f)
	      if (result) {
	          loader.dismiss()
	          return result
	      }

  	}


  getStoreList(): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/retail_store/store_list/')
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  searchStore(keyword): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/retail_store/store_list/?search='+keyword)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  getLocation(): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/retail_store/ip_location')
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}

  	getStoreByName(keyword): Observable<any[]> {
	      let loader = this.loadingCtrl.create()
	      loader.present()
	      let result = this.http.get<any[]>(API_URL+'/retail_store/user_view_store_detail/'+keyword)
	      if (result) {
	          loader.dismiss()
	          return result
	      }
  	}
}
