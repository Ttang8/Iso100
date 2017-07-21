import { connect } from 'react-redux';
import UserPage from './user_page';
import { selectUserPhotos, selectAllPhotos } from '../../reducers/selectors';


const mapStateToProps = ({photos}, routeProps) => {
  let userId = routeProps.match.params.userId;
  let allPhotos = selectAllPhotos(photos);
  return {
    userPhotos: selectUserPhotos(allPhotos, userId)
  };
};

export default connect (
  mapStateToProps,
  null
)(UserPage);
