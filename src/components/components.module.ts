import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
	declarations: [HeaderComponent],
	imports: [IonicPageModule.forChild(HeaderComponent)],
	exports: [HeaderComponent]
})
export class ComponentsModule {}
