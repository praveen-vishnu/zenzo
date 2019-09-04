import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseTaskPage } from './choose-task';

@NgModule({
  declarations: [
    ChooseTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseTaskPage),
  ],
})
export class ChooseTaskPageModule {}
