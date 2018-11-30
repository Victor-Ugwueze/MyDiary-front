// actionType
import {
  CREATE_ENTRY,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
} from '../../../actions/actionTypes';

// reducer
import reducer from '../singleEntry';

const message = 'Password required.';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({});
  });
  it('should run making create entry', () => {
    expect(
      reducer([], {
        type: CREATE_ENTRY,
        payload: {
          progress: 'ongoing',
        },
      })
    ).toEqual({
      progress: 'ongoing',
    });
  });
  it('should run on successful login', () => {
    expect(
      reducer([], {
        type: CREATE_ENTRY_SUCCESS,
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
      createdEntry: {
        id: 1,
        title: 'the title',
        body: 'the body',
      },
    });
  });
  it('should run on create entry failure', () => {
    expect(
      reducer([], {
        type: CREATE_ENTRY_FAILURE,
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
