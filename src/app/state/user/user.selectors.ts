import { createSelector } from '@ngrx/store';
import { User } from '../../shared/types';
import { AppState } from '../state';

export const selectUser = (state: AppState) => state.user;

export const selectUsername = createSelector(
  selectUser,
  (user: User | undefined) => user?.username
);
