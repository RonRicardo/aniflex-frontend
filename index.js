document.addEventListener("DOMContentLoaded", ()=>{
  console.log('test.js loaded');
  const welcomePic = document.getElementById('welcome-rand-img')
  const menuPic = document.getElementById('menu-rand-img')
  const listPic = document.getElementById('list-rand-img')
  const searchPic = document.getElementById('search-rand-img')

  let index = Math.floor((Math.random() * picArray.length))
  console.log(index);
  welcomePic.src = picArray[index]

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

// user navigation via keydown
// plans to add icons for users to intuitively know the keydown events
// maybe altogether get rid of navbar if this works well for clean look
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

})

const picArray = [
  "https://qph.fs.quoracdn.net/main-qimg-61b6fdbf90bb8fa331483eddb0d5e124-c",
  "https://pm1.narvii.com/5648/8c17d82c6e6c965888209947a87945e837fbdab2_hq.jpg",
  "https://www.anime-planet.com/images/anime/covers/my-hero-academia-2-7966.jpg?t=1492390186",
  "https://yt3.ggpht.com/r8UhtPcMQP3GPdsgLnhLMOEn4Tc1vox85VXM7el1rP_kssUz4Cmnfr5JYq8fFzpLu3SkPSAYjteyzc-QjA=s900-mo-c-c0xffffffff-rj-k-no",
  "https://cdn.animenewsnetwork.com/thumbnails/max550x550/cms/news/119502/teaser-visual.jpg",
  "https://dw9to29mmj727.cloudfront.net/properties/2016/432-SeriesThumbnails_SM__400x320.jpg",
  "https://pbs.twimg.com/media/Dh8f03lXcAI8b_W.jpg",
  "https://img.buzzfeed.com/buzzfeed-static/static/2018-04/18/13/asset/buzzfeed-prod-web-06/sub-buzz-6235-1524073896-6.png?downsize=715:*&output-format=auto&output-quality=auto",
  "https://dw9to29mmj727.cloudfront.net/properties/2016/527-SeriesThumb_OPM_400x320.jpg",
  "http://ww1.kiss-anime.co/anime_data/image/film/major-2nd-tv.jpg",
  "http://oyster.ignimgs.com/wordpress/stg.ign.com/2016/02/suzakuandeuphie.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIXgFlxyJvjzcgmS7O69TYr0kCZBGsL_miRfUklGCvlQmi7bc-",
  "https://img1.ak.crunchyroll.com/i/spire1/f5953bde7435704b660ca78f0e140d301501265218_large.jpg",
  "https://honeysanime.com/wp-content/uploads/2017/03/Haikyuu-Karasuno-Koukou-VS-Shiratorizawa-Gakuen-Koukou-dvd-300x425.jpg",
  "https://static.highsnobiety.com/wp-content/uploads/2017/04/04163913/best-anime-movies-princessmonoke-480x320.jpg",
  "https://qph.fs.quoracdn.net/main-qimg-b4846717ffbe42a0fb9927ee2058b382-c",
  "https://res.cloudinary.com/firstnotify/image/upload/c_fill,d_Logo_ysxlov.jpg,f_auto,h_450,q_auto,w_300/xhtzfcdkykzkz8mdvl28",
  "https://static1.squarespace.com/static/596001c2579fb355caec7aac/t/5aac31412b6a28af3e7c1fc6/1521234815507/2+naruto.png",
  "http://www.intunedonline.net/wp-content/uploads/2016/09/Makoto-shinkai-your-name-anime-film.jpg",
  "https://art-catalog.org/wp-content/uploads/2018/04/best-anime-drawings-of-all-time-47e71bedfc2f67fe267fb7d64d7a3ac2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz1bKKmjtFIgbE9qyMACnuc6ixwIV7ERto9BP0JI3YP6I5PJzq"
]
