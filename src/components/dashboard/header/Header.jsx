// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const Header = ({ onClick, user }) => (
  <header className="dashboard-header">
      <img className="loading-indicator" src="/images/loading_spinner.gif" />
    <span className="icon-bar menu-icon" onClick={onClick}></span>
    <div id="top-bar">
      <div className="brand">
          <img src="/images/logo.png" id="logo" />
      </div>
      <nav>
          <ul className="navbar">
            <div id="notification-icon">
              <img src="/images/icons/notification_white_1.png" />
              { /* <span id="number-of-notifications">7</span> */ }
            </div>
              <li className="nav-link">
                  <div className="dropdown">
                    <div className="user-img">
                        <img className="profile-img" src="/images/avatar.png" alt="" />
                        <span id="menu-firstname">{user.firstName}</span>
                    </div>
                  </div>
              </li>
          </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  onClick: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default Header;
