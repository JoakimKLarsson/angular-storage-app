import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { TestBed, ComponentFixture } from '@angular/core/testing';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppState } from '../state';
import { selectUser, selectUsername } from './user.selectors';

describe('state.user.selectors', () => {
  let store: MockStore<AppState>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideMockStore()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    });

    store = TestBed.inject(MockStore);

    store.overrideSelector(selectUsername, 'Test username');
  });

  const initialState: AppState = {
    user: { username: 'test username' },
  };

  it('selectUsername should return user.username', () => {
    const result = selectUsername.projector(initialState.user);

    expect(result).toEqual('test username');
  });
});
