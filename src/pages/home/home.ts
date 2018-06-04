import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LugarPage} from "../lugar/lugar";
import {LugaresService} from "../../services/lugares.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares:any = [];

  constructor(public navCtrl: NavController, private lugaresService:LugaresService) {
      this.lugares = this.lugaresService.getLugares().valueChanges()
  }

  navegarALugar(name){
    this.navCtrl.push(LugarPage, {nombre:name});
  }

  irAVistaDeDetalle(lugar){
    this.navCtrl.push(LugarPage, {lugar:{}});
  }

  irAVistaDeDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar:lugar});
  }

}
