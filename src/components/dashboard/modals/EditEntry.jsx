// react libraries
import React from 'react';

const EditEntryModal = ({ isOpen }) => (
  <div className={`modal ${isOpen && 'show'}`} id='edit-diary-entry'>
    <div className='modal-content col-2'>
      <img src='/images/icons/loading_spinner3.gif' className='loading_spinner_edit' />
      <div className='modal-heading'>
        <div id='title'>
          <h4>Edit Entry</h4>
        </div>
        <div className='close close-btn' data-target='edit-diary-entry'>
          X
        </div>
        <div className='alert error-flash' />
      </div>
      <div>
        <form encType='application/x-www-form-urlencoded' id='edit-diary-entry-form'>
          <div className='form-row'>
            <div className='row'>
              <input
                type='text'
                name='title'
                id='diary-title'
                className='form-input'
                placeholder='Title...'
              />
            </div>
            <div className='row'>
              <textarea name='body' id='diary-body' cols='30' rows='10' />
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
    </div>
  </div>
);

export default EditEntryModal;
