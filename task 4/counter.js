let counts = document.getElementById("counts");
let btn = document.getElementById("btn");
let dec = document.getElementById("dec");
let count = 0;

function Counter() {
  counts.innerText = ++count;
  if (count >= 10) {
    btn.removeEventListener("click", Counter);
  }
}
btn.addEventListener("click", Counter);

function removeCounterIncrement() {
  console.log("RemoveIncrement");
  btn.removeEventListener("click", Counter);
}

function Decrement() {
  counts.innerText = --count;
  if (count <= 0) {
    dec.removeEventListener("click", Decrement);
  }
}
dec.addEventListener("click", Decrement);

function removeCounterDec() {
  console.log("RemoveDecrement");
  dec.removeEventListener("click", Decrement);
}
