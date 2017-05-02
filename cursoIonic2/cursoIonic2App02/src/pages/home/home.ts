
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ContactPage } from '../contact/contact';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  pushPage(): void {
    this.navCtrl.push(ContactPage,{
      type:'push', 
      year: 2017,
      message: ()=>{
        console.info('Hello world Ionic 2 pushPage');
      }
    });
  }

  setRoot():void {
    this.navCtrl.setRoot(ContactPage, {
      type: 'setRoot',
      message: ()=> {
        console.info('Hello world Ionic 2 setRoot');
      } 
    });
  }
}
