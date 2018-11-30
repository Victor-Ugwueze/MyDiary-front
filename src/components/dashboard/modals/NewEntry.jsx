// react libraries
import React, { Component } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

/**
 * @class NewEntryModal
 */
class NewEntryModal extends Component {
  render = () => (
    <div className={`modal ${this.props.isOpen && 'show'}`} id='add-new-entry'>
      <div className='modal-content col-2'>
        <div className='modal-heading'>
          <div id='title'>
            <h4>Add Entry</h4>
          </div>
          <div className='close close-btn' data-target='add-new-entry' onClick={this.props.close}>
            X
          </div>
          <div className='alert error-flash' />
        </div>
        <form id='add-entry-form' onSubmit={this.props.onSubmit}>
          <div className='form-row'>
            <div className='row'>
              <input
                type='text'
                name='title'
                id=''
                className='form-input'
                placeholder='What is on your mind ?'
              />
            </div>
            <div className='row'>
              <textarea name='body' className='entry-body' cols='30' rows='10' />
            </div>
            <div>
              <input
                id='add-entry-submit'
                type='submit'
                value='Create Entry'
                className='btn btn-primary'
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

NewEntryModal.propTypes = {
  current: PropTypes.bool,
  openNewEntryModal: PropTypes.func,
};

export default NewEntryModal;
