import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import PhotoReducer from './photo_reducer';
import ErrorReducer from './error_reducer';

const rootReducer = combineReducers({
  session: SessionReducer,
  photos: PhotoReducer,
  errors: ErrorReducer
});

export default rootReducer;
