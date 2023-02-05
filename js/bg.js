const colorList = ["#ff2e4c", "#f96204", "#004921", "#9c84c2", "#1e2a78"];
const bg = document.querySelector(".todo-list");
const line = document.querySelector("#todo-form input");
const today = document.querySelector(".date");

function randomBg() {
  const nowColor = colorList[Math.floor(Math.random() * colorList.length)];
  bg.style.backgroundColor = `${nowColor}`;
  line.style.borderBottomColor = `${nowColor}`;
  today.style.color = `${nowColor}`;
}

randomBg();
setInterval(randomBg, 3000);
