// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// action types
import {
  SIGNUP_USER,
  SIGNUP_USER_FAILURE,
  SIGNUP_USER_SUCCESS,
  AUTHENTICATE_USER,
} from '../../actionTypes';

// action
import signupAction from '../signup';

const user = { id: 1, email: 'victor@gmail.com', firstName: 'victor' };
const token = 'tevhdvchsvdhch ds';
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with user signup', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User signup is successfully', () => {
    mock.onPost('/auth/signup').reply(200, {
      user,
      token,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: SIGNUP_USER,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: SIGNUP_USER_SUCCESS,
        payload: {
          progress: 'done',
        },
      },
      {
        type: AUTHENTICATE_USER,
        payload: {
          user,
          token,
        },
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(signupAction({ user })).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('User signup failed', () => {
    mock.onPost('/auth/signup').reply(400, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: SIGNUP_USER,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: SIGNUP_USER_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ auth: {} });
    return store.dispatch(signupAction(user)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
