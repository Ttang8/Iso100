import React, {Component} from 'react';
import Masonry from 'react-masonry-component';
import { withRouter } from 'react-router-dom';

const masonryOptions = {
  stagger: 100,
  gutter: 3,
  transitionDuration: '0.5s'
};

class TagForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      photo_id: this.props.photoId
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){

  }

  handleSubmit(event){
    event.preventDefault();
    let tag = this.state;
    this.props.createTag({tag})
    .then(()=>this.props.requestPhoto(this.props.photoId))
    .then(this.setState({name: ""}))
    .then(()=> this.props.clearErrors());
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
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

  render() {
    return(
    <div>
      <form onSubmit={this.handleSubmit}>
        <input className="text-area-comment" placeholder="Add a Tag" type="text" value={this.state.name} onChange={this.update('name')}>
        </input>
        <input className="login-button modal-button" type="submit" value="Add"></input>
      </form>
    </div>
  );
  }
}

export default withRouter(TagForm);
