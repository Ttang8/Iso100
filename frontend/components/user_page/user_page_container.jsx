import { connect } from 'react-redux';
import UserPage from './user_page';
import { selectUserPhotos, selectAllPhotos } from '../../reducers/selectors';
import { requestPhotos } from '../../actions/photo_actions';


const mapStateToProps = ({photos}, routeProps) => {
  let userId = routeProps.match.params.userId;
  let allPhotos = selectAllPhotos(photos);
  return {
    userPhotos: selectUserPhotos(allPhotos, userId)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestPhotos: () => dispatch(requestPhotos())
  };
};

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
