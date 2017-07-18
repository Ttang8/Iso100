import React, { Component } from 'react';
import Modal from 'react-modal';
import { Redirect } from 'react-router-dom';

class NavBar extends Component {
  constructor(props){
    super(props);

    this.state = {

    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick() {
    return(
      <Redirect to="/login" />
    );
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {

  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render () {
    return(
      <nav>
        <button onClick={this.openModal}>Log In</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="session-modal"
        >

        <div>hello</div>
        <button onClick={this.closeModal}>close</button>
        </Modal>
      </nav>
    );
  }
}

export default NavBar;
