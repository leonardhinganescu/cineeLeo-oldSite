const tiles = document.querySelectorAll(".tile");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector("#lightboxIMG");
const body = document.body;
let index;

for (let i = 0; i < tiles.length; i++) {
  tiles[i].addEventListener("click", function () {
    index = i;
    changeImage();
    lightBOX();
  });
}

function changeImage() {
  imgSrc = tiles[index].children[0].children[0].getAttribute("src");
  lightboxImg.src = imgSrc.replace("small", "big");
}

function lightBOX() {
  lightbox.classList.add("active");

  window.addEventListener("keyup", keyPressed, false);

  body.classList.add("noscroll");
}

function next() {
  if (index == tiles.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeImage();
}

function keyPressed(key) {
  if (key.keyCode == "39") {
    next();
  } else if (key.keyCode == "37") {
    prev();
  } else if (key.keyCode == "27") {
    lightbox.classList.remove("active");
    body.classList.remove("noscroll");
  }
}

function prev() {
  if (index == 0) {
    index = tiles.length - 1;
  } else {
    index--;
  }
  changeImage();
}

lightbox.addEventListener("click", (e) => {
  if (e.target !== e.currentTarget) return;
  lightbox.classList.remove("active");
  body.classList.remove("noscroll");
});
