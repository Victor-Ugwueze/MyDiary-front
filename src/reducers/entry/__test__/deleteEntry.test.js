// actionType
import {
  DELETE_ENTRY,
  DELETE_ENTRY_FAILURE,
  DELETE_ENTRY_SUCCESS,
  GET_LIST_ENTRIES,
} from '../../../actions/actionTypes';

// reducer
import reducer from '../deteleEntry';

const message = 'Password required.';

describe('delete entry reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ message: '', progress: false });
  });
  it('should run when on delete entry request', () => {
    expect(
      reducer([], {
        type: DELETE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      })
    ).toEqual({
      progress: 'ongoing',
    });
  });
  it('should run on delete entry success', () => {
    expect(
      reducer([], {
        type: DELETE_ENTRY_SUCCESS,
        payload: {
          progress: 'done',
        },
      })
    ).toEqual({
      progress: 'done',
    });
  });
  it('should run on delet entry failure', () => {
    expect(
      reducer([], {
        type: DELETE_ENTRY_FAILURE,
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
