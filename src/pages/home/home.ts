// Angular
import { Component } from '@angular/core';

// Ionic
import { NavController, IonicPage,MenuController } from "ionic-angular";

// Side Menu Component
import { SideMenuDisplayText } from '../../shared/side-menu-content/custom-decorators/side-menu-display-text.decorator';

@IonicPage()
@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
@SideMenuDisplayText('Home')
export class HomePage {
	constructor(private navCtrl: NavController,
    public menuCtrl: MenuController,) { 
    this.menuCtrl.enable(true, 'authenticated');
}

	public goToOption(): void {
		this.navCtrl.setRoot('OptionOnePage');
	}

	public goToSubOption(): void {
		this.navCtrl.setRoot('SubOptionTwoPage');
	}
	profile(){
		this.navCtrl.setRoot('ProfilePage');
	}
}
