const imgList = ["bg0.png", "bg1.png", "bg2.png"];
const bg = document.querySelector("#wrap");

function randomBg() {
  const nowImg = imgList[Math.floor(Math.random() * imgList.length)];
  bg.style.backgroundImage = `url(img/${nowImg})`;
  bg.style.backgroundRepeat = "no-repeat";
  bg.style.backgroundSize = "cover";
}

randomBg();
setInterval(randomBg, 2000);
