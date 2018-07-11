document.addEventListener("DOMContentLoaded", (event) => {

  const renderShowList = (event) => {
    cardText.innerHTML = testRender
  }

  let cardText = document.querySelector('.card-text')
  let renderingButton = document.querySelector('.btn.btn-primary')
  //
  // renderingButton.addEventListener('click', renderShowList)

  // web pages
  // const showPage = document.getElementById("show-welcome-page-btn")
  // const welcomePage = document.getElementById("welcome-page")
  // const menuPage = document.getElementById("menu-page")
  // const listPage = document.getElementById("list-page")
  // const searchPage = document.getElementById("search-page")
  const genreSelection = document.getElementById("genres")
  const animeShowPage = document.getElementById("anime-show-page")


  // $( showPage ).click(function () {
  //   togglePages(menuPage)
  //   togglePages(welcomePage)
  // });
});
