// action types
import {
  DELETE_ENTRY,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
} from '../../middlewares/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const deletEntry = (state = { progress: false, message: '' }, action) => {
  switch (action.type) {
    case DELETE_ENTRY:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case DELETE_ENTRY_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case DELETE_ENTRY_FAILURE:
      return {
        ...state,
        progress: 'done',
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default deletEntry;
