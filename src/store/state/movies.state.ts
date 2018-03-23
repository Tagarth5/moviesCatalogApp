import { Movie } from './../../models/Movie';

export interface MoviesState {
  movies: Movie[],
  error: any;
}