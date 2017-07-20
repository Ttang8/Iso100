import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);


  }

  componentDidMount () {
    this.props.requestPhotos();
  }

  render () {
      if (this.props.photos[0]) {
        const photoList = this.props.photos.map((photo) => (
          <li className="main-page-photos">
            <img src={photo.image_url}></img>
          </li>
        ));
        return (
          <div>
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
}

export default Home;
