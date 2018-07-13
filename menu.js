document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');

})
const userId = document.getElementById("user-id")
const menuPage = document.getElementById("menu-page")
const listPage = document.getElementById("list-page")
const searchPage = document.getElementById("search-page")
const animeShowPage = document.getElementById("anime-show-page")
const welcomePage = document.getElementById("welcome-page")

function renderLists() {
  console.log('lists');
  if(userId.dataset.id !== "") {
    togglePages(menuPage)
    togglePages(listPage)
  } else {
    alert("Please login to see your lists")
    $(menuPage).hide()
    togglePages(welcomePage)
  }
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
