import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HttpModule } from '@angular/http';


import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { VideoPage } from '../pages/video/video';
import { MusicPage } from '../pages/music/music';
import { NewsPage } from '../pages/news/news';
import { ProfilePage } from '../pages/profile/profile';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';



import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

import { File } from '@ionic-native/file';
import { Transfer } from '@ionic-native/transfer';
import { FilePath } from '@ionic-native/file-path';
import { Camera } from '@ionic-native/camera';
 
// import { Transfer } from '@ionic-native/transfer';
// import { FilePath } from '@ionic-native/file-path';

// import { File } from '@ionic-native/file';
// import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
// import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    VideoPage, NewsPage, MusicPage, ProfilePage, IntroPage, LoginPage,
    TabsPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    VideoPage, NewsPage, MusicPage, ProfilePage, IntroPage, LoginPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen, File, Transfer, Camera, FilePath,
    // FileTransfer, FileUploadOptions, FileTransferObject,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
