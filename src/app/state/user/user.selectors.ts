import { createSelector } from '@ngrx/store';
import { User } from '../types';
import { AppState } from '../state';

export const selectUser = createSelector(
  (state: AppState) => state.user,
  (user: User) => user
);

export const selectUsername = createSelector(
  selectUser,
  (user: User) => user.username
);
