// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  GET_LIST_ENTRIES,
  GET_LIST_ENTRIES_SUCCESS,
  GET_LIST_ENTRIES_FAILURE,
  CLEAR_PROGRESS
} from '../../actionTypes';

// action
import { getListEntries } from '../listEntry';

// dotenv.config();
const entries = [{ id: 1, title: 'the title' }];
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with getting all list entries', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User entry created successfully', () => {
    mock.onGet('/api/v1/entries').reply(200, {
      entries,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: GET_LIST_ENTRIES,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: GET_LIST_ENTRIES_SUCCESS,
        payload: {
          progress: 'done',
          entries,
        },
      },
      {
        type: CLEAR_PROGRESS,
        payload: {
          progress: false,
        },
      },
    ];

    const store = mockStore({ listEntries: {} });
    return store.dispatch(getListEntries()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('create enrty is failed', () => {
    mock.onGet('/api/v1/entries').reply(400, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: GET_LIST_ENTRIES,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: GET_LIST_ENTRIES_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ listEntries: {} });
    return store.dispatch(getListEntries()).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
