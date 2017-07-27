export const destroyTag = (tag) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/tags/${tag.id}`,
  })
);

export const createTag = tag => (
  $.ajax({
    method: 'POST',
    url: '/api/tags',
    data: tag
  })
);

export const createTagging = tagging => (
  $.ajax({
    method: 'POST',
    url: '/api/taggings',
    data: tagging
  })
);

export const destroyTagging = tagging => (
  $.ajax({
    method: 'DELETE',
    url: `/api/taggings/${tagging.id}`,
  })
);
