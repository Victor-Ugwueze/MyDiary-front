// react libraries
import React from 'react';

// third party libraries
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

// actions
import { logout } from '../actions/auth/auth';

// store
import initialState from '../store/initialState';


const Auth = ({ auth, doLogout }) => {
  doLogout();
  if (!auth.isAuth) {
    return <Redirect to='/' />;
  }
  return <Redirect to='/' />;
};

const mapStateToProps = (state = initialState.auth) => ({
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  doLogout: () => dispatch(logout()),
});

Auth.propTypes = {
  doLogout: PropTypes.func,
  auth: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
