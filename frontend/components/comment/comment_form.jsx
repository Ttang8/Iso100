import React, {Component} from 'react';
import merge from 'lodash/merge';
import { Link } from 'react-router-dom';

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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event){
    event.preventDefault();
    let comment = this.state;
    let dupOfState = this.state.comments;
    let newComments = dupOfState.concat(comment);
    this.props.createComment({comment})
    .then(()=> this.setState({comments: newComments}))
    .then(()=> this.setState({body: ""}))
    .then(()=> this.props.clearErrors());
  }

  handleSubmit(event) {
    if(event.key === 'Enter'){
      let comment = this.state;
      let dupOfState = this.state.comments;
      let newComments = dupOfState.concat(comment);
      this.props.createComment({comment})
      .then(()=> this.setState({comments: newComments}))
      .then(()=> this.setState({body: ""}))
      .then(()=> this.props.clearErrors());
    }
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  renderComments() {
    let commentList = this.state.comments.map((comment)=>{
      return(
        <li className="comment-chunk"key={comment.id}>
          <div>
            <Link className="username-blue" to={`/userpage/${comment.user_id}`}>
              {comment.author}
            </Link>
          </div>
          <div>
            {comment.body}
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
    console.log(this.props);
    return(
      <div className="comments-container">
        <ul>
          {this.renderComments()}
        </ul>
        <div className="comment-form">
          {this.renderErrors()}
          <form className="comment-input-form">
            <input className="text-area-comment" onKeyPress={this.handleSubmit} placeholder="Add a Comment" type="text" value={this.state.body} onChange={this.update('body')}>
            </input>
            <input onClick={this.handleClick} className="login-button modal-button" type="submit" value="Add"></input>
          </form>
        </div>
      </div>

    );

  }
}

export default CommentForm;
