import React, {Component} from 'react';
import merge from 'lodash/merge';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: this.props.currentUser.username,
      comments: this.props.comments,
      photo_id: this.props.photoId,
      body: ""
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
    .then(()=> this.setState({body: ""}));
  }

  handleSubmit(event) {
    if(event.key === 'Enter'){
      let comment = this.state;
      let dupOfState = this.state.comments;
      let newComments = dupOfState.concat(comment);
      this.props.createComment({comment})
      .then(()=> this.setState({comments: newComments}))
      .then(()=> this.setState({body: ""}));
    }
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  renderComments() {
    let commentList = this.state.comments.map((comment)=>{
      return(
        <li key={comment.id}>
          {comment.author}
          <br />
          {comment.body}
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
        <label>Comments</label>
        <ul>
          {this.renderComments()}
        </ul>
        <div className="comment-form">
          {this.renderErrors()}
          <form>
            <textarea onKeyPress={this.handleSubmit} placeholder="Comment" type="text" value={this.state.body} onChange={this.update('body')}>
            </textarea>
            <input onClick={this.handleClick} className="login-button modal-button" type="submit" value="Add"></input>
          </form>
        </div>
      </div>

    );

  }
}

export default CommentForm;
