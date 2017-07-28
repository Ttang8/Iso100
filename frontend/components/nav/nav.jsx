import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

class Nav extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
    this.handleUsernameClick = this.handleUsernameClick.bind(this);
  }

  handleLogout(event){
    event.preventDefault();
    this.props.logout();
    this.props.history.push('/');
  }

  handleUsernameClick() {
    if (this.props.history.location.pathname === `/userpage/${this.props.currentUser.id}`) {
      window.location.reload();
    } else {
      this.props.history.push(`/userpage/${this.props.currentUser.id}`);
    }
  }

  createLink () {
    if (this.props.currentUser) {
      return (
        <div className="search-and-upload">
          <button onClick={this.openModal}>
            <i className="fa fa-cloud-upload fa-2x" aria-hidden="true"></i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </button>
        </div>
      );
    } else {
      return "";
    }
  }

  render(){
    if (this.props.currentUser) {
      let username = this.props.currentUser.username;
      username = username[0].toLocaleUpperCase() + username.slice(1);
      return(
        <div className="upload-link">
          <div >
            {this.createLink()}
          </div>
          <div className="welcome-user">
            <button className="only-fade-gray" onClick={this.handleUsernameClick} >
              <h2>{username}</h2>
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="login-button" onClick={this.handleLogout}>
              <i className="fa fa-sign-out" aria-hidden="true"></i>&nbsp;
                Logout</button>
            </div>
        </div>
      );
    } else {
      return(
        <nav>
          <Link className="login-button" to="/login">
            <i className="fa fa-sign-in" aria-hidden="true"></i>&nbsp;
            Log In</Link>
          &nbsp;or&nbsp;
          <Link className="signup-button" to="/signup">
            <i className="fa fa-arrow-up" aria-hidden="true"></i>&nbsp;
            Sign Up</Link>
        </nav>
      );
    }
  }
}

export default withRouter(Nav);
