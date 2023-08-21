function createRain() {
  const rain = document.createElement("div");
  rain.classList.add("rain");

  rain.style.left = Math.random() * 100 + "vw";

  rain.style.animationDuration = Math.random() * 2 + 3 + "s";

  rain.innerText = "I";

  rain.style.opacity = Math.random();

  document.body.appendChild(rain);

  setTimeout(() => {
    rain.remove();
  }, 5000);
}

setInterval(createRain, 100);
