import React, { Component } from 'react';

class PhotoDetailView extends Component {
  constructor (props) {
    super(props);
  }

  componentDidMount () {
    this.props.requestPhoto(this.props.photoId);
  }

  render () {
    if (this.props.photo) {
      return (
        <div>
          <div className="photo-detail-view">
            <img className="group" src={this.props.photo.image_url}></img>
          </div>
          <div className="photo-detail-container">
            <div className="photo-detail-user-information">
              {this.props.photo.username}
            <div/>
            <div className="photo-detail-title">
              {this.props.photo.title}
            </div>
            <div className="photo-detail-description">
              {this.props.photo.description}
            </div>
          </div>
            <div className="photo-detail-comments">

            </div>
          </div>
          <footer>

          </footer>
        </div>
      );
    } else {
    return (
      <div>Fetching image</div>
    );
  }
  }
}

export default PhotoDetailView;
