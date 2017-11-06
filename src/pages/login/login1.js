import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, LoadingController } from 'ionic-angular';
 
import { Http } from "@angular/http";

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
  data : any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public toastCtrl: ToastController, public loadingCtrl : LoadingController , private http : Http) {
    this.data.username = '';
    this.data.password = '';
    this.data.response = '';
    this.data.dataRes = '';

    this.http = http;

  }


  login(){


    console.log(" Button Klikd");
    var apiURL = "http://localhost/ionphp/login.php";

    if (this.data.username == "" || this.data.password == "")
    {
      let loader = this.loadingCtrl.create({
        content: "Login credential cant be empty...",
        duration: 5000
      });
      loader.present();
    }

    // var myData = JSON.stringify({username: this.data.username, password: this.data.password});
    else{  
      console.log(" inside else");
    var myData = JSON.stringify(this.data);
    this.http.post(apiURL, myData)
        .subscribe(data => {
           {
            console.log("YES");
              this.data.response = data["_body"];
             // console.log(this.data.response) ;
              //console.log(JSON.parse(this.data.response));
        
               this.data.dataRes =  JSON.parse(this.data.response);
              // console.log(this.data.dataRes.status);
              // console.log(this.data.dataRes.usertype);
              // console.log(this.data.dataRes.currentWeekNumber);
              // console.log(this.data.dataRes.fullname);

              console.log("this.data.response") ;
              console.log(this.data.dataRes.status) ;
              // if( this.data.response === 'none')
              if( this.data.dataRes.status == "none")
              {
                console.log("this.data.response1") ;
                let loader = this.loadingCtrl.create({
                  content: "Incorrect Login credentials...",
                  duration: 5000,
                  
                });
                loader.present();
              }
              console.log("this.data.response2") ;



          }


        }, error => {
          console.log("Oooops!");
          let loader = this.loadingCtrl.create({
            content: "Check your network connection...",
            duration: 5000
          });
          loader.present();
        });
      }



 
    }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  myclick() {
  console.log('button clicked');
}

}
