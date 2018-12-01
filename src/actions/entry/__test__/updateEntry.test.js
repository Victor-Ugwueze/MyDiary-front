// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  UPDATE_ENTRY,
  UPDATE_ENTRY_SUCCESS,
  GET_LIST_ENTRIES,
  UPDATE_ENTRY_FAILURE,
} from '../../actionTypes';

// action
import { updateEntry } from '../updateEntry';

// dotenv.config();
const entry = { id: 1, title: 'the title', body: 'body' };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with updating single entry', () => {
  const entryId = 1;
  afterEach(() => {
    mock.reset();
  });
  it('User update single entry is successfully', () => {
    mock.onPut(`/api/v1/entries/${entryId}`).reply(200, {
      entry,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: UPDATE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: UPDATE_ENTRY_SUCCESS,
        payload: {
          progress: 'done',
        },
      },
      {
        type: GET_LIST_ENTRIES,
        payload: {
          progress: 'ongoing',
        },
      },
    ];

    const store = mockStore({ getSingleEntry: {} });
    return store.dispatch(updateEntry(entry, entryId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('update enrty failed', () => {
    mock.onPut(`/api/v1/entries/${entryId}`).reply(400, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: UPDATE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: UPDATE_ENTRY_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore({ getSingleEntry: {} });
    return store.dispatch(updateEntry(entry, entryId)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
