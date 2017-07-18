import { connect } from 'react-redux';
import { login, logout, signup } from '../../actions/session_actions';
import NavBar from './nav_bar';

const mapStateToProps = ({ session }) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(
  mapStateToProps
)(NavBar);
