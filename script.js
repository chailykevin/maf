let i = 0;

buttonTolak = document.querySelector("#nolak");
buttonTerima = document.querySelector("#terima");

buttonTolak.addEventListener("click", () => {
  if (i === 0) {
    alert("Pliss jangan gitu dong, Yoan :((");
  } else if (i === 1) {
    alert("aaaaa jangan donggg");
  } else if (i === 2) {
    alert("plssss aku bs nangis jir T_T");
  } else if (i === 3) {
    alert("aku bakal berusaha buat ga ngambek lgiii");
  } else if (i === 4) {
    alert("aku seriusssss");
  } else if (i === 5) {
    alert("please Yoannn");
  } else if (i === 6) {
    alert(":'((((((((((");
    i = -1;
  }
  i++;
});

buttonTerima.addEventListener("click", () => {
  const first = document.querySelector(".first");
  const second = document.querySelector(".second");

  first.style.visibility = "hidden";
  first.style.width = "0";
  first.style.height = "0";

  second.style.visibility = "visible";
  second.style.width = "100vw";
});

window.addEventListener("load", function () {
  const audioElement = document.querySelector("audio");
  audioElement.muted = false; // Unmute after autoplay starts
});
