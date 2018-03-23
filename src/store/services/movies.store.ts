import { Movie } from '../../models/movie'
import { MoviesState } from './../state/movies.state';
import { AppStore } from './../state/app.state';
import { Injectable } from '@angular/core';
import { Store } from "@ngrx/store";

import * as fromMovie from './../actions/movie.actions';

@Injectable()
export class MoviesStoreService {

  private STATE = 'movies';

  constructor(private store: Store<AppStore>) {}

  dispatchLoadAction(){
    this.store.dispatch(new fromMovie.LoadAction({}));
  }

  dispatchCreateAction(movie: Movie){
    this.store.dispatch(new fromMovie.CreateAction(movie));
  }

  dispatchDeleteAction(id){
    this.store.dispatch(new fromMovie.DeleteAction(id));
  }

  dispatchUpdateAction(movie: Movie){
    this.store.dispatch(new fromMovie.UpdateAction(movie));
  }

  dispatchLoadStorageAction(movies: Movie[]){  
    this.store.dispatch(new fromMovie.LoadStorageAction(movies));
  }

  getMovies(){
    return this.storeSelect()
      .map((state: MoviesState) => state.movies);
  }

  private storeSelect(){
    return this.store.select("movies");
  }

}