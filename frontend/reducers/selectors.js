export const selectAllPhotos = (photos) => {
  let arr = Object.keys(photos).map((id) => (photos[id]));
  return arr.reverse();
};
