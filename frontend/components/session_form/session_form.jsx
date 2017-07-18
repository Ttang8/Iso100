import React, { Component } from 'react';
import Modal from 'react-modal';

class SessionForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
      modalIsOpen: true
    };

    this.toggleModal = {toggle:true};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.setState = this.setState.bind(this);

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
    this.props.history.push('/');
  }

  handleSubmit(event){
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.state = {
      username: "",
      password: ""
    };
  }

  handleDemo(event){
    event.preventDefault();
    let username = 'GuestAccount';
    let password = 'password';

    for (let i = 0; i < username.length; i++) {
      setTimeout(() => this.setState({username: username.slice(0, i + 1)}), (i * 50));
    }
    for (let i = 0; i < password.length; i++) {
      setTimeout(() => this.setState({password: password.slice(0, i + 1)}), ((i + username.length) * 50));
    }
    const user = {username: 'GuestAccount', password: 'password'};
    setTimeout(() => this.props.processForm({user}), (1350));
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

  render() {
    return(
      <div className="session-form">
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          contentLabel="SessionFormModal"
          className="session-modal"
        >

        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" autoFocus="autofocus" value={this.state.username} onChange={this.update('username')}></input>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
        <button type="button" onClick={this.handleDemo}>Demo</button>

        <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default SessionForm;
