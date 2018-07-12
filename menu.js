document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');


})
const userId = document.getElementById("user-id")
const menuPage = document.getElementById("menu-page")
const listPage = document.getElementById("list-page")
const searchPage = document.getElementById("search-page")
const animeShowPage = document.getElementById("anime-show-page")

function renderLists() {
  console.log('lists');
  if(userId.dataset.id !== "") {
    togglePages(menuPage)
    togglePages(listPage)
  } else {
    alert("Please login to see your lists")
  }
}

function renderSearch() {
  console.log('search');
  $(menuPage).hide()
  $(animeShowPage).hide()
  togglePages(searchPage)
}

function togglePages(page) {
  if ( $( page).is( ":hidden" ) ) {
    $( page ).slideDown( "slow" );
  } else {
    $( page ).hide();
  }
}
