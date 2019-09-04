import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,AlertController } from 'ionic-angular';
import { InviteesProvider } from '../../../providers/invitees/invitees';
import { Storage } from '@ionic/storage';
import { TitleCasePipe } from '@angular/common';

/**
 * Generated class for the ReferralsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-referrals',
  templateUrl: 'referrals.html',
})
export class ReferralsPage {
  referrallist:any = [];
  referrallistall:any = [];
  overviewreferral:any = [];
  dashboardme:any;
  overview;
  p1: number = 1; 
  copytextlabel1 = 'Copy'
  copytextlabel2 = 'Copy'

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
  	 this.referral.getReferralList(token).subscribe((res:any) => {
    console.log(localStorage.getItem('token'));
    if(res.status){
    this.referrallist = res.message;
    console.log(this.referrallist);
    this.referrallistall = res.message;
    }
  });


  this.referral.getReferralOveriew(token).subscribe((res:any) => {
    console.log(localStorage.getItem('token'));
    if(res.status){
    this.overview = res.message;    
    this.overviewreferral = res.message.recent_five_referrals;
    console.log(this.overview);
    console.log(this.overviewreferral);
    }
  });
  }
  referralfilter(val) {
    
    this.referrallist = this.referrallistall;
    if(val== "Left"){
      this.referrallist = this.referrallist.filter(ele => ele.user_position == "L");
    }
    
    else if(val== "Right") {
      this.referrallist = this.referrallist.filter(ele => ele.user_position == "R");
    }
     
    else {
      this.referrallist = this.referrallistall;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralsPage');
  }

 /* To copy any Text */
copyText(val: string){
  let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copytextlabel2 = 'Copied'
  }
  
  
 /* To copy any Text */
copyText1(val: string){
  let selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
    this.copytextlabel1 = 'Copied'
  }

  userDetail(i) {
    var data ;
    if(this.overviewreferral[i].key_activated_status=='0'){
      data = `
      <p style="tex-align: left;"><span style="font-weight: bold;">Name:</span>` + this.titlecasePipe.transform(this.overviewreferral[i].full_name) + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Username:</span>` + this.overviewreferral[i].user_name + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Position:</span>` + this.overviewreferral[i].user_position + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Key Status:</span> <span>Not Active</span></p>
      `;
    }
    else{
      data = `
      <p style="tex-align: left;"><span style="font-weight: bold;">Name:</span>` + this.titlecasePipe.transform(this.overviewreferral[i].full_name) + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Username:</span>` + this.overviewreferral[i].user_name + `</p>
      <p style="tex-align: left;"><span style="font-weight: bold;">Position:</span>` + this.overviewreferral[i].user_position + `</p>
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
