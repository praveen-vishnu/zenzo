import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateOfferPage } from './create-offer';

@NgModule({
  declarations: [
    CreateOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateOfferPage),
  ],
})
export class CreateOfferPageModule {}
