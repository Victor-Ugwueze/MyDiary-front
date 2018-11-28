// third party libraries
import { connect } from 'react-redux';

// components
import LandingPage from '../../components/landing-page/LandingPage';

// actions
import signupAction from '../../actions/signup/signup';
import { loginAction } from '../../actions/auth/login';

// store
import initialState from '../../store/initialState';

const mapStateToProps = (state = initialState.signup) => ({
  signup: state.signup,
  auth: state.auth
});

const mapDispatchToProps = dispatch => ({
  register: data => dispatch(signupAction(data)),
  doLogin: data => dispatch(loginAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);
