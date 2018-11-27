// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const HeaderHome = props => (
      <header className="home-header">
          <img className="loading-indicator" src="/images/icons/loading_spinner3.gif" />
            <div className="container-fluid">
                <div className="brand">
                    <div>
                            My Dairy
                    </div>
                    <span className="icon-bar hide" id="menu-icon"></span>
                </div>
                <nav>
                    <ul className="navbar">
                        <li className="nav-link">
                            <a href="index.html">
                                Home
                            </a>
                        </li>
                        <li className="nav-link">
                            <a href="#"
                                onClick={props.openModal}
                                data-target="sign-up-login"
                                data-toggle="login"
                            >
                                login
                            </a>
                        </li>
                        <li className="nav-link" >
                            <a href="#"
                                data-toggle="signup"
                                onClick={props.openModal}
                                data-target="sign-up-login">
                                Sign up for Free
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="intro">
                <div id="home-text">
                    <h1>Welcome to My Diary</h1>
                    <p>A place to pen down all your toughts</p>
                    <a href="#how-it-works" className="btn btn-primary how-it-works-btn">How It Works</a>
                </div>

            </div>
        </header>
);

HeaderHome.propTypes = {
  openModal: PropTypes.func,
};

export default HeaderHome;
