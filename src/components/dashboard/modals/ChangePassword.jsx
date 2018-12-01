// react libraries
import React from 'react';

const ChangePasswordModal = () => (
  <div className='modal show' id='update-password'>
    <div className='modal-content col-2'>
      <div className='modal-heading row'>
        <div id='title'>
          <h4>Change password</h4>
        </div>
        <div className='close close-btn' data-target='update-password'>
          X
        </div>
      </div>
      <form encType='application/x-www-form-urlencoded' id='change-password'>
        <div className='errors' id='password-error' />
        <div className='item'>
          <label htmlFor='firstname'>Current password</label>
          <input type='password' className='form-input' name='currentPassword' />
        </div>
        <div className='item'>
          <label htmlFor='lastname'>New password</label>
          <input type='password' className='form-input' name='password' />
        </div>
        <div className='item'>
          <label htmlFor='lastname'>New password</label>
          <input type='password' className='form-input' name='confirmPassword' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Change
        </button>
        <span className='hide saving-settings-indicator'>Updating...</span>
      </form>
    </div>
  </div>
);

export default ChangePasswordModal;
