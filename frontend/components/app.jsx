import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Link, Route, Switch } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import NavBar from './nav/navbar';
import FootBar from './footer_bar/footer_bar';
import PhotoDetailViewContainer from './photo/photo_detail_view_container';
import UserPageContainer from './user_page/user_page_container';

const App = () => (
  <div>
    <div className="navbar">
    <NavBar />
    </div>

    <Route exact path="/" component={HomeContainer} />
    <ProtectedRoute path="/photos/:photoId" component={PhotoDetailViewContainer} />
    <ProtectedRoute path="/userpage/:userId" component={UserPageContainer} />


    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
    <FootBar />
  </div>
);

export default App;
