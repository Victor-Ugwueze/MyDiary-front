// third party library
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

// import dotenv from 'dotenv';

// actionType
// actionType
import {
  DELETE_ENTRY,
  DELETE_ENTRY_FAILURE,
  DELETE_ENTRY_SUCCESS,
  GET_LIST_ENTRIES,
} from '../../actionTypes';

// action
import { deleteEntry } from '../deleteEntry';

// dotenv.config();
const entry = { id: 1, title: 'the title' };
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const mock = new MockAdapter(axios);

describe('Actions related with deleting entry', () => {
  const id = 1;
  afterEach(() => {
    mock.reset();
  });
  it('User entry created successfully', () => {
    mock.onDelete(`/api/v1/entries/${id}`).reply(200, {
      createdEntry: entry,
      progress: 'ongoing',
    });

    const mockedActions = [
      {
        type: DELETE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: DELETE_ENTRY_SUCCESS,
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

    const store = mockStore();
    return store.dispatch(deleteEntry(id)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
  it('create enrty is failed', () => {
    mock.onDelete(`/api/v1/entries/${id}`).reply(400, {
      progress: 'done',
    });

    const mockedActions = [
      {
        type: DELETE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      },
      {
        type: DELETE_ENTRY_FAILURE,
        payload: {
          progress: 'done',
        },
      },
    ];

    const store = mockStore();
    return store.dispatch(deleteEntry(id)).then(() => {
      expect(store.getActions()).toEqual(mockedActions);
    });
  });
});
