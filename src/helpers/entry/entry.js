// react libraries
import React from 'react';

// components
import SingEntryItem from '../../components/general/entry/SingleEntry';

const getFormatedListEntry = entries => entries
  .map((entry, index) => <SingEntryItem key={index} entry={entry} />);

export default getFormatedListEntry;
