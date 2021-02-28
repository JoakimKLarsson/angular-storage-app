import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from './shared';
import { AppState, logoutUser, selectUser } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  isLoggedIn$: Observable<boolean> | undefined;

  constructor(private store: Store<AppState>, public router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store
      .select(selectUser)
      .pipe(
        map((user: User | undefined) => !!user && !this.isEmptyObject(user))
      );
  }

  logout(): void {
    this.store.dispatch(logoutUser());
    this.router.navigate(['login']);
  }

  private isEmptyObject(obj: object): boolean {
    return obj && Object.keys(obj).length === 0;
  }
}
