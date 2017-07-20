import React, { Component } from 'react';
import PhotoUploadFormContainer from '../photo/photo_upload_form_container';
import { Link } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavContainer from './nav_container';


const NavBar = () => (
  <header>
    <Link to="/">
      <div className="logo-pic">
        <img src="http://res.cloudinary.com/iso100app/image/upload/c_scale,h_100,w_100/v1500430154/iso100_logo_vpr2xk.png"></img>
        <h1 className="sitename">
          <Link className="iso100" to="/">ISO100</Link>
        </h1>
      </div>
    </Link>
    <Link to="/photo-upload">Upload Photo</Link>
    <ProtectedRoute path="/photo-upload" component={PhotoUploadFormContainer} />
    <NavContainer />
  </header>
);

export default NavBar;
