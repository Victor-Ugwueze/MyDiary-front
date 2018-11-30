// third party library
import http from 'axios';

// actionType
import {
  GET_SINGLE_ENTRY_FAILURE,
  GET_SINGLE_ENTRY_SUCCESS,
  GET_SINGLE_ENTRY,
} from '../actionTypes';

/**
 * @desc create new entry success
 * @param {array} entry
 * @returns {object} type
 */
export function getSingleEntrySuccess(entry) {
  return {
    type: GET_SINGLE_ENTRY_SUCCESS,
    payload: {
      progress: 'done',
      entry,
    },
  };
}

/**
 * @param {object} message
 * @desc checking unsuccessful login
 * @returns {object} type
 */
const getSingleEntryFailure = message => ({
  type: GET_SINGLE_ENTRY_FAILURE,
  payload: {
    progress: 'done',
    message,
  },
});

export const getSingleEntry = id => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: GET_SINGLE_ENTRY,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .get(`${url}/api/v1/entries/${id}`, {
      headers,
    })
    .then((response) => {
      dispatch(getSingleEntrySuccess(response.data.dairyEntry));
    })
    .catch(({ response }) => {
      dispatch(getSingleEntryFailure(response.data.message));
    });
};
