import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WalletProvider } from '../../../providers/wallet/wallet';
import { ProfitReportProvider } from '../../../providers/profit-report/profit-report';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TaskEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-task-earnings',
  templateUrl: 'task-earnings.html',
})
export class TaskEarningsPage {
  task_reports:any;
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
	private walletProvider:WalletProvider,
	private profitReportProvider:ProfitReportProvider) {
	this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad TaskEarningsPage');
  }
  getdata(token){  
	
	  
	// referral earning API
	    this.profitReportProvider.getTasksEarningReport(token).subscribe(
	      (data:any) => {
	        console.log(data)
	        if(data.status){
	          this.task_reports = data.message
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
