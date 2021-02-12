// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  GET_SINGLE_ENTRY,
  GET_SINGLE_ENTRY_FAILURE,
  GET_SINGLE_ENTRY_SUCCESS,
  CLEAR_PROGRESS
} from '../../actionTypes';

// action
import { getSingleEntry } from '../getSingleEntry';

// dotenv.config();
const entry = { id: 1, title: 'the title' };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with get single entry', () => {
  const entryId = 1;
  afterEach(() => {
    mock.reset();
  });
  it('User get single entry is successfully', () => {
    mock.onGet(`/api/v1/entries/${entryId}`).reply(200, {
      entry,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: GET_SINGLE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: GET_SINGLE_ENTRY_SUCCESS,
        payload: {
          progress: 'done',
        },
      },
      {
        type: CLEAR_PROGRESS,
        payload: {
          progress: false,
        },
      },
    ];

    const store = mockStore({ getSingleEntry: {} });
    return store.dispatch(getSingleEntry(1)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('create enrty is failed', () => {
    mock.onGet(`/api/v1/entries/${entryId}`).reply(400, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: GET_SINGLE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: GET_SINGLE_ENTRY_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ getSingleEntry: {} });
    return store.dispatch(getSingleEntry(1)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
