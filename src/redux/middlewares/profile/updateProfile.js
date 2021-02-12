// third party library
import http from 'axios';

// actionType
import { UPDATE_PROFILE, UPDATE_PROFILE_SUCCESS, UPDATE_PROFILE_FAILURE } from '../actionTypes';

// action
import { getListEntries } from '../entry/listEntry';

/**
 * @desc create new entry success
 * @param {object} data
 * @returns {object} type
 */
export function updateProfileSuccess(data) {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    payload: {
      progress: 'done',
      user: data,
    },
  };
}

/**
 * @param {object} message
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function updateProfileFailure(message) {
  return {
    type: UPDATE_PROFILE_FAILURE,
    payload: {
      progress: 'done',
      message,
    },
  };
}

export const updateProfile = data => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  const token = localStorage.getItem('token');
  const headers = {
    'Content-Type': 'application/json;charset=UTF-8',
    'x-access-token': `${token}`,
  };
  dispatch({
    type: UPDATE_PROFILE,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .put(
      `${url}/api/v1/users/profile`,
      {
        token,
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        location: data.location,
      },
      {
        headers,
      }
    )
    .then((response) => {
      dispatch(updateProfileSuccess(response.data));
      dispatch(getListEntries());
    })
    .catch(({ response }) => {
      dispatch(updateProfileFailure(response.data.message));
    });
};
