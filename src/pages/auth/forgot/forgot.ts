import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController,MenuController } from 'ionic-angular';
import {FormArray, FormControl,  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../../providers/auth/auth';

/**
 * Generated class for the ForgotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html',
})
export class ForgotPage {
  registerForm: FormGroup;
  passForm: FormGroup;      
  setNewPass = false;
  forgot_unique_id:any;
  forgot_password_code:any;
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	private formBuilder: FormBuilder,
    private auth:AuthProvider,
    public menuCtrl: MenuController,
    private toastCtrl: ToastController,) {

     this.registerForm = this.formBuilder.group({
            login_id: ['', Validators.required],
            forgot_otp:[''],
            forgot_unique_id: [this.forgot_unique_id]
        });
        this.passForm = this.formBuilder.group({
            new_password: [''],
            confirm_new_password:[''],
            forgot_unique_id: [this.forgot_unique_id],
            forgot_password_code: [this.forgot_password_code]
        });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ForgotPage');
    this.menuCtrl.enable(false, 'authenticated');
  }
ngOnInit() {
    
        
  }


    onSubmit() {   

        if(this.forgot_unique_id){
          
                    this.registerForm.value.forgot_unique_id = this.forgot_unique_id;
                    console.log(this.registerForm.value)
           this.auth.verify(this.registerForm.value)
            .subscribe(
                (data:any) => {
                  console.log(data)
                  this.setNewPass = data[0].status;
                  if(data[0].status){
                    this.presentToast(data[0].message.success_message);
                    this.forgot_password_code = data[0].message.forgot_password_code;
                  }
                  else{
                     this.presentToast(data[0].message.success_message);
                  }
                },
                error => {
                    this.presentToast(error);
                });
        }
        else{
           this.auth.forgot(this.registerForm.value)
            .subscribe(
                (data:any) => {
                  console.log(data)
                  if(data.status){
                    this.presentToast(data.message.success_message);
                    this.forgot_unique_id = data.message.forgot_unique_id
                    this.registerForm.value.forgot_unique_id = data.message.forgot_unique_id;
                    console.log(this.registerForm.value)
                    // this.router.navigate(['/login']);
                  }
                  else{
                     this.presentToast(data.message);
                  }
                },
                error => {
                    this.presentToast(error);
                });
        }
       
    }
    
    onPassSubmit(){
        
      this.passForm.value.forgot_unique_id = this.forgot_unique_id;
      this.passForm.value.forgot_password_code = this.forgot_password_code;
      this.auth.set_new_password(this.passForm.value)
            .subscribe(
                (data:any) => {
                  console.log(data)
                  if(data.status){
                    this.presentToast(data.message);
                    this.gotoLogin();
                  }
                  else{
                     this.presentToast(data.message);
                  }
                },
                error => {
                    this.presentToast(error);
                });
    }
    

  gotoLogin(){
      this.navCtrl.push('LoginPage');
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
}
