import { connect } from 'react-redux';
import PhotoUploadForm from './photo_upload_form';
import { createPhoto } from '../../actions/photo_actions';

const mapStateToProps = ({ photos }) => ({
  photos
});

const mapDispatchToProps = (dispatch, {location}) => ({
  createPhoto: photo => dispatch(createPhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoUploadForm);
