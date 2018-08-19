import { Action } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import * as TutorialActions from './../actions/tutorial.action';

// define initial or default state
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'www.google.com'
};

// reducer takes in state and actions
export function reducer(
  state: Tutorial[] = [initialState],
  action: TutorialActions.Actions
) {
  // switch to determine type of action
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      // pass in previous state with new action
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1);
      return state;
    default:
      return state;
  }
}
