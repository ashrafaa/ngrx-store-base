import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.action';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;

  constructor(
    private store: Store<AppState>
  ) {
    this.tutorials = store.select('tutorial');
  }

  delTutorial(idx) {
    this.store.dispatch(new TutorialActions.RemoveTutorial(idx));
  }

  ngOnInit() {
  }

}