import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  transitionDuration: '0.5s'
};

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
        <li key={photo.id} className="main-page-photos">
          <div className="homepage-photo-title">
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
          <Masonry
            className={'masonry-home-page'}
            elementType={'ul'}
            options={masonryOptions}>
            {photoList}
          </Masonry>
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
        <div className="landing-section">Show your story through your lens.
          <br />
          <Link to="/login">Get Started</Link>
        </div>
        <img src="http://res.cloudinary.com/iso100app/image/upload/v1500864787/background1_wiy28m.jpg"></img>
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
