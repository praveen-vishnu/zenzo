import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ActivateKeyPage } from './activate-key';

@NgModule({
  declarations: [
    ActivateKeyPage,
  ],
  imports: [
    IonicPageModule.forChild(ActivateKeyPage),
  ],
})
export class ActivateKeyPageModule {}
