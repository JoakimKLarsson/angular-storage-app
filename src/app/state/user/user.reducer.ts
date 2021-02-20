import { createReducer, on } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';
import { loginUser, logoutUser, changeUsername } from '../actions';
import { initialMainState, AppState } from '../state';

const _userReducer = createReducer(
  initialMainState,
  on(loginUser, (state, { user }) => {
    return {
      ...state,
      user: user,
    };
  }),
  on(logoutUser, (state) => {
    return { ...state, user: {} };
  }),
  on(changeUsername, (state, { username }) => {
    return {
      ...state,
      user: {
        username: username,
      },
    };
  })
);
export function userReducer(state: AppState, action: TypedAction<string>) {
  return _userReducer(state, action);
}
