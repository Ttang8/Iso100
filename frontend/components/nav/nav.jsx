import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
  constructor(props){
    super(props);

    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(event){
    console.log(this.props);
    event.preventDefault();
    this.props.logout();
  }

  render(){
    if (this.props.currentUser) {
      let username = this.props.currentUser.username;
      username = username[0].toLocaleUpperCase() + username.slice(1);
      return(
        <div className="welcome-user">Welcome&nbsp;
          <Link className="only-fade-gray" to={`/userpage/${this.props.currentUser.id}`} >
            <h2>{username}</h2>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="login-button" onClick={this.handleLogout}>Logout</button>
        </div>
      );
    } else {
      return(
        <nav>
          <Link className="login-button" to="/login">Log In</Link>
          &nbsp;or&nbsp;
          <Link className="signup-button" to="/signup">Sign Up</Link>
        </nav>
      );
    }
  }
}

export default Nav;
