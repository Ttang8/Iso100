import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div className="welcome-user">
          <h2>Welcome {this.props.currentUser.username}</h2>
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
