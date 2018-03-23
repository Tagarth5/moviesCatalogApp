import { MoviesState } from './../state/movies.state';
import { Movie } from './../../models/movie';
import { MovieAction, MovieActionTypes } from "../actions/movie.actions";

export const moviesInitialState: MoviesState = {
  movies: [],
  error: null
}


export function movieReducer(state = moviesInitialState, action: MovieAction): MoviesState {

    switch (action.type) {

        case MovieActionTypes.LOAD_COMPLETED:
            return Object.assign({}, state, {
                movies: action.payload,
                error: null
            });
            
        case MovieActionTypes.LOADSTORAGE_COMPLETED:
            return Object.assign({}, state, {
                movies: action.payload,
                error: null
            });

        case MovieActionTypes.CREATE_COMPLETED:
            return Object.assign({}, state, {
                movies: state.movies.concat(action.payload),
                error: null
            });
        case MovieActionTypes.UPDATE_COMPLETED:
            return Object.assign({}, state, {
                movies: state.movies.map((movie: Movie) => {
                    return movie.id === action.payload.id ? action.payload : movie;
                }),
                error: null
            });

        case MovieActionTypes.DELETE_COMPLETED:
            return Object.assign({}, state, {
                movies: state.movies.filter((movie: Movie) => {
                  return movie.id !== action.payload;
                }),
                error: null
            });

        case MovieActionTypes.ERROR: {
            return Object.assign({}, state, {
                error: action.payload.error
            });
        }

        default:
            return state;
    }
};