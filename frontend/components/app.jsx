import React from 'react';
import HomeContainer from './home/home_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <h1>ISO100</h1>
      <HomeContainer />
    </header>

    <Route path="/login" component={SessionFormContainer}/>
    <Route path="/signup" component={SessionFormContainer}/>
  </div>
);

export default App;
