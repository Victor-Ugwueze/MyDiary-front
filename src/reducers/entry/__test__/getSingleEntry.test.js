// actionType
import {
  GET_SINGLE_ENTRY,
  GET_LIST_ENTRIES_SUCCESS,
  GET_SINGLE_ENTRY_FAILURE,
  GET_SINGLE_ENTRY_SUCCESS,
} from '../../../actions/actionTypes';

// reducer
import reducer from '../getSingleEntry';

const message = 'Password required.';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ entry: {} });
  });
  it('should run making get entry request', () => {
    expect(
      reducer([], {
        type: GET_SINGLE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      })
    ).toEqual({
      progress: 'ongoing',
    });
  });
  it('should run on get entry success', () => {
    expect(
      reducer([], {
        type: GET_SINGLE_ENTRY_SUCCESS,
        payload: {
          progress: 'done',
          entry: {
            id: 1,
            title: 'the title',
            body: 'the body',
          },
        },
      })
    ).toEqual({
      progress: 'done',
      entry: {
        id: 1,
        title: 'the title',
        body: 'the body',
      },
    });
  });
  it('should run on create entry failure', () => {
    expect(
      reducer([], {
        type: GET_SINGLE_ENTRY_FAILURE,
        payload: {
          message,
        },
      })
    ).toEqual({
      message,
      progress: 'done',
    });
  });
});
