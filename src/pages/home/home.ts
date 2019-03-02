import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  my_data: any = [];

  constructor(public navCtrl: NavController, public apiProvider: ApiProvider) {

  }

  ionViewWillEnter() {
    this.apiProvider.getPosts().then(data => {
      console.log(data);
      this.my_data = data;
      this.my_data.forEach((element: any) => {
        console.log(element);
      });


    }).catch(error => {
      console.log(error);
    });
  }


  goToDetailsPage(id: number, userId: number) {
    this.navCtrl.push(DetailsPage, { "id": id, "userId": userId });
  }

}
