// third party library
import http from 'axios';

// actionType
import {
  UPDATE_ENTRY,
  UPDATE_ENTRY_SUCCESS,
  UPDATE_ENTRY_FAILURE,
} from '../actionTypes';

// action
import { getListEntries } from './listEntry';

/**
 * @desc create new entry success
 * @param {object} data
 * @returns {object} type
 */
export function updateEntrySuccess(data) {
  return {
    type: UPDATE_ENTRY_SUCCESS,
    payload: {
      progress: 'done',
      entry: data.createdEntry,
    },
  };
}

/**
 * @param {object} message
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function updateEntryFailure(message) {
  return {
    type: UPDATE_ENTRY_FAILURE,
    payload: {
      progress: 'done',
      message,
    },
  };
}


export const updateEntry = ({ title, body, id }) => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  console.log('hrerererre', title);
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: UPDATE_ENTRY,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .put(
      `${url}/api/v1/entries`,
      {
        token,
        title,
        body,
      },
      {
        headers,
      }
    )
    .then((response) => {
      dispatch(updateEntrySuccess(response.data));
      dispatch(getListEntries());
    })
    .catch(({ response }) => {
      dispatch(updateEntryFailure(response.data.message));
    });
};
