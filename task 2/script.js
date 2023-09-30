function toogle() {
  let res = document.getElementById("res");
  let visible = document.getElementById("visible");
  if (res.style.display === "none") {
    res.style.display = "block";
    visible.innerText = "Hide";
  } else {
    res.style.display = "none";
    visible.innerText = "Visible";
  }
}
