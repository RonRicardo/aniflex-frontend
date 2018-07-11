document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');


})

const menuPage = document.getElementById("menu-page")
const listPage = document.getElementById("list-page")
const searchPage = document.getElementById("search-page")

function renderLists() {
  console.log('lists');
  // document.location.href="animeList.html"
  togglePages(menuPage)
  togglePages(listPage)
}

function renderSearch() {
  console.log('search');
  // document.location.href="recommendation.html"
  togglePages(menuPage)
  togglePages(searchPage)
}

function togglePages(page) {
  if ( $( page).is( ":hidden" ) ) {
    $( page ).slideDown( "slow" );
  } else {
    $( page ).hide();
  }
}
