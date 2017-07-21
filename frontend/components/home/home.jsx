import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestPhotos();
  }

  homePage () {
    if (this.props.photos[0]) {
      const photoList = this.props.photos.map((photo) => (
        <li className="main-page-photos">
          <div >
            <Link className="homepage-photo-user" to={`/userpage/${photo.user_id}`} >
              {photo.username}
            </Link>
          </div>
          <Link to={`/photos/${photo.id}`} >
            <img src={photo.image_url}></img>
          </Link>
          <div className="homepage-photo-title">
            {photo.title}
          </div>
        </li>
      ));
      return (
        <div className="main-page-photo-container-div">
          <ul className="main-page-photo-container">
            {photoList}
          </ul>
        </div>
      );
    } else {
      return (
        <div>Fetching Pictures</div>
      );
    }
  }

  splashPage () {
    return (
      <div className="fullscreen-bg">
        <img src="http://res.cloudinary.com/iso100app/image/upload/v1500577154/camera-samsung-nx-300-samsung-nx-300-39342_vbdbov.jpg"></img>
      </div>
    );
  }

  render () {
    if (this.props.loggedIn) {
      return this.homePage();
    } else {
      return this.splashPage();
    }
  }
}

export default Home;
