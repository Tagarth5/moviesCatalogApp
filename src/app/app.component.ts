import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,  LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MoviesListPage } from '../pages/moviesList/moviesList';
import { ListPage } from '../pages/list/list';
import { LocalStorageProvider } from '../providers/localStorageProvider';
import { Store } from "@ngrx/store";
import { MoviesStoreService } from '../store/services/movies.store';
import { Movie } from '../models/movie';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MoviesListPage;

  pages: Array<{title: string, component: any}>;


  constructor(public store: MoviesStoreService, private localStorageProvider: LocalStorageProvider, private loadingCtrl: LoadingController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'MoviesList', component: MoviesListPage },
      { title: 'List', component: ListPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      
      this.localStorageProvider.getMovies().then({
        
      });
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
