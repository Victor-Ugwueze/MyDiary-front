// actionType
import {
  SIGNUP_USER,
  SIGNUP_USER_SUCCESS,
  SIGNUP_USER_FAILURE
}
  from '../../actions/actionTypes';

// reducer
import signupReducer from '../auth/signup';

const message = 'Password required.';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(
      {
        isAuth: false,
        progress: false,
        registered: false
      }
    );
  });
  it('should run while login page makes request', () => {
    expect(
      signupReducer([], {
        type: SIGNUP_USER,
        payload: true
      })
    ).toEqual(
      {
        progress: 'ongoing',
        registered: false,
        user: {
          email: true
        },
        verified: false
      }
    );
  });
  it('should run on successful login', () => {
    expect(
      signupReducer([], {
        type: SIGNUP_USER_SUCCESS,
      })
    ).toEqual(
      {
        progress: 'done',
        registered: true
      }
    );
  });
  it('should run on unsuccessful login', () => {
    expect(
      signupReducer([], {
        type: SIGNUP_USER_FAILURE,
        payload: message
      })
    ).toEqual(
      {
        message: undefined,
        progress: 'done',
        registered: 'failed',
        verified: false
      }
    );
  });
});
