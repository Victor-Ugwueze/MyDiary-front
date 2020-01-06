// third party library
import http from 'axios';

// actionType
import {
  GET_PROFILE,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  GET_PROFILE_ENTRY,
  GET_PROFILE_ENTRY_SUCCESS,
  GET_PROFILE_ENTRY_FAILURE,
} from '../actionTypes';

// action
import { clearProgress } from '../entry/listEntry';
/**
 * @desc create new entry success
 * @param {array} user
 * @returns {object} type
 */
export function getProfileSuccess(user) {
  return {
    type: GET_PROFILE_SUCCESS,
    payload: {
      progress: 'ongoing',
      user,
    },
  };
}

const getNumberOfEntries = (headers, url, dispatch) => {
  dispatch({
    type: GET_PROFILE_ENTRY,
    payload: {
      progress: 'done',
    },
  });
  http
    .get(`${url}/api/v1/users/profile/entries`, {
      headers,
    })
    .then((response) => {
      dispatch({
        type: GET_PROFILE_ENTRY_SUCCESS,
        payload: {
          progress: 'done',
          entryCount: response.data.entries,
        },
      });
      dispatch(clearProgress());
    })
    .catch(({ response }) => {
      dispatch({
        type: GET_PROFILE_ENTRY_FAILURE,
        progress: 'done',
        message: response.data.message
      });
    });
};

/**
 * @param {object} message
 * @desc checking unsuccessful login
 * @returns {object} type
 */
const getProfileFailure = message => ({
  type: GET_PROFILE_FAILURE,
  payload: {
    progress: 'done',
    message,
  },
});

export const getProfile = () => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: GET_PROFILE,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .get(`${url}/api/v1/users/profile`, {
      headers,
    })
    .then((response) => {
      dispatch(getProfileSuccess(response.data.user));
      getNumberOfEntries(headers, url, dispatch);
      dispatch(clearProgress());
    })
    .catch(({ response }) => {
      dispatch(getProfileFailure(response.data.message));
    });
};
