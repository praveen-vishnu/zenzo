import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { KeyProvider } from '../../../providers/key/key';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the RequestKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage() 
@Component({
  selector: 'page-request-key',
  templateUrl: 'request-key.html',
})
export class RequestKeyPage {

  selectedPackage:any;
  bankOptions:any = [];
  bankOptionsBackup:any = [];
  countryOptions:any = [];
  packageOptions:any = [];
  package_id:any = [];
  number_of_keys:any = [];
  admin_bank_id:any;
  transfer_ref_number:any;
  transfer_ref_attachment:any;
  noOfKeys : number = 1;
  selectedPackagesList:any = [];
  requestKeyList:any = [];
  step1 = true;
  step2 = false;
  step3 = false;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    private storage: Storage,
    private key:KeyProvider,
    private toastCtrl: ToastController) {
    this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	})
  }

  getdata(token){  

  	this.key.getPackageList().subscribe((res:any) => {
      this.packageOptions= res.message;
      for (var i = 0; i<this.packageOptions.length;  i++){
        this.packageOptions[i].package_amount = parseFloat(this.packageOptions[i].package_amount)
        this.packageOptions[i].package_name = this.packageOptions[i].package_name.split(' ').map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).join(' ');
      }    
    });

    this.key.getBankList().subscribe((res1:any) => {
      this.bankOptions = res1.message;
      this.bankOptionsBackup = res1.message;
      this.bankOptions.forEach(item =>{
      var exists = this.countryOptions.filter(element => element.country_name == item.country_name)
       if(exists.length == 0){
       var addCountry = {
         country_name: item.country_name,
         id: item.country_id,
         }
         this.countryOptions.push(addCountry)
       }
       else{     
       }  
      })
    });

    this.key.getRequestedKeyList(token).subscribe((res:any) => {
      console.log(res);   
      this.requestKeyList = res.message;
    });


  }

   addToCart(item,number_of_keys){
    console.clear()
   var totalvalue = number_of_keys*item.package_amount;
   var exists = this.selectedPackagesList.filter(element => element.id == item.id)
   if(exists.length == 0){
   var addPackage = {
     id: item.id,
     package_name: item.package_name,
     validity_days: item.validity_days,
     number_of_keys: parseInt(number_of_keys),
     totalvalue : totalvalue
   }
   this.selectedPackagesList.push(addPackage)
   }

   else{
     var indexOf = this.selectedPackagesList.indexOf(exists[0]);
     this.selectedPackagesList[indexOf].number_of_keys +=  parseInt(number_of_keys);
     this.selectedPackagesList[indexOf].totalvalue +=  totalvalue;
   }
  }

  removeItem(item){
    var indexOf = this.selectedPackagesList.indexOf(item);     
    this.selectedPackagesList.splice(indexOf, 1);
  }


  selectBank(value){
    console.clear();
    console.log(value);
    this.bankOptions = this.bankOptionsBackup.filter(element => element.country_name == value);
    this.bankOptions.forEach(ele=>{
    this.admin_bank_id = ele.id;
    })
  }

  get subTotal(){
    var subtotal = 0;
    this.selectedPackagesList.forEach(ele =>{
      subtotal += ele.totalvalue;
    })
    return subtotal;
  }

  ionViewDidLoad() {
	   console.log('ionViewDidLoad RequestKeyPage');
  }

  getParseFloat(val){
    return parseFloat(val).toFixed(2);
  }

  selectImage(files: FileList) {
    this.transfer_ref_attachment = files.item(0);
}


submit(){
    this.selectedPackagesList.forEach(e =>{
    this.package_id.push(e.id);
    this.number_of_keys.push(e.number_of_keys)
    }) 
    var f = new FormData()
    f.append('token' , localStorage.getItem('token'))
    f.append('package_id' , this.package_id.toString())
    f.append('number_of_keys' , this.number_of_keys.toString())
    f.append('admin_bank_id' , this.admin_bank_id)
    f.append('transfer_ref_number' , this.transfer_ref_number)
    f.append('transfer_ref_attachment' , this.transfer_ref_attachment)
    this.key.requestKey(f).subscribe((res:any) => {
      console.clear();
      console.log(res);
      if (res.status){
      this.toast(res.message);
      this.step1 = true;
      this.step2 = false;
      this.step3 = false;
      this.noOfKeys = 1;
      this.storage.get('me').then((val:any)=>{
	  		this.getdata(val.token)
	  });
      }
      else{
      this.toast(res.message);
      }   
    });
    
  }


  toast(msg){
  	 let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
  }
}
