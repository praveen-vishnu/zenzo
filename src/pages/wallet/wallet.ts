import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { WalletProvider } from '../../providers/wallet/wallet';
import { Storage } from '@ionic/storage';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { COUNTRY_LIST } from '../../../services/constants.service';
/**
 * Generated class for the WalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wallet',
  templateUrl: 'wallet.html',
})
export class WalletPage {
  wallet_income_list:any = [];
  token:any;
  user = JSON.parse(localStorage.getItem('currentUser'));
  wallet_income_overview:any = {
    "wallet_balance": 0,
    "total_direct_referral_income": 0,
    "total_pairs_earned_income": 0,
    "total_task_earned_income": 0,
    "today_direct_referral_income": 0
};
  constructor(
  public navCtrl: NavController,  
  private storage: Storage,
  public navParams: NavParams,
  private walletProvider:WalletProvider) {

    this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  

  	this.token = token;
	this.walletProvider.getWalletIncomeList(token).subscribe(
	 (resp:any) => {
        console.log(resp);
        if(resp.status){
          this.wallet_income_list = resp.message
        }
      }
    )

    this.walletProvider.getWalletOverview(token).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.wallet_income_overview = data.message
        }
      }
    )

  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad WalletPage');
  }

getArray(arr){
    return Array.isArray(arr);
  }
}
