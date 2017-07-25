import { connect } from 'react-redux';
import CommentForm from './comment_form';
import {createComment, deleteComment, clearErrors} from '../../actions/comment_actions';

const mapDispatchToProps = dispatch => ({
  createComment: (comment) => dispatch(createComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
  clearErrors: () => dispatch(clearErrors())
});

const mapStateToProps = ({errors}) => ({
  errors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
