import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from './pages/home/home';
import {LugarPage} from "./pages/lugar/lugar";
import {PerfilPage} from "./pages/perfil/perfil";
import {TabsPage} from "./pages/tabs/tabs";
import {TerceraPage} from "./pages/tercera/tercera";
import {AngularFireModule} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule, AngularFireDatabase} from "angularfire2/database";
import {LugaresService} from "./services/lugares.service";
import {LoginPage} from "./pages/login/login";
import {AuthService} from "./services/auth.service";

export const firebaseConfig = {
  apiKey: "AIzaSyDYyfVxWxddSQrkH0AbpqNgujW7PkqouUE",
  authDomain: "ionicbasicplatzi-28126.firebaseapp.com",
  databaseURL: "https://ionicbasicplatzi-28126.firebaseio.com",
  projectId: "ionicbasicplatzi-28126",
  storageBucket: "ionicbasicplatzi-28126.appspot.com",
  messagingSenderId: "679215339785"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    LoginPage,
    TerceraPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LugarPage,
    PerfilPage,
    TabsPage,
    TerceraPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    LugaresService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
