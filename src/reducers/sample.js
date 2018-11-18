// state
import initialState from '../store/initialState';

// action types
import {
  SAMPLE_ACTION,
  SAMPLE_ACTION_SUCCESS
}
  from '../actions/actionTypes';

/**
 * @param {object} state
 * @param {string} action
 * @desc login reducer
 * @returns {object} type
 */
const sampleReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAMPLE_ACTION:
      return {
        ...state,
        data: action.payload,
      };
    case SAMPLE_ACTION_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
};

export default sampleReducer;
