document.addEventListener("DOMContentLoaded", () => {
  const usernameForm = document.getElementById("username-form");
  const usernameInput = document.getElementById("username-input");

  usernameForm.addEventListener("submit", e => {
    e.preventDefault();
    const username = e.target.lastElementChild.value;

    createUser(username);
    usernameInput.value = "";

    const welcomePage = document.getElementById("welcome-page");
    const menuPage = document.getElementById("menu-page");

    togglePages(menuPage);
    togglePages(welcomePage);
  });
});

function createUser(username) {
  const userId = document.getElementById("user-id");
  const url = "https://aniflex-backend.herokuapp.com//api/v1/users";
  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: username })
  };
  return fetch(url, options)
    .then(res => res.json())
    .then(data => (userId.dataset.id = data.id));
}

function togglePages(page) {
  if ($(page).is(":hidden")) {
    $(page).slideDown("slow");
  } else {
    $(page).hide();
  }
}
