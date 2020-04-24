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
  const loginButton = document.getElementById("login");
  if (loginButton) {
    loginButton.addEventListener("click", onLogin);
  }
}

function onLogin() {
  const loginButton = document.getElementById("login");
  const heart = document.getElementById("heart");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  loginButton.style.display = "none";
  heart.style.display = "block";
  setTimeout(() => {
    window.opener.postMessage(JSON.stringify({ email }), "*");
  }, 5000);
}
ready(init);
