import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import ErrorReducer from './error_reducer';
import AlbumReducer from './album_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  albums: AlbumReducer,
  errors: ErrorReducer,
  comments: CommentReducer
});

export default rootReducer;
