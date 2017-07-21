import { connect } from 'react-redux';
import Nav from './nav';
import { logout } from '../../actions/session_actions';

const mapStateToProps = ({session}, routeProps) => ({
  currentUser: session.currentUser,
  routeProps: routeProps
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);
