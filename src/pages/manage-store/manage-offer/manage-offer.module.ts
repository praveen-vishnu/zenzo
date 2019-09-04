import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageOfferPage } from './manage-offer';
import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    ManageOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageOfferPage),NgxPaginationModule,
  ],
})
export class ManageOfferPageModule {}
