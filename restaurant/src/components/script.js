function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changeHeaderColor() {
  const colorInput = getRandomColor();
  const element = document.getElementById("magicText"); 
  element.style.color = colorInput;
}

setInterval(changeHeaderColor, 500); 