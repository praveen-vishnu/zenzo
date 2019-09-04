import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RejectedTaskPage } from './rejected-task';

@NgModule({
  declarations: [
    RejectedTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(RejectedTaskPage),
  ],
})
export class RejectedTaskPageModule {}
