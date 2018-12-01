// actionType
import {
  UPDATE_ENTRY,
  UPDATE_ENTRY_FAILURE,
  UPDATE_ENTRY_SUCCESS,
  GET_LIST_ENTRIES,
} from '../../../actions/actionTypes';

// reducer
import reducer from '../updateEntry';

const message = 'Password required.';

describe('update entry reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ entry: {} });
  });
  it('should run when on update entry request', () => {
    expect(
      reducer([], {
        type: UPDATE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      })
    ).toEqual({
      progress: 'ongoing',
    });
  });
  it('should run on update entry success', () => {
    expect(
      reducer([], {
        type: UPDATE_ENTRY_SUCCESS,
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
      updateEntry: {
        id: 1,
        title: 'the title',
        body: 'the body',
      },
    });
  });
  it('should run on update entry failure', () => {
    expect(
      reducer([], {
        type: UPDATE_ENTRY_FAILURE,
        payload: {
          message,
        },
      })
    ).toEqual({
      message,
      progress: 'done',
    });
  });
  it('should run on get list entry request', () => {
    expect(
      reducer([], {
        type: GET_LIST_ENTRIES,
        payload: {
          progress: 'ongoing',
        },
      })
    ).toEqual([]);
  });
});
