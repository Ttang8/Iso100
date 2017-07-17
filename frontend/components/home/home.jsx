import React from 'react';

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
        <div>
          hello
        </div>
      );
    }
  }
}

export default Home;
