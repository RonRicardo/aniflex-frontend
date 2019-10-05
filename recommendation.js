document.addEventListener("DOMContentLoaded", () => {});

function searchRecommendation(term) {
  return fetch(`{$API}animes/search/${term}`).then(res => res.json());
}
