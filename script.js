const noBtn = document.getElementById("noBtn");

let scale = 1;

function moveAndShrink() {

  if (scale > 0.4) {
    scale -= 0.1;
    noBtn.style.transform = `scale(${scale})`;
  }

  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveAndShrink);

noBtn.addEventListener("touchstart", function(e) {
  e.preventDefault();
  moveAndShrink();
});
