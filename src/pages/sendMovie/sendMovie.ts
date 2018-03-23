import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {trigger,state,style,transition,animate} from '@angular/animations';
import { Movie } from "../../models/movie";
import { Store } from "@ngrx/store";
import { MoviesStoreService } from '../../store/services/movies.store';
import { ModalController, ViewController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-sendMovie',
  templateUrl: 'sendMovie.html',
})

export class SendMoviePage {
 
  movie = {} as Movie;
  moviesLength;
  
  constructor(public alertCtrl: AlertController,public viewCtrl: ViewController, public store: MoviesStoreService, public navCtrl: NavController, public navParams: NavParams) {
    this.movie.id = -1;
    this.movie.image = "https://i.imgur.com/iKcKoN3.png"
     
    if(this.navParams.get("movie")){
      this.movie = this.navParams.get("movie");    
    }else{
      this.store.getMovies().subscribe((movies)=>{
        this.moviesLength = movies.length;        
      })
    }  

    console.log(this.movie);
  }

  sendMovie(){
    if(this.movie.id==-1){
      console.log(this.movie);
      console.log(this.moviesLength);
      this.movie.id = this.moviesLength+1; 
      this.store.dispatchCreateAction(this.movie);
    }
    else{
      console.log(this.movie);
      this.store.dispatchUpdateAction(this.movie);
    }
    
    this.viewCtrl.dismiss();
  }

  changeImage(){
    let alert = this.alertCtrl.create({
      title: 'Change image',
      inputs: [
        {
          name: 'URL',
          placeholder: 'Please, enter the url of the image'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'OK',
          handler: data => {
            
          }
        }
      ]
    });
    alert.present();

    alert.onDidDismiss((data) => {
      console.log(data);
      if(data.URL!=""){
        this.movie.image = data.URL;  
      }
     
    });
  }

}
