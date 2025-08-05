function changeTheme() {
  let body = document.querySelector("body");
  if (body.classList.contains("orange")) {
    body.classList.remove("orange");
  } else {
    body.classList.add("orange");
  }
}

let themeButton = document.querySelector(".theme-button");
themeButton.addEventListener("click", changeTheme);

var navLinks = document.getElementById("navLinks");

function showMenu() {
  navLinks.style.right = "0";
}
function hideMenu() {
  navLinks.style.right = "-200px";
}
