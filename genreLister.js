let dummyArray = [
'hello','an item', 'another item', 'item again', 'items', 'things',
'hello','an item', 'another item', 'item again', 'items', 'things',
'hello','an item', 'another item'
]

let genreListEl = (list) => list.forEach(listItem => {
  let genreListEl = document.createElement("li");
    genreListEl.setAttribute('class', 'list-group-item');
    genreListEl.innerText = listItem;
        let unordered = document.querySelector('.list-group');
        unordered.appendChild(genreListEl);
     })

//dummyArray is the collection we're iterating over
//dummyItem is the element of the collection
//aniListEl is a list element for Anime List
//yeah
let animeListRender = (list) => list.forEach(listItem => {
  let aniListEl = document.createElement("li");
    aniListEl.setAttribute('class', 'badge badge-primary badge-pill');
    aniListEl.innerHTML = `${listItem} <span class="badge badge-primary badge-pill">${listItem.count}</span>`
        let unordered = document.querySelector('.list-group');
        unordered.appendChild(aniListEl);
})

const genreSelection = document.getElementById("genres")

function showGenres() {
  togglePages(genreSelection)
  // build out to take in a term from user selection to pass in to searchRecommendation() and fetch data
  searchRecommendation()
}

function togglePages(page) {
  if ( $( page).is( ":hidden" ) ) {
    $( page ).slideDown( "slow" );
  } else {
    $( page ).hide();
  }
}
