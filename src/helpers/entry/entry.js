// react libraries
import React from 'react';

// components
import SingEntryItem from '../../components/general/entry/SingleEntry';

const getFormatedListEntry = (entries, showEntry) => entries
  .map((entry, index) => <SingEntryItem key={index} entry={entry} showEntry={showEntry}/>);

export default getFormatedListEntry;
