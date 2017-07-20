export const selectAllPhotos = (photos) => (
  Object.keys(photos).map((id) => (photos[id]))
);
