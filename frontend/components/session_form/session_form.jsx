import React, { Component } from 'react';

class SessionForm extends Component{
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
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
    console.log(this.props);
    return(
      <div className="session-form">
        {this.renderErrors()}
        <form onSubmit={this.handleSubmit}>
          <label>Username:
            <input type="text" value={this.state.username} onChange={this.update('username')}></input>
          </label>
          <label>Password:
            <input type="password" value={this.state.password} onChange={this.update('password')}></input>
          </label>
          <input type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }
}

export default SessionForm;
