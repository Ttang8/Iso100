export const requestPhotos = () => (
  $.ajax({
    method: 'GET',
    url: '/api/photos'
  })
);

export const updatePhoto = photo => (
  $.ajax({
    method: 'PATCH',
    url: `/api/photos/${photo.id}`,
    data: {photo}
  })
);

export const requestPhoto = photo => (
  $.ajax({
    method: 'GET',
    url: `/api/photos/${photo.id}`
  })
);

export const destroyPhoto = (photo) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/photos/${photo.id}`,
  })
);

export const createPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: '/api/photos',
    data: {photo}
  })
);
