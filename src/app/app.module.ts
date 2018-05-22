import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
//import { Firebase } from '@ionic-native/firebase';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//import { AngularFireModule } from 'angularfire2';
//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireAuthModule } from 'angularfire2/auth';
import { ProductoService } from '../services/producto.service';
import { DetallePage } from '../pages/detalle/detalle';
import { CarritoPage } from '../pages/carrito/carrito';

// export const firebaseConfig = {
//     apiKey: "AIzaSyCl-4wgeNE4WpotKUMV_SvyPdOdrUSF9ks",
//     authDomain: "angular4-c04bc.firebaseapp.com",
//     databaseURL: "https://angular4-c04bc.firebaseio.com",
//     projectId: "angular4-c04bc",
//     storageBucket: "angular4-c04bc.appspot.com",
//     messagingSenderId: "240498453777"
// };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetallePage,
    CarritoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
    //AngularFireModule.initializeApp(firebaseConfig),
    //AngularFireDatabaseModule,
    //AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetallePage,
    CarritoPage
  ],
  providers: [
    ProductoService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
