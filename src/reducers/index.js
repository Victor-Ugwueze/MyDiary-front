// redux library
import { combineReducers } from 'redux';

// reducers
import sample from './sample';
import signup from './auth/signup';
import auth from './auth/auth';
/**
 * @desc combines all the reducers
*/
export default combineReducers({
  sample,
  signup,
  auth
});
