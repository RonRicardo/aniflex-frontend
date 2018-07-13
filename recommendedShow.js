// let dummyObj =
// {
//   "my_results": {
//     "mal_id": 532,
//     "url": "https://myanimelist.net/anime/532/Bishoujo_Senshi_Sailor_Moon_S",
//     "image_url": "https://myanimelist.cdn-dena.com/r/100x140/images/anime/1077/92346.jpg?s=d7690bece25e8fab50b9e916645cd3d2",
//     "title": "Bishoujo Senshi Sailor Moon S",
//     "description": "This season makes a turning point in the Sailor Moon story. The Sailor Senshi are confronted by a new enemy, the Death Busters. Rei had a premonition that this enemy would rule the world in an era cal...",
//     "type": "TV",
//     "score": 7.9,
//     "episodes": 38,
//     "members": 81347
//   },
//   "my_message": "hello"
// }
document.addEventListener("DOMContentLoaded", ()=>{
  console.log('recommendedShow page loaded');
  const addAnimeToListBtn = document.getElementById("add-to-list");
  addAnimeToListBtn.addEventListener("click", (e)=>{
    console.log('add to list button clicked');
    debugger
  })

})

// searchPage = document.getElementById("search-page");
// animeShowPage = document.getElementById("anime-show-page");

const renderRecommendedShow = (response) => {
  const animeImage = document.querySelector('.anime-image')
  const animeDescription = document.querySelector('.anime-description')
  const animeTitle = document.querySelector('#anime-title')
  response = response['my_results']
    let imageUrl =  response['image_url'];
    let title = response['title'];
    let description = response['description'];
      animeImage.setAttribute('src', imageUrl);
      animeTitle.innerText = title;
      animeDescription.innerText = description;
    $(searchPage).hide()
    $(animeShowPage).slideDown("medium")
}

// function getUserLists() {
//   return fetch('http://localhost:3000/api/v1/watch_lists')
// }


function createList(){
  return fetch('http://localhost:3000/api/v1/watch_lists',{
    method: "POST",
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      watch_list: {name:"Watched", user_id: 2, anime_id: 3}
    })
  })
}
