// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import alert from 'sweetalert';

// components
import ChangePasswordModal from '../modals/ChangePassword';

// helpers
import validator from '../../../helpers/validator';

/**
 * @class ProfileSection
 */
class ProfileSection extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    location: '',
    entryCount: 0,
  };

  /**
   *@param {onject} prevProps
   * @memberof ProfileSection
   */
  componentDidUpdate = (prevProps) => {
    if (prevProps.userProfile.progress === 'done') {
      const { user, entryCount } = this.props.userProfile;
      this.setState({
        firstName: user.first_name,
        lastName: user.last_name,
        email: user.email,
        location: user.location,
        entryCount,
        changed: false,
        error: '',
        submit: true,
        isPassowordModalOpen: false,
      });
    }
  };

  /**
   *@param {object} event
   * @memberof ProfileSection
   */
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
      changed: true,
      error: '',
      submit: false,
    });
  };

  validateProfile = () => {
    const errors = validator.validate(this.state, ['email', 'name']);
    console.log(errors);
    if (!errors.length > 0) {
      return false;
    }
    return errors;
  };

  /**
   *@param {object} event
   * @memberof ProfileSection
   */
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      changed: false,
      submit: true,
    });
    const errors = this.validateProfile();
    if (errors) {
      this.setState({
        error: errors[0].message,
      });
      return;
    }
    this.props.updateProfile(this.state)
      .then(() => {
        this.props.getProfile();
        alert('Profile updated succesfully');
      });
  };

  handlePasswordChange = () => {
    this.setState({
      isPassowordModalOpen: true
    });
  }

  componentDidMount = () => {
    this.props.getProfile();
  };

  render = () => (
    <div id='profile' className={`profile-section ${this.props.current && 'selected'} tab-pane`}>
      <div className='user-profile'>
        <div className='profile-details'>
          <div>
            <form onSubmit={this.handleSubmit} id='update-profile'>
              <h4>Profile Details</h4>
              <div
                className={`alert error-flash ${this.state.error !== ''
                  && this.state.submit
                  && 'show'}`}>
                {this.state.error}
              </div>
              <div className='item'>
                <label htmlFor='firstname'>First Name</label>
                <input
                  type='text'
                  className='htmlform-input'
                  name='firstName'
                  value={this.state.firstName}
                  onChange={this.onChange}
                />
              </div>
              <div className='item'>
                <label htmlFor='lastname'>Last Name</label>
                <input
                  type='text'
                  className='htmlform-input'
                  name='lastName'
                  value={this.state.lastName}
                  onChange={this.onChange}
                />
              </div>
              <div className='item'>
                <label htmlFor='email'>Email</label>
                <input
                  type='email'
                  className='htmlform-input'
                  name='email'
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <div className='item'>
                <label htmlFor='location'>Location</label>
                <input
                  id='location'
                  type='text'
                  className='htmlform-input'
                  name='location'
                  value={this.state.location !== null ? this.state.location : ''}
                  onChange={this.onChange}
                />
              </div>
              <button
                data-target='update-password'
                type='button'
                onClick={this.handlePasswordChange}
                className='btn btn-primary change-password'>
                Change password
              </button>
              <button
                id='save'
                type='submit'
                className='btn btn-primary'
                disabled={this.state.changed !== true}>
                Save
              </button>
              <span className='hide saving-settings-indicator'>Saving...</span>
            </form>
          </div>
          <div id='total-entry-created'>
            <h4>Activity</h4>
            <span id='entries_created'>
              {`you have created ${this.state.entryCount}`}{' '}
              {this.state.entryCount > 1 ? 'entries' : 'entry'}
            </span>
            <div>
              <p className='joined date'>
                Joined{' '}
                <span id='date-registered'>
                  {new Date(this.props.userProfile.user.created_at).toDateString()}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ChangePasswordModal isOpen={this.state.isPassowordModalOpen}/>
    </div>
  );
}

ProfileSection.propTypes = {
  current: PropTypes.bool,
  userProfile: PropTypes.object,
  getProfile: PropTypes.func,
  updateProfile: PropTypes.func,
};

export default ProfileSection;
