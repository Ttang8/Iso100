import React, { Component } from 'react';
import Modal from 'react-modal';

class AlbumForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      modalIsOpen: true
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  handleSubmit (event) {
    event.preventDefault();
    const album = this.state;
    this.props.createAlbum({album})
    .then(()=>this.closeModal());
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
    window.location.reload();
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    return(
      <Modal
        isOpen={this.state.modalIsOpen}
        onRequestClose={this.closeModal}
        shouldCloseOnOverlayClick={false}
        contentLabel="UploadFormModal"
        className="session-modal"
      >
      <div className="errors">
        {this.renderErrors()}
      </div>
      <form className="upload-photo-form" onSubmit={this.handleSubmit}>
        <div>
          Create An Album
        </div>
        <div className="inputs">
          <input placeholder="Title - required" type="text" value={this.state.title} onChange={this.update('title')}></input>
        </div>
        <div className="inputs">
          <textarea placeholder="Description" type="text" value={this.state.description} onChange={this.update('description')}>
          </textarea>
        </div>
        <input className="login-button modal-button" type="submit" value="Submit"></input>
      </form>
      <div className="close-button" >
        <button onClick={this.closeModal}>Close</button>
      </div>
      </Modal>
    );
  }

}

export default AlbumForm;
