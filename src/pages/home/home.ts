import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {LugarPage} from "../lugar/lugar";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares:any = [
    {nombre:'lugar 1', direccion:'Direccion 1', categoria:'Categoria 1'},
    {nombre:'lugar 1', direccion:'Direccion 1', categoria:'Categoria 1'},
    {nombre:'lugar 1', direccion:'Direccion 1', categoria:'Categoria 1'},
    {nombre:'lugar 1', direccion:'Direccion 1', categoria:'Categoria 1'}
  ];

  constructor(public navCtrl: NavController) {

  }

  navegarALugar(name){
    this.navCtrl.push(LugarPage, {nombre:name});
  }

  irAVistaDeDetalle(){
    this.navCtrl.push(LugarPage, {lugar:{}});
  }

  irAVistaDeDetalleExistente(lugar){
    this.navCtrl.push(LugarPage, {lugar:lugar});
  }

}
