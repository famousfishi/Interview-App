import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {
  id: number;
  userId: number;

  title: string = "";
  body: string = "";

  slideOpts = {
    effect: 'flip'
  };




  my_data_page$: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public apiProvider: ApiProvider) {
    this.id = this.navParams.get("id");
  }

  ionViewWillEnter() {
    this.id = this.navParams.get("id");


    this.apiProvider.getPostsByID(this.id).then(data => {
      console.log(data);
      this.my_data_page$ = data;
      this.title = data['title'];
      this.body = data['body'];


    }).catch(error => {
      console.log(error);
    });


  }







}
