import { Component } from '@angular/core';
import {AlertController, NavController, ToastController} from 'ionic-angular';
import {LugarPage} from "../lugar/lugar";
import {LugaresService} from "../../services/lugares.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  lugares:any = [];
  sinLugares = false;

  constructor(public navCtrl: NavController,
              public lugaresService:LugaresService,
              public alertCtrl:AlertController,
              public toastCtrl:ToastController) {
     /* /!*this.lugares$ = this.afDB.list('/lugares/').valueChanges()*!/
     this.lugares$ = this.afDB.list('/lugares/').valueChanges();*/

     this.lugaresService.getLugares().valueChanges()
       .subscribe((lugares) => {
         this.lugares = lugares;
         if(lugares.length<1){
           this.sinLugares = true;
         }
         else{
           this.sinLugares = false;
         }
         console.log('sinLugares; ' + this.sinLugares);
         localStorage.setItem('lugares', JSON.stringify(lugares));
       }, (error) => {
         let toast = this.toastCtrl.create({
           message: 'Lo sentimos, ha ocurrido un error y no se ha podido obtener la lista de lugares, inténtalo más tarde',
           duration:3000,
           position:'bottom',
           cssClass:'red'
         })
         toast.present();
       })

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

  deleteLugar(lugar){

    const confirm = this.alertCtrl.create({
      title:'Deseas Borrarlo?',
      message:'Confirma que deseas borrar el lugar',
      buttons:[
        {
          text:'Cancelar',
          handler: () => {}
        },
        {
          text: 'Si, Borrar',
          handler: () => {
            this.lugaresService.deleteLugar(lugar).then(()=>{
              const alert = this.alertCtrl.create({
                title:'Lugar Borrrado',
                subTitle:'El lugar se eliminó correctamente',
                buttons: ['OK']
              });
              alert.present();
            }).catch((error)=> {
              let toast = this.toastCtrl.create({
                message: 'Lo sentimos, ha ocurrido un error y no se pudo elimninar el lugar, inténtalo más tarde',
                duration:3000,
                position:'bottom',
                cssClass:'red'
              })
              toast.present();
            })
          }
        }
      ]
    })

    confirm.present();


  }

}
