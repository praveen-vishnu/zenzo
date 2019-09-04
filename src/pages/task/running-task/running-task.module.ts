import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunningTaskPage } from './running-task';

@NgModule({
  declarations: [
    RunningTaskPage,
  ],
  imports: [
    IonicPageModule.forChild(RunningTaskPage),
  ],
})
export class RunningTaskPageModule {}
