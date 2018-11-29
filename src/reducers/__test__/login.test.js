// actionType
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
}
  from '../../actions/actionTypes';

// reducer
import loginReducer from '../auth/login';

const message = 'Password required.';

describe('login reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(
      {
        isAuth: false,
        progress: false,
      }
    );
  });
  it('should run while login page makes request', () => {
    expect(
      loginReducer([], {
        type: LOGIN_REQUEST,
        payload: {
          progress: 'ongoing'
        }

      })
    ).toEqual(
      {
        progress: 'ongoing',
      }
    );
  });
  it('should run on successful login', () => {
    expect(
      loginReducer([], {
        type: LOGIN_SUCCESS,
        payload: {
          isAuth: true,
          progress: 'done'
        }
      })
    ).toEqual(
      {
        progress: 'done',
        isAuth: true
      }
    );
  });
  it('should run on unsuccessful login', () => {
    expect(
      loginReducer([], {
        type: LOGIN_FAILURE,
        payload: {
          message,
        }
      })
    ).toEqual(
      {
        message,
        progress: 'done',
        error: true
      }
    );
  });
});
