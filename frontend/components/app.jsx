import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import { Link, Route } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <div className="navbar">
      <header>
        <Link to="/">
          <div className="logo-pic">
            <img src="http://res.cloudinary.com/iso100app/image/upload/c_scale,h_100,w_100/v1500430154/iso100_logo_vpr2xk.png"></img>
            <h1 className="sitename">
              <Link className="iso100" to="/">ISO100</Link>
            </h1>
          </div>
        </Link>
        <HomeContainer />
      </header>
    </div>
    <AuthRoute path="/login" component={SessionFormContainer}/>
    <AuthRoute path="/signup" component={SessionFormContainer}/>

    <footer>

    </footer>
  </div>
);

export default App;
