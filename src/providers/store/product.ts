import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { LoadingController } from "ionic-angular";
import { API_URL } from "../../services/constants.service";

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {
  selectedCaategories: any = [];
  constructor(public http: HttpClient, private loadingCtrl: LoadingController) {
    console.log("Hello ProductProvider Provider");
  }

  getProductList(token): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(API_URL + "/products/products_list/", f);
    if (result) {
      loader.dismiss();
      return result;
    }
  }

  getProduct(token, pr_row_id): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    f.append("pr_row_id", pr_row_id);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(API_URL + "/products/individual_product_view/", f);
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  
  getUserOrder(token, order_id): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    f.append("order_id", order_id);
    let loader = this.loadingCtrl.create();
    // loader.present();
    let result = this.http.post<any[]>(API_URL + "/orders/user_individual_order/", f);
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  
  cancelUserOrder(token, order_id): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    f.append("order_id", order_id);
    let loader = this.loadingCtrl.create();
    // loader.present();
    let result = this.http.post<any[]>(API_URL + "/orders/user_cancel_order/", f);
    if (result) {
      loader.dismiss();
      return result;
    }
  }

  getUserProductList(): Observable<any[]> {
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.get<any[]>(
      API_URL + "/products/users_view_product_list"
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  getUserOrderList(token): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(API_URL + "/orders/user_orders_list/", f);
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  
  getOrder(token, order_id): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    f.append("order_id", order_id);
    let loader = this.loadingCtrl.create();
    // loader.present();
    let result = this.http.post<any[]>(
      API_URL +
        "/orders/product_owner_individual_order" , f
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  getOrderList(token,order_status): Observable<any[]> {
    var f = new FormData();
    f.append("token", token);
    f.append("order_status", order_status);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(API_URL + "/orders/product_owner_orders_list", f);
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  getUserProduct(id): Observable<any[]> {
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.get<any[]>(
      API_URL +
        "/products/users_view_individual_product_detail/?pr_row_id=" +
        id
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  

  create(token,user): Observable<any[]> {
    var form_data = new FormData();
    for (var key in user) {
      form_data.append(key, user[key]);
    }
    form_data.append("token", token);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "/products/save_n_add_product_basics/",
      form_data
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }

  edit(user, token): Observable<any[]> {
    var form_data = new FormData();
    for (var key in user) {
      form_data.append(key, user[key]);
    }
    form_data.append("token", token);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "/products/edit_product_basic_detail/",
      form_data
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }

  setMainImage(token, img_id, id): Observable<any[]> {
    var form_data = new FormData();
    form_data.append("token", token);
    form_data.append("pr_row_image_id", img_id);
    form_data.append("pr_row_id", id);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "/products/set_image_as_product_main_image/",
      form_data
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }

  productEnableDisable(token, status, id): Observable<any[]> {
    var me = new FormData();
    me.append("token", token);
    me.append("visible_status", status);
    me.append("pr_row_id", id);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "/products/enable_disable_product/",
      me
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }

  removeImage(token, img_id, id): Observable<any[]> {
    var form_data = new FormData();
    form_data.append("token", token);
    form_data.append("pr_row_image_id", img_id);
    form_data.append("pr_row_id", id);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "/products/delete_product_image/",
      form_data
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  addImage(token, img, id): Observable<any[]> {
    var form_data = new FormData();
    form_data.append("token", token);
    form_data.append("pr_image", img);
    form_data.append("pr_row_id", id);
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "/products/add_product_image/",
      form_data
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  getMainCategory(): Observable<any[]> {
    let loader = this.loadingCtrl.create();
    // loader.present();
    let result = this.http.get<any[]>(
      API_URL + "/products/products_main_category/"
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  getCategory(main_category_id): Observable<any[]> {
    let loader = this.loadingCtrl.create();
    // loader.present();
    let result = this.http.get<any[]>(
      API_URL + "/products/products_category?main_category_id="+main_category_id+"/"
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  getSubCategory(main_category_id,category_id): Observable<any[]> {
    let loader = this.loadingCtrl.create();
    // loader.present();
    let result = this.http.get<any[]>(
      API_URL + "/products/products_sub_category?main_category_id="+main_category_id+"&category_id="+category_id+"/"
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }
  
  save_offline_cart(data): Observable<any[]> {
    let loader = this.loadingCtrl.create();
    loader.present();
    let result = this.http.post<any[]>(
      API_URL + "products_checkout/save_offline_cart",
      data
    );
    if (result) {
      loader.dismiss();
      return result;
    }
  }

}
