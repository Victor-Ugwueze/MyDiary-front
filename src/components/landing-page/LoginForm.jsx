// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Loader from '../general/loader/Loader';

const LoginForm = ({
  show, onSubmit, onChange, submitted
}) => (
  <div className={`tab-pane ${show ? 'selected' : ''}`} id='login'>
    <form encType='application/x-www-form-urlencoded' onSubmit={onSubmit}>
      {submitted && <Loader />}
      <div className='form-row'>
        <div className='form-heading'>
          <p>Log in to your account, to acces your journals</p>
        </div>
        <div className='alert error-flash errors hide-error' id='email-error' />
        <div className='row'>
          <input
            type='text'
            className='form-input'
            onChange={onChange}
            name='email'
            autoComplete='username'
            placeholder='Email Address'
          />
        </div>
        <div className='row'>
          <input
            type='password'
            className='form-input'
            onChange={onChange}
            name='password'
            autoComplete='current-password'
            placeholder='Password'
          />
        </div>
        <div>
          <input type='submit' value='Log in' className='btn btn-primary form-input' />
        </div>
        <p className='login-small-signup'>
          or{' '}
          <span>
            <a href='#'>Sign up</a>
          </span>
        </p>
      </div>
    </form>
  </div>
);

LoginForm.propTypes = {
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  submitted: PropTypes.bool,
};

export default LoginForm;
