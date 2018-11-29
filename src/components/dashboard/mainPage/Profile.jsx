// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const ProfileSection = ({ current }) => (
  <div id='profile' className={`profile-section ${current && 'selected'} tab-pane`}>
    <div className='user-profile'>
      {/* <div id="account">
       <div className="picture">
           <!-- <img src="/images/profile.jpg" id="profile-picture" />
           <div id="upload-input-icon">
               <img src="/images/icons/add_photo_white.png" />
               <input type="file" className="profile-upload" accept="image/*" />
         </div>
       </div>
   </div> */}
      <div className='profile-details'>
        <div>
          <form encType='application/x-www-htmlform-urlencoded' id='update-profile'>
            <h4>Profile Details</h4>
            <div className='errors' id='profile-error' />
            <div className='item'>
              <label htmlFor='firstname'>First Name</label>
              <input type='text' className='htmlform-input' name='firstName' />
            </div>
            <div className='item'>
              <label htmlFor='lastname'>Last Name</label>
              <input type='text' className='htmlform-input' name='lastName' />
            </div>
            <div className='item'>
              <label htmlFor='email'>Email</label>
              <input type='email' className='htmlform-input' name='email' />
            </div>
            <div className='item'>
              <label htmlFor='location'>Location</label>
              <input id='location' type='text' className='htmlform-input' name='location' />
            </div>
            <button
              data-target='update-password'
              type='button'
              className='btn btn-primary change-password'>
              Change password
            </button>
            <button id='save' type='submit' className='btn btn-primary' disabled>
              Save
            </button>
            <span className='hide saving-settings-indicator'>Saving...</span>
          </form>
        </div>
        <div id='total-entry-created'>
          <h4>Activity</h4>
          <span id='entries_created' />
          <div>
            <p className='joined date'>
              Joined <span id='date-registered' />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

ProfileSection.propTypes = {
  current: PropTypes.bool,
};

export default ProfileSection;
