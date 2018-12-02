// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SideBar = ({
  isSidebarOpen, onClick, currentView, openNewEntryModal
}) => (
  <div id='left-section'>
    <ul className={`nav-tabs ${isSidebarOpen ? 'show-sidebar' : 'hide-sidebar'} `} role='tablist'>
      <li>
        <div className='nav-item-row'>
          <div className='icon'>
            <img
              className='add-entry'
              data-target='add-new-entry'
              src='/images/icons/diary_add_white.png'
            />
          </div>
          <div className='text'>
            <h3 className='add-entry' data-target='add-new-entry' onClick={openNewEntryModal}>
              New Entry
            </h3>
          </div>
        </div>
      </li>
      <li>
        <div
          className={`nav-item-row nav-it ${currentView.diary && 'active'} dairy`}
          data-target='diary'
          onClick={onClick}>
          <img className='icon' src='/images/icons/diary_icon_list_white.png' data-target='diary' />
          <h3 className='text' role='tab' data-target='diary'>
            My Diary
          </h3>
        </div>
      </li>
      <li>
        <div
          className={`nav-item-row ${currentView.settings && 'active'} nav-it settings`}
          data-target='settings'
          onClick={onClick}>
          <img className='icon' src='/images/icons/settings_icon.png' data-target='settings' />
          <h3 className='text' role='tab' data-target='settings'>
            Settings
          </h3>
        </div>
      </li>
      <li>
        <div
          className={`nav-item-row nav-it get-profile ${currentView.profile && 'active'}`}
          data-target='profile'
          onClick={onClick}>
          <img className='icon' src='/images/icons/profile_icon_white.png' data-target='profile' />
            <h3 className='text' role='tab' data-target='profile'>
              Profile
            </h3>
        </div>
      </li>
      <div id='logout' className='nav-item-row nav-it'>
        <div className='icon'>
          <img src='/images/icons/logout.png' />
        </div>
        <div>
          <Link to='/logout'>Log out</Link>
        </div>
      </div>
    </ul>
  </div>
);

SideBar.propTypes = {
  isSidebarOpen: PropTypes.bool,
  onClick: PropTypes.func,
  currentView: PropTypes.object,
  openNewEntryModal: PropTypes.func,
};

export default SideBar;
