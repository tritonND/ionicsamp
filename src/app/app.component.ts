import { Component } from '@angular/core';
import {Platform, LoadingController, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera, CameraOptions } from '@ionic-native/camera';




import { IntroPage} from '../pages/intro/intro';
import { LoginPage} from '../pages/login/login';
import { HomePage} from '../pages/home/home';
import { TabsPage} from '../pages/tabs/tabs';
import {Http} from "@angular/http";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = IntroPage; 
 // rootPage:any = LoginPage;
  //rootPage:any = HomePage;
 // rootPage:any = TabsPage;
  data : any = {};

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,  public toastCtrl: ToastController, public loadingCtrl: LoadingController, private http : Http) {
    platform.ready().then(() => {

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

}
