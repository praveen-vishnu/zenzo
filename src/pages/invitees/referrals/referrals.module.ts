import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReferralsPage } from './referrals';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    ReferralsPage,
  ],
  imports: [
    IonicPageModule.forChild(ReferralsPage),NgxPaginationModule
  ],
  providers:[TitleCasePipe]
})
export class ReferralsPageModule {}
