// third party library
import http from 'axios';

// actionType
import {
  DELETE_ENTRY,
  DELETE_ENTRY_SUCCESS,
  DELETE_ENTRY_FAILURE,
} from '../actionTypes';

// action
import { getListEntries } from './listEntry';

/**
 * @desc create new entry success
 * @param {array} entry
 * @returns {object} type
 */
export function deleteEntrySuccess() {
  return {
    type: DELETE_ENTRY_SUCCESS,
    payload: {
      progress: 'done',
    },
  };
}

/**
 * @param {object} message
 * @desc checking unsuccessful login
 * @returns {object} type
 */
const deleteEntryFailure = message => ({
  type: DELETE_ENTRY_FAILURE,
  payload: {
    progress: 'done',
    message,
  },
});

export const deleteEntry = id => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: DELETE_ENTRY,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .delete(`${url}/api/v1/entries/${id}`, {
      headers,
    })
    .then(() => {
      dispatch(deleteEntrySuccess());
      dispatch(getListEntries());
    })
    .catch(({ response }) => {
      dispatch(deleteEntryFailure(response.data.message));
    });
};
