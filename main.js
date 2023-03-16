let metronome = document.getElementById("metronome");
let btn = document.getElementById("btn");
let interval = "";

btn.addEventListener("click", () => {
  if (btn.textContent === "Start Metronome") {
    interval = setInterval(() => {
      metronome.play();
    }, 5);
    btn.textContent = "Stop Metronome";
  } else {
    clearInterval(interval);
    btn.textContent = "Start Metronome";
  }
});
