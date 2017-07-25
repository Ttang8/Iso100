import { connect } from 'react-redux';
import PhotoDetailView from './photo_detail_view';
import { requestPhoto, deletePhoto, updatePhoto } from '../../actions/photo_actions';
import { requestAlbums } from '../../actions/album_actions';
import { selectAllAlbums } from '../../reducers/selectors';

const mapStateToProps = ({ session, photos, albums }, routeProps) => {
  let photo = photos[routeProps.match.params.photoId];
  return {
    currentUser: session.currentUser,
    photoId: routeProps.match.params.photoId,
    photo: photo,
    albums: selectAllAlbums(albums),
  };
};

const mapDispatchToProps = dispatch => ({
  requestPhoto: photo => dispatch(requestPhoto(photo)),
  deletePhoto: photo => dispatch(deletePhoto(photo)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  requestAlbums: () => dispatch(requestAlbums())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetailView);
