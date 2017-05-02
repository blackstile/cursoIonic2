import { HomePage } from '../home/home';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav,  NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
})
export class ContactPage {

  isPushedType:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {     
    this.isPushedType = this.navParams.get('type') !== 'setRoot'
  }

  pushPage(): void {
    this.navCtrl.push(ContactPage)
  }

  popPage(): void {
    this.navCtrl.pop();
  }
  
  goToHome():void{
    this.navCtrl.setRoot(HomePage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Contact');
    if (this.navParams.get('type')){
      console.log(this.navParams.data['type']);
      this.navParams.data['message']();
      this.navParams.data.message();
      if (this.navParams.get('type') ==='push'){
        console.log(this.navParams.get('year'));
      }      
    }

  }      

}
