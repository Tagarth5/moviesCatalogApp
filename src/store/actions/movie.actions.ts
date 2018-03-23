import { Action } from "@ngrx/store";
import { Movie } from "../../models/movie";


export const MovieActionTypes = {
  LOAD: '[Movie] LOAD Requested',
  LOAD_COMPLETED: '[Movie] LOAD Completed',
  LOADSTORAGE: '[Movie] LOADSTORAGE Requested',
  LOADSTORAGE_COMPLETED: '[Movie] LOADSTORAGE Completed',
  CREATE: '[Movie] CREATE Requested',
  CREATE_COMPLETED: '[Movie] CREATE Completed',
  UPDATE: '[Movie] UPDATE Requested',
  UPDATE_COMPLETED: '[Movie] UPDATE Completed',
  DELETE: '[Movie] DELETE Requested',
  DELETE_COMPLETED: '[Movie] DELETE Completed',
  ERROR: '[Movie] Error'
};

export class LoadAction implements Action {
  type = MovieActionTypes.LOAD;
  constructor(public payload: any) {}
}

export class LoadCompletedAction implements Action {
  type = MovieActionTypes.LOAD_COMPLETED;
  constructor(public payload: Movie[]) {}
}

export class LoadStorageAction implements Action {
  type = MovieActionTypes.LOADSTORAGE;
  constructor(public payload: any) {}
}

export class LoadStorageCompletedAction implements Action {
  type = MovieActionTypes.LOADSTORAGE_COMPLETED;
  constructor(public payload: Movie[]) {}
}

export class CreateAction implements Action {
  type = MovieActionTypes.CREATE;
  constructor(public payload: Movie) {}
}

export class CreateCompletedAction implements Action {
  type = MovieActionTypes.CREATE_COMPLETED;
  constructor(public payload: Movie) {}
}

export class UpdateAction implements Action {
  type = MovieActionTypes.UPDATE;
  constructor(public payload: Movie) {}
}

export class UpdateCompletedAction implements Action {
  type = MovieActionTypes.UPDATE_COMPLETED;
  constructor(public payload: Movie) {}
}

export class DeleteAction implements Action {
  type = MovieActionTypes.DELETE;
  constructor(public payload: number) {}
}

export class DeleteCompletedAction implements Action {
  type = MovieActionTypes.DELETE_COMPLETED;
  constructor(public payload: Movie) {}
}

export class ErrorAction implements Action {
  type = MovieActionTypes.ERROR;

  constructor(public payload: any) { }
}

export type MovieAction
    = LoadAction
    | LoadCompletedAction
    | CreateAction
    | CreateCompletedAction
    | UpdateAction
    | UpdateCompletedAction
    | DeleteAction
    | DeleteCompletedAction
    | ErrorAction;