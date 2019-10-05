document.addEventListener("DOMContentLoaded", () => {
  const addAnimeToListBtn = document.getElementById("add-to-list");
  const listView = document.getElementById("add-anime-view");
  const submitAnimetoListForm = document.getElementById("create-list-form");
  const submitAnimetoListBtn = document.getElementById("add-to-list-btn");
  const listName = document.getElementById("new-list-input");
  const animeID = document.getElementById("anime-id-placeholder");
  const userID = document.getElementById("user-id");
  const listCollection = document.getElementById("list-collection");
  const listInputLabel = document.getElementById("new-list-input-label");

  addAnimeToListBtn.addEventListener("click", e => {
    $(listInputLabel).show();
    $(listName).show();
    // show list view
    listView.style.display = "block";
    getUserLists();
  });

  $(listCollection).change(() => {
    $(listInputLabel).hide();
    $(listName).hide();
  });

  submitAnimetoListForm.addEventListener("submit", e => {
    e.preventDefault();
    if (!!listName.value) {
      createList(listName.value);
    } else {
      const selectedList = Array.from(listCollection.children).filter(x => {
        return x.selected === true;
      })[0].value;
      createList(selectedList);
    }

    listName.value = "";
    $(listView).hide();
  });

  function createList(listName) {
    return fetch(API + "watch_lists", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        watch_list: {
          name: listName,
          user_id: Number(userID.dataset.id),
          anime_id: Number(animeID.dataset.id)
        }
      })
    });
  }
});

const renderRecommendedShow = response => {
  const animeImage = document.querySelector(".anime-image");
  const animeDescription = document.querySelector(".anime-description");
  const animeTitle = document.querySelector("#anime-title");
  response = response["my_results"];
  let imageUrl = response["image_url"];
  let title = response["title"];
  let description = response["description"];
  animeImage.setAttribute("src", imageUrl);
  animeTitle.innerText = title;
  animeDescription.innerText = description;
  $(searchPage).hide();
  $(animeShowPage).slideDown("medium");
};

function getUserLists() {
  return fetch(API + "watch_lists")
    .then(res => res.json())
    .then(
      data =>
        new Set(
          data
            .filter(el => el.user_id === Number(userId.dataset.id))
            .map(e => e.name)
        )
    )
    .then(lists => {
      listCollection.innerHTML = `<option value="Choose One!" selected disabled>Choose Existing!</option>`;
      lists.forEach(list => renderListsInCollection(list));
    });
}

const listCollection = document.getElementById("list-collection");
function renderListsInCollection(list) {
  return (listCollection.innerHTML += `<option value="${list}">${list}</option>`);
}
