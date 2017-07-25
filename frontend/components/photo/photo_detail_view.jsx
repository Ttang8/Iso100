import React, { Component } from 'react';
import CommentFormContainer from '../comment/comment_form_container';
import { Link } from 'react-router-dom';

class PhotoDetailView extends Component {
  constructor (props) {
    super(props);

    this.state = {
      album_id: "",
      buttonDisplay: "Add to Album"
    };

    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.toggleAddDisplay = this.toggleAddDisplay.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  componentWillReceiveProps(nextProps){
  }

  componentDidMount () {
    this.props.requestPhoto(this.props.photoId);
    this.props.requestAlbums();
  }

  handleDelete(event){
    event.preventDefault();
    this.props.deletePhoto(this.props.photo);
    this.props.history.goBack();
  }

  handleSubmit(event){
    event.preventDefault();
    let photo = Object.assign({}, this.props.photo, this.state);
    this.props.updatePhoto(photo);
  }

  handleChange(event){
    this.setState({album_id: event.target.value, buttonDisplay: "Add to Album"});
  }

  userAlbums(){
    let arr =[];
    this.props.albums.forEach((album)=>{
      if (album.user_id === this.props.photo.user_id) {
        arr.push(album);
      }
    });

    const userAlbumList = arr.map((album)=>{
      return(
        <option key={album.id} value={album.id} >{album.title}</option>
      );
    });
    return userAlbumList;
  }

  toggleAddDisplay(){
    this.setState({buttonDisplay: "Added"});
  }

  displayEdits(){
    return (
      <div className="photo-edit-and-delete">
        <form onSubmit={this.handleSubmit} className="add-album-form">
          <select className="albums-select" value={this.state.album_id} onChange={this.handleChange} >
            <option >--Select Album--</option>
            {this.userAlbums()}
          </select>
          <button type="submit" onClick={this.toggleAddDisplay} value="Submit">{this.state.buttonDisplay}</button>
        </form>
        <button onClick={this.handleDelete}>Delete Photo</button>
      </div>
    );
  }

  handleBack(){
    this.props.history.goBack();
  }

  render () {
    if (this.props.photo) {
      return (
        <div className="photo-detail-view-container">
          <div className="photo-detail-view">
            <div className="back-button">
              <button onClick={this.handleBack}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>&nbsp;
                Go Back
              </button>
            </div>
            {this.props.photo.user_id === this.props.currentUser.id ? this.displayEdits() : ""}
            <img className="group" src={this.props.photo.image_url}></img>
          </div>
          <div className="photo-detail-container">
            <div className="photo-detail-user-information">
              <Link className="username-show-page"to={`/userpage/${this.props.currentUser.id}`}>
                {this.props.photo.username}
              </Link>
            <div/>
            <div className="photo-detail-title">
              {this.props.photo.title}
            </div>
            <div className="photo-detail-description">
              {this.props.photo.description}
            </div>
            <div className="comment-form-container">
              <label>Comments:</label>
              <CommentFormContainer currentUser={this.props.currentUser} comments={this.props.photo.comments} photoId={this.props.photo.id}/>
            </div>
          </div>
            <div className="photo-detail-comments">
            </div>
          </div>
        </div>
      );
    } else {
    return (
      <div>Fetching image</div>
    );
  }
  }
}

export default PhotoDetailView;
