// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  AUTHENTICATE_USER,
  LOGOUT_USER,
} from '../../actionTypes';

// action
import { loginAction } from '../login';

import { logout } from '../auth';

// dotenv.config();
const user = { email: 'victor@gmail.com', password: 'vjrjriio33j3n' };
const message = 'Password required.';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with authentication', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User login is successful', () => {
    mock.onPost('/auth/login').reply(200, {
      user,
      status: 'success',
    });

    const mockedActions = [
      {
        type: LOGIN_REQUEST,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: LOGIN_SUCCESS,
        payload: {
          progress: 'done',
        },
      },
      {
        type: AUTHENTICATE_USER,
        payload: {
          token: undefined,
          user,
        },
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(loginAction()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User login is unsuccessful', () => {
    mock.onPost('/auth/login').reply(400, {
      status: 'failed',
      message,
    });

    const mockedActions = [
      {
        type: LOGIN_REQUEST,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: LOGIN_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(loginAction()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });

  it('User logout is successful', () => {
    const mockedActions = {
      type: LOGOUT_USER,
    };

    const store = mockStore({ auth: {} });
    expect(store.dispatch(logout())).toEqual(mockedActions);
  });
});
