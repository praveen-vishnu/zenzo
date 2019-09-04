import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfitReportProvider } from '../../../providers/profit-report/profit-report';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ParsEarningsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pars-earnings',
  templateUrl: 'pars-earnings.html',
})
export class ParsEarningsPage {

  pair_reports: any;
  live_reports = {
    left_business: 0,
	pair_match_business: 0,
	right_business: 0,
	user_commission_amount: 0
};
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
	private profitReportProvider:ProfitReportProvider) {
  this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  	})
  }

  getdata(token){  

	// referral earning API
	this.profitReportProvider.getPairsEarningReport(token).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.pair_reports = data.message
        }
      }
    )

    this.profitReportProvider.getPairsEarningLiveReport(token).subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.live_reports = data.message
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParsEarningsPage');
  }

}
