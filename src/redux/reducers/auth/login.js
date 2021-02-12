// state
import initialState from '../../store/initialState';

// action types
import {
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_FAILURE,
  LOGIN_ERROR_CLEARED,
} from '../../middlewares/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const loginReducer = (state = initialState.auth.login, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        isAuth: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        progress: 'done',
        error: true,
        message: action.payload.message,
      };
    case LOGIN_ERROR_CLEARED:
      return {
        ...state,
        message: action.payload.message,
        progress: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
