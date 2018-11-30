// third party library
import http from 'axios';

// actionType
import {
  LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_ERROR_CLEARED, LOGIN_REQUEST
} from '../actionTypes';

// action
import { authenticate } from './auth';

/**
 * @desc checking login loading
 * @returns {object} type
 */
export function loginLoading() {
  return {
    type: LOGIN_REQUEST,
    payload: {
      progress: 'ongoing',
    },
  };
}
/**
 * @desc checking successful login
 * @returns {object} type
 */
export function success() {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      progress: 'done',
    },
  };
}
/**
 * @param {object} data
 * @desc checking unsuccessful login
 * @returns {object} type
 */
export function failure() {
  return {
    type: LOGIN_FAILURE,
    payload: {
      progress: 'done',
    },
  };
}
/**
 * @param {object} data
 * @desc clear error while login
 * @returns {object} type
 */
export function clearError() {
  return {
    type: LOGIN_ERROR_CLEARED,
  };
}

export const loginAction = userData => (dispatch) => {
  dispatch(loginLoading());
  const url = process.env.SERVER_URL || '';
  return http
    .post(`${url}/auth/login`, userData)
    .then((response) => {
      dispatch(success());
      dispatch(authenticate(response.data.user, response.data.token));
    })
    .catch(({ response }) => {
      dispatch(failure(response.data.message));
    });
};
