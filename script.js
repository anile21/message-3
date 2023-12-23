const wrapper = document.querySelector(".wrapper");
const question = doument.querySelector(".question");
const gif = doument.querySelector(".gif");
const yesBtn = doument.querySelector(".yes-btn");
const noBtn = doument.querySelector(".no-btn");

yesBtn.addEventListener("click"), () => {
  question.innerHTML = "AAAAAHHH!, I like you tooo, TYSM <3";
  gif.src = "https://raw.githubusercontent.com/DzareDeveloper/Img/main/gif.webp"
;});

noBtn.addEventListener("mouseover"), () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxY = window.innerWidth - noBthRect.width;
  const maxY = window.innerHeight - noBthRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomy + "px";
;});