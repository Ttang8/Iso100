import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

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
              <Masonry
                className={'masonry-user-page'}
                elementType={'ul'}>
              {photoList[0] ? photoList : <h1>You have no public photos</h1> }
            </Masonry>
          </div>
        </div>
    );
  }
}

export default UserPage;
