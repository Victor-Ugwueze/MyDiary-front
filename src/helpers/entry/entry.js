// react libraries
import React from 'react';

// components
import SingleEntryItem from '../../components/general/entry/SingleEntry';

const getFormatedListEntry = (entries, showEntry, updateEntry) => entries.map((entry, index) => (
    <SingleEntryItem key={index} entry={entry} updateEntry={updateEntry} showEntry={showEntry} />
));

export default getFormatedListEntry;
