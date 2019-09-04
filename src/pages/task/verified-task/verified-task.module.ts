import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VerifiedTaskPage } from './verified-task';

@NgModule({
  declarations: [
    VerifiedTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(VerifiedTaskPage),
  ],
})
export class VerifiedTaskPageModule {}
