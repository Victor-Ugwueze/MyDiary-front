// react libraries
import React, { Fragment } from 'react';

// third-party libraries
import PropTypes from 'prop-types';

// components
import Loader from '../../general/loader/Loader';

const ViewSingleArticleModal = ({
  isOpen, entry, close, progress
}) => (
  <div className={`modal ${isOpen && 'show'}`} id='view-single-diary'>
    <div className='modal-content col-2 loader-container'>
      {progress === 'ongoing' ? (
        <Loader />
      ) : (
        <Fragment>
          <div className='modal-heading'>
            <div id='user' />
            <div className='close close-btn' data-target='showEntry' onClick={close}>
              X
            </div>
          </div>
          <div id='diary-content'>
            <h4>{entry.title}</h4>
            <span className='date' />
            <textarea name='body' id='body' cols='30' rows='10' disabled value={entry.body} />
          </div>
        </Fragment>
      )}
    </div>
  </div>
);

ViewSingleArticleModal.propTypes = {
  isOpen: PropTypes.bool,
  entry: PropTypes.object,
  close: PropTypes.func,
  progress: PropTypes.bool,
};

export default ViewSingleArticleModal;
