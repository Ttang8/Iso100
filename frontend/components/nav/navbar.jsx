import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavContainer from './nav_container';


const NavBar = () => {
  return (
    <header>
      <div className="logo-and-pic-container">
        <Link to="/">
          <div className="logo-pic">
            <img src="http://res.cloudinary.com/iso100app/image/upload/c_scale,h_100,w_100/v1500430154/iso100_logo_vpr2xk.png"></img>
          </div>
        </Link>
        <Link to="/">
          <h1 className="sitename">
            <Link className="iso100" to="/">ISO100</Link>
          </h1>
        </Link>
      </div>
      <Link to="/photo-upload">
        <i className="fa fa-plus" aria-hidden="true"></i>
      </Link>
      <NavContainer />
    </header>
  );

};

export default NavBar;
