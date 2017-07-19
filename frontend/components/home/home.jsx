import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      let username = this.props.currentUser.username;
      username = username[0].toLocaleUpperCase() + username.slice(1);
      return(
        <div className="welcome-user">
          <h2>Welcome {username}</h2>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button className="login-button" onClick={this.props.logout}>Logout</button>
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

export default Home;
