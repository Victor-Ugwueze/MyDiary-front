// react libraries
import React, { Component, Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Loader from '../../general/loader/Loader';

/**
 * @class EditEntryModal
 * @extends {Component}
 */
class EditEntryModal extends Component {
  state = {
    title: '',
    body: '',
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  componentDidUpdate = (prevProps) => {
    if (prevProps.progress === 'done') {
      this.setState({
        title: this.props.entry.title,
        body: this.props.entry.body,
      });
    }
  };

  render = () => {
    const { isOpen, close, update } = this.props;
    return (
      <div className={`modal ${isOpen && 'show'}`} id='edit-diary-entry'>
        <div className='modal-content col-2 loader-container'>
          {this.props.progress === 'ongoing' ? (
            <Loader />
          ) : (
            <Fragment>
              {' '}
              <div className='modal-heading'>
                <div id='title'>
                  <h4>Edit Entry</h4>
                </div>
                <div className='close close-btn' data-target='updateEntry' onClick={close}>
                  X
                </div>
                <div className='alert error-flash' />
              </div>
              <div>
                <form onSubmit={update} data-mode='update' data-id={this.props.entry.id}>
                  <div className='form-row'>
                    <div className='row'>
                      <input
                        type='text'
                        name='title'
                        id='diary-title'
                        className='form-input'
                        value={this.state.title}
                        onChange={this.onChange}
                        placeholder='Title...'
                      />
                    </div>
                    <div className='row'>
                      <textarea
                        name='body'
                        id='diary-body'
                        cols='30'
                        onChange={this.onChange}
                        rows='10'
                        value={this.state.body}
                      />
                    </div>
                    <input type='hidden' name='entry-id' id='entry-id' />
                    <div>
                      <input
                        id='btn-login'
                        type='submit'
                        value='Update Entry'
                        className='btn btn-primary'
                      />
                    </div>
                  </div>
                </form>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  };
}

EditEntryModal.propTypes = {
  isOpen: PropTypes.bool,
  close: PropTypes.func,
  entry: PropTypes.object,
  update: PropTypes.func,
  progress: PropTypes.bool,
};

export default EditEntryModal;
