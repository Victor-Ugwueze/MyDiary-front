// state
import initialState from '../../store/initialState';

// action types
import {
  GET_LIST_ENTRIES,
  GET_LIST_ENTRIES_SUCCESS,
  GET_LIST_ENTRIES_FAILURE,
  CLEAR_PROGRESS,
} from '../../actions/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const entryReducer = (state = initialState.listEntries, action) => {
  switch (action.type) {
    case GET_LIST_ENTRIES:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_LIST_ENTRIES_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        entries: action.payload.entries,
      };
    case CLEAR_PROGRESS:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_LIST_ENTRIES_FAILURE:
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
