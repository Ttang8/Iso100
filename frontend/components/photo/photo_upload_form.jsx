import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PhotoUploadForm {
  constructor (props) {
    super (props);
    this.handleUpload = this.handleUpload.bind(this);
  }

  handleUpload (event) {
    
  }

  render () {
    return (
      <button onCLick={this.handleUpload}>Upload Image</button>
    );
  }
}

export default PhotoUploadForm;
