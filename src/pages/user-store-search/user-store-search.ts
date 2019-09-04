import {  Component, Renderer, ElementRef,ViewChild, HostListener } from '@angular/core';
import {   IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import { StoreProvider } from '../../providers/store/store';
import { Storage } from '@ionic/storage';
import { parsePhoneNumberFromString } from 'libphonenumber-js'
import { COUNTRY_LIST } from '../../../services/constants.service';

/**
 * Generated class for the UserStoreSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-store-search	',
  templateUrl: 'user-store-search.html',
})

export class UserStoreSearchPage {
  @ViewChild('filterpart') filter: ElementRef; 
  @ViewChild('filterButton') filterBtn: ElementRef; 
  

  @HostListener('document:click', ['$event'])
  andClickEvent(event) { 
    if (!this.filter['_elementRef'].nativeElement.contains(event.target) && !this.filterBtn['_elementRef'].nativeElement.contains(event.target)) {
      if (!this.navCtrl.isTransitioning() && this.navCtrl.getActive()) {
        this.close()
      }
    }
    
  }

  storelist;
  storelistbackup;
  category: any = [];
  searchstore: any;
  searchText: any;
  searchLocationText: any;  
  city = '';
  showFilter:boolean=true;
  public searchTerm: string = "";
  showSearch:any;
  constructor(
  	private renderer: Renderer, 
    private el: ElementRef,
    public navCtrl: NavController,
  	public toastCtrl: ToastController, 
    private storage: Storage,
  	public navParams: NavParams,
  	private storeProvider:StoreProvider) {

  	this.storeProvider.getCategoryList().subscribe(
	 (data:any) => {
        console.log(data);
        if(data.status){
          this.category = data.message
        }
      }
    )
  	
  	
  	this.storeProvider.getStoreList().subscribe(
	 (data1:any) => {
        console.log(data1);
        var tempCat= [];
        if(data1.status){
          this.storelist = data1.message;
          this.storelist.forEach(ele =>{
          var value = this.category.find(item => item.id == ele.store_category_id)
          if (tempCat.includes(value) === false) tempCat.push(value);
          console.log(value);
          });
         
          console.log(tempCat);
          this.category = tempCat;
          this.storelistbackup = data1.message;
        }
      }
    )
  	
  	
  // 	this.storeProvider.getLocation().subscribe(
	 // (resp1:any) => {
  //       console.log(resp1);
  //       this.storeProvider.searchStore(resp1.message.city).subscribe(
		//  (data1:any) => {
	 //        console.log(data1);
	 //        if(data1.status){
	 //          this.storelist = data1.message;
	 //          this.storelistbackup = data1.message;
	 //        }
	 //      }
	 //    )
  //     }
  //   )
  	
  }

  close() {
    console.log("Method implemented.")    
    this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter',true);
     this.showFilter = !this.showFilter;
  }

    filterStore(searchTerm) {
      this.storelist = this.storelistbackup;
    return this.storelist.filter(item => {
      return item.store_name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

  setFilteredItems(){
     this.storelist = this.filterStore(this.searchTerm); 
  }
  goToStore(name){
    this.navCtrl.push('SubOptionOnePage',{name:name})
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrandsSearchPage');
  }

  reviewRatings(val) {
    var rating = [];
    for (var i = 0; i < parseInt(val); i++) {
      rating.push('star')
    }
    return rating;
  }

presentPopover() {
 
  if(this.showFilter){
    this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter',false);
     this.showFilter = !this.showFilter;
  }
  else{
    this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter',true);
     this.showFilter = !this.showFilter;
  }
}
hideFilter(eve?){
  console.log(eve)
 this.showFilter = false; 
  this.renderer.setElementClass(this.filter['_elementRef'].nativeElement, 'hide-filter',true);
}

  filterCats(id, eve) {
    console.log(eve.target.checked)
    console.log(this.storelistbackup.filter(cat => cat.id == id))
    if (eve.target.checked) {
      this.storelist = this.storelistbackup.filter(cat => cat.id == id)
    } else {
      this.storelist = this.storelistbackup;
    }
  }

  change() {
    console.clear()
    var modelCbs = document.querySelectorAll(".categories_search_block input[type='checkbox']");
    var filters = {
      models: getClassOfCheckedCheckboxes(modelCbs)
    };

    filterResults(filters);
    console.log(modelCbs);

    function getClassOfCheckedCheckboxes(checkboxes) {
      var classes = [];
      if (checkboxes && checkboxes.length > 0) {
        for (var i = 0; i < checkboxes.length; i++) {
          var cb = checkboxes[i];

          if (cb.checked) {
            classes.push(cb.getAttribute("name"));
          }
        }
      }

      return classes;
    }

    function filterResults(filters) {
      var rElems = ( < HTMLScriptElement[] > < any > document.querySelectorAll(".result .storelistItems"));
      var hiddenElems = [];
      if (!rElems || rElems.length <= 0) {
        return;
      }

      for (var i = 0; i < rElems.length; i++) {
        var el = rElems[i];
        console.log(rElems[i])

        if (filters.models.length > 0) {
          var isHidden = true;

          for (var j = 0; j < filters.models.length; j++) {
            var filter = filters.models[j];

            if (el.classList.contains(filter)) {
              isHidden = false;
              break;
            }
          }

          if (isHidden) {
            hiddenElems.push(el);
          }
        }

      }

      for (var i = 0; i < rElems.length; i++) {
        rElems[i].style.display = "block";
      }

      if (hiddenElems.length <= 0) {
        return;
      }

      for (var i = 0; i < hiddenElems.length; i++) {
        hiddenElems[i].style.display = "none";
      }
    }
  }

  swipeRight(event: any): any {
    console.log('Swipe Right', event);
}
}

 
@Component({
  template: `
 <ion-list>
  <ion-list-header>Categories</ion-list-header>
  <ion-item  *ngFor="let item of category;let i = index" >
    <ion-label>{{item.category_name}}</ion-label>
    <ion-checkbox [(ngModel)]="item.checked" (ionChange)="close($event,i)"></ion-checkbox>
  </ion-item>
  </ion-list>
  `,

})
export class PopoverPage {
  category
  constructor(
  	) {
  }
  close(eve,i){

  }
  
}