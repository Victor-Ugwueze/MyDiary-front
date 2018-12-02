// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAILURE,
  GET_LIST_ENTRIES,
} from '../../actionTypes';

// action
import { updateProfile } from '../updateProfile';

// dotenv.config();
const user = {
  id: 1,
  email: 'victorugwueze@gmail.com',
  firstName: 'victor',
  lastName: 'Victor',
};
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with get user profile details', () => {
  afterEach(() => {
    mock.reset();
  });
  it('get user profile is succcessful', () => {
    mock.onPut('/api/v1/users/profile').reply(200, user);

    const mockedActions = [
      {
        type: UPDATE_PROFILE,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: UPDATE_PROFILE_SUCCESS,
        payload: {
          progress: 'done',
          user,
        },
      },
      {
        type: GET_LIST_ENTRIES,
        payload: {
          progress: 'ongoing',
        },
      },
    ];

    const store = mockStore({});
    return store.dispatch(updateProfile(user)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('get user profile failed', () => {
    mock.onPut('/api/v1/users/profile').reply(401, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: UPDATE_PROFILE,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: UPDATE_PROFILE_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ getProfile: {} });
    return store.dispatch(updateProfile(user)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
