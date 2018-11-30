// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const ViewSingleArticleModal = ({ isOpen, entry, close }) => (
  <div className={`modal ${isOpen && 'show'}`} id='view-single-diary'>
    <div className='modal-content col-2'>
      <img src='/images/icons/loading_spinner3.gif' className='loading_spinner_edit' />
      <div className='modal-heading'>
        <div id='user' />
        <div className='close close-btn' data-target='showEntry' onClick={close}>
          X
        </div>
      </div>
      <div id='diary-content'>
        <h4>{entry.title}</h4>
        <span className='date' />
        <textarea name='body' id='body' cols='30' rows='10' disabled value={entry.body}/>
        {/* <img src="/images/loading_spinner.gif"
                  className="loading_spinner_edit"> */}
      </div>
    </div>
  </div>
);

ViewSingleArticleModal.propTypes = {
  isOpen: PropTypes.bool,
  entry: PropTypes.object,
  close: PropTypes.func,
};

export default ViewSingleArticleModal;
