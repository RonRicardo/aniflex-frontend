document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');


})

function searchRecommendation(term) {
  return fetch(`http://localhost:3000/api/v1/animes/search/${term}`)
    .then(res => res.json())
    .then(data => console.log(data))
}
