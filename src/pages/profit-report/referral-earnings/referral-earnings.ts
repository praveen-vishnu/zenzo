import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InviteesProvider } from '../../../providers/invitees/invitees';
import { WalletProvider } from '../../../providers/wallet/wallet';
import { ProfitReportProvider } from '../../../providers/profit-report/profit-report';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ReferralEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referral-earnings',
  templateUrl: 'referral-earnings.html',
})
export class ReferralEarningsPage {
  earning_reports: any;
  total_earnings:number = 0;
  overview:any;
  wallet_income_overview:any = {
    "wallet_balance": 0,
    "total_direct_referral_income": 0,
    "total_pairs_earned_income": 0,
    "total_task_earned_income": 0,
    "today_direct_referral_income": 0
  };
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
    private inviteesProvider:InviteesProvider,
	private walletProvider:WalletProvider,
	private profitReportProvider:ProfitReportProvider) {
	this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralEarningsPage');
  }

  getdata(token){  
	/******* Overview *******/
	  this.inviteesProvider.getReferralOveriew(token).subscribe((res:any) => {
	    console.log(res);
	    this.overview = res.message;
	    console.log(this.overview);
	  });
	  
	// referral earning API
	    this.profitReportProvider.getDirectReferral(token).subscribe(
	      (data:any) => {
	        console.log(data)
	        if(data.status){
	          this.earning_reports = data.message
	          this.earning_reports.forEach(ele => {
	            this.total_earnings += parseFloat(ele.commission_amount);
	          })
	        }
	      }
	    )
	    
	    this.walletProvider.getWalletOverview(token).subscribe(
	      (data:any) => {
	          console.clear()
	          console.log(data)
	       if(data.status){
	          this.wallet_income_overview = data.message
	        }
	      }
	    )
  }

  getparseFloat(val){
    return parseFloat(val).toFixed(2)
  }
  
  getArray(array){
    return Array.isArray(array);
  }
}
