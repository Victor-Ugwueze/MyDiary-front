// state
import initialState from '../../store/initialState';

// action types
import {
  UPDATE_ENTRY,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE,
} from '../../middlewares/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const entryReducer = (state = initialState.updateEntry, action) => {
  switch (action.type) {
    case UPDATE_ENTRY:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case UPDATE_ENTRY_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        updateEntry: action.payload.entry,
      };
    case UPDATE_ENTRY_FAILURE:
      return {
        ...state,
        progress: 'done',
        message: action.payload.message,
      };
    default:
      return state;
  }
};

export default entryReducer;
