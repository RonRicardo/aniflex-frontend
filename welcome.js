document.addEventListener("DOMContentLoaded", ()=>{
  console.log('loaded');

  const usernameForm = document.getElementById("username-form")
  const usernameInput = document.getElementById("username-input")

  usernameForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log('form submitted');
    const username = e.target.lastElementChild.value

    // save to DB
    console.log('username created');

    usernameInput.value = ""

    // insert a loading sign

    // create user
    createUser(username)
    // render next page
    // document.location.href="menu.html"

  })


})


function createUser(username) {
  const userId = document.getElementById("user-id")
  console.log('hit function');
  const url = 'http://localhost:3000/api/v1/users'
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({email: username})
  }
  return fetch(url, options)
    .then(res => res.json())
    .then(data => userId.dataset.id = data.id)
    .then(()=>console.log('set id'))
}
