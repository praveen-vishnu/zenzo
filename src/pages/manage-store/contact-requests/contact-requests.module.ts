import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactRequestsPage } from './contact-requests';

@NgModule({
  declarations: [
    ContactRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactRequestsPage),
  ],
})
export class ContactRequestsPageModule {}
