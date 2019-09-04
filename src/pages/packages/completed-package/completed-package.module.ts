import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompletedPackagePage } from './completed-package';

@NgModule({
  declarations: [
    CompletedPackagePage,
  ],
  imports: [
    IonicPageModule.forChild(CompletedPackagePage),
  ],
})
export class CompletedPackagePageModule {}
