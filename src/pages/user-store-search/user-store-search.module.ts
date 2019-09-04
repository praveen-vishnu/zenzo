import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserStoreSearchPage } from './user-store-search';

@NgModule({
  declarations: [
    UserStoreSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(UserStoreSearchPage),
  ],
})
export class UserStoreSearchPageModule {}
