import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    console.log('mount');
    this.props.requestPhotos();
  }

  render () {
    console.log('render');
    console.log(this.props);
    const photoList = this.props.userPhotos.map((photo) => (
      <li className="user-page-photos">
        <Link to={`/photos/${photo.id}`} >
          <img className="group" src={photo.image_url}></img>
        </Link>
      </li>
    ));
    return (
      <div>
        <div className="user-page-container">
          <div className="user-page-user-information">
            {this.props.userPhotos[0] ? this.props.userPhotos[0].username : "" }
          </div>
          <ul className="user-page-image-container">
            {photoList}
          </ul>
        </div>
      </div>
    );
  }
}

export default UserPage;
