import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { LoadingController } from 'ionic-angular';
import { API_URL } from '../../services/constants.service';

/*
  Generated class for the InviteesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class InviteesProvider {

  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
      console.log('Hello InviteesProvider Provider');
  }

  getReferralList(token): Observable<any[]> {
    console.log(localStorage.getItem('token'));
     var f = new FormData()
     f.append('token' ,token)
      let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post<any[]>(API_URL+'/referral/referral_list/', f)
      if (result) {
          loader.dismiss()
          return result
      }

  }

  getGenealogyList(token): Observable<any[]> {
    console.log(localStorage.getItem('token'));
     var f = new FormData()
     f.append('token' ,token)
      let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post<any[]>(API_URL+'/referral/pairs_genealogy/', f)
      if (result) {
          loader.dismiss()
          return result
      }

  }
getReferralOveriew(token): Observable<any[]> {
  	console.log(localStorage.getItem('token'));
     var f = new FormData()
     f.append('token' ,token)
      let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post<any[]>(API_URL+'/referral/referral_overview/', f)
      if (result) {
          loader.dismiss()
          return result
      }

  }

  getUserGenealogy(name,token): Observable<any[]> {
    console.log(localStorage.getItem('token'));
     var f = new FormData()
     f.append('token' ,token)
      let loader = this.loadingCtrl.create()
      loader.present()
      let result = this.http.post<any[]>(API_URL+'/referral/pairs_genealogy/'+name, f)
      if (result) {
          loader.dismiss()
          return result
      }

  }

}
