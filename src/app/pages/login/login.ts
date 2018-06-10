import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';
import {AuthService} from "../../services/auth.service";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController,
              public authService:AuthService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loginFacebook(){
    this.authService.loginWithFacebook().then((response)=>{
      console.log('Te has logueado con exito');
      localStorage.setItem('loginData', JSON.stringify(response));
      this.cancelar();
    })
  }

  cancelar(){
    this.viewCtrl.dismiss();
  }

}
