// react libraries
import React, { Component, Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';


// components
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import HeaderHome from '../general/header/HeaderHome';
import HeroSection from './HeroSection';
import Footer from '../general/footer/Footer';
import Modal from '../general/modal/Modal';


/**
 * @class LandingPage
 * @desc renders Landing
 * @param {object} event
 */
class LandingPage extends Component {
    state = {
      isModalOpen: false,
      signup: false,
      login: false,
    }

    openModal = (event) => {
      let hide = 'signup';
      hide = [event.target.dataset.toggle] == 'signup' ? 'login' : hide;
      this.setState({
        [event.target.dataset.toggle]: true,
        [hide]: false,
        isModalOpen: true
      });
    }

    toggleForm = (event) => {
      this.openModal(event);
    }


    render = () => (
        <Fragment>
            <HeaderHome openModal={this.openModal}/>
            <HeroSection />
            <section>
            <Modal isModalOpen={this.state.isModalOpen}>
            <div className="nav-tabs" role="tablist">
                    <a className={`nav-item ${this.state.login && 'active'}`}
                    data-toggle="login"
                    id="select-tab-login"
                    role="tab"
                    onClick={this.toggleForm}>
                        Login
                    </a>
                    <a
                      className={`nav-item ${this.state.signup && 'active'}`}
                      data-toggle="signup"
                      id="select-tab-signup"
                      role="tab"
                    onClick={this.toggleForm} >
                        Sign Up
                    </a>
                    </div>
                    <div className="tab-conten row">
                        <LoginForm
                        show={this.state.login}/>
                        <SignupForm
                        show={this.state.signup}/>
                    </div>
            </Modal>
            </section>
            <Footer />
        </Fragment>
    )
}

LandingPage.propTypes = {
  register: PropTypes.func,
  auth: PropTypes.object,
  doLogin: PropTypes.func,
};

export default LandingPage;
