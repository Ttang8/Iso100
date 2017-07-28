import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavContainer from './nav_container';
import PhotoUploadFormContainer from '../photo/photo_upload_form_container';
import Modal from 'react-modal';
import { withRouter } from 'react-router';

class NavBar extends Component {
  constructor (props) {
    super(props);

    this.state ={
      query: "",
      modalIsOpen: false
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // handleChange(event){
  //   event.preventDefault();
  //   this.setState({query: event.target.value});
  // }
  //
  // handleSubmit(){
  //   return(
  //     <form onSubmit={this.handleSubmit}>
  //       <input className="search-bar" type="text" placeholder="search by tags" value={this.state.query} onChange={this.handleChange}></input>
  //       <input type="submit" value="Search"></input>
  //     </form>
  //   );
  // }

  openModal(){
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.clearErrors();
  }

  createLink () {
    if (this.props.currentUser) {
      return (
        <div className="search-and-upload">
          <button onClick={this.openModal}>
            <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>
            &nbsp;&nbsp;&nbsp;Upload
          </button>
        </div>
      );
    } else {
      return "";
    }
  }

  handleLogoClick() {
    if (this.props.history.location.pathname === '/') {
      window.location.reload();
    } else {
      this.props.history.push('/');
    }
  }


  render(){
    return (
      <header>
        <div className="logo-and-pic-container">
          <button onClick={this.handleLogoClick}>
            <div className="logo-pic">
              <img src="http://res.cloudinary.com/iso100app/image/upload/v1500862281/black_camera_q12rnt.png"></img>
            </div>
          </button>
          <button onClick={this.handleLogoClick}>
            <div className="sitename-container">
              <h1 className="sitename">
                ISO
              </h1>
              <h2 className="sitename-100">
                100
              </h2>
            </div>
          </button>
        </div>
        {this.createLink()}
        <NavContainer />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="UploadFormModal"
          className="session-modal"
        >
          <PhotoUploadFormContainer closeModal={this.closeModal}/>
        </Modal>
      </header>
    );
  }
}

export default withRouter(NavBar);
