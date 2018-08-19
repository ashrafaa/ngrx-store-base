import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';

// define type of actions - in string
export const ADD_TUTORIAL = '[TUTORIAL] Add';
export const REMOVE_TUTORIAL = '[TUTORIAL] Remove';

// create action class - to pass in payload
export class AddTutorial implements Action {
  readonly type = ADD_TUTORIAL;

  constructor(public payload: Tutorial) {}
}

export class RemoveTutorial implements Action {
  readonly type = REMOVE_TUTORIAL;

  constructor(public payload: number) {}
}

// export class for use with reducer
export type Actions = AddTutorial | RemoveTutorial;
