function vote() {
  document.getElementById("choose").style.display = "block";
}
function closeDialog() {
  document.getElementById("choose").style.display = "none";
  document.body.style.overflow = "auto";
}

function choose_fb() {
  document.getElementById("fb_wrapper").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
function choose_ig() {
  document.getElementById("ig_wrapper").style.display = "block";
  document.getElementById("home").style.display = "none";
  document.getElementById("choose").style.display = "none";
}
