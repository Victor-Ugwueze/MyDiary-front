// state
import initialState from '../../store/initialState';

// action types
import {
  GET_SINGLE_ENTRY,
  GET_SINGLE_ENTRY_SUCCESS,
  GET_SINGLE_ENTRY_FAILURE,
} from '../../actions/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc get single entry reducer
 * @returns {object} type
 */
const entryReducer = (state = initialState.getSingleEntry, action) => {
  switch (action.type) {
    case GET_SINGLE_ENTRY:
      return {
        ...state,
        progress: action.payload.progress,
      };
    case GET_SINGLE_ENTRY_SUCCESS:
      return {
        ...state,
        progress: action.payload.progress,
        entry: action.payload.entry,
      };
    case GET_SINGLE_ENTRY_FAILURE:
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
