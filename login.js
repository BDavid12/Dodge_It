function setCookie() {
  const d = new Date();
  d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = "username" + "=" + document.getElementById('name').value + ";" + expires + ";path=/";
}

function displayUsername() {
    const username = getCookie("username");
    const usernameDisplay = document.getElementById("loggedInUser");
    if (username) {
      usernameDisplay.innerHTML = `${username}`;
    }
}

function getCookie(name) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === name) {
        return cookie[1];
      }
    }
    return null;
  }

