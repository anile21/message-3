const wrapper = document.querySelector(".wrapper");
const question = doument.querySelector(".question");
const gif = doument.querySelector(".gif");
const YESBtn = doument.querySelector(".YES-btn");
const NOBtn = doument.querySelector(".NO-btn");

YESBtn.addEventListener("click"), () => {
  question.innerHTML = "AAAAAHHH!, I like you tooo, TYSM <3";
  gif.src = "https://raw.githubusercontent.com/DzareDeveloper/Img/main/gif.webp"
;});

NOBtn.addEventListener("mouseover"), () => {
  const NOBtnRect = NOBtn.getBoundingClientRect();
  const maxY = window.innerWidth - NOBthRect.width;
  const maxY = window.innerHeight - NOBthRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  NOBtn.style.left = randomX + "px";
  NOBtn.style.top = randomy + "px";
;});