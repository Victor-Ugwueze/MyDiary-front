// state
import initialState from '../../store/initialState';

// reducer
import loginReducer from './login';
import signupReducer from './signup';

// action types
import {
  AUTHENTICATE_USER,
  LOGOUT_USER
}
  from '../../middlewares/actionTypes';


/**
 * @param {object} state
 * @param {string} action
 * @desc authentication reducer
 * @returns plain object
 */
const authReducer = (state = initialState.auth, action) => {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return {
        ...state,
        user: action.payload,
        isAuth: true,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: {},
        isAuth: false,
      };
    default:
      return {
        ...state,
        login: loginReducer(state.login, action),
        signup: signupReducer(state.signup, action)
      };
  }
};

export default authReducer;
