const toggleBar = document.getElementById("toggleBar");
const links = document.getElementById("links");

toggleBar.addEventListener("click", () => {
  if (links.style.top != "60px") {
    links.style.top = "60px";
  } else {
    links.style.top = "-100%";
  }
});
