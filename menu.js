document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');
  const listOfLists = document.getElementById("list-of-lists")
  const userId = document.getElementById("user-id")

  listOfLists.addEventListener("click", (e)=>{
    if(e.target.dataset.class === "list-name") {
      const listName = e.target.innerText

      debugger

    }
  })

})
const userId = document.getElementById("user-id")
const menuPage = document.getElementById("menu-page")
const listPage = document.getElementById("list-page")
const searchPage = document.getElementById("search-page")
const animeShowPage = document.getElementById("anime-show-page")
const welcomePage = document.getElementById("welcome-page")
const listOfLists = document.getElementById("list-of-lists")

function getListAnimes() {

}

function renderLists() {
  console.log('lists');
  if(userId.dataset.id !== "") {
    togglePages(menuPage)
    listOfLists.innerHTML = ""
    getLists()
      .then(data => renderListsInLists(data))
    togglePages(listPage)
  } else {
    alert("Please login to see your lists")
    $(menuPage).hide()
    togglePages(welcomePage)
  }
}

function getLists() {
  return fetch('http://localhost:3000/api/v1/watch_lists')
    .then(res => res.json())
}

function renderListsInLists(data) {
  const lists = new Set(data.filter(el=>el.user_id===Number(userId.dataset.id)).map(e=>e.name));
  lists.forEach((list)=>{
    if(list !== "") {
      return listOfLists.innerHTML += `<h4 class="list-group-item-action d-flex justify-content-between align-items-center" data-class="list-name">
      ${list}</h4>`
    }
  })
}

function renderSearch() {
  console.log('search');
  const searchPic = document.getElementById('search-rand-img')
  $(menuPage).hide()
  $(animeShowPage).hide()
  let index = Math.floor((Math.random() * picArray.length))
  searchPic.src = picArray[index]
  togglePages(searchPage)
}

function togglePages(page) {
  if ( $( page).is( ":hidden" ) ) {
    $( page ).slideDown( "slow" );
  } else {
    $( page ).hide();
  }
}
