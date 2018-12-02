// third party libraries
import { connect } from 'react-redux';

// components
import Dashboard from '../../components/dashboard/Dashboard';

// actions
import { createEntry } from '../../actions/entry/singleEntry';
import { getListEntries } from '../../actions/entry/listEntry';
import { getSingleEntry } from '../../actions/entry/getSingleEntry';
import { updateEntry } from '../../actions/entry/updateEntry';
import { deleteEntry } from '../../actions/entry/deleteEntry';
import { getProfile } from '../../actions/profile/profile';
import { updateProfile } from '../../actions/profile/updateProfile';

// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState) => ({
  auth: state.auth,
  entries: state.entries,
  singleEntry: state.getSingleEntry,
  userProfile: state.getProfile
});

const mapDispatchToProps = {
  addEntry: data => createEntry(data),
  getListEntries: () => getListEntries(),
  getSingleEntry: id => getSingleEntry(id),
  upate: (entry, id) => updateEntry(entry, id),
  deleteSingleItem: id => deleteEntry(id),
  getProfile: () => getProfile(),
  updateProfile: data => updateProfile(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
