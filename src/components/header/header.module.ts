// Angular
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

// Pages
import { HeaderComponent } from './header';

@NgModule({
    declarations: [HeaderComponent],
    imports: [IonicPageModule.forChild(HeaderComponent)],
    exports: [HeaderComponent]
})
export class HomePageModule { }