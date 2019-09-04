import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaskEarningsPage } from './task-earnings';

@NgModule({
  declarations: [
    TaskEarningsPage,
  ],
  imports: [
    IonicPageModule.forChild(TaskEarningsPage),
  ],
})
export class TaskEarningsPageModule {}
