document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');


})

function searchRecommendation(term) {
  return fetch(`https://aniflex-backend.herokuapp.com//api/v1/animes/search/${term}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
