document.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  const angle = x * 360;
  const hueShift = y * 50;

  document.body.style.background = `linear-gradient(${angle}deg, hsl(${270 + hueShift}, 75%, 50%), hsl(${300 + hueShift}, 75%, 80%))`;
});
