import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewStorePage } from './view-store';
import { TruncateModule } from '@yellowspot/ng-truncate';

@NgModule({
  declarations: [
    ViewStorePage,
  ],
  imports: [
    IonicPageModule.forChild(ViewStorePage),TruncateModule,
  ],
})
export class ViewStorePageModule {}
