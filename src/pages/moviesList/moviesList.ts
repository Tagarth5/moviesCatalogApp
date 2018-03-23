import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { SendMoviePage} from '../sendMovie/sendMovie';
import { MoviesProvider } from '../../providers/moviesProvider';
import { LocalStorageProvider } from '../../providers/localStorageProvider';
import { Observable } from 'rxjs/Observable';
import { LoadingController, Loading } from 'ionic-angular';
import { Movie } from "../../models/movie";
import { Store } from "@ngrx/store";
import { MoviesStoreService } from '../../store/services/movies.store';

@Component({
  selector: 'page-moviesList',
  templateUrl: 'moviesList.html'
})
export class MoviesListPage {

  movies: Movie[];

  loading: Loading;

  constructor(public store: MoviesStoreService, public loadingCtrl: LoadingController, private localStorageProvider: LocalStorageProvider, private moviesProvider: MoviesProvider, public navCtrl: NavController, public modalCtrl: ModalController) {

    this.loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.loading.present().then(()=>{

      this.localStorageProvider.getMovies().then((movies)=>{
        if(movies.length!=0) {
          this.store.dispatchLoadStorageAction(movies);         
        }
        else{
          this.store.dispatchLoadAction();
        }
      })
    })

    this.store.getMovies().subscribe((movies)=>{
      this.movies = movies;
      this.localStorageProvider.setMovies(movies);
      if(this.loading) this.loading.dismissAll();
    })
    
  }

  deleteMovie(id:number){
    this.store.dispatchDeleteAction(id);  
  }

  updateMovie(movie: Movie){
    let modal = this.modalCtrl.create(SendMoviePage,{movie: movie});
    modal.present();
  }

  createMovie(){
    let modal = this.modalCtrl.create(SendMoviePage);
    modal.present();
  }

}
