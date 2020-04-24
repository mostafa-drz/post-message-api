var isAuthenticated = false;
var email = "";
var loginWindow;
function ready(fn) {
  if (document.readyState != "loading") {
    fn();
  } else if (window.addEventListener) {
    // window.addEventListener('load', fn);
    window.addEventListener("DOMContentLoaded", fn);
  } else {
    window.attachEvent("onreadystatechange", function () {
      if (document.readyState != "loading") fn();
    });
  }
}

function init() {
  const openLoginWindowBtn = document.getElementById("btn-login");
  if (openLoginWindowBtn) {
    openLoginWindowBtn.addEventListener("click", openLoginWindow);
  }

  window.addEventListener("message", onMessage, false);
}

function onMessage(event) {
  if (event.origin === "http://localhost:8080") {
    isAuthenticated = true;
    email = JSON.parse(event.data).email;
    onAuthenticationDone();
  }
}
function openLoginWindow() {
  loginWindow = window.open("http://localhost:8080");
}
function onAuthenticationDone() {
  const main = document.getElementById("main");
  const authenticated = document.getElementById("authenticated");
  const username = document.getElementById("username");
  main.style.display = "none";
  authenticated.style.display = "block";
  username.innerText = email;
  loginWindow.close();
}
ready(init);
