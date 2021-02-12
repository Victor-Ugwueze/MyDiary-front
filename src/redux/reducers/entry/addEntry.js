// state
import initialState from '../../store/initialState';

// action types
import {
  CREATE_ENTRY,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
} from '../../middlewares/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const entryReducer = (state = initialState.createdEntry, action) => {
  switch (action.type) {
    case CREATE_ENTRY:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case CREATE_ENTRY_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        createdEntry: action.payload.entry,
      };
    case CREATE_ENTRY_FAILURE:
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
