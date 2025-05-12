
let changes = document.getElementsByClassName("button")[0];

changes.addEventListener("click", function() {
  let h1 = document.querySelector("h1");
  let div = document.getElementsByClassName("color-box")[0];

  let randomColor = changeColor();
  h1.innerText = randomColor;
  div.style.backgroundColor = randomColor;
});

function changeColor() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);

  return `rgb(${red}, ${green}, ${blue})`;
}
