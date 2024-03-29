import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../shared';
import { AppState, selectUser } from '../state';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(private store: Store<AppState>) {}

  canActivate(): Observable<boolean> {
    return this.store.pipe(
      select(selectUser),
      map((user: User | undefined) => {
        const isLoggedIn = !!user && !this.isEmptyObject(user);
        return isLoggedIn;
      })
    );
  }

  private isEmptyObject(obj: object): boolean {
    return obj && Object.keys(obj).length === 0;
  }
}
