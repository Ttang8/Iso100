import React, {Component} from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';

const masonryOptions = {
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.5s'
};


class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: this.props.currentUser.username,
      comments: this.props.comments,
      photo_id: this.props.photoId,
      body: "",
      user_id: this.props.currentUser.id
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteComment = this.handleDeleteComment.bind(this);
  }

  handleSubmit(event) {
    let comment = this.state;
    this.props.createComment({comment})
    .then(()=>this.props.requestPhoto(this.props.photoId))
    .then(()=> this.setState({body: ""}))
    .then(()=> this.props.clearErrors());
  }

  handleDeleteComment(event){
    event.preventDefault();
    this.props.deleteComment(event.target.value)
    .then(()=>this.props.requestPhoto(this.props.photoId))
    .then(()=> this.props.clearErrors());
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  renderComments() {
    let commentList = this.props.comments.map((comment, idx)=>{
      return(
        <li className="comment-chunk" key={idx}>
          <div>
            <Link className="username-blue" to={`/userpage/${comment.user_id}`}>
              {comment.author}
            </Link>
          </div>
          <div>
            {comment.body}
          </div>
          <div>
            {comment.time}
          </div>
          <div>
            <button type="button" value={comment.id} onClick={this.handleDeleteComment}>X</button>
          </div>
        </li>
      );
    });

    return commentList;
  }

  renderErrors(){
    return(
      <ul className="errors-color">
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render(){
    return(
      <div className="comments-container">
        <form className="comment-input-form" onSubmit={this.handleSubmit}>
          <div className="comment-form">
          </div>
          <input className="text-area-comment" placeholder="Add a Comment" type="text" value={this.state.body} onChange={this.update('body')}>
          </input>
          <input className="login-button modal-button" type="submit" value="Add"></input>
        </form>
        <Masonry
          className={'masonry-user-page'}
          elementType={'ul'}
          options={masonryOptions}>
          {this.renderComments()}
        </Masonry>
      </div>

    );

  }
}

export default CommentForm;
