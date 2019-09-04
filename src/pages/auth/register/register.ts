import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn,FormArray, } from '@angular/forms';
import { IonicPage, NavController, NavParams, ToastController,MenuController } from 'ionic-angular';
import { AuthProvider } from '../../../providers/auth/auth';
import { COUNTRY_LIST } from '../../../services/constants.service';
import { Storage } from '@ionic/storage';
import {MyApp} from '../../../app/app.component'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info onimage
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage implements OnInit{
registerForm: FormGroup;
userExist = false;
userExist1 = false;
user_position: any;
country_code: any = '';
countrySelected: boolean = false;
countryList = COUNTRY_LIST;
cats = [{"id":"1","category_name":"Store","category_image":"http:\/\/alpademo.com\/zomo\/uploads\/Store.png","category_status":"1","date_only":"2019-06-06"},{"id":"2","category_name":"Reseller","category_image":"http:\/\/alpademo.com\/zomo\/uploads\/Promoter.png","category_status":"1","date_only":"2019-06-06"},{"id":"3","category_name":"Manufactures","category_image":"http:\/\/alpademo.com\/zomo\/uploads\/Manufactures.png","category_status":"1","date_only":"2019-06-06"},{"id":"4","category_name":"Franchise","category_image":"http:\/\/alpademo.com\/zomo\/uploads\/Franchise.png","category_status":"1","date_only":"2019-06-06"}];

  constructor(
    public navCtrl: NavController, 
    public myApp: MyApp,
    private storage: Storage,
    public menuCtrl: MenuController,
    private auth:AuthProvider,
    private toastCtrl: ToastController,
    public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('RegisterPage');
    this.menuCtrl.enable(false, 'authenticated');
  }
 ngOnInit() {
 	let EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
  this.registerForm = new FormGroup({
      full_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      mobile_number: new FormControl('', [Validators.required]),
      user_name: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      email_id: new FormControl('', [Validators.required ,Validators.pattern(EMAILPATTERN)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(30)]),
      country_id: new FormControl('', [Validators.required]),
      user_position: new FormControl('', [Validators.required]),
      referral_id: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      user_category_id: new FormArray([]),
     });

   // console.log(this.cats);
   this.cats.map((o, i) => {
     const control = new FormControl(i === 0); // if first item set to true, else false
     (this.registerForm.controls.user_category_id as FormArray).push(control);
   });
  }

  gotoLogin(){
      this.navCtrl.push('LoginPage');
  }
  selectTwo(cats,eve){
    console.clear()
    console.log(cats)
    console.log(eve)
  }

  onSubmit(){
    console.clear()
    // this.registerForm.value.user_position = this.user_position;
    // this.registerForm.value.country_id = this.country_code;
    const selectedOrderIds = this.registerForm.value.user_category_id
      .map((v, i) => v ? this.cats[i].id : null)
      .filter(v => v !== null);
    this.registerForm.value.user_category_id = selectedOrderIds.toString()
    this.auth.register(this.registerForm.value).subscribe((res:any)=>{
      console.log(res)
      if(res.status){
        this.storage.set('token', res.message.token);
        this.get_dashboard(res.message.token);
        this.registerForm.reset();
      }
      else{
         let toast = this.toastCtrl.create({
          message: res.message,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
    })
  }
  get_dashboard(token){
    console.clear()
    this.auth.getDash(token).subscribe((res:any)=>{
      this.myApp.authenticatedMenu = res.status;
      if(res.status){
        this.storage.set('me', res.message);
        console.log(res.message)
        this.navCtrl.setRoot('HomePage');
      }
    })
  }

  // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    get r() { return this.registerForm; }    
    


  checkuser(event) {
    this.auth.checkUser(event.target.value)
      .subscribe(
        (data: any) => {
          console.clear()
          console.log(data.status)
          console.log(data.message)
          if (data.status) {
            this.presentToast(data.message);
            this.userExist = true;
          }
          else {
            this.userExist = false;
          }
        },
        error => {
          this.presentToast(error);
        });
  }
  checkReferral(event) {
    this.auth.checkUser(event.target.value)
      .subscribe(
        (data: any) => {
          console.clear()
          console.log(data.status)
          console.log(data.message)
          if (data.status) {
            this.userExist1 = true;
          }
          else {
            this.userExist1 = false;
            // this.presentToast(data.message);
          }
        },
        error => {
          this.presentToast(error);
        });
  }      

  presentToast(msg){
    let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
  }
  selectCountry(event) {
    console.clear()
    console.log(event.value)
    // this.code = ''
    this.countrySelected = true;
    // this.renderer.removeClass(this.countryError.nativeElement, 'displayBlock');
    if(event.value.country_id){
    console.log(event.value.country_id)
    this.country_code = event.value.country_id;
    // this.code = event.value.country_code;
    console.log(this.country_code)
    }
    else{
      // this.code = ''
    }
  }

  selectPosition(event) {
    console.clear()
    console.log(event.value)
    this.user_position = event.value.value;
    console.log(this.user_position)
  }
}
