import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

class PhotoUploadForm extends Component {
  constructor (props) {
    super (props);

    this.state = {
      title: "",
      description: "",
      image_url: "",
      modalIsOpen: true
    };

    this.handleUpload = this.handleUpload.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleUpload (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(
      window.CLOUDINARY_OPTIONS, (errors, image) => {
        if (errors) {
          console.log(errors);
        } else {
          console.log(image);
          this.setState({image_url: image[0].url});
        }
      }
    );
  }

  handleSubmit (event) {
    event.preventDefault();
    const photo = this.state;
    console.log(this.state);
    this.props.createPhoto({photo})
    .then(()=> this.props.history.push('/#/home'));
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    // this.props.clearErrors();
    this.props.history.push('/');
  }

  render () {
    return (
      <div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="UploadFormModal"
          className="session-modal"
        >

        <form className="upload-photo-form" onSubmit={this.handleSubmit}>
          <div className="inputs">
            <input placeholder="Title" type="text" autoFocus="autofocus" value={this.state.title} onChange={this.update('title')}></input>
          </div>
          <div className="inputs">
            <textarea placeholder="Description" type="text" value={this.state.description} onChange={this.update('description')}>
            </textarea>
          </div>
          <button onClick={this.handleUpload}>Upload Image</button>
          <input className="login-button modal-button" type="submit" value="Submit"></input>
        </form>
        <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>

    );
  }
}

export default PhotoUploadForm;
