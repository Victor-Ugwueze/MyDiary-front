// react libraries
import React from 'react';

const ViewSingleArticleModal = () => (
  <div className='modal' id='view-single-diary'>
    <div className='modal-content col-2'>
      <img src='/images/icons/loading_spinner3.gif' className='loading_spinner_edit' />
      <div className='modal-heading'>
        <div id='user' />
        <div className='close close-btn' data-target='view-single-diary'>
          X
        </div>
      </div>
      <div id='diary-content'>
        <h4 />
        <span className='date' />
        <textarea name='body' id='body' cols='30' rows='10' disabled />
        {/* <img src="/images/loading_spinner.gif"
                  className="loading_spinner_edit"> */}
      </div>
    </div>
  </div>
);

export default ViewSingleArticleModal;
