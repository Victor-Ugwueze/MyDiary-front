// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Loader from '../general/loader/Loader';

const SignupForm = ({
  show, onSubmit, onChange, submitted
}) => (
  <div className={`tab-pane ${show ? 'selected' : ''}`} id='signup'>
    <form encType='application/x-www-form-urlencoded' onSubmit={onSubmit}>
      {submitted && <Loader />}
      <div className='form-heading'>
        <h4>Sign up to My Diary</h4>
        <p>Enjoy the expereinces of having all your thouhgts in one place</p>
      </div>
      <div className='form-row'>
        <p className='errors alert error-flash hide-error' id='signup-error' />
        <div className='row'>
          <div className='col-2 form-col'>
            <input
              type='text'
              className='form-input'
              onChange={onChange}
              name='firstName'
              placeholder='FIrst Name'
            />
          </div>
          <div className='col-2'>
            <input
              type='text'
              className='form-input'
              onChange={onChange}
              name='lastName'
              placeholder='Last Name'
            />
          </div>
        </div>
        <div className='row'>
          <input
            type='text'
            className='form-input'
            onChange={onChange}
            name='email'
            placeholder='Email Address'
          />
        </div>
        <div className='row'>
          <div className='col-2 form-col'>
            <input
              type='password'
              className='form-input'
              name='password'
              onChange={onChange}
              autoComplete='current-password'
              placeholder='Password'
            />
          </div>
          <div className='col-2'>
            <input
              type='password'
              className='form-input'
              name='confirmPassword'
              onChange={onChange}
              autoComplete='confirm-password'
              placeholder='Confirm Password'
            />
          </div>
        </div>
        <div className='row' id='terms-of-use'>
          <input type='checkbox' />
          <label>
            Agree to our
            <a href='#'>Terms of use</a> and
            <a href='#'>Privacy policy</a>
          </label>
        </div>
        <div>
          <input type='submit' value='Sign up' className='btn btn-primary form-input' />
        </div>
      </div>
    </form>
  </div>
);

SignupForm.propTypes = {
  show: PropTypes.bool,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  submitted: PropTypes.bool,
};

export default SignupForm;
