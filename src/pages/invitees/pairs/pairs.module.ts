import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PairsPage } from './pairs';
import { TitleCasePipe } from '@angular/common';

@NgModule({
  declarations: [
    PairsPage,
  ],
  imports: [
    IonicPageModule.forChild(PairsPage),
  ],
  providers:[TitleCasePipe]
})
export class PairsPageModule {}
