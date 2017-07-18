import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props);
  }

  render(){
    if (this.props.currentUser) {
      return(
        <button onClick={this.props.logout}>Logout</button>
      );
    } else {
      return(
        <nav>
          <Link to="/login">Log In</Link>
          &nbsp;or&nbsp;
          <Link to="/signup">Sign Up</Link>
        </nav>
      );
    }
  }
}

export default Home;
