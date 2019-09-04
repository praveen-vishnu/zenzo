import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';


/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  
  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log('Hello AuthProvider Provider');



  }

   login(user) : Observable<any> {
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
     let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post(API_URL + '/login' , form_data)
      if (result) {
          loader.dismiss()
          return result
      }
  }

  register(user) : Observable<any> {
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
     let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post(API_URL + '/signup/signup/' , form_data)
      if (result) {
          loader.dismiss()
          return result
      }
  }
   
   getDash(token) : Observable<any> {
     var form_data = new FormData();
     form_data.append('token',token);
     let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post(API_URL + '/dashboard/dash_fetch_user_detail' , form_data)
      if (result) {
          loader.dismiss()
          return result
      }
  }

    checkUser(name): Observable<any[]> {
    console.clear()
    console.log(name)
    var form_data = new FormData(); 
    form_data.append('user_name', name);
    return this.http.post<any[]>(API_URL + '/signup/valid_user_name', form_data);
  }
   forgot(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/forgot_password/', form_data);
  }
  verify(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/forgot_password/verify_otp/', form_data);
  }
  
  set_new_password(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/forgot_password/set_new_password/', form_data);
  }
   
   updateUser(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/profile/update_personal/', form_data);
  } 
   updatePassword(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/profile/update_password/', form_data);
  } 

   updateSocial(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/profile/social_media/', form_data);
  } 
   updatePayments(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/profile/imps_payment/', form_data);
  } 

   updateCrypto(user): Observable<any[]> {
      console.clear()
      console.log(user)
      var form_data = new FormData();
      for (var key in user) {
        form_data.append(key, user[key]);
      }
    return this.http.post<any[]>(API_URL + '/profile/payment_btc_address/', form_data);
  } 
  
  updateKYC(user): Observable<any[]> {
    console.clear()
    console.log(user)
    var form_data = new FormData();
    for (var key in user) {
      form_data.append(key, user[key]);
    }
  return this.http.post<any[]>(API_URL + '/profile/kyc_verification/', form_data);
} 

resendEmail(token): Observable<any[]> {
var form_data = new FormData();
form_data.append("token", token );
return this.http.post<any[]>(API_URL + '/profile/verify_user_email/', form_data);
} 

}
