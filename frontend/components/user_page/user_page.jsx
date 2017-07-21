import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props);
    const photoList = this.props.userPhotos.map((photo) => (
      <li className="user-page-photos">
        <Link to={`/photos/${photo.id}`} >
          <img src={photo.image_url}></img>
        </Link>
      </li>
    ));
    return (
      <div>
        <ul className="user-page-container">
          {photoList}
        </ul>
      </div>
    );
  }
}

export default UserPage;
