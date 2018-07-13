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
  const listView = document.getElementById("add-anime-view")
  const submitAnimetoListForm = document.getElementById('create-list-form')
  const submitAnimetoListBtn = document.getElementById("add-to-list-btn");
  const listName = document.getElementById('new-list-input');
  const animeID = document.getElementById("anime-id-placeholder");
  const userID = document.getElementById("user-id")
  const listCollection = document.getElementById("list-collection")
  const listInputLabel = document.getElementById("new-list-input-label")

  addAnimeToListBtn.addEventListener("click", (e)=>{
    console.log('add to list button clicked');
    $(listInputLabel).show()
    $(listName).show()
    // show list view
    listView.style.display = "block"
    getUserLists()
  })

  $(listCollection).change(()=>{
    $(listInputLabel).hide()
    $(listName).hide()
  })

  submitAnimetoListForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    console.log('add this anime to this list!');
    createList(listName.value)
    listName.value = ""
    $(listView).hide()
  })

  function createList(listName){
    return fetch('http://localhost:3000/api/v1/watch_lists',{
      method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        watch_list: {name: listName, user_id: Number(userID.dataset.id), anime_id: Number(animeID.dataset.id)}
      })
    })
  }
})

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

function getUserLists() {
  return fetch('http://localhost:3000/api/v1/watch_lists')
    .then(res => res.json())
    .then(data => new Set(data.filter(el=>el.user_id===Number(userId.dataset.id)).map(e=>e.name)))
    .then(lists => {
      listCollection.innerHTML = `<option value="Choose One!" selected disabled>Choose Existing!</option>`
      lists.forEach(list => renderListsInCollection(list))
    })
}

const listCollection = document.getElementById("list-collection")
function renderListsInCollection(list){
  return listCollection.innerHTML += `<option value="${list}">${list}</option>`
}
