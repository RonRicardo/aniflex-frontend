document.addEventListener("DOMContentLoaded", () => {
//defining the list of genres
let happyGenres = [1, 2, 4, 20] // action, adventure, comedy, parody
let sadGenres = [6, 8, 40, 41] //demons, drama, psychological, thriller
let tiredGenres = [10, 15, 16, 29] //fantasy, kids, magic, space
let randomGenre = getRandomIntInclusive(1, 43) //everything minus ecchi

//grabbing the element off the DOM
const quizForm = document.getElementById('quiz-form');

//functions
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

const genreQuizzerListener = () => {
  quizForm.addEventListener('submit', (event) => {
    event.preventDefault()
    let quizAnswer = document.querySelector('input[name="quizEntry"]:checked').value;
	    genreQuizzer(quizAnswer)
  })
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
    console.log(sendToBackend)
    //whateverTheBackendFunctionIs(sendToBackend)

  }
// dom content loaded
})
