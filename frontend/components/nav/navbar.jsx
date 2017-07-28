import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { ProtectedRoute } from '../../util/route_util';
import NavContainer from './nav_container';
import { withRouter } from 'react-router';

class NavBar extends Component {
  constructor (props) {
    super(props);

    this.state ={
      query: "",
    };

    // this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleChange = this.handleChange.bind(this);
    this.handleLogoClick = this.handleLogoClick.bind(this);
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
              <img src="https://res.cloudinary.com/iso100app/image/upload/v1500862281/black_camera_q12rnt.png"></img>
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
        <NavContainer />

      </header>
    );
  }
}

export default withRouter(NavBar);
