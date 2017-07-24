import { connect } from 'react-redux';
import Navbar from './navbar';

const mapStateToProps = ({session}) => ({
  currentUser: session.currentUser
});

export default connect(
  mapStateToProps
)(Navbar);
