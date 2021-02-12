// third party library
import http from 'axios';

// actionType
import {
  CREATE_ENTRY,
  CREATE_ENTRY_SUCCESS,
  CREATE_ENTRY_FAILURE,
} from '../actionTypes';

// action
import { getListEntries } from './listEntry';

/**
 * @desc create new entry success
 * @param {object} data
 * @returns {object} type
 */
export function createEntrysuccess(data) {
  return {
    type: CREATE_ENTRY_SUCCESS,
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
export function createEntryFailure(message) {
  return {
    type: CREATE_ENTRY_FAILURE,
    payload: {
      progress: 'done',
      message,
    },
  };
}


export const createEntry = ({ title, body }) => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: CREATE_ENTRY,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .post(
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
      dispatch(createEntrysuccess(response.data));
      dispatch(getListEntries());
    })
    .catch(({ response }) => {
      dispatch(createEntryFailure(response.data.message));
    });
};
