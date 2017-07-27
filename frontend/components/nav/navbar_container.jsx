import { connect } from 'react-redux';
import Navbar from './navbar';
import { clearErrors } from '../../actions/photo_actions';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, {location}) => ({
  clearErrors: () => dispatch(clearErrors())
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
