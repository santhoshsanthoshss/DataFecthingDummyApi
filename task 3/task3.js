let holeimg = [
  "https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg",
  "https://cdn.pixabay.com/photo/2014/09/14/18/04/dandelion-445228_640.jpg",
  "https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg",
  "https://wallpapers.com/images/hd/hd-sunset-at-beach-w5ped7x6g3uo2o76.jpg",
  "https://rare-gallery.com/mocahbig/1336549-New-Zealand-Lake-WanakaLake-W%C4%81naka-HD-Wallpaper.jpg",
];
let count = 0;

function toggleprevious() {
  let res = document.getElementById("res");
  count--;
  if (count < 0) {
    count = holeimg.length - 1;
  }
  res.src = holeimg[count];
}

function tooglefoward() {
  let res = document.getElementById("res");
  count++;
  if (count == holeimg.length) {
    count = 0;
  }
  res.src = holeimg[count];
}
