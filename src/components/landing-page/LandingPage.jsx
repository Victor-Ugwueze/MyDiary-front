// react libraries
import React, { Component, Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';

// helpers
import validator from '../../helpers/validator';

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
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: '',
    submitted: false,
  };

  openModal = (event) => {
    let hide = 'signup';
    hide = [event.target.dataset.toggle] == 'signup' ? 'login' : hide;
    this.setState({
      [event.target.dataset.toggle]: true,
      [hide]: false,
      isModalOpen: true,
    });
  };

  toggleForm = (event) => {
    this.openModal(event);
  };

  /**
   * @param {object} input
   * @memberof LandingPage
   * @return {object} data
   */
  getFormInput = (input) => {
    const formInput = new FormData(input);
    const data = {
      firstName: formInput.get('firstName'),
      lastName: formInput.get('lastName'),
      email: formInput.get('email'),
      location: formInput.get('location'),
      currentPassword: formInput.get('currentPassword'),
      password: formInput.get('password'),
      confirmPassword: formInput.get('confirmPassword'),
    };
    return data;
  };

  signup = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    const errors = validator.validate(this.state, ['email', 'password', 'name', 'confirmPassword']);
    if (!errors.length > 0) {
      this.props.register(this.state);
      return;
    }
    this.setState({
      submitted: false,
      error: errors[0].message,
    });
  };

  login = (event) => {
    event.preventDefault();
    this.setState({
      submitted: true,
    });
    const data = this.getFormInput(event.target);
    const errors = validator.validate(this.state, ['email']);
    if (!errors.length > 0) {
      this.props.doLogin(data);
      return;
    }
    this.setState({
      submitted: false,
      error: errors[0].message,
    });
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      submitted: false,
      error: '',
    });
  };

  render = () => {
    const { auth } = this.props;
    if (auth.isAuth) {
      return (
        <Redirect
          to={{
            pathname: '/dashboard',
            user: auth.user,
            isAuth: auth.isAuth,
          }}
        />
      );
    }
    return (
      <Fragment>
        <HeaderHome openModal={this.openModal} />
        <HeroSection />
        <section>
          <Modal isModalOpen={this.state.isModalOpen}>
            <div className='nav-tabs' role='tablist'>
              <div className={`alert error-flash ${this.state.error !== '' && 'show'}`}>
                {this.state.error}
              </div>
              <a
                className={`nav-item ${this.state.login && 'active'}`}
                data-toggle='login'
                id='select-tab-login'
                role='tab'
                onClick={this.toggleForm}>
                Login
              </a>
              <a
                className={`nav-item ${this.state.signup && 'active'}`}
                data-toggle='signup'
                id='select-tab-signup'
                role='tab'
                onClick={this.toggleForm}>
                Sign Up
              </a>
            </div>
            <div className='tab-conten row'>
              <LoginForm
                onChange={this.onChange}
                show={this.state.login}
                onSubmit={this.login}
                submitted={this.state.submitted}
              />
              <SignupForm
                onChange={this.onChange}
                onSubmit={this.signup}
                show={this.state.signup}
              />
            </div>
          </Modal>
        </section>
        <Footer />
      </Fragment>
    );
  };
}

LandingPage.propTypes = {
  register: PropTypes.func,
  auth: PropTypes.object,
  doLogin: PropTypes.func,
};

export default LandingPage;
