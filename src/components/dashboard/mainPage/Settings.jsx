// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const SettingsSection = ({ current }) => (
  <div id='settings' className={`dashboard-section tab-pane ${current && 'selected'}`}>
    <div className='setting-page row'>
      <ul>
        <li>
          <h4 id='setting-title'>Notifications</h4>
          <div className='Notification-list'>
            <div id='add-notification-item'>{/* <a href="">+ Add new reminnder</a> */}</div>
            <div className='Notification-item'>
              <p className='title'>We will remind you to write your journal</p>
              <input type='checkbox' id='reminder-journal' className='email-subscribe-update' />
              <span className='hide saving-settings-indicator'>Saving...</span>
            </div>
          </div>
        </li>
        <li>
          <h4>News Letter</h4>
          <div id='news-letter'>
            <p className='title'>Receive monthly news Letter</p>
            <input type='checkbox' id='receive-newsletter' className='email-subscribe-update' />
            <span className='hide saving-settings-indicator'>Saving...</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
);

SettingsSection.propTypes = {
  current: PropTypes.bool,
};

export default SettingsSection;
