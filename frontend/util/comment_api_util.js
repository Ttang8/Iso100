export const destroyComment = (comment) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/comments/${comment.id}`,
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'POST',
    url: '/api/comments',
    data: comment
  })
);
