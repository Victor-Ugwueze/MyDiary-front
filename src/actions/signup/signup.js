// third party libraries
import http from 'axios';

// action types
import { SIGNUP_USER, SIGNUP_USER_FAILURE, SIGNUP_USER_SUCCESS } from '../actionTypes';

// actions
import { authenticate } from '../auth/auth';

/**
 * @description action to dispatch for a sucessful singup
 * @param {object} user
 * @param {object} token
 * @return object
 */
const singupSuccessAction = () => ({
  type: SIGNUP_USER_SUCCESS,
  payload: {
    progress: 'done',
  },
});

/**
 * @description action to dispatch for a failed attempt to singup
 * @param {object} error
 * @return object
 */
const singupErorAction = error => ({
  type: SIGNUP_USER_FAILURE,
  payload: error,
});

/**
 * @description action to dispatch for signup with email
 * @param {object} data
 * @returns object
 */
const signupAction = data => (dispatch) => {
  const url = process.env.SERVER_URL || '';
  dispatch({
    type: SIGNUP_USER,
    payload: {
      progress: 'ongoing',
    },
  });
  return http
    .post(`${url}/auth/signup`, data)
    .then((response) => {
      dispatch(singupSuccessAction(response.data.user));
      dispatch(authenticate(response.data.user, response.data.token));
    })
    .catch(({ response }) => dispatch(singupErorAction(response.data)));
};

export default signupAction;
