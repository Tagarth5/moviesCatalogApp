import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Actions, Effect, toPayload } from "@ngrx/effects";
import { MovieActionTypes } from "../actions/movie.actions";
import { MoviesProvider } from '../../providers/moviesProvider';
import { Action } from '@ngrx/store';
import { CreateAction } from '../actions/movie.actions'
import { Movie } from '../../models/movie';
import { MoviesStoreService } from '../../store/services/movies.store';
import { LocalStorageProvider } from '../../providers/localStorageProvider';

import * as movie from '../actions/movie.actions';
 
@Injectable()
export class MovieEffects {
 
  constructor(private localStorageProvider: LocalStorageProvider, private moviesStoreService: MoviesStoreService, private moviesProvider: MoviesProvider, private actions$: Actions) {
  }
  
  @Effect()
  loadAction$: Observable<Action> = this.actions$
        .ofType(movie.MovieActionTypes.LOAD)
        .map(toPayload)
        .switchMap(payload => this.moviesProvider.getMovies()
          .mergeMap((res) => Observable.from([
            (new movie.LoadCompletedAction(res))
          ])).catch(this.handleError)
        ) 
      
  
  @Effect()
  loadStorageAction$: Observable<Action> = this.actions$
        .ofType(movie.MovieActionTypes.LOADSTORAGE)
        .map(toPayload)
        .switchMap(payload =>  Observable.from([
          (new movie.LoadStorageCompletedAction(payload))
        ]).catch(this.handleError)
      )           
      
  @Effect()
  createAction$: Observable<Action> = this.actions$
      .ofType(movie.MovieActionTypes.CREATE)     
      .map(toPayload)
      .switchMap((payload) => this.moviesProvider.createMovie(payload)
      .mergeMap((res) => Observable.from([
          (new movie.CreateCompletedAction(res))
        ])).catch(this.handleError)
      )     
     
  @Effect()
  updateAction$: Observable<Action> = this.actions$
      .ofType(movie.MovieActionTypes.UPDATE)     
      .map(toPayload)
      .switchMap((payload) => this.moviesProvider.updateMovie(payload)
      .mergeMap((res) => Observable.from([
          (new movie.UpdateCompletedAction(res))
        ])).catch(this.handleError)
      )      

  @Effect()
  deleteAction$: Observable<Action> = this.actions$
      .ofType(movie.MovieActionTypes.DELETE)     
      .map(toPayload)
      .switchMap((payload) => this.moviesProvider.deleteMovie(payload)
      .mergeMap((res) => Observable.from([
        (new movie.DeleteCompletedAction(res))
      ])).catch(this.handleError)
    ) 

  private handleError(error) {
      return Observable.of(new movie.ErrorAction({error: error}));
  }  

}