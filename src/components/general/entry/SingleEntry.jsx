// react libraries
import React from 'react';

const EntryItem = entry => (
    <li className='entry-item'>
      <div className=''>
        <h4 className='sing-diary-title diary-text'>{entry.entry.title}</h4>
        <p className='sing-diary-body diary-text'>{entry.entry.body}</p>
      </div>
      <p className='created-at'>{entry.entry.created_at}</p>
      <a className='action'>
        <span data-target='edit-diary-entry' className='btn btn-primary action-edit'>
          <img className='diary-edit icon-edit' src='/images/edit.png' />
          <span className='edit-text'>Edit</span>
        </span>
        &nbsp;|
        <span className='btn btn-danger action-delete'>
          <img className='diary-edit icon-edit' src='/images/delete-button.png' />
          <span className='delete-text'>Delete</span>
        </span>
      </a>
      <div className='arrow-up' />
    </li>
);

export default EntryItem;
