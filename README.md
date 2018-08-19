# NgrxTutorial

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8.

# Installation
npm i --save @ngrx/store

# Steps
1- Create the data models to store

```
export interface Data {
  name: string;
}
```

2- Create the actions - action type (string) and/or data payload (optional)

```
import { Action } from '@ngrx/store';
import { Data } from '../model';

export const ACTION_1 = 'Action 1';

export class ActionTask1 implements Action {
  readonly type = ACTION_1;

  constructor(public payload: Data) {}
}

export type Actions = ActionTask1
```

3- Create the reducer - takes incoming action and decides what to do; takes previous state and return new state based on given action

```
import { Data } from '../model';
import * as TaskAction from '../task.action';

const initialState: Data = {
  name: 'Task 1'
}

export function reducer (
  state: Data = [initialState],
  action: TaskAction.Actions 
) {
  switch (action.type) {
    case TaskAction.ACTION_1:
      return [...state, action.payload];
    default:
      return state;
  }
}
```

4- Create app state - main state shared between components

```
import { Data } from '../model';

export interface AppState {
  readonly data: Data[];
}
```

5- Update app.module

```
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';

imports: [
    StoreModule.forRoot({
      data: reducer
    })
  ],
```

6- Access from component

```
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Data } from '../model';
import { AppState } from '../app.state';

export class SomeComponent implements OnInit {

  datas: Observable<Data[]>;

  constructor(private store: Store<AppState>) { 
    this.datas = store.select('data');
  }

  actionTask(name) {
    this.store.dispatch(new TutorialActions.ActionTask1({ name: name }));
  }
}
```
