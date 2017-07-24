import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import PhotoUploadFormContainer from '../photo/photo_upload_form_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import AlbumFormContainer from '../album/album_form_container';

const masonryOptions = {
  fitWidth: true,
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.8s'
};

class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayPhotos: true,
      openAlbumModal: false
    };

    this.toggleTrue = this.toggleTrue.bind(this);
    this.toggleFalse = this.toggleFalse.bind(this);
    this.handleAlbumModal = this.handleAlbumModal.bind(this);
  }

  componentDidMount () {
    this.props.requestPhotos();
    this.props.requestAlbums();
  }

  handleAlbumModal() {
    this.setState({openAlbumModal: true});
  }

  handlePhotos() {
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

    return(
      <Masonry
        className={'masonry-user-page'}
        elementType={'ul'}
        options={masonryOptions}>
      {photoList}
    </Masonry>
  );
  }

  handleAlbums(){
    return (
      <div className="albums-container">
        <div className="add-new-album" onClick={this.handleAlbumModal} ></div>
      </div>
    );
  }

  toggleTrue(){
    this.setState({displayPhotos: true});
  }

  toggleFalse(){
    this.setState({displayPhotos: false});
  }

  render () {
    return (
        <div className="backgrounds">
          <div className="user-page-container">
            <div className="user-page-user-information">
              {this.props.userPhotos[0] ? this.props.userPhotos[0].username : "" }
            </div>
            <div className="photostream-albums-bar">
              <button type="button" onClick={this.toggleTrue}>Photostream</button>
              <button type="button" onClick={this.toggleFalse}>Albums</button>
            </div>
              {this.state.displayPhotos ? this.handlePhotos() : this.handleAlbums()}
          </div>
          {this.state.openAlbumModal ? <AlbumFormContainer /> : ""}
        </div>
    );
  }
}

export default UserPage;
