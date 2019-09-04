import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RunningPackagePage } from './running-package';

@NgModule({
  declarations: [
    RunningPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(RunningPackagePage),
  ],
})
export class RunningPackagePageModule {}
