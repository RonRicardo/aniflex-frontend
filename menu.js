document.addEventListener("DOMContentLoaded", () => {
  const listOfLists = document.getElementById("list-of-lists");
  const userId = document.getElementById("user-id");
  const userAnimePage = document.getElementById("user-animes-view");
  const listPage = document.getElementById("list-page");

  listOfLists.addEventListener("click", e => {
    const selectedList = e.target.dataset.id;
    getUserAnimes(selectedList).then(data => {
      renderUserAnimes(data);
      $(listPage).hide();
      $(userAnimePage).slideDown();
    });
  });
});
const userId = document.getElementById("user-id");
const menuPage = document.getElementById("menu-page");
const listPage = document.getElementById("list-page");
const searchPage = document.getElementById("search-page");
const animeShowPage = document.getElementById("anime-show-page");
const welcomePage = document.getElementById("welcome-page");
const listOfLists = document.getElementById("list-of-lists");
const userAnimesList = document.getElementById("user-animes-list");

function renderUserAnimes(animes) {
  return animes.forEach(anime => {
    userAnimesList.innerHTML += renderAnime(anime);
  });
}

function renderAnime(anime) {
  return `<li>${anime}</li>`;
}

function getUserAnimes(list) {
  return fetch(
    `https://aniflex-backend.herokuapp.com//api/v1/users/${userId.dataset.id}/${list}/animes`
  ).then(res => res.json());
}

function renderLists() {
  if (userId.dataset.id !== "") {
    togglePages(menuPage);
    listOfLists.innerHTML = "";
    getLists().then(data => renderListsInLists(data));
    togglePages(listPage);
  } else {
    alert("Please login to see your lists");
    $(menuPage).hide();
    togglePages(welcomePage);
  }
}

function getLists() {
  return fetch(
    "https://aniflex-backend.herokuapp.com//api/v1/watch_lists"
  ).then(res => res.json());
}

function renderListsInLists(data) {
  const lists = userLists(data);
  const listNames = userListNames(lists);
  listNames.forEach(list => {
    if (list !== "") {
      return (listOfLists.innerHTML += listEl(list));
    }
  });
}

function listEl(list) {
  return `<h4 class="list-group-item-action d-flex justify-content-between align-items-center" data-class="list-name" data-id="${list}">
  ${list}</h4>`;
}

function userLists(data) {
  return new Set(data.filter(el => el.user_id === Number(userId.dataset.id)));
}

function userListNames(lists) {
  const listNames = [];
  for (list of lists) {
    listNames.push(list.name);
  }
  return listNames;
}

function renderSearch() {
  const searchPic = document.getElementById("search-rand-img");
  $(menuPage).hide();
  $(animeShowPage).hide();
  let index = Math.floor(Math.random() * picArray.length);
  searchPic.src = picArray[index];
  togglePages(searchPage);
}

function togglePages(page) {
  if ($(page).is(":hidden")) {
    $(page).slideDown("slow");
  } else {
    $(page).hide();
  }
}
