// third party libraries
import { connect } from 'react-redux';

// components
import Dashboard from '../../components/dashboard/Dashboard';

// actions
import { createEntry } from '../../actions/entry/singleEntry';
import { getListEntries } from '../../actions/entry/listEntry';
import { getSingleEntry } from '../../actions/entry/getSingleEntry';
import { updateEntry } from '../../actions/entry/updateEntry';


// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  auth: state.auth,
  entries: state.entries,
  entry: state.getSingleEntry.entry
});

const mapDispatchToProps = {
  addEntry: data => createEntry(data),
  getListEntries: () => getListEntries(),
  getSingleEntry: id => getSingleEntry(id),
  upate: id => updateEntry(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
