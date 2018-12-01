// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';
import alert from 'sweetalert';

const ListEntrySection = ({
  current, openNewEntryModal, entries, isDelete
}) => (
  <div id='diary' className={`dashboard-section tab-pane ${current && 'selected'} container`}>
    <div id='add-entry'>
      <button
        className='btn btn-primary add-entry'
        data-target='add-new-entry'
        onClick={openNewEntryModal}>
        New Entry
      </button>
    </div>
    <div id='dairy-content'>
      <div id='diary-heading'>
        <h4 id='title'>Diary Entry</h4>
        <h4 className='entry-head' id='created-at'>
          Date Cretated
        </h4>
        <h4 className='entry-head' id='action'>
          Action
        </h4>
      </div>
      <ul id='dairy-entries'>{entries}</ul>
    </div>
    <div className='pagination' />
    <input type='hidden' id='entryCount' />
  </div>
);

ListEntrySection.propTypes = {
  current: PropTypes.bool,
  openNewEntryModal: PropTypes.func,
  entries: PropTypes.array,
};

export default ListEntrySection;
