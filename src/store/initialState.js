/**
 * @desc the initial state on the application
 */
const initialState = {
  auth: {
    signup: {
      isAuth: false,
      registered: false,
      progress: false,
    },
    login: {
      isAuth: false,
      progress: false,
    },
    user: {},
    isAuth: false,
  },
  listEntries: {
    entries: [],
  },
  createdEntry: {},
  getSingleEntry: {
    entry: {}
  },
};

export default initialState;
