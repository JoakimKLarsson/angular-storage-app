import { createAction, props } from '@ngrx/store';
import { User } from './types';

export const loginUser = createAction('[USER] Login', props<{ user: User }>());
export const logoutUser = createAction('[USER] Logout');
export const changeUsername = createAction(
  '[USER] Change username',
  props<{ username: string }>()
);
