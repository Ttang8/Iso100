import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container';

const App = () => (
  <div>
    <div className="navbar">
      <header>
        <h1 className="sitename">
          <Link to="/">ISO100</Link>
        </h1>
        <HomeContainer />
      </header>
    </div>

    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
