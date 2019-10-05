document.addEventListener("DOMContentLoaded", () => {});

function searchRecommendation(term) {
  return fetch(
    `https://aniflex-backend.herokuapp.com/api/v1/animes/search/${term}`
  ).then(res => res.json());
}
