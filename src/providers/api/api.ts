import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {

  baseUrl: string = "http://jsonplaceholder.typicode.com";

  constructor(public http: HttpClient, public loadCtrl: LoadingController) {
    console.log('Hello ApiProvider Provider');
  }


  async getPosts() {

    return await new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/posts')
        .subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
    });
  }

  async getPostsByID(id: number) {
    // this.loadCtrl.create({
    //   content: 'Please wait...',
    //   duration: 5000
    // }).present();
    return await new Promise((resolve, reject) => {
      this.http.get(this.baseUrl + '/posts/' + id)
        .subscribe(data => {
          resolve(data);

        }, error => {
          reject(error);
        });
    });
  }







}
