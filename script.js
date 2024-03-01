const button = document.getElementById("change-color");
const h1 = document.querySelector("h1");

button.addEventListener("click", function() {
  const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
  h1.style.color = randomColor;
});
