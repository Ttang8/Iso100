import React from 'react';
import SessionFormContainer from './session_form/session_form_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import HomeContainer from './home/home_container';
import NavBar from './nav/navbar';

const App = () => (
  <div>
    <div className="navbar">
      <NavBar />
    <HomeContainer />
    </div>
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
