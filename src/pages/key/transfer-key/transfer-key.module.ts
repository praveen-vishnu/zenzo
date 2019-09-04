import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TransferKeyPage } from './transfer-key';

@NgModule({
  declarations: [
    TransferKeyPage,
  ],
  imports: [
    IonicPageModule.forChild(TransferKeyPage),
  ],
})
export class TransferKeyPageModule {}
