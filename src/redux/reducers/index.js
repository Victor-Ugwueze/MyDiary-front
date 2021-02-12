// redux library
import { combineReducers } from 'redux';

// reducers
import signup from './auth/signup';
import auth from './auth/auth';
import createEntry from './entry/addEntry';
import entries from './entry/getListEntry';
import getSingleEntry from './entry/getSingleEntry';
import getProfile from './profile/getProfile';

/**
 * @desc combines all the reducers
*/
export default combineReducers({
  signup,
  auth,
  createEntry,
  entries,
  getSingleEntry,
  getProfile,
});
