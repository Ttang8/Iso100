import * as APIUtil from '../util/photo_api_util';

export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const RECEIVE_PHOTOS = "RECEIVE_PHOTOS";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

export const receivePhotos = photos => ({
  type: RECEIVE_PHOTOS,
  photos
});

export const removePhoto = photo => ({
  type: REMOVE_PHOTO,
  photo
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const createPhoto = photo => dispatch => (
  ApiUtil.createPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const requestPhoto = photo => dispatch => (
  ApiUtil.requestPhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const requestPhotos = () => (dispatch) => (
  ApiUtil.requestPhotos().then(photos => dispatch(receivePhotos(photos)))
);

export const deletePhoto = photo => dispatch => (
  ApiUtil.destroyPhoto(photo).then(photo => dispatch(removePhoto(photo)))
);

export const updatePhoto = photo => dispatch => (
  ApiUtil.updatePhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);
