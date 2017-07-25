import React, {Component} from 'react';

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photo_id: this.props.photoId,
      body: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
  }

  handleSubmit(event) {
    if(event.key === 'Enter'){
      const comment = this.state;
      this.props.createComment({comment})
      .then(()=> this.setState({body: ""}));
    }
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  renderComments() {
    let commentList = this.props.comments.map((comment)=>{
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
      <ul>
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
        <div className="comment-form">
          <label>Comments</label>
          {this.renderErrors()}
          <form>
            <textarea onKeyPress={this.handleSubmit} placeholder="Comment" type="text" value={this.state.body} onChange={this.update('body')}>
            </textarea>
            <input className="login-button modal-button" type="submit" value="Add"></input>
          </form>
        </div>
        <ul>
          {this.renderComments()}
        </ul>
      </div>

    );

  }
}

export default CommentForm;
