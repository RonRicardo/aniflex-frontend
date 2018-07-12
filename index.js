document.addEventListener("DOMContentLoaded", (event) => {

  const renderShowList = (event) => {
    cardText.innerHTML = testRender
  }

  let cardText = document.querySelector('.card-text')
  let renderingButton = document.querySelector('.btn.btn-primary')
  //
  // renderingButton.addEventListener('click', renderShowList)

  // web pages
  const welcomePage = document.getElementById("welcome-page")
  const menuPage = document.getElementById("menu-page")
  const listPage = document.getElementById("list-page")
  const searchPage = document.getElementById("search-page")
  const genreSelection = document.getElementById("genres")
  const animeShowPage = document.getElementById("anime-show-page")

  const userId = document.getElementById("user-id")

  document.addEventListener("keydown", (e)=>{
    if (e.key==="ArrowDown") {
      console.log('log out');
      $(menuPage).hide()
      $(listPage).hide()
      $(searchPage).hide()
      $(animeShowPage).hide()
      $(welcomePage).slideDown("medium")
      if(userId.getAttribute("data-id") === null || userId.getAttribute("data-id") === "") {
      } else {
        alert("See you soon!")
      }
      userId.dataset.id = ""
    } else if(e.key==="ArrowUp"){
      console.log('menu');
      $(welcomePage).hide()
      $(listPage).hide()
      $(searchPage).hide()
      $(animeShowPage).hide()
      $(menuPage).slideDown("medium")
    }
  })

});
