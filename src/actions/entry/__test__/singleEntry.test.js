// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  CREATE_ENTRY,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
  GET_LIST_ENTRIES,
} from '../../actionTypes';

// action
import { createEntry } from '../singleEntry';

// dotenv.config();
const entry = { id: 1, title: 'the title' };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with creating entry', () => {
  afterEach(() => {
    mock.reset();
  });
  it('User entry created successfully', () => {
    mock.onPost('/api/v1/entries').reply(200, {
      createdEntry: entry,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: CREATE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: CREATE_ENTRY_SUCCESS,
        payload: {
          progress: 'done',
          entry,
        },
      },
      {
        type: GET_LIST_ENTRIES,
        payload: {
          progress: 'ongoing',
        },
      },
    ];

    const store = mockStore({ createdEntry: {} });
    return store.dispatch(createEntry({ createdEntry: entry })).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('create enrty is failed', () => {
    mock.onPost('/api/v1/entries').reply(400, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: CREATE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: CREATE_ENTRY_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ createdEntry: {} });
    return store.dispatch(createEntry(entry)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
