function createAlbum() {
  var resource = { album: { title: "sample title" } };
  const res = GPhotoApp.createAlbum(resource);
  console.log(res);
}
