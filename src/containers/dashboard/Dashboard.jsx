// third party libraries
import { connect } from 'react-redux';

// components
import Dashboard from '../../components/dashboard/Dashboard';


// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  auth: state.auth
});


export default connect(mapStateToProps)(Dashboard);
