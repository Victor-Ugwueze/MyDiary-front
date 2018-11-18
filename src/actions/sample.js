// actionType
import {
  SAMPLE_ACTION,
  SAMPLE_ACTION_SUCCESS
} from './actionTypes';

/**
 * @desc sample action
 * @returns {object} payload
*/
export function sampleActionLoaging() {
  return {
    type: SAMPLE_ACTION,
    payload: {
      loading: true,
      progress: 'ongoing',
    }
  };
}
/**
 * @desc checking successful login
 * @returns {object} payload
*/
export function success() {
  return {
    type: SAMPLE_ACTION_SUCCESS,
    payload: {
      loading: false,
      progress: 'done',
    }
  };
}

export const sampleAction = () => (dispatch) => {
  dispatch(sampleActionLoaging());
  dispatch(success());
};
