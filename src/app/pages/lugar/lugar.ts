import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {LugaresService} from "../../services/lugares.service";
import {isEmptyObject} from "angularfire2/database-deprecated/utils";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

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

  private lugarForm: FormGroup

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private lugaresService:LugaresService,
              public alertCtrl:AlertController,
              private formBuilder:FormBuilder
              ) {
    this.lugar = navParams.get('lugar');
    console.log(this.lugar);

    if(isEmptyObject(this.lugar)){
      console.log('Vamos a guardar un nuevo lugar');
    }
    else{
      console.log('Vamos a guardar un lugar existente')
    }

    this.lugarForm = this.formBuilder.group({
      nombre:['', Validators.required],
      direccion:['', Validators.required],
      categoria:['', Validators.required],
      descripcion:['', Validators.required]
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LugarPage');
  }

  guardarLugar(){

    if(isEmptyObject(this.lugar)){
      console.log('Vamos a guardar un nuevo lugar');
    }

    if(!this.lugar.id){
      this.lugar.id = Date.now();
    }

    this.lugaresService.createLugar(this.lugar);
    const alert = this.alertCtrl.create({
      title: 'Lugar Guardado!',
      subTitle:'El lugar se guardó exitosamente',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

  eliminarLugar(){
    this.lugaresService.deleteLugar(this.lugar);
    const alert = this.alertCtrl.create({
      title: 'Lugar Eliminado!',
      subTitle:'Se eliminó el lugar',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }
/*
  uploadPicture(){
    const options: CameraOptions = {
      quality:100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData
    }, (error)=> {
      console.log('Hubo un error');
    })

  }*/



/*
  navigateBack(){
    this.navCtrl.pop();
  }

  navigateToTercera(){
    this.navCtrl.push(TerceraPage)
  }*/




}
