import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {TerceraPage} from "../tercera/tercera";
import {HomePage} from "../home/home";

/**
 * Generated class for the LugarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lugar',
  templateUrl: 'lugar.html',
})
export class LugarPage {

  lugar:any = null;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.lugar = navParams.get('lugar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }
/*
  navigateBack(){
    this.navCtrl.pop();
  }

  navigateToTercera(){
    this.navCtrl.push(TerceraPage)
  }*/




}
