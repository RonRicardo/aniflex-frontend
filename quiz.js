document.addEventListener("DOMContentLoaded", () => {
//grabbing quizForm off the dom
const quizForm = document.getElementById('quiz-form');
const searchPage = document.getElementById("search-page");
const animeShowPage = document.getElementById("anime-show-page");

//functions
const renderRecommendedShow = (response) => {
  const animeImage = document.querySelector('.anime-image')
  const animeDescription = document.querySelector('.anime-description')
  const animeTitle = document.querySelector('#anime-title')
  let seeMore = document.querySelector('#see-more-link')
  response = response['my_results']
    let imageUrl = response['image_url'];
    let title = response['title'];
    let description = response['description'];
    let aniListUrl =  response['url'];
      animeImage.setAttribute('src', imageUrl);
      // animeTitle.innerText = title;
      animeTitle.innerHTML = `${title}<button type="button" id="add-to-list" class="add-to-list" name="add-to-list">+</button>`
      animeDescription.innerText = description;
      seeMore.setAttribute('href', aniListUrl);
    $(searchPage).hide()
    $(animeShowPage).slideDown("medium")
}

const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let finalNum = Math.floor(Math.random() * (max - min + 1)) + min;
    if (finalNum === 8){
      finalNum = 5 //i'm hard coding in another number so it won't show ecchi anime LOL
    }
    return finalNum;
  }

const getRandomArrayValue = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)]
}

 genreQuizzerListener = () => {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let quizAnswer = document.querySelector('input[name="quizEntry"]:checked').value;
	    genreQuizzer(quizAnswer)
  })
}

const fetcher = (term) => {
  fetch(`http://localhost:3000/api/v1/animes/search/${term}`)
    .then(res => res.json())
    .then(parsedResp => renderRecommendedShow(parsedResp))
  }


const genreQuizzer = (quizVal) => {
  let sendToBackend;
  switch (quizVal) {
    case 'happy':
      sendToBackend = getRandomArrayValue(happyGenres);
      break;
    case 'sad':
      sendToBackend = getRandomArrayValue(sadGenres);
      break;
    case 'tired':
      sendToBackend = getRandomArrayValue(tiredGenres);
      break;
    case 'random':
      sendToBackend = randomGenre;
      break;
    default:
      console.log('No one should actually see this ever, but ok.');
    }
    fetcher(sendToBackend)
    //whateverTheBackendFunctionIs(sendToBackend)
  }

//defining the list of genres
  let happyGenres = [1, 2, 4, 20] // action, adventure, comedy, parody
  let sadGenres = [6, 8, 40, 41] //demons, drama, psychological, thriller
  let tiredGenres = [10, 15, 16, 29] //fantasy, kids, magic, space
  let randomGenre = getRandomIntInclusive(1, 43) //everything minus ecchi

// dom content loaded
  genreQuizzerListener()
})
