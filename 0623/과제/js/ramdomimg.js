const imgs = ["01.jpg", "02.jpg", "03.jpg", "04.jpg"];

const randomImg = imgs[Math.floor(Math.random() * imgs.length)];
const bgImage = document.querySelector("body");
bgImage.style.backgroundImage = `url(img/${randomImg})`;