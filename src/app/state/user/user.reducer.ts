import { createReducer, on } from '@ngrx/store';
import { loginUser, logoutUser, changeUsername } from '../actions';
import { User } from '../types';

export const initialState: User | {} = {};

export const userReducer = createReducer(
  initialState,
  on(loginUser, (state, { user }) => {
    return {
      ...user,
    };
  }),
  on(logoutUser, () => {
    return {};
  }),
  on(changeUsername, (state, { username }) => {
    return {
      ...state,
      username,
    };
  })
);
