// react libraries
import React from 'react';

// third-party libraries
import PropTypes from 'prop-types';

const EntryItem = ({
  entry, showEntry, updateEntry, deletEntry
}) => (
  <li className='entry-item'>
    <div className=''>
      <h4 className='sing-diary-title diary-text' data-id={entry.id} onClick={showEntry}>
        {entry.title}
      </h4>
      <p className='sing-diary-body diary-text'>{entry.body}</p>
    </div>
    <p className='created-at'>{entry.created_at}</p>
    <a className='action'>
      <span data-target='edit-diary-entry' className='btn btn-primary action-edit'>
        <img
          className='diary-edit icon-edit'
          src='/images/edit.png'
          onClick={updateEntry}
          data-id={entry.id}
          data-mode='edit'
        />
        <span className='edit-text' onClick={updateEntry} data-id={entry.id} data-mode='edit'>
          Edit
        </span>
      </span>
      &nbsp;|
      <span className='btn btn-danger action-delete'>
        <img
          className='diary-edit icon-edit'
          src='/images/delete-button.png'
          onClick={deletEntry}
          data-mode='initiate'
          data-id={entry.id}
        />
        <span className='delete-text' data-mode='initiate' data-id={entry.id} onClick={deletEntry}>Delete</span>
      </span>
    </a>
    <div className='arrow-up' />
  </li>
);

EntryItem.propTypes = {
  entry: PropTypes.object,
  showEntry: PropTypes.func,
  updateEntry: PropTypes.func,
  deletEntry: PropTypes.func,
};

export default EntryItem;
