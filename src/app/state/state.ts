import { User } from './types';

export interface AppState {
  user: User;
}

export const initialMainState = {
  user: {
    username: 'test123',
  },
};
