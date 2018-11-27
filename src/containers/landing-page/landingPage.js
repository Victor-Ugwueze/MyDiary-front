// third party libraries
import { connect } from 'react-redux';

// components
import LandingPage from '../../components/landing-page/LandingPage';

// actions
import signupAction from '../../actions/signup/signup';

// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  signup: state.signup,
  auth: state.auth
});

const mapDispatchToProps = {
  register: data => signupAction(data),
};

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
