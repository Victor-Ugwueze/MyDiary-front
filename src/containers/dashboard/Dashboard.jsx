// third party libraries
import { connect } from 'react-redux';

// components
import Dashboard from '../../components/dashboard/Dashboard';

// actions
import { createEntry } from '../../actions/entry/singleEntry';


// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  auth: state.auth
});

const mapDispatchToProps = {
  addEntry: data => createEntry(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
