// actionType
import {
  AUTHENTICATE_USER,
  LOGOUT_USER
} from '../actionTypes';

/**
 * @param {object} user
 * @param {string} token
 * @desc authenticate a user
 * @returns {object} type
*/
export function authenticate(user, token) {
  localStorage.setItem('token', token);
  localStorage.setItem('user', JSON.stringify(user));
  return {
    type: AUTHENTICATE_USER,
    payload: {
      user,
      token
    }
  };
}

/**
 * @desc logout a user
 * @returns {object} type
*/
export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
  return {
    type: LOGOUT_USER,
  };
}
