import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavContainer from './nav_container';
import Modal from 'react-modal';

class NavBar extends Component {
  constructor (props) {
    super(props);
  }

  createLink () {
    if (this.props.currentUser) {
      return (
        <Link to={`/userpage/${this.props.currentUser.id}/photo-upload`}>
          <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
        </Link>
      );
    } else {
      return "";
    }
  }


  render(){
    return (
      <header>
        <div className="logo-and-pic-container">
          <Link to="/">
            <div className="logo-pic">
              <img src="http://res.cloudinary.com/iso100app/image/upload/v1500862281/black_camera_q12rnt.png"></img>
            </div>
          </Link>
          <Link to="/">
            <div className="sitename-container">
              <h1 className="sitename">
                ISO
              </h1>
              <h2 className="sitename-100">
                100
              </h2>
            </div>
          </Link>
        </div>
        {this.createLink()}
        <NavContainer />
      </header>
    );
  }
}

export default NavBar;
