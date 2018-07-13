document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');

  const usernameForm = document.getElementById("username-form")
  const usernameInput = document.getElementById("username-input")

  usernameForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('form submitted');
    const username = e.target.lastElementChild.value

    createUser(username)
    console.log('username created');

    usernameInput.value = ""

    const welcomePage = document.getElementById("welcome-page")
    const menuPage = document.getElementById("menu-page")

    togglePages(menuPage)
    togglePages(welcomePage)

  })
})


function createUser(username) {
  const userId = document.getElementById("user-id")
  console.log('hit function');
  const url = 'http://localhost:3000/api/v1/users'
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({name: username})
  }
  return fetch(url, options)
    .then(res => res.json())
    .then(data => userId.dataset.id = data.id)
    .then(()=>console.log('set id'))
}

function togglePages(page) {
  if ( $( page).is( ":hidden" ) ) {
    $( page ).slideDown( "slow" );
  } else {
    $( page ).hide();
  }
}
