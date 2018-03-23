import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import { Subject } from "rxjs/Subject";
import { Movie } from "../models/movie"



/*
  Generated class for the MoviesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocalStorageProvider {

  movies: Movie[];

  constructor(private storage: Storage) {
    
  }

  setMovies(movies: any){
    this.storage.set("movies", movies);
  }

  getMovies():any{ 
    return this.storage.get('movies');
  }

}
