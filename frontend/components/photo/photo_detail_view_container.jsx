import { connect } from 'react-redux';
import PhotoDetailView from './photo_detail_view';
import { requestPhoto, deletePhoto, updatePhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ session, photos }, routeProps) => {
  return {
    currentUser: session.currentUser,
    photoId: routeProps.match.params.photoId,
    photo: photos[routeProps.match.params.photoId]
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhoto: photo => dispatch(requestPhoto(photo)),
  deletePhoto: photo => dispatch(deletePhoto(photo)),
  updatePhoto: photo => dispatch(updatePhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetailView);
