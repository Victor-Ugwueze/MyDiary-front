// third party library
import http from 'axios';

// actionType
import {
  GET_LIST_ENTRIES,
  GET_LIST_ENTRIES_FAILURE,
  GET_LIST_ENTRIES_SUCCESS,
  CLEAR_PROGRESS,
} from '../actionTypes';

/**
 * @desc create new entry success
 * @param {array} entries
 * @returns {object} type
 */
export function getListEntriesSuccess(entries) {
  return {
    type: GET_LIST_ENTRIES_SUCCESS,
    payload: {
      progress: 'done',
      entries,
    },
  };
}

/**
 * @desc clears progress status
 * @returns {object} type
 */
export const clearProgress = () => ({
  type: CLEAR_PROGRESS,
  payload: {
    progress: false,
  },
});

/**
 * @param {object} message
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function getListEntriesFailure(message) {
  return {
    type: GET_LIST_ENTRIES_FAILURE,
    payload: {
      progress: 'done',
      message,
    },
  };
}

export const getListEntries = () => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: GET_LIST_ENTRIES,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .get(`${url}/api/v1/entries`, {
      headers,
    })
    .then((response) => {
      dispatch(getListEntriesSuccess(response.data.entries));
      dispatch(clearProgress());
    })
    .catch(({ response }) => {
      dispatch(getListEntriesFailure(response.data.message));
    });
};
