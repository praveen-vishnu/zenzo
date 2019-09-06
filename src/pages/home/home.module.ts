import { ComponentsModule } from './../../components/components.module';
// Angular
import { NgModule } from '@angular/core';

// Ionic
import { IonicPageModule } from 'ionic-angular';

// Pages
import { HomePage } from './home';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage),ComponentsModule],
    exports: [HomePage]
})
export class HomePageModule { }