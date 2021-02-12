// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_ENTRY,
  CLEAR_PROGRESS
} from '../../actionTypes';

// action
import { getProfile } from '../profile';

// dotenv.config();
const user = { id: 1, email: 'victorugwueze@gmail.com' };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with get user profile details', () => {
  afterEach(() => {
    mock.reset();
  });
  it('get user profile is succcessful', () => {
    mock.onGet('/api/v1/users/profile').reply(200, {
      user,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: GET_PROFILE,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: GET_PROFILE_SUCCESS,
        payload: {
          progress: 'ongoing',
          user
        },
      },
      {
        type: GET_PROFILE_ENTRY,
        payload: {
          progress: 'done',
        },
      },
      {
        type: CLEAR_PROGRESS,
        payload: {
          progress: false
        }
      }
    ];

    const store = mockStore({ getProfile: {} });
    return store.dispatch(getProfile()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('get user profile failed', () => {
    mock.onGet('/api/v1/users/profile').reply(401, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: GET_PROFILE,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: GET_PROFILE_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ getProfile: {} });
    return store.dispatch(getProfile()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
