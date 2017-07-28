import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  transitionDuration: '0.5s'
};

// let loadStyle = {
//   display: 'none'
// };

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount () {
    setTimeout(() => this.setState({display: 'none'}), 1500);
    this.props.requestPhotos();
  }

  homePage () {
    if (this.props.photos[0]) {
      const photoList = this.props.photos.map((photo) => (
        <li key={photo.id + "photos"} className="main-page-photos">
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
        <div className="fetching-pictures"></div>
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
        <img src="http://res.cloudinary.com/iso100app/image/upload/v1501178319/pexels-photo-326243_nj3zvm.jpg"></img>
      </div>
    );
  }

  render () {
    if (this.props.loggedIn) {
        return (
          <div>
            <div className="sk-cube-grid" style={this.state}>
              <div className="sk-cube sk-cube1"></div>
              <div className="sk-cube sk-cube2"></div>
              <div className="sk-cube sk-cube3"></div>
              <div className="sk-cube sk-cube4"></div>
              <div className="sk-cube sk-cube5"></div>
              <div className="sk-cube sk-cube6"></div>
              <div className="sk-cube sk-cube7"></div>
              <div className="sk-cube sk-cube8"></div>
              <div className="sk-cube sk-cube9"></div>
            </div>
            {this.homePage()}
          </div>
        );
    } else {
      return this.splashPage();
    }
  }
}

export default Home;
