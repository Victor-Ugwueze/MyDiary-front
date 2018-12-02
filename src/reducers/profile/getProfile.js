// state
import initialState from '../../store/initialState';

// action types
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  CLEAR_PROGRESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_ENTRY,
  GET_PROFILE_ENTRY_SUCCESS,
} from '../../actions/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc get single entry reducer
 * @returns {object} type
 */
const profileReducer = (state = initialState.getProfile, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        user: action.payload.user,
      };
    case GET_PROFILE_ENTRY:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_PROFILE_ENTRY_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        entryCount: action.payload.entryCount
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        progress: 'done',
        message: action.payload.message,
      };
    case CLEAR_PROGRESS:
      return {
        ...state,
        progress: action.payload.progress,
      };
    default:
      return state;
  }
};

export default profileReducer;
