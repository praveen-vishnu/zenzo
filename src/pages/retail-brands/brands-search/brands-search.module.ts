import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BrandsSearchPage } from './brands-search';

@NgModule({
  declarations: [
    BrandsSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(BrandsSearchPage),
  ],
})
export class BrandsSearchPageModule {}
