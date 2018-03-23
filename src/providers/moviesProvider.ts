import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { Movie } from '../models/movie';
import { Subject } from "rxjs/Subject";


/*
  Generated class for the MoviesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesProvider {

  movies: any;

  constructor(public http: Http) {
    
  }

  getMovies():any{
    return this.http.get('http://localhost:3000/movies').map(res => res.json()); 
  }

  deleteMovie(id:number):any{
    const subject = new Subject();
    this.http.delete("http://localhost:3000/movies/"+id).subscribe((res)=>{
        subject.next(id);
        subject.complete();      
    })

    return subject.asObservable();

  }

  updateMovie(movieDetails: any){
    return this.http.put("http://localhost:3000/movies/"+movieDetails.id,movieDetails
    ).map(res => res.json());
  }

  createMovie(movieDetails: any): any{
    return this.http.post("http://localhost:3000/movies", movieDetails
    ).map(res => res.json());
  }

}
