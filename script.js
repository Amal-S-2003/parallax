let text = document.getElementById("text");
let im = document.getElementById("im");
let thor = document.getElementById("thor");
let cap = document.getElementById("cap");
let ironman = document.getElementById("ironman");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  text.style.marginTop = value * 2.5 + "px"; 
  im.style.marginBottom = value * 2.5 + "px";
  thor.style.left = value * 1.5 + "px";
  thor.style.right = "700px";
  // thanos.style.left=value*-1.5+'px';
  cap.style.width = value * 2 + "px";
  thor.style.right = "300px";
  ironman.style.width = value + "px";

  //   gate.style.width="100px"
});
