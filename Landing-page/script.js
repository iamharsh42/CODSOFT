function changeImage(img, colour) {
  document.querySelector("#starbucks").src = `media/${img}`;
  document.getElementById("circle").style.background = colour;
}
