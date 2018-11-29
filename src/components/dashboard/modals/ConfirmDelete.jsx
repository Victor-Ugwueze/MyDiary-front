// react libraries
import React from 'react';

const ConfirmDeleteModal = () => (
  <div className='modal' id='confirm-delete'>
    <div className='modal-content col-2'>
      <div className='modal-heading'>
        <div id='title'>
          <h4>Are you sure you want to delete</h4>
        </div>
        {/* div className="close close-btn" data-target="add-new-entry">X</div> */}
      </div>
      <div className='modal-body'>
        <img className='delete-icon' src='/images/icons/delete.png' />
      </div>
      <div className='modal-footer'>
        <div>
          <button className='btn btn-primary dailog-ok'>Ok</button>
          <button data-target='confirm-delete' className='close btn btn-secondary'>
            Cancel
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ConfirmDeleteModal;
