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
