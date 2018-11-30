// third party libraries
import { connect } from 'react-redux';

// components
import Dashboard from '../../components/dashboard/Dashboard';

// actions
import { createEntry } from '../../actions/entry/singleEntry';
import { getListEntries } from '../../actions/entry/listEntry';


// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  auth: state.auth,
  entries: state.entries
});

const mapDispatchToProps = {
  addEntry: data => createEntry(data),
  getListEntries: () => getListEntries(),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
