import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { InviteesProvider } from '../../../providers/invitees/invitees';
import { Storage } from '@ionic/storage';
import { TitleCasePipe } from '@angular/common';


/**
 * Generated class for the PairsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pairs',
  templateUrl: 'pairs.html',
})
export class PairsPage {
  genealogy:any;//   [{
//    "main_user":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    },
//    "level_1_right":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    },
//    "level_1_1_right":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    },
//    "level_1_2_left":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    },
//    "level_2_left":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    },
//    "level_2_1_right":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    },
//    "level_2_2_left":{
//       "user_name":"",
//       "full_name":"",
//       "id":"",
//       "key_activated_status":"",
//       "total_left_position_invitee":"",
//       "total_right_position_invitee":"",
//       "user_account_status":"",
//       "total_pair_matching":"",
//       "left_business":0,
//       "right_business":0
//    }
// }];
  overview = {
	direct_referral_income: 0,
	recent_five_referrals:  [],
	today_count_left_direct_refferals: 0,
	today_count_right_direct_refferals: 0,
	today_left_business: 0,
	today_right_business: 0,
	todays_refferals: 0,
	total_count_left_direct_refferals: 0,
	total_count_right_direct_refferals: 0,
	total_left_position_users: 0,
	total_pair_match_business: 0,
	total_pair_matching: 0,
	total_refferals:0,
	total_right_position_users: 0 
  };
  pairsSearch = '';
  dashboardme:any;
  showTree = true;
  token:any
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
    private alertCtrl: AlertController,
    private referral:InviteesProvider,
    private titlecasePipe:TitleCasePipe
    ) {

  this.storage.get('me').then(val=>{
  		this.dashboardme = val;
  		this.getReferraldata(this.dashboardme.token)
  	}) 
  }
  
  getReferraldata(token){
  	this.token = token;
  	 this.referral.getGenealogyList(token).subscribe((res:any) => {
    console.log(localStorage.getItem('token'));
    if(res.status){
    this.genealogy = res.message;
    console.log(JSON.stringify(this.genealogy));
    }
  });


  this.referral.getReferralOveriew(token).subscribe((res:any) => {
    console.log(localStorage.getItem('token'));
    if(res.status){
    this.overview = res.message;    
    console.log(this.overview);
    }
  });
}
  getGenealogy(username){
    /******* Genealogy *******/
    var gene_name  = username;
    // console.clear();
    console.log(gene_name)
 	this.referral.getUserGenealogy(username,this.token).subscribe((res:any) => {
    console.log(localStorage.getItem('token'));
    if(res.status){
    this.showTree = res.status;
    this.genealogy = res.message;
    console.log(this.genealogy);
    }
  });
}

  ionViewDidLoagetReferraldatad() {
    console.log('ionViewDidLoad PairsPage');
  }


  userDetail(i) {
    var data ;
    if(this.genealogy[i].key_activated_status=='0'){
      data = `
      <p style="tex-align: left;"><span style="font-weight: bold;">Name:</span>` + this.titlecasePipe.transform(this.genealogy[i].full_name) + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Username:</span>` + this.genealogy[i].user_name + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Position:</span>` + this.genealogy[i].user_position + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Key Status:</span> <span>Not Active</span></p>
      `;
    }
    else{
      data = `
      <p style="tex-align: left;"><span style="font-weight: bold;">Name:</span>` + this.titlecasePipe.transform(this.genealogy[i].full_name) + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Username:</span>` + this.genealogy[i].user_name + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Position:</span>` + this.genealogy[i].user_position + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Key Status:</span> <span>Active</span></p>
      `;
    }
    let alert = this.alertCtrl.create({
      title: "User Details",
      message: <any>data,
      cssClass : "view-alert",
    });
    alert.present();
  }
}
