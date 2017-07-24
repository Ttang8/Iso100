import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import PhotoUploadFormContainer from '../photo/photo_upload_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.8s'
};

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestPhotos();
  }

  render () {
    const photoList = this.props.userPhotos.map((photo) => (
      <li className="user-page-photos">
        <Link to={`/photos/${photo.id}`} >
          <div className="relative_pos">
            <div className="user-page-title-username">
              <Link to={`/photos/${photo.id}`} >
                {photo.title}
                <br />
                by&nbsp;{photo.username}
              </Link>
            </div>
              <img className="group user-page-image" src={photo.image_url}></img>
          </div>
        </Link>
      </li>
    ));
    return (
        <div>
          <div className="user-page-container">
            <div className="user-page-user-information">
              {this.props.userPhotos[0] ? this.props.userPhotos[0].username : "" }
            </div>
            <div className="photostream-albums-bar">
              <NavLink to="/users/photos">Photostream</NavLink>
              <NavLink to={`/albums/${this.props.userId}`}>Albums</NavLink>
            </div>
              <Masonry
                className={'masonry-user-page'}
                elementType={'ul'}
                options={masonryOptions}>
              {photoList}
            </Masonry>
          </div>
        </div>
    );
  }
}

export default UserPage;
