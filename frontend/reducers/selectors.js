export const selectAllPhotos = (photos) => {
  let arr = Object.keys(photos).map((id) => (photos[id]));
  return arr.reverse();
};

export const selectUserPhotos = (photos, userId) => {
  let newArr = [];
  photos.forEach((photo, idx) => {
    let num = photo.user_id;
    let n = num.toString();
    if (n === userId) {
      newArr.push(photo);
    }
  });

  return newArr;
};

export const selectAllAlbums = (albums) => {
  let arr = Object.keys(albums).map((id) => (albums[id]));
  return arr.reverse();
};

export const selectUserAlbums = (albums, userId) => {
  let newArr = [];
  albums.forEach((album, idx) => {
    let num = album.user_id;
    let n = num.toString();
    if (n === userId) {
      newArr.push(album);
    }
  });

  return newArr;
};
