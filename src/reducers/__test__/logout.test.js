// actionType
import {
  LOGOUT_USER,
}
  from '../../actions/actionTypes';

// reducer
import reducer from '../auth/auth';

describe('auth reducer', () => {
  it('should handle LOGOUT_USER', () => {
    expect(
      reducer([], {
        type: LOGOUT_USER
      })
    ).toEqual(
      {
        isAuth: false,
        user: {}
      }
    );
  });
});
