import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { MoviesListPage } from '../pages/moviesList/moviesList';
import { MovieDetailPage } from '../components/movieDetail';
import { SendMoviePage } from '../pages/sendMovie/sendMovie';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MoviesProvider } from '../providers/moviesProvider';
import { LocalStorageProvider } from '../providers/localStorageProvider';
import { IonicStorageModule } from '@ionic/storage';
import { EffectsModule } from "@ngrx/effects";
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from "@ngrx/store";
import { ROOT_REDUCER } from './../store/reducers/reducers';
import { MovieEffects } from './../store/effects/movie.effects';
import { MoviesStoreService } from '../store/services/movies.store';

@NgModule({
  declarations: [
    MyApp,
    MoviesListPage,
    MovieDetailPage,
    SendMoviePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    BrowserAnimationsModule,
    HttpModule,
    IonicStorageModule.forRoot(),
    StoreModule.forRoot(ROOT_REDUCER),
    EffectsModule.forRoot([MovieEffects]),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MoviesListPage,
    MovieDetailPage,
    SendMoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MoviesProvider,
    LocalStorageProvider,
    MoviesStoreService
  ]
})
export class AppModule {}
