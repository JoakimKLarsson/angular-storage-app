import { Action } from '@ngrx/store';
import { changeUsername, loginUser, logoutUser } from '../actions';
import { initialState, userReducer } from './user.reducer';

describe('state.user.reducer', () => {
  it('login should set user', () => {
    const action: Action = loginUser({ user: { username: 'Test user' } });

    const result = userReducer({}, action);

    expect(result).toEqual({
      username: 'Test user',
    });
  });
  it('logout should set user to {}', () => {
    const action: Action = logoutUser();

    const result = userReducer({ username: 'Test user' }, action);

    expect(result).toEqual({});
  });
  it('changeUserName should change user.username', () => {
    const action: Action = changeUsername({ username: 'Test user update' });

    const result = userReducer({ username: 'Test user before' }, action);

    expect(result).toEqual({
      username: 'Test user update',
    });
  });
});
